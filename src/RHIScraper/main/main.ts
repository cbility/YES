import {
    accountsTable,
    RHIsTable,
    loginsTable,
    LoginRecord,
    AccountRecord,
} from "./globals";
import { RHIRecord } from "./globals";
import { HTTPError } from "./globals";
import { getRecordsByFieldValues } from "./globals";
import { ExistingRecord } from "./globals";
import { SMARTSUITE_HEADERS } from "./globals";
import { getAllRecords } from "./globals";
import getLoginDetails from "./RHI/getLoginDetails";
import getAccountDetails from "./RHI/getAccountDetails";
import logInUser from "./RHI/logInUser";
import validateLogin from "./RHI/validateLogin";
import getRHIDetails from "./RHI/getRHIDetails";
import { PuppeteerNode as PuppeteerCoreNode } from "puppeteer-core";

type Inputs = { loginID: string }[];

class SmartSuite {
    @exponentialBackoff(3)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async getRecordsByTitle(titles: string[], tableID: string) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/list/`;

        const body = {
            filter: {
                operator: "or",
                fields: titles.map((title) => ({
                    field: "title",
                    comparison: "is",
                    value: title,
                })),
            },
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                ...SMARTSUITE_HEADERS,
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new HTTPError(response.status, response.statusText, await response.text());

        const result = await response.json();
        return result.items;
    }
    @exponentialBackoff(3)
    async addNewRecords(recordsToCreate: object[], tableID: string) {

        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/bulk/`;
        const recordsBatch = splitIntoSubArrays(25, recordsToCreate);
        const createdRecords: unknown[] = [];

        for (const records of recordsBatch) {

            const body = { items: records };
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    ...SMARTSUITE_HEADERS,
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) throw new HTTPError(response.status, response.statusText, await response.text());
            createdRecords.push(...(await response.json()));
        }
        return createdRecords;
    }
    @exponentialBackoff(3)
    async updateMultipleRecords(
        recordsToUpdate: ExistingRecord[],
        tableID: string
    ) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/bulk/`;
        const recordsBatch = splitIntoSubArrays(25, recordsToUpdate);
        const updatedRecords: unknown[] = [];

        for (const records of recordsBatch) {
            const body = { items: records };
            const response = await fetch(url, {
                method: "PATCH",
                headers: {
                    ...SMARTSUITE_HEADERS,
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) throw new HTTPError(response.status, response.statusText, await response.text());

            updatedRecords.push(...(await response.json()));
        }
        return updatedRecords;
    }

    @exponentialBackoff(3)
    async updateSingleRecord(record: object, recordID: string, tableID: string) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/${recordID}/`;

        const body = record;
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                ...SMARTSUITE_HEADERS,
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new HTTPError(response.status, response.statusText, await response.text());

        const result = await response.json();
        return result;
    }
}

const SS = new SmartSuite();

