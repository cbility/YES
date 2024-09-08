import { Page } from "puppeteer-core";
import * as cheerio from "cheerio";
const PostcodesIO = require("postcodesio-client");
const postcodes = new PostcodesIO("https://api.postcodes.io");
import { RHIsTable } from "../../../../SmartSuite/dist/tables.js";
export default async function getRHIDetails(
    accountID: string,
    page: Page,
    shallow: boolean = false
): Promise<RHIRecord[]> {

    //go to accreditation
    await page.goto("https://rhi.ofgem.gov.uk/Accreditation/ApplyAccreditation.aspx?mode=13");

    const RHIRecords: RHIRecord[] = [];

    //get accreditation information and push to RHIRecords
    const accreditationSummaryHTML = await page.content();
    const summary$ = cheerio.load(accreditationSummaryHTML);
    const numRows = summary$(
        "#mainPlaceHolder_ContentPlaceHolder_gvEditOrViewAccredAppList > tbody > tr").length - 1;

    for (let tableRow = 2; tableRow <= numRows + 1; tableRow++) {
        const RHI: RHIRecord = await getRHIAccreditationDetails(tableRow, accountID, page, summary$, shallow);
        RHIRecords.push(RHI);
        await page.goto("https://rhi.ofgem.gov.uk/Accreditation/ApplyAccreditation.aspx?mode=13");
    }
    //go to periodic data
    await page.goto("https://rhi.ofgem.gov.uk/PeriodicData/SubmitPeriodicData.aspx");

    const RHIOptions = await page.evaluate(() => {
        const selectElement = document.querySelector(
            "#FullWidthPlaceholder_FullWidthContentPlaceholder_ddlInstallation") as HTMLSelectElement;
        const _options: { [key: string]: string } = {};
        if (selectElement === null) throw new Error("Element not found");
        Array.from(selectElement.options)
            .forEach(option => { _options[option.textContent?.trim() ?? ""] = option.value; });
        return _options;
    });

    //get periodic data information and update RHIRecords
    for (const RHI of RHIRecords) {
        if (RHI[RHIsTable.fields["Accreditation Status"]] == "Terminated"
            || RHI[RHIsTable.fields["Accreditation Status"]] == "Withdrawn") continue;

        await page.select("#FullWidthPlaceholder_FullWidthContentPlaceholder_ddlInstallation",
            RHIOptions[RHI.title + " | " + RHI[RHIsTable.fields["RHI Installation Name"]]]);

        await page.waitForNavigation();

        const PeriodicDataSubmissionHTML = await page.content();
        const { firstDateOnAccount, RHIStart, lastDate } = getSubmissionDates(PeriodicDataSubmissionHTML);
        RHI[RHIsTable.fields["Latest Submitted PDS"]] = lastDate?.toISOString().split("T")[0] ?? null;
        RHI[RHIsTable.fields["RHI Start"]] = RHIStart?.toISOString().split("T")[0] ?? null;
        RHI[RHIsTable.fields["First Reading on Account"]] = firstDateOnAccount?.toISOString().split("T")[0] ?? null;
        await page.goto("https://rhi.ofgem.gov.uk/PeriodicData/SubmitPeriodicData.aspx");
    }
    return RHIRecords;
}

async function getRHIAccreditationDetails(
    tableRow: number,
    accountID: string,
    page: Page,
    summary$: cheerio.CheerioAPI,
    shallow: boolean = false) {

    const RHI: Partial<RHIRecord> = {
        //id: "",
        [RHIsTable.fields["RHI Account"]]: [accountID],
        "sb5c903c06": undefined //initialize location
    };

    getBasicAccreditationDetail(RHI, tableRow, summary$);

    if (!shallow) { //get detailed accreditation information
        const viewDetailsButton = await page.$(
            `#mainPlaceHolder_ContentPlaceHolder_gvEditOrViewAccredAppList_btnViewAccredApp_${tableRow - 2}`);
        if (viewDetailsButton === null) throw new Error("Element viewDetailsButton not found");
        await Promise.all([
            page.waitForNavigation(),
            viewDetailsButton.click()
        ]);
        const accreditationDetailsHTML = await page.content();
        getExpandedAccreditationDetail(accreditationDetailsHTML, RHI);
        await getPostcodeLocation(RHI);
    }
    return RHI as RHIRecord;
}

