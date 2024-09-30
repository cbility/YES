////////////////////SETUP CODE////////////////////////////////////////////

//export { } //required for compiler
import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js"
if (process.env.NODE_ENV !== "production") {
    await bootstrapEnvironment();
} //get env vars for testing
const input = { // input for testing
    termDays: 30,
    clientID: "8028732",
    invoiceName: "Q00303 IRM",
    currentDate: "2024-07-30",
    issueDate: null,
    invoiceNumber: "test1",
    paymentTerms: "Items with a set price are subject to an initial charge of 50% of the quoted price, invoiced when you have accepted the quote. We will not begin working on your project until this initial invoice has been issued and paid. The remaining balance will be invoiced on submission of your work. If the net total price does not exceed £200 the initial invoice will be for 100% of the quoted price.<br><br><b>Travel Costs</b><br>Free if journey is one hour or less from our office. Otherwise 45p per mile plus £35 per additional hour of travelling time.<br><br>Please note; we cannot be held responsible for issues where the government's guidance is unclear or where the government changes how they respond over time.<br><br>Our advice cannot be treated as legal advice and should be seen as a guide to current best practice only.,<br><br>Our preferred payment is by BACS transfer to:<br>ENERGY SOURCE LTD<br>Co-operative bank<br>Sort code: 08-92-99<br>Account number: 69 54 73 84",
    items: [{ "id": "66f3d62574c7880c44e01228", "title": "000005 24ROE1051S | 000010 |  J & C Wilson", "ranking": { "default": "aaaaaacvzc" }, "autonumber": 5, "s0798c890a": "Renewable Obligation Estimated Data Case - Simple", "s3283e060e": ["66cf585cd60bf65e2387be64"], "s39d86bc60": "75.00", "s3f6f61f8f": [["6571972a81ca1761d3265dc0"]], "s40e168fa8": "Renewable Obligation Estimated Data Case - Simple", "s8237ed3c2": ["655cb6e12f5e40dd41a37fb7"], "s8beba3f09": null, "s8fa8b8c1f": "000005 24ROE1051S | 000010 |  J & C Wilson", "s99c6fcaf3": "000005 24ROE1051S", "s9d5e870b7": false, "s9f81ff287": [["66cf585cd60bf65e2387be64"]], "sa7459b49d": "75.00", "sad48077d4": "90.00", "sc07bde245": "QZi37", "sc136d4fd2": ["6571972a81ca1761d3265dc0"], "sd7e25bbc0": null, "see55dccb4": [["6571972a81ca1761d3265dc0"]], "sf48a9e61b": "75.000000", "sf5556356c": ["64ccfc9ffb0d3586da07490d"], "followed_by": [], "deleted_date": { "date": null }, "last_updated": { "by": "64ccfc9ffb0d3586da07490d", "on": "2024-09-25T10:53:21.838000Z" }, "first_created": { "by": "64ccfc9ffb0d3586da07490d", "on": "2024-09-25T09:21:41.975000Z" }, "application_id": "6694d6507c3ca20d6ce68d9e", "comments_count": 0, "application_slug": "skx593nz" }, { "id": "66f3f0bd5acb646dca2802c3", "title": "000006 24EDC103 | 000010 |  J & C Wilson", "ranking": { "default": "aaaaaadkts" }, "autonumber": 6, "s0798c890a": "RHI Estimated Data Case", "s3283e060e": ["663101f01b60a7947018aeeb"], "s39d86bc60": "0.00", "s3f6f61f8f": [["6571972a81ca1761d3265cd7"]], "s40e168fa8": "", "s8237ed3c2": ["655cb6e12f5e40dd41a37fb7"], "s8beba3f09": null, "s8fa8b8c1f": "000006 24EDC103 | 000010 |  J & C Wilson", "s99c6fcaf3": "000006 24EDC103", "s9d5e870b7": true, "s9f81ff287": [["663101f01b60a7947018aeeb"]], "sa7459b49d": "0.00", "sad48077d4": "0.00", "sc07bde245": "F1Axo", "sc136d4fd2": ["6571972a81ca1761d3265cd7"], "sd7e25bbc0": "85.00", "see55dccb4": [["6571972a81ca1761d3265cd7"]], "sf48a9e61b": null, "sf5556356c": ["64ccfc9ffb0d3586da07490d"], "followed_by": [], "deleted_date": { "date": null }, "last_updated": { "by": "64ccfc9ffb0d3586da07490d", "on": "2024-09-25T11:15:09.420000Z" }, "first_created": { "by": "64ccfc9ffb0d3586da07490d", "on": "2024-09-25T11:15:09.420000Z" }, "application_id": "6694d6507c3ca20d6ce68d9e", "comments_count": 0, "application_slug": "skx593nz" }, { "id": "66f3f1f2f370b80e6ea378ac", "title": "000008 24AMD109 | 000010 |  J & C Wilson", "ranking": { "default": "aaaaaaeoiy" }, "autonumber": 8, "s0798c890a": "RHI amendment - Consolidate Meters. Change application from multiple metering to one meter and a heat loss calculation.", "s3283e060e": ["661681607ce9e89eeb100549"], "s39d86bc60": "680.00", "s3f6f61f8f": [["6571972a81ca1761d3265e73"]], "s40e168fa8": "RHI amendment - Consolidate Meters. Change application from multiple metering to one meter and a heat loss calculation.", "s8237ed3c2": ["655cb6e12f5e40dd41a37fb7"], "s8beba3f09": null, "s8fa8b8c1f": "000008 24AMD109 | 000010 |  J & C Wilson", "s99c6fcaf3": "000008 24AMD109", "s9d5e870b7": false, "s9f81ff287": [["661681607ce9e89eeb100549"]], "sa7459b49d": "0.00", "sad48077d4": "816.00", "sc07bde245": "F1Axo", "sc136d4fd2": ["6571972a81ca1761d3265e73"], "sd7e25bbc0": "85.00", "see55dccb4": [["6571972a81ca1761d3265e73"]], "sf48a9e61b": "680", "sf5556356c": ["64ccfc9ffb0d3586da07490d"], "followed_by": [], "deleted_date": { "date": null }, "last_updated": { "by": "65007644ae6c3b9aa4adf467", "on": "2024-09-25T11:20:21.560000Z" }, "first_created": { "by": "64ccfc9ffb0d3586da07490d", "on": "2024-09-25T11:20:18.568000Z" }, "application_id": "6694d6507c3ca20d6ce68d9e", "comments_count": 0, "application_slug": "skx593nz" }],
    APIKey: process.env.QUICKFILE_API_KEY as string,
}