export default async function main(
    inputs: Inputs,
    puppeteer: PuppeteerCoreNode,
    browserArgs: object,
    shallow: boolean = false //can be set to true to skip over some information checking to improve performance
) {
    if (inputs.length === 0) throw new Error("Empty input array");
    if (!("loginID" in inputs[0])) throw new Error("No loginID in first input"); //check for correct format

    //get login records from login table
    const loginRecordsList: LoginRecord[] = await getRecordsByFieldValues(
        (inputs).map((input) => input.loginID),
        loginsTable.fields["Record ID (System Field)"],
        loginsTable.id
    );

    //parse login records as dictionary with record IDs as keys
    const loginRecords: Record<string, LoginRecord> = {};
    for (const loginRecord of loginRecordsList) {
        loginRecords[loginRecord.id] = loginRecord;
    }

    //get RHI Records from RHI Table
    const ExistingRHIRecords = {};
    const ExistingRHIAccounts = {};
    (await getAllRecords(RHIsTable.id)).forEach((RHI) => {
        ExistingRHIRecords[RHI.title] = RHI.id;
        ExistingRHIAccounts[RHI.title] = RHI[RHIsTable.fields["RHI Account"]];
    });
    const browser = await puppeteer.launch(browserArgs);

    const loginIDs = inputs.map(
        (inputLogin) => inputLogin.loginID
    );
    const loginDetails: LoginRecord[] = [];
    const accountDetails: (AccountRecord | Omit<AccountRecord, "id">)[] = [];
    const updatedRHIDetails: RHIRecord[] = [];
    const newRHIDetails: Omit<RHIRecord, "id">[] = [];
    const page = await browser.newPage();

    for (const loginRecordID of loginIDs) {
        const loginRecordToUpdate: LoginRecord =
            loginRecords[loginRecordID];
        // set the account via updating the account record, not the login record itself
        const accountID =
            (loginRecordToUpdate[loginsTable.fields["Account"]] as string[])[0];
        //delete loginRecordToUpdate[loginsTable.fields['Account']];

        if (!loginRecordToUpdate[loginsTable.fields["Password Correct"]])
            continue;

        await logInUser(loginRecordToUpdate, page);

        if (!(await validateLogin(page))) {
            SS.updateSingleRecord(
                { [loginsTable.fields["Password Correct"]]: false },
                loginRecordID,
                loginsTable.id
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

        const updatedLoginRecord: LoginRecord = await getLoginDetails(
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

        const accountRecordToUpdate: AccountRecord | Omit<AccountRecord, "id"> = accountID ?
            { id: accountID, } : {
                //only update the linked login if account is brand new,
                // i.e. corresponds to a new AS login
                id: undefined,
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

        const updatedAccountRecord: Omit<AccountRecord, "id"> = await getAccountDetails(
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

    const newAccountDetails: Omit<AccountRecord, "id">[] = accountDetails
        .filter((account) => !account.id)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ id, ...rest }) => rest);

    const updatedAccountDetails: AccountRecord[] = accountDetails.filter(
        (account) => !!account.id
    ) as AccountRecord[];

    //update SmartSuite logins first to avoid overwriting links to new accounts
    if (loginDetails.length > 0) {
        await SS.updateMultipleRecords(loginDetails, loginsTable.id);
        console.log("Login details updated");
    }

    //add new accounts
    if (newAccountDetails.length > 0) {
        await SS.addNewRecords(newAccountDetails, accountsTable.id);
        console.log("New account details added");
    }

    //update existing accounts
    if (updatedAccountDetails.length > 0) {
        await SS.updateMultipleRecords(updatedAccountDetails, accountsTable.id);
        console.log("Existing account details updated");
    }

    //update existing RHIs
    if (updatedRHIDetails.length > 0) {
        await SS.updateMultipleRecords(updatedRHIDetails, RHIsTable.id);
        console.log("Existing RHI details updated");
    }

    //add new RHIs
    if (newRHIDetails.length > 0) {
        await SS.addNewRecords(newRHIDetails, RHIsTable.id);
        console.log("New RHI details added");
    }

    console.log("all records updated");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exponentialBackoff(retries: number, delay: number = 30000): any {
    // This is a decorator factory, which returns the actual decorator
    return function (
        target: unknown,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: unknown[]) {
            let attempts = 0;
            let currentDelay = delay;

            while (attempts < retries) {
                try {
                    return await originalMethod.apply(this, args);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    if (error.status === 429) {
                        attempts++;
                        console.log(
                            `Attempt ${attempts} failed with 429 error. Retrying in ${currentDelay / 1000} seconds...`
                        );
                        await new Promise((resolve) => setTimeout(resolve, currentDelay));
                        currentDelay *= 2; // Exponential backoff
                    } /*else if (error.status === 422 && (error.message as string).includes("RATE_LIMIT_EXCEEDED")) {
                        attempts++;
                        console.log(
                            // eslint-disable-next-line max-len, max-len
                            `Attempt ${attempts} failed with 422 error and RATE_LIMIT_EXCEEDED message. 
                            Retrying in ${currentDelay / 1000} seconds...`
                        );
                        await new Promise((resolve) => setTimeout(resolve, currentDelay));
                        currentDelay *= 2; // Exponential backoff

                    }*/ else {
                        throw error; // If it's not a 429 or 422 RATE_LIMIT_EXCEEDED error, rethrow it
                    }
                }
            }

            throw new Error(
                `Function failed after ${retries} attempts due to repeated 429 errors.`
            );
        };

        return descriptor;
    };
}

function splitIntoSubArrays<T>(subArrayLength: number, array: T[]): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += subArrayLength) {
        result.push(array.slice(i, i + subArrayLength));
    }
    return result;
}