async function getPostcodeLocation(RHI: Partial<RHIRecord>) {
    const postcode = (RHI[RHIsTable.fields["Location"]] as { location_zip: string })?.location_zip;
    if (postcode) {
        const postcodeData = await postcodes.lookup(postcode);
        if (postcodeData) {
            (
                RHI[RHIsTable.fields["Location"]] as { location_latitude: string }

            ).location_latitude = String(postcodeData.latitude);
            (
                RHI[RHIsTable.fields["Location"]] as { location_longitude: string }

            ).location_longitude = String(postcodeData.longitude);
        }
    }
}

function getExpandedAccreditationDetail(accreditationDetailsHTML: string, RHI: Partial<RHIRecord>) {
    const $ = cheerio.load(accreditationDetailsHTML);

    const accreditationSummaryTableRows = $(
        "#mainPlaceHolder_ContentPlaceHolder_gvAccredAppQuestionsAndAnswers > tbody > tr");

    accreditationSummaryTableRows.each((index, element) => {
        const rowID = $(element).find("td:nth-child(1)");

        switch (rowID.text().trim()) {
            case "HC110": {
                RHI[RHIsTable.fields["Commissioning Date"]] = convertToISODateString(
                    $(element).find("td:nth-child(3)").text());
                break;
            }
            case "HA120": {
                RHI[RHIsTable.fields["Thermal Capacity"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HH120": {
                RHI[RHIsTable.fields["HH120"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HA110": {
                RHI[RHIsTable.fields["Technology"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HH123-3": {
                RHI[RHIsTable.fields["QHLF (kWh)"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HA150": {
                RHI[RHIsTable.fields["Name Plate Efficiency"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HA160": {
                RHI[RHIsTable.fields["Sustainability Reporting"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HG122a-1": {
                RHI[RHIsTable.fields["Boiler Manufacturer"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HG123a-1": {
                RHI[RHIsTable.fields["Boiler Model"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HH110": {
                RHI[RHIsTable.fields["HH110"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HG121": {
                RHI[RHIsTable.fields["Number of boilers"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HI100-1": {
                RHI[RHIsTable.fields["Hot Water Meters"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HI100-2": {
                RHI[RHIsTable.fields["Steam Meters"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HK120": {
                RHI[RHIsTable.fields["HK120"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HF130": {
                RHI[RHIsTable.fields["Seasonal Performance Factor (SPF)"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HF120": {
                RHI[RHIsTable.fields["Coefficient of Performance (COP)"]] = $(element).find("td:nth-child(3)").text();
                break;
            }
            case "HC130": {
                const address: Partial<AddressFieldCell> = { "location_country": "United Kingdom" };
                switch ($(element).find("td:nth-child(3)").text()) { //is account address same as install address
                    case "Yes": {
                        accreditationSummaryTableRows.each((i, e) => {
                            const rID = $(e).find("td:nth-child(1)");
                            switch (rID.text().trim()) {
                                case "HM130": {
                                    address.location_address = $(e).find("td:nth-child(3)").text();
                                    break;
                                }
                                case "HM140": {
                                    address.location_address2 = $(e).find("td:nth-child(3)").text();
                                    break;
                                }
                                case "HM160": {
                                    address.location_city = $(e).find("td:nth-child(3)").text();
                                    break;
                                }
                                case "HM170": {
                                    address.location_state = $(e).find("td:nth-child(3)").text();
                                    break;
                                }
                                case "HM180": {
                                    address.location_zip = $(e).find("td:nth-child(3)").text();
                                    break;
                                }
                            }
                        });
                        break;
                    }
                    case "No": {
                        accreditationSummaryTableRows.each((i, e) => {
                            const rID = $(e).find("td:nth-child(1)");
                            switch (rID.text().trim()) {
                                case "HC150": {
                                    address.location_address = $(e).find("td:nth-child(3)").text();
                                    break;
                                }
                                case "HC160": {
                                    address.location_address2 = $(e).find("td:nth-child(3)").text();
                                    break;
                                }
                                case "HC180": {
                                    address.location_city = $(e).find("td:nth-child(3)").text();
                                    break;
                                }
                                case "HC190": {
                                    address.location_state = $(e).find("td:nth-child(3)").text();
                                    break;
                                }
                                case "HC140": {
                                    address.location_zip = $(e).find("td:nth-child(3)").text();
                                    break;
                                }
                            }
                        });
                        break;
                    }
                }
                let key: keyof AddressFieldCell;
                for (key in address) {
                    if (address[key] === undefined) throw new Error(`${key} not found in address for RHI ${RHI.title}`)
                }
                RHI[RHIsTable.fields["Location"]] = address as AddressFieldCell;
                break;
            }
        }
    });
}

function getBasicAccreditationDetail(RHI: Partial<RHIRecord>, tableRow: number, $: cheerio.CheerioAPI) {
    RHI.title = $(
        `#mainPlaceHolder_ContentPlaceHolder_gvEditOrViewAccredAppList > 
            tbody > tr:nth-child(${tableRow}) > td:nth-child(2)`)
        .text().trim();
    RHI[RHIsTable.fields["RHI Installation Name"]] = $(
        `#mainPlaceHolder_ContentPlaceHolder_gvEditOrViewAccredAppList >
             tbody > tr:nth-child(${tableRow}) > td:nth-child(3)`)
        .text().trim();
    //RHI[RHIsTable.fields['Application Submitted']] = {};
    RHI[RHIsTable.fields["Application Submitted"]] = convertToISODateString($(
        `#mainPlaceHolder_ContentPlaceHolder_gvEditOrViewAccredAppList >
                 tbody > tr:nth-child(${tableRow}) > td:nth-child(4)`)
        .text().trim());
    //RHI[RHIsTable.fields['Accreditation date']] = {};
    RHI[RHIsTable.fields["Accreditation Date"]] = convertToISODateString($(
        `#mainPlaceHolder_ContentPlaceHolder_gvEditOrViewAccredAppList >
                     tbody > tr:nth-child(${tableRow}) > td:nth-child(5)`)
        .text().trim());
    RHI[RHIsTable.fields["Application Status"]] = $(
        `#mainPlaceHolder_ContentPlaceHolder_gvEditOrViewAccredAppList >
                 tbody > tr:nth-child(${tableRow}) > td:nth-child(6)`)
        .text().trim();
    RHI[RHIsTable.fields["Accreditation Status"]] = $(
        `#mainPlaceHolder_ContentPlaceHolder_gvEditOrViewAccredAppList >
                     tbody > tr:nth-child(${tableRow}) > td:nth-child(7)`)
        .text().trim();
}

function convertToISODateString(dateString: string) {
    if (dateString.trim() === "") return null;
    const parts = dateString.split("/");
    if (parts.length !== 3) {
        throw new Error("Invalid date format");
    }
    // Rearrange the parts to form "YYYY-MM-DD" format
    const isoDateString = parts[2] + "-" + parts[1] + "-" + parts[0];
    return isoDateString;
}

function getSubmissionDates(PeriodicDateSubmissionHTML: string): {
    firstDateOnAccount: Date | null; //start date of first period on account
    RHIStart: Date | null //start date of Y1Q1
    lastDate: Date | null //last submission date
} {
    const $ = cheerio.load(PeriodicDateSubmissionHTML);
    const PDSRows = $("#FullWidthPlaceholder_FullWidthContentPlaceholder_gvTimeLines > tbody > tr");

    const firstPDSRow = PDSRows.length > 0 ? PDSRows[PDSRows.length - 1] : null;

    if (firstPDSRow === null) return { firstDateOnAccount: null, RHIStart: null, lastDate: null };

    const firstPDSRowText = $(firstPDSRow).find("td:nth-child(1)").text();
    //get first period start date on account (may not be the same as the RHI start)
    const firstDateOnAccount = getFirstDateInLine(firstPDSRowText);

    //get first quarter number, split by comma and remove 'PDS' from start
    const firstSubmissionQuarter = +firstPDSRowText.split(",")[1].slice(4);
    let RHIStart: Date | null = null;
    //get a quarter start date and use it to calculate RHI start date
    for (let rowsFromBottom = 2; rowsFromBottom < PDSRows.length; rowsFromBottom++) {
        const nextPDSRow = PDSRows[PDSRows.length - rowsFromBottom];
        const nextPDSRowText = $(nextPDSRow).find("td:nth-child(1)").text();
        const nextSubmissionQuarter: number | null = +nextPDSRowText.split(",")[1].slice(4);

        if (nextSubmissionQuarter === null) { break; } // if too few submissions set start date to null
        if (nextSubmissionQuarter === firstSubmissionQuarter) continue; //if quarter did not change continue

        const quarterStartDate = getFirstDateInLine(nextPDSRowText);
        const quarterYear = +nextPDSRowText.split(",")[0].slice(-2); //remove "Year"
        quarterStartDate.setFullYear(quarterStartDate.getFullYear() - (quarterYear - 1),
            quarterStartDate.getMonth() - (nextSubmissionQuarter - 1) * 3);

        RHIStart = quarterStartDate;
        break;
    }

    let lastDate: Date | null = null;
    /*find last submitted date from PDS.
    Cycles through PDS lines from top. If status is Submitted, Approved or In Review then gets the second
    date from the line (the submission date). If status is Partially Complete then checks the available action.
    If the action allows submission then gets the day before the first date in line (previous submission date).
    If the action allows view then gets the submission date. Lastly, if status is Partially Complete but With
    Participant and the Action is Edit gets previous submission date. In all other cases, skips to next submission.
    */
    PDSRows.each((index, PDSRow) => {
        const status = $(PDSRow).find("td:nth-child(2)").text().trim();
        const action = $(PDSRow).find("td:nth-child(3)").text().trim();
        const dateText = $(PDSRow).find("td:nth-child(1)").text();
        switch (status) {
            case "Submitted":
            case "Approved":
            case "In Review":
                lastDate = getSecondDateInLine(dateText);
                return false; //exit loop
            case "Partially Complete":
                switch (action) {
                    case "Record/Submit":
                        lastDate = getFirstDateInLine(dateText);
                        return false; //exit loop
                    case "View":
                        lastDate = getSecondDateInLine(dateText);
                        return false; //exit loop
                }
                break;
            case "Partially Complete but With Participant":
                if (action === "Edit") {
                    lastDate = getFirstDateInLine(dateText);
                    return false; //exit loop
                }
                break;
        }
    });
    return { firstDateOnAccount, RHIStart, lastDate };

    function getSecondDateInLine(dateText: string): Date {
        const dateRegex = /\b\d{1,2}\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}\b/g;
        //const dateText = $(PDSRow).find("td:nth-child(1)").text();
        const matches = dateText.match(dateRegex);

        if (matches && matches.length > 1) {
            const date = new Date(matches[1]);
            date.setHours(12); //set time to midday to avoid off by 1 errors caused by daylight saving
            // get UTC date to avoid off by one errors in summertime
            return date;

        } else {
            throw new Error(`Unable to find second date in ${dateText}`);
        }
    }

    function getFirstDateInLine(dateText: string): Date {
        const dateRegex = /\b\d{1,2}\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}\b/g;
        //const dateText = $(PDSRow).find("td:nth-child(1)").text();
        const matches = dateText.match(dateRegex);

        if (matches && matches.length > 0) {
            const date = new Date(matches[0]);
            date.setHours(12); //set time to midday to avoid off by 1 errors caused by daylight saving
            return date;
        } else {
            throw new Error(`Unable to find date in ${dateText}`);
        }
    }

}

