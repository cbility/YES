import HTTPError from "../../Common/dist/HTTPError.js";

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
    private requestHeaders: RequestHeaders;
    private maxBulkRequestSize: number = 25; //Smartsuite allow a max of 25 records per bulk update request

    private maxRequestsPerSecond: number = 2; //2 is the secondary limit, effective once the monthly request volume limit is reached in a given month. 
    //To use the primary limit (faster but risk of triggering retries if primary limit reached) set equal 5.
    //details here: https://help.smartsuite.com/en/articles/4856710-api-limits
    private recentRequestTimestamps = new LimitedList<number>(this.maxRequestsPerSecond); //used in caching proxy limiting requests per second

    constructor(accountID: string, APIToken: string) {
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
                const relevantRequestTimestamp = this.recentRequestTimestamps.getLastItem() ?? 0;
                const msSinceRelevantRequest = relevantRequestTimestamp - Date.now();
                while (msSinceRelevantRequest > -1000) { //while rate limit will be exceeded
                    await new Promise(resolve => setTimeout(resolve, 1001 - msSinceRelevantRequest)); //wait until safe to retry
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

    async filterForDataChanges(tableID: string,
        updatedRecords: SmartSuiteRecord[],
        useEntireTable: true,
        additionalInfo?: { entireTableRecords: SmartSuiteRecord[] }): Promise<SmartSuiteRecord[]>;

    async filterForDataChanges(tableID: string,
        updatedRecords: SmartSuiteRecord[],
        useEntireTable: false,
        additionalInfo: { idFieldSlug: string }): Promise<SmartSuiteRecord[]>;

    async filterForDataChanges(tableID: string,
        updatedRecords: SmartSuiteRecord[],
        useEntireTable: boolean,
        additionalInfo?: { idFieldSlug?: string; entireTableRecords?: SmartSuiteRecord[] }): Promise<SmartSuiteRecord[]> {
        /*helper function to remove records which are identical to their cloud hosted copy from an update request
        Can be configured to just check records which are listed, but needs the field slug of an ID field.
        Can also be configured to check records against the entire table, but more computationally expensive. Entire table can be supplier or is requested
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
        function checkRecordEquivalence(source: Partial<SmartSuiteRecord>, reference: SmartSuiteRecord): boolean {
            //returns false if any field value in the source differs from that field value in the reference, else returns true
            return Object.keys(source).every(key => checkObjectEquivalence(source[key], reference[key]));
        }
    }

    async updateRecord(tableID: string,
        recordID: string,
        record: Omit<SmartSuiteRecord, "id">): Promise<SmartSuiteRecord> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/${recordID}/`;

        const body = record;
        const response = await this.request(url, {
            method: "PATCH",
            body: JSON.stringify(body),
        });
        const result = await response.json();
        return result;
    }

    async filterRecords(
        tableID: string,
        fieldsToFilter: FilterElement | FilterElement[],
        operator: "and" | "or" = "and"
    ): Promise<SmartSuiteRecord[]> {
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

    async getRecordsByFieldValues(tableID: string,
        fieldSlug: string,
        fieldValues: unknown[]): Promise<SmartSuiteRecord[]> {
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
        const result: { items: SmartSuiteRecord[] } = await response.json();
        return result.items;
    }

    async getAllRecords(tableID: string): Promise<SmartSuiteRecord[]> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/list/`;

        const body = {};

        const response = await this.request(url, {
            method: "POST",
            body: JSON.stringify(body)
        });
        const result: { items: SmartSuiteRecord[] } = await response.json();
        return result.items;
    }
    async bulkUpdateRecords(
        tableID: string,
        records: SmartSuiteRecord[],
        checkForDataChanges: true,
        useEntireTable: false,
        additionalInfo: { idFieldSlug: string }
    ): Promise<SmartSuiteRecord[]>

    async bulkUpdateRecords(
        tableID: string,
        records: SmartSuiteRecord[],
        checkForDataChanges: true,
        useEntireTable: true,
        additionalInfo?: { entireTableRecords: SmartSuiteRecord[] }
    ): Promise<SmartSuiteRecord[]>

    async bulkUpdateRecords(
        tableID: string,
        records: SmartSuiteRecord[],
        checkForDataChanges: false
    ): Promise<SmartSuiteRecord[]>

    async bulkUpdateRecords(
        tableID: string,
        records: SmartSuiteRecord[],
        checkForDataChanges: boolean = records.length > 2 * this.maxBulkRequestSize,  //if true checks for data changes before
        // including records in update request. Helps avoid exceeding max bulk request size but uses an extra request
        useEntireTable: boolean = false, //setting to true uses the entire table for the data change check, but
        // does not require an ID field slug
        additionalInfo?: { idFieldSlug?: string /*slug of field containing Record ID*/; entireTableRecords?: SmartSuiteRecord[] /*list of entire table contents. Only use if already retrieved*/ }
    ): Promise<SmartSuiteRecord[]> {

        if (records.length <= 2 * this.maxBulkRequestSize && additionalInfo?.entireTableRecords === undefined) checkForDataChanges = false; //don't check for data changes when it won't save on the total number of requests

        console.log("Bulk updating " + records.length + " records");
        if (checkForDataChanges) console.log("Removing unchanged records...");

        //remove unchanged records if instructed    
        const recordsToUpdate = checkForDataChanges ? (useEntireTable ?
            await this.filterForDataChanges(tableID, records, true, additionalInfo as { entireTableRecords: SmartSuiteRecord[] } | undefined) :
            await this.filterForDataChanges(tableID, records, false, additionalInfo as { idFieldSlug: string })
        ) : records
        if (recordsToUpdate.length === 0) return []; // skip request if no records to update

        if (checkForDataChanges) console.log("Updating " + recordsToUpdate.length + " changed records");

        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/bulk/`;
        const updatedRecords: SmartSuiteRecord[] = [];
        const recordsBatches = splitIntoSubArrays(this.maxBulkRequestSize, recordsToUpdate);

        for (const batch of recordsBatches) {
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

    async bulkAddNewRecords(tableID: string, records: Omit<SmartSuiteRecord, "id">[]): Promise<SmartSuiteRecord[]> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/bulk/`;
        const newRecords: SmartSuiteRecord[] = [];
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

    async addNewRecord(tableID: string, record: Omit<SmartSuiteRecord, "id">): Promise<SmartSuiteRecord> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/`;

        const response = await this.request(url, {
            method: "POST",
            body: JSON.stringify(record),
        });
        const result = await response.json();
        return result;
    }

    async getRecordsByTitle(tableID: string, titles: string[]): Promise<SmartSuiteRecord[]> {
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

    async getTable(tableID: string) {
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

}

///////////////////Helper functions //////////////////
function splitIntoSubArrays<T>(subArrayLength: number, array: T[]): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += subArrayLength) {
        result.push(array.slice(i, i + subArrayLength));
    }
    return result;
}

function deepEqual(obj1: any, obj2: any): boolean {
    // If both are strictly equal (covers primitives)
    if (obj1 === obj2) return true;
    // If either is not an object, they are not equal (handles nulls, functions, etc.)
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return false;
    }
    // Compare the length of their keys (to ensure no extra fields)
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    // Check each key recursively
    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
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
