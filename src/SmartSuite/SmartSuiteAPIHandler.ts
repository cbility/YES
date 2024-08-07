type RequestHeaders = Record<"Authorization" | "Account-Id", string>
    | Record<"Content-Type", "application/json;charset=utf-8">;

interface filterElement {
    field: string,
    comparison: ("is" | "is_not" | "is_empty" | "is_not_empty" | "contains" | "not_contains") //strings
    | ("is_equal_to" | "is_not_equal_to" | "is_greater_than" | "is_less_than" | "is_equal_or_greater_than" | "is_equal_or_less_than" | "is_empty" | "is_not_empty") //numbers
    | ("is" | "is_not" | "is_any_of" | "is_none_of" | "is_empty" | "is_not_empty") //single select
    | ("has_any_of" | "has_all_of" | "is_exactly" | "has_none_of" | "is_empty" | "is_not_empty") //multiple select/tag
    | ("is") //yes/no
    | ("is" | "is_not" | "is_before" | "is_on_or_before" | "is_on_or_after" | "is_empty" | "is_not_empty") //date
    | ("is" | "is_not" | "is_before" | "is_on_or_before" | "is_on_or_after" | "is_empty" | "is_not_empty" | "is_overdue" | "is_not_overdue") //due date
    | ("file_name_contains" | "file_type_is" | "is_empty" | "is_not_empty") //Files & Images
    | (
        "contains" | "not_contains" | "has_any_of" //(array of record ids)
        | "has_all_of" //(array of record ids)
        | "is_exactly" //(array containing single record id)
        | "has_none_of" //(array of record ids)
        | "is_empty" //(pass null as value)
        | "is_not_empty" //(pass null as value))
    ) //linked record
    | ("is_empty" | "is_not_empty") //Smartdoc, checklist

    value: (string | number | string[])
}
interface FilterBody {
    "filter": {
        "operator": "and" | "or",
        "fields": filterElement[],
    }
}

interface ExistingRecord {
    id: string;
    [slug: string]: unknown
};
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

    async updateRecord(tableID: string, recordID: string, record: { [slug: string]: any }) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/${recordID}/`;

        const body = record;
        const response = await fetch(url, {
            method: "PATCH",
            headers: this.requestHeaders,
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new Error(response.status + " " + response.statusText);

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

    async getRecordsByFieldValues(tableID: string, fieldSlug: string, fieldValues: unknown[]) {
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

        const response = await fetch(url, {
            method: "POST",
            headers: this.requestHeaders,
            body: JSON.stringify(body)
        });

        if (!response.ok) throw new Error(response.status + " " + response.statusText);

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

        if (!response.ok) throw new Error(response.status + " " + response.statusText);
        const result = await response.json();
        return result.items;
    }

    async bulkUpdateRecords(
        tableID: string,
        records: ExistingRecord[],
    ) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/bulk/`;

        const body = { items: records };
        const response = await fetch(url, {
            method: "PATCH",
            headers: this.requestHeaders,
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            console.log(await response.text());
            throw new Error(response.status + " " + response.statusText);
        }

        const result = await response.json();
        return result;
    }

    async bulkAddNewRecords(records: Record<string, unknown>[], tableID: string) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/bulk/`;

        const body = { items: records };
        const response = await fetch(url, {
            method: "POST",
            headers: this.requestHeaders,
            body: JSON.stringify(body),
        });

        console.log(response.status + " " + response.statusText);

        if (!response.ok) throw new Error(response.status + " " + response.statusText);


        const result = await response.json();
        return result;
    }

    async addNewRecord(record: Record<string, unknown>, tableID: string) {
        const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: this.requestHeaders,
                body: JSON.stringify(record),
            });

            console.log(response.status + " " + response.statusText);
            if (!response.ok) throw new Error(response.status + " " + response.statusText);

            const result = await response.json();
            return result;

        } catch (err) { console.log(err); }
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

        if (!response.ok) throw new Error(response.status + " " + response.statusText);

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