import QuickFileAPIHandler from "../../../QuickFile/dist/QuickFileAPIHandler.js";
import { invoicesTable, SDPInvoiceItemsTable as itemsTable } from "../../../SmartSuite/dist/tables.js";

/////////////////////////////////PLY CODE///////////////////////////////

const QF = new QuickFileAPIHandler("6131405563",
    "84a82f71-d19c-4c5a-b50e-797126e504fb", //Ply Quote Drafter Application ID
    input.APIKey
);

const MS_IN_A_DAY = 24 * 60 * 60 * 1000;

// set price items
const invoiceItems = input.items.filter((item: Record<string, any>) => !item[itemsTable.structure["Charged Hourly?"].slug])?.map((item: Record<string, any>) => ({
    //filter for items not charged hourly
    "ItemID": 0,
    "ItemName": item[itemsTable.structure["Item Name"].slug],
    "ItemDescription": item[itemsTable.structure["Item Description"].slug],
    "ItemNominalCode": "4000",
    "Tax1": {
        "TaxName": "VAT",
        "TaxPercentage": 20.00,
    },
    "UnitCost": item[itemsTable.structure["Payment (Excluding VAT)"].slug],
    "Qty": 1
}));
// hourly charged items
const invoiceTasks = input.items.filter((item: Record<string, any>) => item[itemsTable.structure["Charged Hourly?"].slug])?.map((item: Record<string, any>) => ({
    //filter for items charged hourly
    "ItemID": 0,
    "ItemName": item[itemsTable.structure["Item Name"].slug],
    "TaskDescription": item[itemsTable.structure["Item Description"].slug],
    "ItemNominalCode": "4000",
    "Tax1": {
        "TaxName": "VAT",
        "TaxPercentage": 20.00,
    },
    "HourlyRate": item[itemsTable.structure["Hourly Rate"].slug],
    "Hours": item[itemsTable.structure["Hours"].slug]
}));

