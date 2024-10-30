import HTTPError from "../../Common/dist/HTTPError.js";
import allTables from "./tables.js";

//returns a table type given a table ID string
type TableFromID<T extends TableIDs> = T extends Tables["id"] ? Extract<Tables, { id: T }> : never;

type Tables = Inner<typeof allTables>; //union of all tables in tables.ts
type TableIDs = Tables["id"]; // union of all table IDs in tables.ts

// union of all table IDs in a specific workspace

export type RecordFromTableID<T extends TableIDs> = SmartSuiteTableRecord<TableFromID<T>>; // record from a specific table
//any record from any table in tables.ts
//type SSRecord = { [T in TableID]: RecordFromTableID<T> }[TableID]

class LimitedList<T> {
    private maxLength: number;
    private items: T[];
    constructor(maxLength: number) {
        this.maxLength = maxLength;
        this.items = [];
    }
    add(item: T) {
        // Add the new item to the beginning of the list
        this.items.unshift(item);

        // If the list exceeds the maximum length, remove the oldest item
        if (this.items.length > this.maxLength) {
            this.items.pop();
        }
    }
    getList() {
        return this.items;
    }
    getLastItem() {
        return this.items[this.maxLength - 1] as number | undefined;
    }
}

export default class SmartSuiteAPIHandler {

    private requestHeaders: HeadersInit;
    private accountID: string;
    private maxBulkRequestSize: number = 25; //Smartsuite allow a max of 25 records per bulk update request

    private maxRequestsPerSecond: number = 2; //2 is the secondary limit, effective once the monthly request volume limit is reached in a given month. 
    //To use the primary limit (faster but risk of triggering retries if primary limit reached) set equal 5.
    //details here: https://help.smartsuite.com/en/articles/4856710-api-limits
    private recentRequestTimestamps = new LimitedList<number>(this.maxRequestsPerSecond); //used in caching proxy limiting requests per second

    constructor(accountID: string, APIToken: string) {
        this.accountID = accountID;
        this.requestHeaders = {
            "Authorization": `Token ${APIToken}`,
            "Account-Id": accountID,
            "Content-Type": "application/json;charset=utf-8"
        }
    }

    async request(endpoint: string, init?: {
        body: string,
        method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
    }, retries: number = 3, delay: number = 30000): Promise<Response> {
        let attempts = 0;
        let currentDelay = delay;
        while (attempts < retries) {
            try {
                // get ms elapsed since the request "maxRequestsPerSecond" requests previous.
                let relevantRequestTimestamp = this.recentRequestTimestamps.getLastItem() ?? 0;
                let msSinceRelevantRequest = relevantRequestTimestamp - Date.now();
                while (msSinceRelevantRequest > -1000) { //while rate limit will be exceeded
                    console.log("Waiting " + (1001 - msSinceRelevantRequest) + " ms so as not to exceed rate limit");
                    await new Promise(resolve => setTimeout(resolve, 1001 - msSinceRelevantRequest)); //wait until safe to retry
                    relevantRequestTimestamp = this.recentRequestTimestamps.getLastItem() ?? 0;
                    msSinceRelevantRequest = relevantRequestTimestamp - Date.now();
                }
                this.recentRequestTimestamps.add(Date.now()); // set last request time for caching proxy
                const response = await fetch(endpoint, {
                    method: init?.method ?? "GET",
                    headers: this.requestHeaders,
                    body: init?.body,
                })
                if (!response.ok) throw new HTTPError(response.status, response.statusText, await response.text());
                return response;

            } catch (error: any) {
                if (error.status === 429) { //catch rate limit error
                    attempts++;
                    console.log(
                        `Attempt ${attempts} failed with 429 error. Retrying in ${currentDelay / 1000} seconds...`
                    );
                    await new Promise((resolve) => setTimeout(resolve, currentDelay));
                    currentDelay *= 2; // Exponential backoff
                } else throw error; //rethrow other errors
            }
        }
        throw new Error(
            `Function failed after ${retries} attempts due to repeated 429 errors.`
        );
    }

    async filterForDataChanges<Table extends TableIDs>(
        accountID: string,
        tableID: Table,
        updatedRecords: Update<RecordFromTableID<Table>>[],
        useEntireTable: true,
        additionalInfo?: { entireTableRecords: RecordFromTableID<Table>[] }):
        Promise<Update<RecordFromTableID<Table>>[]>;

    async filterForDataChanges<Table extends TableIDs>(
        accountID: string,
        tableID: TableIDs,
        updatedRecords: Update<RecordFromTableID<Table>>[],
        useEntireTable: false,
        additionalInfo: { idFieldSlug: string }): Promise<Update<RecordFromTableID<Table>>[]>;

