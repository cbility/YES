import tables from "../../../SmartSuite/dist/tables.js"
import SmartSuite from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js"
import getLoginDetails from "./RO/getLoginDetails.js";
import getAccountDetails from "./RO/getAccountDetails.js";
import logInUser from "./RO/logInUser.js";
import validateLogin from "./RO/validateLogin.js";
import getStationDetails from "./RO/getStationDetails.js";
import { PuppeteerNode as PuppeteerCoreNode } from "puppeteer-core";
import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js";
import type { RecordFromTableID } from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js"
import getReducedAccountDetails from "./RO/getReducedAccountDetails.js";
import transferCertificates from "./RO/transferCertificates.js";

const PLY_ERROR_LOG_URL = "https://app-server.ply.io/api/incoming/webhooks/RKMxR0PJ/";

process.on('uncaughtException', async function (err) { //handle uncaught exceptions
    console.log(err);
    await fetch(
        PLY_ERROR_LOG_URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'RO Scraper uncaught exception: ' + err })
        }
    );
});


const {
    ROAccountsTable,
    ROStationsTable,
    ROLoginsTable,
    "RO Certificate Transfer Agreements": ROTransferAgreementsTable,
} = tables;

if (process.env.NODE_ENV !== "production") { //set environment variables using local .env
    await bootstrapEnvironment();
    console.log("Using local environment variables")
}

const ss = new SmartSuite("s5ch1upc", process.env.TECHNICAL_SMARTSUITE_KEY as string);