let invoiceLines = {
    ...(invoiceItems.length != 0 ? { // include set price items if not empty
        ItemLines: {
            ItemLine: invoiceItems
        }
    } : {}),
    ...(invoiceTasks.length != 0 ? { // include hourly items if not empty
        TaskLines: {
            TaskLine: invoiceTasks
        }
    } : {}),
}

const newQuote: InvoiceCreate = {
    InvoiceData: {
        InvoiceDescription: input.invoiceName,
        TermDays: input.termDays,
        Terms: input.paymentTerms,
        InvoiceLines: invoiceLines,
        InvoiceType: "INVOICE",
        ClientID: input.clientID,
        Currency: "GBP",
        Language: "en",
        Scheduling: {
            SingleInvoiceData: {
                IssueDate: input.issueDate ? input.issueDate : input.currentDate,
                InvoiceNumber: input.invoiceNumber,
            }
        }
    }
}



const createResponse = await QF.invoiceCreate(newQuote);


const invoiceGet: InvoiceGet = { InvoiceID: createResponse.Invoice_Create.Body.InvoiceID };
const quoteDetails = await QF.invoiceGet(invoiceGet);
const expiryDate = new Date(
    new Date(quoteDetails.Invoice_Get.Body.InvoiceDetails.IssueDate).getTime() + input.termDays * MS_IN_A_DAY
).toISOString().slice(0, 10); //exclude time
const result = { ...quoteDetails, expiryDate };

//return result;


//helper functions/////////////////////////////////////////

async function request(endpoint: string, body: RequestBody, method: "POST" = "POST") {  //remove export to use in Ply
    //async function request(endpoint, body, method = "POST") {
    const url = "https://api.quickfile.co.uk/1_2/" + endpoint;
    const SubmissionNumber = uniqueId();
    const accNumber = "6131405563";
    const applicationID = "84a82f71-d19c-4c5a-b50e-797126e504fb"; //Ply Quote Drafter Application ID
    const APIkey = input.APIKey;
    const header = {
        MessageType: "Request",
        SubmissionNumber,
        Authentication: {
            AccNumber: accNumber,
            ApplicationID: applicationID,
            MD5Value: md5Hash(accNumber + APIkey + SubmissionNumber)
        }
    }
    const requestBody = {
        payload: {
            Body: body,
            Header: header
        }
    }

    const response = await fetch(url, { body: JSON.stringify(requestBody), method });
    if (!response.ok) {
        throw new Error(response.status + " " + response.statusText + " " + await response.text());
    }
    const result = await response.json();
    return result;

}

function uniqueId() {
    //QF requests require a unique identifier, see https://api.quickfile.co.uk/
    const timestamp = new Date().getTime().toString(36);
    const randomPart = Math.random().toString(36).slice(2, 7);
    return timestamp + randomPart;
}

function md5Hash(data: string) {
    const MD5 = function (d: any) { var r = M(V(Y(X(d), 8 * d.length))); return r.toLowerCase() }; function M(d: any) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d: any) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d: any) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d: any, _: any) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d: any, _: any, m: any, f: any, r: any, i: any) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d: any, _: any, m: any, f: any, r: any, i: any, n: any) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d: any, _: any, m: any, f: any, r: any, i: any, n: any) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d: any, _: any, m: any, f: any, r: any, i: any, n: any) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d: any, _: any, m: any, f: any, r: any, i: any, n: any) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d: any, _: any) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d: any, _: any) { return d << _ | d >>> 32 - _ }
    return MD5(data);
}


