import { ukPostalCodePattern } from "./RHI/getAccountDetails";

export const SMARTSUITE_HEADERS = { "Authorization": process.env.SMARTSUITE_KEY as string, "Account-Id": "s5ch1upc" };

export interface LoginRecord extends ExistingRecord {
    s362676897: "Authorised Signatory" | "Additional User";
    title: string; "sb4e5173b6": string;
}

export interface NewRecord {
    [key: string]: unknown;
}

export interface AddressField {
    location_address?: string;
    location_address2?: string;
    location_city?: string;
    location_state?: string;
    location_zip?: string;
    location_country?: string;
    location_latitude?: string;
    location_longitude?: string;
}

export interface RHIRecord extends ExistingRecord {
    //TODO: add additional fields
}

export interface FullNameField {
    first_name: string;
    middle_name: string;
    last_name: string;
}

export interface AccountRecord extends ExistingRecord {
    title?: string; s27463de03?: string[]; se00b833bd?: string[];
    s94016b86e?: string; s5af20d21e?: FullNameField; sa82805803?: string; s898c7779e?: {
        "phone_country": "UK",
        "phone_number": string
    }; s906ceac06?: AddressField
}

export const loginsTable = {
    id: "65e37da7f8428f036fd99785", fields: {
        Username: "title",
        "First Created": "first_created",
        "Last Updated": "last_updated",
        "Followed by": "followed_by",
        "Open Comments": "comments_count",
        "Auto Number": "autonumber",
        Password: "sb4e5173b6",
        "Record ID (System Field)": "s949848d7e",
        "Password Correct": "s300305bbd",
        "🔽Comments🔽": "sf444dc534",
        "Login Type": "s362676897",
        Account: "s69317bdee",
        "RHI Record IDs (System Field)": "sdf91c49ec"
    }
};
export const accountsTable = {
    id: "64d155a9c71c81dc0b41d527", fields: {
        "Account Name": "title",
        "First Created": "first_created",
        "Last Updated": "last_updated",
        "Followed by": "followed_by",
        "Open Comments": "comments_count",
        "Auto Number": "autonumber",
        "ORG number": "s20a1cb3b6",
        Client: "sbf79625b1",
        RHIs: "skjrn9vl",
        "Additional Users": "s9b3c22274",
        "Record ID (System Field)": "sa91f18b97",
        "🔽Comments🔽": "sf444dc534",
        "Link to RHI Payments": "suf1q9sl",
        "AS Username": "s200891b35",
        "AS Password": "s716517628",
        Logins: "splq0phf",
        Count: "sb7e3ff7d9",
        "Account Address": "s906ceac06",
        "Company Phone": "s898c7779e",
        "Company Number": "sa82805803",
        "AS Name": "s5af20d21e",
        "AS Email": "s27463de03",
        "AS Job Title": "s94016b86e",
        "Remittance Email": "se00b833bd"
    }
};
export const RHIsTable = {
    id: "64d155a9c71c81dc0b41d52d", fields: {
        "RHI Number": "title",
        "Submission Status": "status",
        "First Created": "first_created",
        "Last Updated": "last_updated",
        "Followed by": "followed_by",
        "Open Comments": "comments_count",
        "Auto Number": "autonumber",
        "Accreditation Date": "s2e1875a9c",
        "QHLF (kWh)": "s788a692be",
        "RHI Account": "s366a5e476",
        Tags: "sed8818474",
        "Link to Fuel References": "svtw43sc",
        "RHI Installation Name": "s8f22568aa",
        Technology: "s4285e945a",
        Installation: "sj4xhegu",
        "Accreditation Status": "sf81a2f775",
        "Correctly Formatted RHI number (System Field)": "s305f616e7",
        "Application Submitted": "sb79716244",
        "Site Owner": "s0e7865f12",
        "Application Status": "saktmxc5",
        "Update Data": "sc402e67f5",
        "Thermal Capacity": "sd1c8007fa",
        "Record ID (System Field)": "sdada683b2",
        "Last Submitted": "s7a7a2ede6",
        "🔽Branch Comments🔽 (System Field)": "s9eacd797b",
        "🔼Branch Comments🔼 (System Field)": "s8e3e7b53c",
        "Link to RHI Submissions": "swox1akz",
        "🔼Comments🔼": "s21374e2f1",
        "🔽Comments🔽": "s74450684c",
        "Document Review": "sbc3cf68a7",
        "Link to Tasks": "s7uib8r9",
        "Name Plate Efficiency": "s4037fc899",
        "Sustainability Reporting": "s7a8a4d943",
        "Commissioning Date": "s594437604",
        "Number of boilers": "s030c8748d",
        "Boiler Manufacturer": "s42d018586",
        "Boiler Model": "s94038cbea",
        HH110: "sa112061bc",
        HH120: "s21e98e9b5",
        "Hot Water Meters": "sb249dfefd",
        "Steam Meters": "s76ea8502f",
        Location: "sb5c903c06",
        HK120: "s49e310a4c",
        "Last Submission": "s3ea6ec8f7",
        "RHI Start": "s1179e8b96",
        "Quarter ends": "s418ae4140",
        "AS Username": "sf8e7d9233",
        "AS Password": "sb28891359",
        "Latest Submitted PDS": "s3ea6ec8f7",
        "First Reading on Account": "s6jzhsk8",
        "Coefficient of Performance (COP)": "sbe757d43c",
        "Seasonal Performance Factor (SPF)": "sceb80d3b9",
    }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExistingRecord = { id: string;[slug: string]: unknown };

export class HTTPError extends Error {
    status: number;
    statusText: string;

    constructor(status: number, statusText: string, message?: string) {
        if (message) {
            super(`HTTP Error: ${status} - ${statusText} - ${message}`);
        } else {
            super(`HTTP Error: ${status} - ${statusText}`);
        }
        this.name = "HTTPError";
        this.status = status;
        this.statusText = statusText;
        this.message = message ?? "";
    }
}

export async function getRecordsByFieldValues(values: unknown[], fieldSlug: string, tableID: string) {
    const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/list/`;

    const body = {
        "filter": {
            "operator": "or",
            "fields": values.map(value => ({
                "field": fieldSlug,
                "comparison": "is",
                "value": value
            }))
        }
    };

    const response = await fetch(url, {
        method: "POST",
        headers: { ...SMARTSUITE_HEADERS, "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(body)
    });

    if (!response.ok) throw new HTTPError(response.status, response.statusText);

    const result = await response.json();
    return result.items;
}

export async function getAllRecords(tableID: string) {
    const url = `https://app.smartsuite.com/api/v1/applications/${tableID}/records/list/`;

    const body = {};

    const response = await fetch(url, {
        method: "POST",
        headers: { ...SMARTSUITE_HEADERS, "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(body)
    });

    if (!response.ok) throw new HTTPError(response.status, response.statusText);
    const result = await response.json();
    return result.items;
}

export type LoginInput = { loginID: string; };
export type AccountInput = { accountID: string; };
export type RHIInput = { rhiID: string; };
export function extractPostcodeFromAddress(address: string) {
    const addressLines = address.split(",");
    let postcode: string | undefined = undefined;
    ukPostalCodePattern.lastIndex = 0;
    for (let i = addressLines.length - 1; i >= 0; i--) {
        if (ukPostalCodePattern.test(addressLines[i])) {
            postcode = addressLines[i];
            addressLines.splice(i, 1);
            break;
        }
    }
    return { modifiedAddress: addressLines.map(line => line?.trim()).join(", "), postcode };
}

