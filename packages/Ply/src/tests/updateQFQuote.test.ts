import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js"
import updateQFQuote from "../scripts/salesPipeline/updateQFQuote.js";
if (process.env.NODE_ENV !== "production") {
    await bootstrapEnvironment();
}

const input = { // input for testing
    APIKey: process.env.QUICKFILE_API_KEY as string,
    quoteID: "32992559",
    termDays: 30,
    clientID: "8028732",
    quoteName: "Q00303 IRM",
    hourlyRate: 85,
    currentDate: "2024-07-30",
    issueDate: "2024-07-30T00:00Z",
    minimumHours: 2,
    invoiceNumber: "test1",
    paymentTerms: "Items with a set price are subject to an initial charge of 50% of the quoted price, invoiced when you have accepted the quote. We will not begin working on your project until this initial invoice has been issued and paid. The remaining balance will be invoiced on submission of your work. If the net total price does not exceed £200 the initial invoice will be for 100% of the quoted price.<br><br><b>Travel Costs</b><br>Free if journey is one hour or less from our office. Otherwise 45p per mile plus £35 per additional hour of travelling time.<br><br>Please note; we cannot be held responsible for issues where the government's guidance is unclear or where the government changes how they respond over time.<br><br>Our advice cannot be treated as legal advice and should be seen as a guide to current best practice only.,<br><br>Our preferred payment is by BACS transfer to:<br>ENERGY SOURCE LTD<br>Co-operative bank<br>Sort code: 08-92-99<br>Account number: 69 54 73 84",
    items: [{
        "id": "66a760901b051078cf0cf85e", "title": "303 | test | IRM : Steam and Complex Systems", "status": { "value": "", "updated_on": null }, "ranking": { "default": "abqqyjpmxg" }, "s8ae4bmj": [], "sceijfhd": [], "szhxcchw": [], "autonumber": 743, "s12ffd1659": [["w06CA"]], "s20b2ac406": "1", "s217809efc": { "date": null, "include_time": false }, "s2761dae0a": [[{ "value": "8gjAo", "updated_on": "2024-07-28T13:29:30.618000Z" }]], "s30f4806c7": "Steam and Complex Systems", "s569b88c93": [[null]], "s5965dc855": [["0.00"]], "s5f064af81": "002", "s5f5d0899c": [], "s5fdf14c9f": "Unsent", "s6c2a26789": "66a760901b051078cf0cf85e", "s6d6f58d02": [[""]], "s6e4a23362": false, "s7a5606e60": true, "s7d2a25ddd": "0.00", "s7f98d6f4e": "https://energysource.quickfile.co.uk/sales/preview?invoiceID=", "s8e2914f3d": `•\tVisit site and carry out an inspection of the meter positions to ensure that they are fitted within manufacturers guidelines
•\tWrite an independent meter report to confirm meter details and positions, pipe work layout vs. schematic drawing, boiler details and eligible heat uses
•\tAnswer any queries from Ofgem during the application process
•\tAn external pipe Heat Loss Assessment (HLA) and schematic are not included within this service
•\tWhere Energy Source is not applying for the RHI on behalf of the client; the meter report will be sent directly to the client to submit themselves.
•\tWork with the installer to resolve any issues before finalising the IRMA report.
`, "s95ff0c392": [[["65cf389293075993f8d09e81"]]], "s9640ecb64": "980.00", "s9db9b7507": [[["64ccfc9ffb0d3586da07490d"]]], "s9f6ab85c5": true, "sa7b19abe9": "303 | test | IRM : Steam and Complex Systems", "sb782c2f07": "", "sbf9458ebe": ["66a647966b88b8d3ff84e90b"], "sc016de3ca": { "date": null, "include_time": false }, "sc647ed2c3": "IRMA", "sc65b92095": "66a647966b88b8d3ff84e90b", "sc6d3c3532": [[["66311c1d106474e99ee190f5"]]], "sc86ea09bb": "980.00", "sc949a50f6": ["65107680cc2aa6919ee5b4c0"], "sca1e1e984": "1", "scca9b3e53": [[true]], "sd4adbca96": "980.00", "sd9c00d85f": "IRM", "sd9c921c76": false, "se3e9eb5fa": { "to_date": { "date": null, "include_time": false }, "from_date": { "date": null, "include_time": false }, "is_overdue": false, "status_updated_on": null, "status_is_completed": false }, "sea2a31ee9": null, "sea2dc71ed": "", "secfbf283a": "303 IRM", "see124bc52": "IRM : Steam and Complex Systems", "sf61adfafa": true, "followed_by": [], "deleted_date": { "date": null }, "last_updated": { "by": "64ccfc9ffb0d3586da07490d", "on": "2024-07-29T09:27:44.058000Z" }, "first_created": { "by": "64ccfc9ffb0d3586da07490d", "on": "2024-07-29T09:27:44.058000Z" }, "application_id": "650168ce39fcf6ca2940a6fe", "comments_count": 0, "application_slug": "s2wrah3v"
    }]
}

const result = await updateQFQuote(input);
console.log(result);