export default async function main(
    inputs: { loginID: string }[],
    puppeteer: PuppeteerCoreNode,
    browserArgs: object,
    lambdaContext?: { logStreamName?: string } // lambda context object used to log errors with link to log stream
) {
    if (inputs.length === 0) throw new Error("Empty input array");
    if (!("loginID" in inputs[0])) throw new Error("No loginID in first input"); //check for correct format

    //get relevant login records 
    const loginIDs = inputs.map((input) => input.loginID);
    const loginRecordsList = await ss.getRecordsByFieldValues(
        ROLoginsTable.id,
        ROLoginsTable.structure["Record ID"].slug,
        loginIDs,
    );

    //get all existing station, account and transfer agreement records
    const existingROStationsList = await ss.getAllRecords(ROStationsTable.id);
    const existingROAccountsList = await ss.getAllRecords(ROAccountsTable.id);
    const transferAgreements = await ss.getAllRecords(ROTransferAgreementsTable.id);

    //parse login records as dictionary with record IDs as keys for fast lookup of record details from ID
    const loginRecords: Record<string, RecordFromTableID<typeof ROLoginsTable.id>> = {};
    for (const loginRecord of loginRecordsList) {
        loginRecords[loginRecord.id as string] = loginRecord;
    }

    //Parse station records and save as dictionary for fast lookup of record IDs from station names
    const ExistingROStations: Record<string, string> = {}; //map of station names to station record IDs
    for (const station of existingROStationsList) {
        ExistingROStations[station[ROStationsTable.structure["Station Name"].slug] as string] = station.id;
    }

    //Parse account records and save as dictionary for fast lookup of record IDs from account references
    const ExistingROAccounts: Record<string, string> = {}; //map of account references to account record IDs
    for (const account of existingROAccountsList) {
        ExistingROAccounts[account[ROAccountsTable.structure["Organisation Reference"].slug] as string] = account.id;
    }


    //initialise arrays for updated logins, accounts and stations
    const updatedLoginDetails: Update<RecordFromTableID<typeof ROLoginsTable.id>>[] = [];
    const updatedAccountDetails: Update<RecordFromTableID<typeof ROAccountsTable.id>>[] = [];
    const newAccountDetails: Omit<Update<RecordFromTableID<typeof ROAccountsTable.id>>, "id">[] = [];
    const updatedStationDetails: Update<RecordFromTableID<typeof ROStationsTable.id>>[] = [];
    const newStationDetails: Omit<Update<RecordFromTableID<typeof ROStationsTable.id>>, "id">[] = [];

    //initialise array for storing account structures used to create links when new accounts are being added
    const accountStructures: {
        account: {
            accountReference: string,
            accountRecordID?: string,
        }
        stations: {
            stationName: string,
            stationRecordID?: string
        }[]
        logins: {
            loginUsername: string,
            loginID: string
        }[]
    }[] = [];

    const browser = await puppeteer.launch(browserArgs);
    console.log("browser launched");

    const page = await browser.newPage();

    //loop through input logins and get current values for logins, stations and  accounts
    for (const loginRecordID of loginIDs) {
        const loginRecordToUpdate =
            loginRecords[loginRecordID];
        // the following comment is likely not applicable: set the account via updating the account record, not the login record itself
        //const accountID = (loginRecordToUpdate[ROLoginsTable.structure["Account"].slug] as (string | undefined)[])[0];

        //skip login if password is wrong
        if (!loginRecordToUpdate[ROLoginsTable.structure["Password Correct"].slug])
            continue;

        //log into portal
        await logInUser(loginRecordToUpdate, page);
        //check login worked and mark password as wrong if it didn't
        if (!(await validateLogin(page))) {
            ss.updateRecord(
                ROLoginsTable.id,
                loginRecordID,
                { application_id: ROLoginsTable.id, [ROLoginsTable.structure["Password Correct"].slug]: false }
            );
            console.log(`Log in failed for ${loginRecordToUpdate[ROLoginsTable.structure["Username"].slug]}`);
            continue;
        }
        console.log(`Log in success for ${loginRecordToUpdate[ROLoginsTable.structure["Username"].slug]}`);

        //get updated login details 
        const updatedLogin = await getLoginDetails(page);

        const updatedLoginRecord: Update<RecordFromTableID<typeof ROLoginsTable.id>> = {
            id: loginRecordToUpdate.id,
            application_id: loginRecordToUpdate.application_id,
            [ROLoginsTable.structure["Login Type"].slug]: updatedLogin.loginType === "Superuser" ?
                "d06a096d-c6d5-4fb5-bc6a-5b3ff1cba09a" : //superuser
                "65b2625f-97fb-49f1-8e37-0f46a952b19b", //additional user
            [ROLoginsTable.structure["Registered Email"].slug]: [updatedLogin.registeredEmail],
            [ROLoginsTable.structure["Registered Phone"].slug]: updatedLogin.registeredPhone,
            [ROLoginsTable.structure["Registered User"].slug]: {
                first_name: updatedLogin.registeredUserFirstName,
                last_name: updatedLogin.registeredUserLastName
            },
        }
        updatedLoginDetails.push(updatedLoginRecord);

        //get updated station details
        const updatedStationRecordList = await getStationDetails(page);

        //schedule station for update or creation depending on if its record already exists
        //transfer certificates for existing stations according to certificate transfer agreements
        for (const station of updatedStationRecordList) {
            const stationName = station[ROStationsTable.structure["Station Name"].slug] as string;
            const stationRecordID: string | undefined = ExistingROStations[stationName];
            if (stationRecordID) { //if station record exists already
                updatedStationDetails.push({
                    ...station,
                    id: stationRecordID
                });
            } else {
                newStationDetails.push(station)
            }
        }

        //initialise flags for transferring certificates
        let rocsAvailableForTransfer = 0;
        let regosAvailableForTransfer = 0;

        if (
            updatedLoginRecord[ROLoginsTable.structure["Login Type"].slug] ===
            "65b2625f-97fb-49f1-8e37-0f46a952b19b" //restricted
        ) { //FOR RESTRICTED LOGINS
            // Update reduced account details only, as full account details not available
            // Update account if already existing and create new account if missing

            const { generatorName, generatorReference, rocsTradeable, regosTradeable } = await getReducedAccountDetails(page);
            //check for preexisting account record
            const accountRecordID: string | undefined = ExistingROAccounts[generatorReference];

            // Note if certificates are available for transfer so they can be transferred later
            rocsAvailableForTransfer = rocsTradeable;
            regosAvailableForTransfer = regosTradeable;

            updateAccount(accountRecordID, generatorReference, {
                application_id: ROAccountsTable.id,
                [ROAccountsTable.structure["Generator (Company) Name"].slug]: generatorName,
                [ROAccountsTable.structure["Organisation Reference"].slug]: generatorReference,
                [ROAccountsTable.structure["ROCs Tradeable"].slug]: rocsTradeable,
                [ROAccountsTable.structure["REGOs Tradeable"].slug]: regosTradeable,
            });
        } else if (
            updatedLoginRecord[ROLoginsTable.structure["Login Type"].slug] ===
            "d06a096d-c6d5-4fb5-bc6a-5b3ff1cba09a" //superuser
        ) {//FOR SUPERUSER LOGINS
            //update account name or create new account (using entire account details) if missing
            //update stations normally if account already linked to login. If account is missing it has to be created first

            const accountDetails = await getAccountDetails(page);

            // Note if certificates are available for transfer so they can be transferred later
            rocsAvailableForTransfer = accountDetails.rocsTradeable;
            regosAvailableForTransfer = accountDetails.regosTradeable;

            const accountRecordID: string | undefined = ExistingROAccounts[accountDetails.organisationReference];

            let updatedAccountRecord: Omit<Update<RecordFromTableID<typeof ROAccountsTable.id>>, "id"> = {
                application_id: ROAccountsTable.id,
                [ROAccountsTable.structure["Company Address"].slug]: {
                    location_address: accountDetails.address.addressLine1,
                    location_address2: accountDetails.address.addressLine2,
                    location_city: accountDetails.address.city,
                    location_state: accountDetails.address.county,
                    location_zip: accountDetails.address.postcode,
                    location_country: accountDetails.address.country
                },
                [ROAccountsTable.structure["Company Phone"].slug]: accountDetails.telephoneNumber,
                [ROAccountsTable.structure["Company Registration Number"].slug]: accountDetails.companyRegistrationNumber,
                [ROAccountsTable.structure["Generator (Company) Name"].slug]: accountDetails.companyName,
                [ROAccountsTable.structure["Organisation Reference"].slug]: accountDetails.organisationReference,
                [ROAccountsTable.structure["REGOs Tradeable"].slug]: accountDetails.regosTradeable,
                [ROAccountsTable.structure["ROCs Tradeable"].slug]: accountDetails.rocsTradeable,
                [ROAccountsTable.structure["ROCs Pending Transfer"].slug]: accountDetails.rocsPending,
                [ROAccountsTable.structure["REGOs Pending Transfer"].slug]: accountDetails.regosPending,
            }

            updateAccount(accountRecordID, accountDetails.organisationReference, { ...updatedAccountRecord, id: accountRecordID })
        }
        //check if there are any ROCs or REGOs available for transfer on the account 
        if (!!(rocsAvailableForTransfer + regosAvailableForTransfer)) {
            console.log(`${rocsAvailableForTransfer} ROCs and ${regosAvailableForTransfer} REGOs available for transfer on this account`)

            const accountTransferAgreements: RecordFromTableID<typeof ROTransferAgreementsTable.id>[] = [];

            //loop through stations on account and get transfer agreements for those stations
            for (const accountStation of updatedStationRecordList) {
                const stationName = accountStation[ROStationsTable.structure["Station Name"].slug] as string;
                //get certificate transfer agreements for station
                const stationTransferAgreements = transferAgreements.filter(agreementRecord => {
                    //get lookup list of transfer stations linked to agreement
                    const transferStationList = agreementRecord[ROTransferAgreementsTable.structure["Station Name"].slug] as string[][];
                    //select agreement if station is included in agreement
                    const isForCorrectStation = transferStationList.some(transferStationLookup => transferStationLookup.some(transferStationName => transferStationName === stationName));
                    return isForCorrectStation;
                });
                accountTransferAgreements.push(...stationTransferAgreements);
            }

            //group agreements into ROC and REGO agreements for faster transfer processing
            const rocAgreements = accountTransferAgreements.filter(agreement => agreement[ROTransferAgreementsTable.structure["Certificate Type"].slug] === "lquDx");
            const regoAgreements = accountTransferAgreements.filter(agreement => agreement[ROTransferAgreementsTable.structure["Certificate Type"].slug] === "fdLzM");

            //loop through transfer agreements for each certificate type , check if agreement is valid and transfer certificates
            for (const transferAgreement of rocAgreements) {
                console.log(`Checking for ROCs included in ${transferAgreement.title}`);
                try {
                    const { stationNames, certificateType, transfereeReference, startDate, endDate } = parseCertificateAgreement(transferAgreement, accountTransferAgreements);
                    for (const stationName of stationNames) {
                        const certificateTransferResult = await transferCertificates(page, { stationName, certificateType, startDate, endDate, transfereeReference, userPassword: loginRecordToUpdate[ROLoginsTable.structure["Password"].slug] as string });
                        if (!certificateTransferResult) continue;
                        const { certificatesTransferred, transferTime } = certificateTransferResult
                        const stationRecord = updatedStationDetails.find(station => station[ROStationsTable.structure["Station Name"].slug] === stationName);
                        if (!stationRecord) throw new Error(`Station ${stationName} not found in updated station list but has had certificates transferred`);
                        stationRecord[ROStationsTable.structure["Latest ROC Transfer Volume"].slug] = certificatesTransferred;
                        stationRecord[ROStationsTable.structure["Latest ROC Transfer Reference"].slug] = transfereeReference;
                        stationRecord[ROStationsTable.structure['Latest ROC Transfer Date'].slug] = { date: transferTime.toISOString(), include_time: true };
                    }
                } catch (transferAgreementError) {
                    // catch errors with transfer agreement configuration for this station and log to Ply
                    await logErrorToPly(transferAgreementError as Error);
                }
            }
            for (const transferAgreement of regoAgreements) {
                console.log(`Checking for REGOs included in ${transferAgreement.title}`)
                try {
                    const { stationNames, certificateType, transfereeReference, startDate, endDate } = parseCertificateAgreement(transferAgreement, accountTransferAgreements);
                    for (const stationName of stationNames) {
                        const certificateTransferResult = await transferCertificates(page, { stationName, certificateType, startDate, endDate, transfereeReference, userPassword: loginRecordToUpdate[ROLoginsTable.structure["Password"].slug] as string });
                        if (!certificateTransferResult) continue;
                        const { certificatesTransferred, transferTime } = certificateTransferResult;
                        const stationRecord = updatedStationDetails.find(station => station[ROStationsTable.structure["Station Name"].slug] === stationName);
                        if (!stationRecord) throw new Error(`Station ${stationName} not found in updated station list but has had certificates transferred`);
                        stationRecord[ROStationsTable.structure["Latest REGO Transfer Volume"].slug] = certificatesTransferred;
                        stationRecord[ROStationsTable.structure["Latest REGO Transfer Reference"].slug] = transfereeReference;
                        stationRecord[ROStationsTable.structure['Latest REGO Transfer Date'].slug] = { date: transferTime.toISOString(), include_time: true };
                    }
                } catch (transferAgreementError) {
                    // catch errors with transfer agreement configuration for this station and log to Ply
                    await logErrorToPly(transferAgreementError as Error);
                }
            }
        } else {
            console.log(`No ROCs or REGOs available for transfer for ${loginRecordToUpdate[ROLoginsTable.structure["Username"].slug]}`);
        }
        continue; //go to next login

        /**
             * Schedule account record for creation or update.
             * Update account structure object so logins and stations can be linked to correct accounts.
             */
        function updateAccount(accountRecordID: string | undefined,
            accountReference: string,
            accountRecord: Update<RecordFromTableID<typeof ROAccountsTable.id>> | Omit<Update<RecordFromTableID<typeof ROAccountsTable.id>>, "id">) {
            if (accountRecordID) { //if account record already exists
                //schedule account record for update
                updatedAccountDetails.push({ ...accountRecord, id: accountRecordID });
            } else { //if account record does not already exist
                //schedule new account for creation
                newAccountDetails.push(accountRecord as Omit<Update<RecordFromTableID<typeof ROAccountsTable.id>>, "id">);
            }
            //check if account has already been logged into this operation
            const accountStructure = accountStructures.find(accountStructure => accountStructure.account.accountReference === accountReference);
            if (accountStructure) {// if already logged into
                //add current login to login list on account structure
                accountStructure.logins.push({
                    loginUsername: loginRecordToUpdate[ROLoginsTable.structure["Username"].slug] as string,
                    loginID: loginRecordID
                })
                //list all stations on current account structure and on logged into account and remove duplicates before pushing to structure
                const updatedStationsStructure = updatedStationRecordList.map(station => ({
                    stationName: station[ROStationsTable.structure["Station Name"].slug] as string,
                }));
                const allStations = [...accountStructure.stations, ...updatedStationsStructure];
                accountStructure.stations = allStations.filter((value, index) => {
                    const _value = JSON.stringify(value);
                    return index === allStations.findIndex(obj => {
                        return JSON.stringify(obj) === _value;
                    });
                });
            } else { //if new account for this operation
                // create new account structure record for creating links once account is created
                accountStructures.push({
                    account: {
                        accountReference,
                        accountRecordID,
                    },
                    stations: updatedStationRecordList.map(station => ({
                        stationName: station[ROStationsTable.structure["Station Name"].slug] as string,
                    })
                    ),
                    logins: [{
                        loginUsername: loginRecordToUpdate[ROLoginsTable.structure["Username"].slug] as string,
                        loginID: loginRecordID,
                    }]
                })
            }
        }
    }


    await browser.close();
    console.log("browser closed");

    if (updatedLoginDetails.length == 0) {
        console.log("No logins to update");
        return;
    }

    // New accounts should be created first and their IDs used to update stations and logins that are linked to them
    // This avoids overwriting information

    // Merge any duplicate records in account or station lists

    const organisationReferenceSlug = ROAccountsTable.structure["Organisation Reference"].slug;
    const stationNameSlug = ROStationsTable.structure["Station Name"].slug;

    const dedupeUpdatedAccountDetails = dedupe(updatedAccountDetails, organisationReferenceSlug);
    const dedupeNewAccountDetails = dedupe(newAccountDetails, organisationReferenceSlug)
    const dedupeUpdatedStationDetails = dedupe(updatedStationDetails, stationNameSlug);
    const dedupeNewStationDetails = dedupe(newStationDetails, stationNameSlug);


    if (dedupeUpdatedAccountDetails.length > 0) {
        console.log("Updating " + dedupeUpdatedAccountDetails.length + " accounts");
        const updatedAccountRecordsList = await ss.bulkUpdateRecords(ROAccountsTable.id, dedupeUpdatedAccountDetails, true, true, { entireTableRecords: existingROAccountsList });
        console.log("Account details updated");
    }

    if (dedupeNewAccountDetails.length > 0) {
        console.log("Adding " + dedupeNewAccountDetails.length + " accounts");
        const newAccountRecordsList = await ss.bulkAddNewRecords(ROAccountsTable.id, dedupeNewAccountDetails);
        console.log("New account details added");

        // Loop through structure records for accounts and populate missing IDs using newly created records
        for (const structureOfNewAccount of accountStructures.filter(structure => !structure.account.accountRecordID)) {
            const newAccountRecord = newAccountRecordsList.find(newAccount => newAccount[ROAccountsTable.structure["Organisation Reference"].slug] === structureOfNewAccount.account.accountReference)
            if (!newAccountRecord) throw new Error(`Could not find new account with name ${structureOfNewAccount.account.accountReference} in newly created accounts, but account did not exist on initial check`);
            structureOfNewAccount.account.accountRecordID = newAccountRecord.id;
        }
    }

    // Add links to account to all login and station records using structure records
    for (const loginUpdate of updatedLoginDetails) {
        const accountStructure = accountStructures.find(structure => structure.logins.find(login => login.loginID === loginUpdate.id));
        if (!accountStructure) throw new Error(`Could not find account structure including login with id ${loginUpdate.id}, username ${loginUpdate[ROLoginsTable.structure["Login"].slug]})`);
        loginUpdate[ROLoginsTable.structure["Account"].slug] = accountStructure.account.accountRecordID as string;
    }


    for (const newStation of dedupeNewStationDetails) {
        const accountStructure = accountStructures.find(structure => structure.stations.find(station => station.stationName === newStation[stationNameSlug]));
        if (!accountStructure) throw new Error(`Could not find account structure including new station with name ${newStation[stationNameSlug]})`);
        newStation[ROStationsTable.structure["Account"].slug] = accountStructure.account.accountRecordID as string;
    }
    for (const stationUpdate of dedupeUpdatedStationDetails) {
        const accountStructure = accountStructures.find(structure => structure.stations.find(station => station.stationName === stationUpdate[stationNameSlug]));
        if (!accountStructure) throw new Error(`Could not find account structure including station with id ${stationUpdate.id}, name ${stationUpdate[stationNameSlug]})`);
        stationUpdate[ROStationsTable.structure["Account"].slug] = accountStructure.account.accountRecordID as string;
    }

    // Update and add new stations and accounts
    if (updatedLoginDetails.length > 0) {
        console.log("Updating " + updatedLoginDetails.length + " logins");
        await ss.bulkUpdateRecords(ROLoginsTable.id, updatedLoginDetails, true, true, { entireTableRecords: loginRecordsList });
        console.log("Login details updated");
    }

    //update existing stations
    if (dedupeUpdatedStationDetails.length > 0) {
        console.log("Updating " + dedupeUpdatedStationDetails.length + " existing stations");
        await ss.bulkUpdateRecords(ROStationsTable.id, dedupeUpdatedStationDetails, true, true, { entireTableRecords: existingROStationsList });
        console.log("Existing station details updated");
    }

    //add new stations
    if (dedupeNewStationDetails.length > 0) {
        console.log("Creating " + dedupeNewStationDetails.length + " new stations");
        await ss.bulkAddNewRecords(ROStationsTable.id, dedupeNewStationDetails);
        console.log("New station details added");
    }

    console.log("Update Complete");

    function parseCertificateAgreement(transferAgreement: RecordFromTableID<typeof ROTransferAgreementsTable.id>,
        accountTransferAgreements: RecordFromTableID<typeof ROTransferAgreementsTable.id>[]): { stationNames: string[], certificateType: "roc" | "rego", transfereeReference: string, startDate: Date, endDate: Date } {
        const certificateTypeID = transferAgreement[ROTransferAgreementsTable.structure["Certificate Type"].slug] as "fdLzM" | "lquDx";
        const certificateType = certificateTypeID === "fdLzM" ? "rego" :
            certificateTypeID === "lquDx" ? "roc" :
                undefined as never;
        const effectiveRange = transferAgreement[ROTransferAgreementsTable.structure["Contract Effective Range"].slug] as DateRangeFieldCell;
        const startDate = new Date(effectiveRange.from_date.date);
        const endDate = new Date(effectiveRange.to_date.date);
        const stationNames = (transferAgreement[ROTransferAgreementsTable.structure["Station Name"].slug] as string[][]).flat();

        //get lookup field value for transferee number and throw error if it does not contain a single transferee number
        const transfereeReferenceList = transferAgreement[ROTransferAgreementsTable.structure["Transferee Number"].slug] as string[];
        if (transfereeReferenceList.length != 1) throw new Error(`${transfereeReferenceList.length} transferee numbers linked for ${transferAgreement.title}. 
                There can only be a single transferee number for each agreement. Certificates will not be transferred for this agreement`);
        const transfereeReference = transfereeReferenceList[0][0];

        //check for agreements that contradict the current agreement and throw error if any are found
        const overlapCheck = accountTransferAgreements.find(_transferAgreement => {
            const _stationNames = (_transferAgreement[ROTransferAgreementsTable.structure["Station Name"].slug] as string[][]).flat();
            const _effectiveRange = _transferAgreement[ROTransferAgreementsTable.structure["Contract Effective Range"].slug] as DateRangeFieldCell;
            const _startDate = new Date(_effectiveRange.from_date.date);
            const _endDate = new Date(_effectiveRange.to_date.date);
            const _certificateTypeID = _transferAgreement[ROTransferAgreementsTable.structure["Certificate Type"].slug] as "fdLzM" | "lquDx";
            const _transfereeReference = (_transferAgreement[ROTransferAgreementsTable.structure["Transferee Number"].slug] as string[])[0][0];
            //check if any station in teh checked agreement is the same as a transfer name in the current agreement
            const stationNameCheck = stationNames.some(stationName => _stationNames.some(_stationName => _stationName == stationName));
            return stationNameCheck && _transfereeReference !== transfereeReference && _certificateTypeID === certificateTypeID && (_startDate <= endDate || _endDate >= startDate);
        });
        if (overlapCheck) throw new Error(`Transfer Agreement ${overlapCheck.title} overlaps with ${transferAgreement.title} and is for a different organisation. 
                Certificates will not be transferred for ${transferAgreement.title}`);
        return { stationNames, certificateType, transfereeReference, startDate, endDate };
    }

    async function logErrorToPly(error: Error) { //notifies of errors using Ply automation, and logs to console
        const errorMessage = error.toString();
        const stack = error.stack;
        console.log(errorMessage);
        console.log(stack);
        fetch(
            PLY_ERROR_LOG_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: "RO Scraper:" + errorMessage + " | " + stack,
                    link: `https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#logsV2:log-groups/log-group/$252Faws$252Flambda$252FquickFileWebhookHandler/log-events/${lambdaContext?.logStreamName ?? ""}`
                })
            }
        );
        return errorMessage;
    }
}

/**
 * 
 * @param recordList List of records to deduplicate
 * @param uniqueFieldSlug Unique field used to determine identity
 * @returns deduplicated list of records
 */
function dedupe<RecordList extends Record<string, unknown>>(recordList: RecordList[], uniqueFieldSlug: string): RecordList[] {
    const dedupeRecordList: RecordList[] = [];
    for (const account of recordList) {
        const duplicateAccounts = recordList.filter(otherAccount => otherAccount[uniqueFieldSlug] === account[uniqueFieldSlug]);
        if (duplicateAccounts.length > 0) {
            dedupeRecordList.push(Object.assign({}, ...duplicateAccounts));
        } else {
            dedupeRecordList.push(account);
        }
    }
    return dedupeRecordList;
}
