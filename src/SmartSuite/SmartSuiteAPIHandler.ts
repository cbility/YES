import HTTPError from "../common/HTTPError";

export default class SmartSuiteAPIHandler {
    private requestHeaders: RequestHeaders;
    private maxBulkRequestSize: number = 25; //Smartsuite allow a max of 25 records per bulk update request

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

    async updateRecord(tableID: string, recordID: string, record: Record<string, SmartSuiteCell>) {
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
    ): Promise<Record<string, SmartSuiteCell>[]> {
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

    async getRecordsByFieldValues(tableID: string, fieldSlug: string, fieldValues: unknown[]): Promise<Record<string, SmartSuiteCell>[]> {
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
        const result: { items: Record<string, SmartSuiteCell>[] } = await response.json();
        return result.items;
    }

    async getAllRecords(tableID: string): Promise<Record<string, SmartSuiteCell>[]> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/list/`;

        const body = {};

        const response = await this.request(url, {
            method: "POST",
            body: JSON.stringify(body)
        });
        const result: { items: any[] } = await response.json();
        return result.items;
    }

    async bulkUpdateRecords(
        tableID: string,
        records: Record<string, SmartSuiteCell>[],
    ): Promise<Record<string, SmartSuiteCell>[]> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/bulk/`;

        const body = { items: records };
        const response = await this.request(url, {
            method: "PATCH",
            body: JSON.stringify(body),
        });

        const result = await response.json();
        return result;
    }

    async bulkAddNewRecords(tableID: string, records: Record<string, SmartSuiteCell>[]): Promise<Record<string, SmartSuiteCell>[]> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/bulk/`;

        const body = { items: records };
        const response = await this.request(url, {
            method: "POST",
            body: JSON.stringify(body),
        });
        const result = await response.json();
        return result;
    }

    async addNewRecord(tableID: string, record: Record<string, SmartSuiteCell>): Promise<Record<string, SmartSuiteCell>> {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/`;

        const response = await this.request(url, {
            method: "POST",
            body: JSON.stringify(record),
        });
        const result = await response.json();
        return result;
    }

    async getRecordsByTitle(tableID: string, titles: string[]): Promise<Record<string, SmartSuiteCell>[]> {
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