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
    shallow: boolean = false //can be set to true to skip over some information checking to improve performance
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

    //get all existing station records
    const ExistingROStationsList = await ss.getAllRecords(ROStationsTable.id);
    const ExistingROAccountsList = await ss.getAllRecords(ROAccountsTable.id);

    //parse login records as dictionary with record IDs as keys for fast lookup of record details from ID
    const loginRecords: Record<string, RecordFromTableID<typeof ROLoginsTable.id>> = {};
    for (const loginRecord of loginRecordsList) {
        loginRecords[loginRecord.id as string] = loginRecord;
    }

    //Parse station records and save as dictionary for fast lookup of record IDs from station names
    const ExistingROStations: Record<string, string> = {}; //map of station names to station record IDs
    for (const station of ExistingROStationsList) {
        ExistingROStations[station[ROStationsTable.structure["Station Name"].slug] as string] = station.id;
    }

    //Parse account records and save as dictionary for fast lookup of record IDs from account references
    const ExistingROAccounts: Record<string, string> = {}; //map of account references to account record IDs
    for (const account of ExistingROAccountsList) {
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
        for (const station of updatedStationRecordList) {
            const stationRecordID: string | undefined = ExistingROStations[station[ROStationsTable.structure["Station Name"].slug] as string];
            if (stationRecordID) { //if station record exists already
                updatedStationDetails.push({
                    ...station,
                    id: stationRecordID
                })
            } else {
                newStationDetails.push(station)
            }
        }
        if (
            updatedLoginRecord[ROLoginsTable.structure["Login Type"].slug] ===
            "65b2625f-97fb-49f1-8e37-0f46a952b19b" //restricted
        ) { //FOR RESTRICTED LOGINS
            //update account name or create new account (using account name only) if missing
            //use generator name from accreditation table
            //update stations normally if account already linked to login. If account is missing it has to be created first

            const { generatorName, generatorReference, rocsTradeable, regosTradeable } = await getReducedAccountDetails(page);
            //check for preexisting account record
            const accountRecordID: string | undefined = ExistingROAccounts[generatorReference];

            updateAccount(accountRecordID, generatorReference, {
                application_id: ROAccountsTable.id,
                [ROAccountsTable.structure["Generator (Company) Name"].slug]: generatorName,
                [ROAccountsTable.structure["Organisation Reference"].slug]: generatorReference,
                [ROAccountsTable.structure["ROCs Tradeable"].slug]: rocsTradeable,
                [ROAccountsTable.structure["REGOs Tradeable"].slug]: regosTradeable,
            });

            // go to next login
            continue;
        } else if (
            updatedLoginRecord[ROLoginsTable.structure["Login Type"].slug] ===
            "d06a096d-c6d5-4fb5-bc6a-5b3ff1cba09a" //superuser
        ) {//FOR SUPERUSER LOGINS
            //update account name or create new account (using entire account details) if missing
            //update stations normally if account already linked to login. If account is missing it has to be created first

            const accountDetails = await getAccountDetails(page);

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
            }

            updateAccount(accountRecordID, accountDetails.organisationReference, { ...updatedAccountRecord, id: accountRecordID })
            //go to next login
            continue;
        }
        /**
             * Schedule account record for creation or update
             * Update account structure so logins and stations can be linked to correct accounts
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
                //list all stations on current account structure and on logged into account and remove duplicated before pushing to structure
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
        const updatedAccountRecordsList = await ss.bulkUpdateRecords(ROAccountsTable.id, dedupeUpdatedAccountDetails, true, true, { entireTableRecords: ExistingROAccountsList });
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
        await ss.bulkUpdateRecords(ROStationsTable.id, dedupeUpdatedStationDetails, true, true, { entireTableRecords: ExistingROStationsList });
        console.log("Existing station details updated");
    }

    //add new stations
    if (dedupeNewStationDetails.length > 0) {
        console.log("Creating " + dedupeNewStationDetails.length + " new stations");
        await ss.bulkAddNewRecords(ROStationsTable.id, dedupeNewStationDetails);
        console.log("New station details added");
    }

    console.log("Update Complete");
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
