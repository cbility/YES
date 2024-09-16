import {
    accountsTable,
    RHIsTable,
    loginsTable,
} from "../../../SmartSuite/dist/tables.js";
import SmartSuite from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js"
import getLoginDetails from "./RHI/getLoginDetails.js";
import getAccountDetails from "./RHI/getAccountDetails.js";
import logInUser from "./RHI/logInUser.js";
import validateLogin from "./RHI/validateLogin.js";
import getRHIDetails from "./RHI/getRHIDetails.js";
import { PuppeteerNode as PuppeteerCoreNode } from "puppeteer-core";
import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js";

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

    const inputIDs = inputs.map(input => input.loginID)
    //get login records from login table
    const loginRecordsList: RHILoginRecord[] = await ss.getRecordsByFieldValues(
        loginsTable.id,
        loginsTable.fields["Record ID (System Field)"],
        inputs.map(input => input.loginID)
    ) as RHILoginRecord[];

    //parse login records as dictionary with record IDs as keys
    const loginRecords: Record<string, RHILoginRecord> = {};
    for (const loginRecord of loginRecordsList) {
        loginRecords[loginRecord.id as string] = loginRecord;
    }

    //get Existing RHI Records and Accounts from RHI Table and save as dictionary for fast lookup of record IDs from RHI numbers
    const ExistingRHIRecords: Record<string, string> = {};
    const ExistingRHIAccounts: Record<string, string> = {};
    const ExistingRHIRecordsList: RHIRecord[] = await ss.getAllRecords(RHIsTable.id);
    (await ss.getAllRecords(RHIsTable.id)).forEach((RHIRecord) => {
        ExistingRHIRecords[RHIRecord.title as string] = RHIRecord.id;
        ExistingRHIAccounts[RHIRecord.title as string] = RHIRecord[RHIsTable.fields["RHI Account"]] as string;
    });
    const browser = await puppeteer.launch(browserArgs);

    const loginIDs = inputs.map(
        (inputLogin) => inputLogin.loginID
    );
    const loginDetails: RHILoginRecord[] = [];
    const accountDetails: (RHIAccountRecordUpdate)[] = [];
    const updatedRHIDetails: RHIRecord[] = [];
    const newRHIDetails: Omit<RHIRecord, "id">[] = [];
    const page = await browser.newPage();

    for (const loginRecordID of loginIDs) {
        const loginRecordToUpdate: RHILoginRecord =
            loginRecords[loginRecordID];
        // set the account via updating the account record, not the login record itself
        const accountID =
            (loginRecordToUpdate[loginsTable.fields["Account"]] as string[])[0];
        //delete loginRecordToUpdate[loginsTable.fields['Account']];

        if (!loginRecordToUpdate[loginsTable.fields["Password Correct"]])
            continue;

        await logInUser(loginRecordToUpdate, page);

        if (!(await validateLogin(page))) {
            ss.updateRecord(
                loginsTable.id,
                loginRecordID,
                { [loginsTable.fields["Password Correct"]]: false }
            );
            console.log(
                `Log in failed for ${loginRecordToUpdate[loginsTable.fields["Username"]]
                }`
            );
            continue;
        }
        console.log(
            `Log in success for ${loginRecordToUpdate[loginsTable.fields["Username"]]
            }`
        );

        const updatedLoginRecord: RHILoginRecord = await getLoginDetails(
            loginRecordToUpdate,
            page
        );

        // Account information not available on AU logins
        if (
            updatedLoginRecord[loginsTable.fields["Login Type"]] ===
            "fIKh7" //additional user
        ) {
            const RHIDetails = await getRHIDetails(accountID, page, shallow);
            if (!RHIDetails[0]) continue;

            updatedLoginRecord[loginsTable.fields["Account"]] =
                ExistingRHIAccounts[
                RHIDetails[0].title as string
                ]; // Set account using linked RHIs

            RHIDetails.forEach((RHI) => {
                delete RHI[RHIsTable.fields["RHI Account"]];

                if (!(RHI.title as string in ExistingRHIRecords)) {
                    return; //don't add RHIs that we don't have an AS password for
                }
                RHI.id = ExistingRHIRecords[RHI.title as string];
                updatedRHIDetails.push(RHI); //update everything but account
            });

            loginDetails.push(updatedLoginRecord);
            continue;
        }

        const accountRecordToUpdate: RHIAccountRecordUpdate | Omit<RHIAccountRecordUpdate, "id"> = accountID ?
            { id: accountID, } : {
                //only update the linked login if account is brand new,
                // i.e. corresponds to a new AS login
                [accountsTable.fields["Logins"]]: [loginRecordToUpdate.id],
            };
        /*AU logins have to be linked to pre-existing accounts on SS. That's because the account details
                  aren't available from AU logins, so the account has to be identified via the RHIs.
       
                  That means that AU logins are added to an account via updating the login record, whereas AS
                  logins are only ever added to a brand new account record via creating the record with
                  a link to the login. Accounts records are only ever updated from an AS login.
       
                  That in turn means that logins have to be updated BEFORE new accounts are created, and that 
                  updating an account record can not update the linked logins.
                  This avoids overwriting information.*/

        const updatedAccountRecord: RHIAccountRecordUpdate = await getAccountDetails(
            accountRecordToUpdate as RHIAccountRecordUpdate,
            page
        );

        if (accountID) {
            //only get RHIs for accounts on record
            const RHIDetails = await getRHIDetails(accountID, page, shallow);
            RHIDetails.forEach((RHI) => {
                if (!(RHI.title as string in ExistingRHIRecords)) {
                    newRHIDetails.push(RHI);
                    return;
                }
                RHI.id = ExistingRHIRecords[RHI.title as string];
                updatedRHIDetails.push(RHI);
            });
        }
        loginDetails.push(updatedLoginRecord);
        accountDetails.push(updatedAccountRecord);
    }

    await browser.close();
    console.log("browser closed");


    if (loginDetails.length == 0) {
        console.log("No logins to update");
        return;
    }

    const newAccountDetails: Omit<RHIAccountRecordUpdate, "id">[] = accountDetails
        .filter((account) => !account.id)
        .map(({ id, ...rest }) => rest);

    const updatedAccountDetails: RHIAccountRecordUpdate[] = accountDetails.filter(
        (account) => !!account.id
    );

    //update SmartSuite logins first to avoid overwriting links to new accounts
    if (loginDetails.length > 0) {
        await ss.bulkUpdateRecords(loginsTable.id, loginDetails, true, true, { entireTableRecords: loginRecordsList });
        console.log("Login details updated");
    }

    //add new accounts
    if (newAccountDetails.length > 0) {
        await ss.bulkAddNewRecords(accountsTable.id, newAccountDetails);
        console.log("New account details added");
    }

    //update existing accounts
    if (updatedAccountDetails.length > 0) {
        await ss.bulkUpdateRecords(accountsTable.id, updatedAccountDetails, true, false, { idFieldSlug: accountsTable.fields["Record ID (System Field)"] });
        console.log("Existing account details updated");
    }

    //update existing RHIs
    if (updatedRHIDetails.length > 0) {
        await ss.bulkUpdateRecords(RHIsTable.id, updatedRHIDetails, true, true, { entireTableRecords: ExistingRHIRecordsList });
        console.log("Existing RHI details updated");
    }

    //add new RHIs
    if (newRHIDetails.length > 0) {
        await ss.bulkAddNewRecords(RHIsTable.id, newRHIDetails);
        console.log("New RHI details added");
    }

    console.log("all records updated");
}

function splitIntoSubArrays<T>(subArrayLength: number, array: T[]): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += subArrayLength) {
        result.push(array.slice(i, i + subArrayLength));
    }
    return result;
}