    async filterForDataChanges<Table extends TableIDs>(
        accountID: string,
        tableID: Table,
        updatedRecords: Update<RecordFromTableID<Table>>[],
        useEntireTable: boolean,
        additionalInfo?: {
            idFieldSlug?: string;
            entireTableRecords?: RecordFromTableID<Table>[]
        }): Promise<Update<RecordFromTableID<Table>>[]> {
        /*helper function to remove records which are identical to their cloud hosted copy from an update request
        Can be configured to just check records which are listed, but needs the field slug of an ID field.
        Can also be configured to check records against the entire table, but more computationally expensive. Entire table can be supplied or is requested
        */
        console.log("Getting current record values...");
        const existingRecords = useEntireTable ?
            additionalInfo?.entireTableRecords ?
                additionalInfo.entireTableRecords :
                await this.getAllRecords(tableID) :
            await this.getRecordsByFieldValues(
                tableID,
                additionalInfo?.idFieldSlug as string,
                updatedRecords.map(record => record.id)
            );
        console.log("Filtering out unchanged records...");

        const changedRecords = updatedRecords.filter((updatedRecord) => {
            const recordToUpdate = existingRecords.find(existingRecord => existingRecord.id === updatedRecord.id);
            return recordToUpdate ? !checkRecordEquivalence(updatedRecord, recordToUpdate) : true; //update the record if not found in the supplied record list
        })
        return changedRecords;


        //helper function
        function checkRecordEquivalence<R extends SmartSuiteBaseRecord>(source: Update<R>, reference: R): boolean {
            //returns false if any field value in the source differs from that field value in the reference, else returns true
            return Object.keys(source).every(key => checkObjectEquivalence((source as Record<string, any>)[key], (reference as Record<string, any>)[key]));
        }
    }

