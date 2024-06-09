import HTTPError from '../common/HTTPError';

type RequestHeaders = Record<"Authorization" | "Account-Id", string>
    | Record<"Content-Type", "application/json;charset=utf-8">;

interface filterElement {
    field: string,
    comparison: string,
    value: (string | number | string[])
}
interface FilterBody {
    "filter": {
        "operator": "and" | "or",
        "fields": filterElement[],
    }
}

interface ExistingRecord { id: string;[slug: string]: unknown };
type FilterComparison = string; //TODO: support different types of comparison and adapt allowed comparisons based on input field type


export default class SmartSuiteAPIHandler {
    private requestHeaders: RequestHeaders;

    constructor(accountID: string, APIToken: string) {
        this.requestHeaders = {
            "Authorization": `Token ${APIToken}`,
            "Account-Id": accountID,
            "Content-Type": "application/json;charset=utf-8"
        }
    }

    async updateSingleRecord(tableID: string, recordID: string, record: { [slug: string]: any }) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/${recordID}/`;

        const body = record;
        const response = await fetch(url, {
            method: "PATCH",
            headers: this.requestHeaders,
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new HTTPError(response.status, response.statusText);

        const result = await response.json();
        return result;
    }



    async filterRecords(
        tableID: string,
        fieldsToFilter: filterElement | filterElement[],
        operator: "and" | "or" = "and"
    ) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/list/`;
        const fields: filterElement[] = Array.isArray(fieldsToFilter) ? fieldsToFilter : [fieldsToFilter];
        const body: FilterBody = {
            filter: {
                operator,
                fields
            }
        };
        const response = await fetch(url, {
            method: "POST",
            headers: this.requestHeaders,
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            const errorMessage = `Error: ${response.status} ${response.statusText}`;
            throw new Error(errorMessage);
        }
        const result = await response.json();
        return result.items;
    }

    async getRecordsByFieldValues(fieldValues: unknown[], fieldSlug: string, tableID: string) {
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

        const response = await fetch(url, {
            method: "POST",
            headers: this.requestHeaders,
            body: JSON.stringify(body)
        });

        if (!response.ok) throw new HTTPError(response.status, response.statusText);

        const result = await response.json();
        return result.items;
    }

    async getAllRecords(tableID: string) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/list/`;

        const body = {};

        const response = await fetch(url, {
            method: "POST",
            headers: this.requestHeaders,
            body: JSON.stringify(body)
        });

        if (!response.ok) throw new HTTPError(response.status, response.statusText);
        const result = await response.json();
        return result.items;
    }

    async updateMultipleRecords(
        records: ExistingRecord[],
        tableID: string
    ) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/bulk/`;

        const body = { items: records };
        const response = await fetch(url, {
            method: "PATCH",
            headers: this.requestHeaders,
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new HTTPError(response.status, response.statusText);

        const result = await response.json();
        return result;
    }

    async addNewRecords(records: object[], tableID: string) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/bulk/`;

        const body = { items: records };
        const response = await fetch(url, {
            method: "POST",
            headers: this.requestHeaders,
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new HTTPError(response.status, response.statusText);

        const result = await response.json();
        return result;
    }

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
            headers: this.requestHeaders,
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new HTTPError(response.status, response.statusText);

        const result = await response.json();
        return result.items;
    }

    async getTable(tableID: string) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/`;
        const response = await fetch(url, {
            method: "GET",
            headers: this.requestHeaders
        });
        const result = await response.json();
        return result;
    }

    async listTables() {
        const url = `https://app.smartsuite.com/api/v1/applications/`;
        const response = await fetch(url, {
            method: "GET",
            headers: this.requestHeaders
        });
        const result = await response.json();
        return result;
    }

}