import {
    accountsTable,
    RHIsTable,
    loginsTable,
} from "../../SmartSuite/tables";

//import type { RHILoginRecord, RHIAccountRecord, RHIRecord } from "../../SmartSuite/SmartSuite.d.ts";
import getLoginDetails from "./RHI/getLoginDetails";
import getAccountDetails from "./RHI/getAccountDetails";
import logInUser from "./RHI/logInUser";
import validateLogin from "./RHI/validateLogin";
import getRHIDetails from "./RHI/getRHIDetails";
import { PuppeteerNode as PuppeteerCoreNode } from "puppeteer-core";
import SmartSuite from "../../SmartSuite/SmartSuiteAPIHandler.js"

//type Inputs = { loginID: string }[];

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
    const loginRecordsList = await ss.getRecordsByFieldValues(
        loginsTable.id,
        loginsTable.fields["Record ID (System Field)"],
        inputs.map(input => input.loginID)
    ) as RHILoginRecord[];

    //parse login records as dictionary with record IDs as keys
    const loginRecords: Record<string, RHILoginRecord> = {};
    for (const loginRecord of loginRecordsList) {
        loginRecords[loginRecord.id as string] = loginRecord;
    }

    //get Existing RHI Records and Accounts from RHI Table and save as dictionary
    const ExistingRHIRecords: Record<string, string> = {};
    const ExistingRHIAccounts: Record<string, string> = {};
    (await ss.getAllRecords(RHIsTable.id) as { [slug: string]: string }[]).forEach((RHIRecord) => {
        ExistingRHIRecords[RHIRecord.title] = RHIRecord.id;
        ExistingRHIAccounts[RHIRecord.title] = RHIRecord[RHIsTable.fields["RHI Account"]];
    });
    const browser = await puppeteer.launch(browserArgs);

    const loginIDs = inputs.map(
        (inputLogin) => inputLogin.loginID
    );
    const loginDetails: RHILoginRecord[] = [];
    const accountDetails: (RHIAccountRecord | Omit<RHIAccountRecord, "id">)[] = [];
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
            "Additional User"
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

        const accountRecordToUpdate: RHIAccountRecord | Omit<RHIAccountRecord, "id"> = accountID ?
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

        const updatedAccountRecord: Omit<RHIAccountRecord, "id"> = await getAccountDetails(
            accountRecordToUpdate,
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

    const newAccountDetails: Omit<RHIAccountRecord, "id">[] = accountDetails
        .filter((account) => !account.id)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ id, ...rest }) => rest);

    const updatedAccountDetails: RHIAccountRecord[] = accountDetails.filter(
        (account) => !!account.id
    ) as RHIAccountRecord[];

    //update SmartSuite logins first to avoid overwriting links to new accounts
    if (loginDetails.length > 0) {
        await ss.bulkUpdateRecords(loginsTable.id, loginDetails);
        console.log("Login details updated");
    }

    //add new accounts
    if (newAccountDetails.length > 0) {
        await ss.bulkAddNewRecords(accountsTable.id, newAccountDetails);
        console.log("New account details added");
    }

    //update existing accounts
    if (updatedAccountDetails.length > 0) {
        await ss.bulkUpdateRecords(accountsTable.id, updatedAccountDetails);
        console.log("Existing account details updated");
    }

    //update existing RHIs
    if (updatedRHIDetails.length > 0) {
        await ss.bulkUpdateRecords(RHIsTable.id, updatedRHIDetails);
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