    async updateRecord<Table extends TableIDs>(
        tableID: Table,
        recordID: string,
        record: Omit<Update<RecordFromTableID<Table>>, "id">):
        Promise<RecordFromTableID<Table>> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/${recordID}/`;

        const body = record;
        const response = await this.request(url, {
            method: "PATCH",
            body: JSON.stringify(body),
        });
        const result = await response.json();
        return result;
    }

    async filterRecords<TableID extends TableIDs>(
        tableID: TableID,
        fieldsToFilter: FilterElement | FilterElement[],
        operator: "and" | "or" = "and"
    ): Promise<RecordFromTableID<TableID>[]> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/list/`;
        const fields: FilterElement[] = Array.isArray(fieldsToFilter) ? fieldsToFilter : [fieldsToFilter];
        const body: FilterBody = {
            filter: {
                operator,
                fields
            }
        };
        const response = await this.request(url, {
            method: "POST",
            body: JSON.stringify(body),
        });
        const result: { items: any[] } = await response.json();
        return result.items;
    }

    async getRecordsByFieldValues<TableID extends TableIDs>(
        tableID: TableID,
        fieldSlug: string,
        fieldValues: unknown[]): Promise<RecordFromTableID<TableID>[]> {
        //gets any record where the specified field has any of the given list of values
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/list/`;
        const body = {
            "filter": {
                "operator": "or",
                "fields": fieldValues.map(value => ({
                    "field": fieldSlug,
                    "comparison": "is",
                    "value": value
                }))
            }
        };
        const response = await this.request(url, {
            method: "POST",
            body: JSON.stringify(body)
        });
        const result: { items: RecordFromTableID<typeof tableID>[] } = await response.json();
        return result.items;
    }

    async getAllRecords<TableID extends TableIDs>(tableID: TableID):
        Promise<RecordFromTableID<TableID>[]> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/list/`;

        const body = {};

        const response = await this.request(url, {
            method: "POST",
            body: JSON.stringify(body)
        });
        const result: { items: RecordFromTableID<typeof tableID>[] } = await response.json();
        return result.items;
    }
    async bulkUpdateRecords<TableID extends TableIDs, AccountID extends typeof this.accountID>(
        tableID: TableID,
        records: Update<RecordFromTableID<TableID>>[],
        checkForDataChanges: true,
        useEntireTable: false,
        additionalInfo: { idFieldSlug: string }
    ): Promise<RecordFromTableID<TableID>[]>

    async bulkUpdateRecords<TableID extends TableIDs, AccountID extends typeof this.accountID>(
        tableID: TableID,
        records: Update<RecordFromTableID<TableID>>[],
        checkForDataChanges: true,
        useEntireTable: true,
        additionalInfo?: { entireTableRecords: RecordFromTableID<TableID>[] }
    ): Promise<RecordFromTableID<TableID>[]>

    async bulkUpdateRecords<TableID extends TableIDs, AccountID extends typeof this.accountID>(
        tableID: TableID,
        records: Update<RecordFromTableID<TableID>>[],
        checkForDataChanges: false
    ): Promise<RecordFromTableID<TableID>[]>

    async bulkUpdateRecords<TableID extends TableIDs, AccountID extends typeof this.accountID>(
        tableID: TableID,
        records: Update<RecordFromTableID<TableID>>[],
        checkForDataChanges: boolean = records.length > 2 * this.maxBulkRequestSize,  //if true checks for data changes before
        // including records in update request. Helps avoid exceeding max bulk request size but uses an extra request
        useEntireTable: boolean = false, //setting to true uses the entire table for the data change check, but does not require an ID field slug
        additionalInfo?: { idFieldSlug?: string /*slug of field containing Record ID*/; entireTableRecords?: RecordFromTableID<TableID>[] /*list of entire table contents. Only use if already retrieved*/ }
    ): Promise<RecordFromTableID<TableID>[]> {
        const accountID = this.accountID;

        if (records.length <= 2 * this.maxBulkRequestSize && additionalInfo?.entireTableRecords === undefined) checkForDataChanges = false; //don't check for data changes when it won't save on the total number of requests

        console.log("Bulk updating " + records.length + " records");
        if (checkForDataChanges) console.log("Removing unchanged records...");

        //remove unchanged records if instructed    
        const recordsToUpdate = checkForDataChanges ? (useEntireTable ?
            await this.filterForDataChanges(this.accountID, tableID, records, true, additionalInfo as { entireTableRecords: RecordFromTableID<TableID>[] } | undefined) :
            await this.filterForDataChanges(this.accountID, tableID, records, false, additionalInfo as { idFieldSlug: string })
        ) : records
        if (recordsToUpdate.length === 0) return []; // skip request if no records to update

        if (checkForDataChanges) console.log("Updating " + recordsToUpdate.length + " changed records");

        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/bulk/`;
        const updatedRecords: RecordFromTableID<TableID>[] = [];
        const recordsBatches = splitIntoSubArrays(this.maxBulkRequestSize, recordsToUpdate);

        console.log("split updated records in to " + recordsBatches.length + " batch requests");
        let batchCount = 0

        for (const batch of recordsBatches) {
            batchCount++;
            console.log("processing batch " + batchCount);
            const body = { items: batch };
            const response = await this.request(url, {
                method: "PATCH",
                body: JSON.stringify(body),
            });
            const result = await response.json();
            updatedRecords.push(...result);
        }
        return updatedRecords;
    }

    async bulkAddNewRecords<TableID extends TableIDs>(
        tableID: TableID,
        records: Omit<Update<RecordFromTableID<TableID>>, "id">[]):
        Promise<RecordFromTableID<TableID>[]> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/bulk/`;
        const newRecords: RecordFromTableID<TableID>[] = [];
        const recordsBatches = splitIntoSubArrays(this.maxBulkRequestSize, records);

        for (const batch of recordsBatches) {
            const body = { items: batch };
            const response = await this.request(url, {
                method: "POST",
                body: JSON.stringify(body),
            });
            const result = await response.json();
            newRecords.push(...result);
        }
        return newRecords;
    }

    async addNewRecord<TableID extends TableIDs>(
        tableID: TableID,
        record: Omit<Update<RecordFromTableID<TableID>>, "id">):
        Promise<RecordFromTableID<TableID>[]> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/`;

        const response = await this.request(url, {
            method: "POST",
            body: JSON.stringify(record),
        });
        const result = await response.json();
        return result;
    }

    async getRecordsByTitle<TableID extends TableIDs>(
        tableID: TableID,
        titles: string[]):
        Promise<RecordFromTableID<TableID>[]> {
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
            headers: this.requestHeaders,
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new Error(response.status + " " + response.statusText);
        const result = await response.json();
        return result.items;
    }

    async getTable<TableID extends TableIDs>(tableID: TableID) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/`;
        const response = await this.request(url);
        const result = await response.json();
        return result;
    }

    async listTables() {
        const url = `https://app.smartsuite.com/api/v1/applications/`;
        const response = await this.request(url);
        const result = await response.json();
        return result;
    }

    async listTeams(): Promise<Team[]> {
        const url = "https://app.smartsuite.com/api/v1/teams/list/";
        const response = await this.request(url, {
            method: "POST", body: JSON.stringify({
                "sort": [],
                "filter": {}
            })
        });
        const result = await response.json();
        return result.items;
    }
}

///////////////////Helper functions //////////////////
function splitIntoSubArrays<T>(subArrayLength: number, array: T[]): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += subArrayLength) {
        result.push(array.slice(i, i + subArrayLength));
    }
    return result;
}


function checkObjectEquivalence(source: any, reference: any): boolean {
    //returns false if any field value in the source differs from that field value in the reference, else returns true
    // Covers primitives
    if (source === reference) return true;
    // If either is not an object, they are not equal (handles nulls, functions, etc.)
    if (typeof source !== "object" || typeof reference !== "object" || source === null || reference === null) {
        return false;
    }
    const sourceKeys = Object.keys(source);
    const refKeys = Object.keys(reference);

    // Check each key recursively
    for (const key of sourceKeys) {
        if (!refKeys.includes(key) || !checkObjectEquivalence(source[key], reference[key])) {
            return false;
        }
    }
    return true;
}
