//TODO: restructure to remove smartsuite types from Ofgem portal functions
import { ElementHandle, Page } from "puppeteer-core";
import * as cheerio from "cheerio";
import PostcodesIO from "postcodesio-client";
const postcodes = new PostcodesIO("https://api.postcodes.io");
import tables from "../../../../SmartSuite/dist/tables.js";
import { RecordFromTableID } from "../../../../SmartSuite/src/SmartSuiteAPIHandler.js";

const { ROStationsTable } = tables;

export default async function getRODetails(
    page: Page,
): Promise<Omit<Update<RecordFromTableID<typeof ROStationsTable.id>>, "id">[]> {

    // Initialise station list
    const ROStationDetails: Omit<Update<RecordFromTableID<typeof ROStationsTable.id>>, "id">[] = [];

    //go to Approved Accreditation
    if (page.url() !== "https://renewablesandchp.ofgem.gov.uk/Accreditation/ListExistingAccreds.aspx") {
        await page.goto("https://renewablesandchp.ofgem.gov.uk/Accreditation/ListExistingAccreds.aspx", { waitUntil: "networkidle0" });
    }

    //get approved accreditation table
    const approvedAccreditationTable = await page.$$("#ctl00_ContentPlaceHolder_gvAccreditation > tbody > tr");
    await processAccreditationTable(approvedAccreditationTable, "odVBv" /* option for Approved */)

    // Go to Pending Accreditation
    await page.goto("https://renewablesandchp.ofgem.gov.uk/Accreditation/ListSubmittedAccredApps.aspx", { waitUntil: "networkidle0" });

    //get pending accreditation table
    const pendingAccreditationTable = await page.$$("#ctl00_ContentPlaceHolder_gvAccreditation > tbody > tr");
    await processAccreditationTable(pendingAccreditationTable, "WhgH3" /* option for Pending */);

    return ROStationDetails;

    async function processAccreditationTable(accreditationTable: ElementHandle<HTMLTableRowElement>[], accreditationStatus: "odVBv" | "WhgH3"): Promise<void> {
        for (let rowNumber = 1; rowNumber < accreditationTable.length; rowNumber++) {

            const stationAccreditationDetail = await getROAccreditationDetails(rowNumber, accreditationStatus, page);
            stationAccreditationDetail[ROStationsTable.structure["Accreditation Status"].slug] = accreditationStatus;

            const stationSubmissionDetail = await getROSubmissionDetails(stationAccreditationDetail[ROStationsTable.structure["Station Name"].slug] as string, page);

            const stationDetail = {
                ...stationAccreditationDetail,
                [ROStationsTable.structure["Oldest REGOs not issued"].slug]: { date: stationSubmissionDetail.firstUnexpiredREGOsNotIssued, include_time: false } as DateFieldCell,
                [ROStationsTable.structure["Oldest ROCs not issued"].slug]: { date: stationSubmissionDetail.firstUnexpiredROCsNotIssued, include_time: false } as DateFieldCell,
                [ROStationsTable.structure["Last Submission"].slug]: { date: stationSubmissionDetail.lastSubmission, include_time: false } as DateFieldCell,
            }

            ROStationDetails.push(stationDetail);
        }
    }
}

async function getROAccreditationDetails(
    tableRow: number,
    accreditationStatus: "odVBv" | "WhgH3",
    page: Page
) {
    const accreditationURL = accreditationStatus === "odVBv" ? "https://renewablesandchp.ofgem.gov.uk/Accreditation/ListExistingAccreds.aspx" :
        accreditationStatus === "WhgH3" ? "https://renewablesandchp.ofgem.gov.uk/Accreditation/ListSubmittedAccredApps.aspx" :
            "" as never;

    if (page.url() !== accreditationURL) {
        await page.goto(accreditationURL, { waitUntil: "networkidle0" });
    }

    const accreditationSummaryHTML = await page.content();
    const summary$ = cheerio.load(accreditationSummaryHTML);

    //initialise station details object
    const stationName = summary$(`#ctl00_ContentPlaceHolder_gvAccreditation > tbody > tr:nth-child(${tableRow + 1}) > td:nth-child(2)`).text().trim();;
    const generatorAccreditationDetails: Omit<Update<RecordFromTableID<typeof ROStationsTable.id>>, "id"> = {
        application_id: ROStationsTable.id,
        [ROStationsTable.structure["Station Name"].slug]: stationName,
    };

    const rowIndex = String(tableRow + 1).length === 1 ? "0" + String(tableRow + 1) : String(tableRow + 1)
    const viewButtonSelector = `#ctl00_ContentPlaceHolder_gvAccreditation_ctl${rowIndex}_${accreditationStatus === "odVBv" ? "lnkView" :
        accreditationStatus === "WhgH3" ? "myLink" :
            "" as never}`
    await Promise.race([
        page.waitForSelector(viewButtonSelector),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error(`View Accreditation button for row index ${rowIndex} did not load after 10 seconds`)), 10000)
        )
    ])
    const viewButton = await page.$(viewButtonSelector);
    if (viewButton === null) throw new Error(`View Accreditation button for row index ${rowIndex} not found`);
    await Promise.all([
        page.waitForNavigation(),
        viewButton.click()
    ]);
    const accreditationDetailsHTML = await page.content();
    getAccreditationDetail(accreditationDetailsHTML, generatorAccreditationDetails);
    const postcode = (generatorAccreditationDetails[ROStationsTable.structure["Location"].slug] as AddressFieldCell).location_zip!;
    try {
        const { location_longitude, location_latitude } = await getPostcodeLocation(postcode) ?? {};
        (generatorAccreditationDetails[ROStationsTable.structure["Location"].slug] as AddressFieldCell).location_longitude = location_longitude;
        (generatorAccreditationDetails[ROStationsTable.structure["Location"].slug] as AddressFieldCell).location_latitude = location_latitude;
    } catch (error) {
        console.error(error);
    }
    (generatorAccreditationDetails[ROStationsTable.structure["Statistics Last Updated"].slug] as DateFieldCell) = {
        date: new Date().toISOString(),
        include_time: true
    };

    return generatorAccreditationDetails

}

async function getPostcodeLocation(postcode: string): Promise<{ location_longitude: string; location_latitude: string; }> {
    if (postcode === "") throw new Error("Postcode not specified");
    const postcodeData: { longitude: string; latitude: string } | undefined = await postcodes.lookup(postcode);
    if (!postcodeData) throw new Error("Postcode not found");
    return { location_longitude: postcodeData.longitude, location_latitude: postcodeData.latitude };
}

async function getAccreditationDetail(accreditationDetailsHTML: string, stationObject: Omit<Update<RecordFromTableID<typeof ROStationsTable.id>>, "id">) {
    const $ = cheerio.load(accreditationDetailsHTML);

    let location_address: string | undefined = undefined,
        location_address2: string | undefined = undefined,
        location_city: string | undefined = undefined,
        location_country: string | undefined = undefined,
        location_state: string | undefined = undefined,
        location_zip: string | undefined = undefined;

    const accreditationDetail = $(
        "#ctl00_ContentPlaceHolder_dgAccreditation > tbody > tr");
    accreditationDetail.each((index, element) => {
        const rowID = $(element).find("td:nth-child(1)");
        const questionID = rowID.text().trim()
        switch (questionID) {
            case "QA201": {
                const date = convertToISODateString($(element).find("td:nth-child(3)").text().trim());
                stationObject[ROStationsTable.structure["Commissioning Date"].slug] = date ? {
                    date,
                    include_time: false
                } : null;
                break;
            }
            case "QA401": {
                stationObject[ROStationsTable.structure["DNC"].slug] = +$(element).find("td:nth-child(3)").text().trim();
                break;
            }
            case "QB201": {
                location_address = $(element).find("td:nth-child(3)").text().trim()
                break;
            }
            case "QB202": {
                location_address2 = $(element).find("td:nth-child(3)").text().trim()
                break;
            }
            case "QB204": {
                location_city = $(element).find("td:nth-child(3)").text().trim()
                break;
            }
            case "QB205": {
                location_state = $(element).find("td:nth-child(3)").text().trim()
                break;
            }
            case "QB206": {
                location_zip = $(element).find("td:nth-child(3)").text().trim()
                break;
            }
            case "QF410": {
                stationObject[ROStationsTable.structure["Number of Meters"].slug] = +$(element).find("td:nth-child(3)").text().trim();
                break;
            }
            case "QB300": {
                stationObject[ROStationsTable.structure["OS Reference"].slug] = $(element).find("td:nth-child(3)").text().trim();
                break;
            }
            case "QC600": {
                stationObject[ROStationsTable.structure["REGO Accredited"].slug] =
                    $(element).find("td:nth-child(3)").text().trim() === "Yes" ? true : false;
                break;
            }
            case "QB100": {
                stationObject[ROStationsTable.structure["Station Country"].slug] = $(element).find("td:nth-child(3)").text().trim();
                break;
            }
            case "QA301": {
                stationObject[ROStationsTable.structure["TIC"].slug] = +$(element).find("td:nth-child(3)").text().trim();
                break;
            }
            case "QC700": {
                stationObject[ROStationsTable.structure["Technology"].slug] = $(element).find("td:nth-child(3)").text().trim();
                stationObject[ROStationsTable.structure["Technology Text"].slug] = $(element).find("td:nth-child(3)").text().trim();
                break;
            }
            case "QC100": {
                stationObject[ROStationsTable.structure["Scheme"].slug] = $(element).find("td:nth-child(3)").text().trim();
                break;
            }
        }

    });
    stationObject[ROStationsTable.structure["Location"].slug] = {
        location_address,
        location_address2,
        location_city,
        location_country: "United Kingdom",
        location_state,
        location_zip
    } as AddressFieldCell
    try {
        const postcodeData = location_zip ? await getPostcodeLocation(location_zip) : undefined;
        (stationObject[ROStationsTable.structure["Location"].slug] as UpdateCell<AddressFieldCell>).location_latitude = postcodeData?.location_latitude;
        (stationObject[ROStationsTable.structure["Location"].slug] as UpdateCell<AddressFieldCell>).location_longitude = postcodeData?.location_longitude;
    } catch (error) {
        console.error(error);
    }
    return stationObject;
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

/** 
 * Get aggregate information on RO submissions and return as ISO date strings and numbers
 */
async function getROSubmissionDetails(stationName: string, page: Page): Promise<{
    firstUnexpiredREGOsNotIssued: string | null;
    firstUnexpiredROCsNotIssued: string | null;
    lastSubmission: string | null;
}> {
    if (page.url() !== "https://renewablesandchp.ofgem.gov.uk/OutputData/ViewOutputHistory.aspx") {
        await Promise.all([page.goto("https://renewablesandchp.ofgem.gov.uk/OutputData/ViewOutputHistory.aspx"),
        page.waitForNavigation()
        ])
    }
    //select station
    const stationSelectValue = await page.$eval(
        '#ctl00_ContentPlaceHolder_GeneratorStation1_ddlStation',
        (selectElement, stationName) => {
            const options = Array.from((selectElement as HTMLSelectElement).options);
            const matchingOption = options.find(option => option.text === stationName);
            return matchingOption ? matchingOption.value : null;
        },
        stationName
    );

    if (stationSelectValue) {
        await page.select('#ctl00_ContentPlaceHolder_GeneratorStation1_ddlStation', stationSelectValue);
    } else {
        throw new Error(`Option with text "${stationName}" not found.`);
    }

    let earliestROCNotIssuedDate: string = getOldestUnexpiredPeriod("RO").toISOString();
    let lastSubmissionDate: string | null = null;
    let earliestREGONotIssuedDate: string = getOldestUnexpiredPeriod("REGO").toISOString();

    //select earliest date where ROCs have not expired
    //view all submissions
    await page.select("#ctl00_ContentPlaceHolder_ddlFromDate", "01/04/2001 00:00:00");

    let filterResultsButton = await page.$("#ctl00_ContentPlaceHolder_btnFilterResults");
    if (!filterResultsButton) throw new Error("Filter Results button not found");
    await Promise.all([filterResultsButton.click(), page.waitForNavigation()]);
    try {
        let periodEndDateButton = await page.$("#ctl00_ContentPlaceHolder_dgOutputHistory > tbody > tr:nth-child(1) > th:nth-child(4) > a");
        if (!periodEndDateButton) throw new Error("No period End Date button found. There may be no output data for this station.");
        //sort results by period end date
        await Promise.all([periodEndDateButton.click(), page.waitForNavigation()]);
        periodEndDateButton = await page.$("#ctl00_ContentPlaceHolder_dgOutputHistory > tbody > tr:nth-child(1) > th:nth-child(4) > a");
        if (!periodEndDateButton) throw new Error("No period End Date button found. There may be no output data for this station.");
        await Promise.all([periodEndDateButton.click(), page.waitForNavigation()]);

        //get ROC not issued info
        const submissionHTML = await page.content();
        const rocDates = getEarliestNotIssuedDate(submissionHTML, "RO");
        earliestROCNotIssuedDate = rocDates.earliestNotIssuedDate;
        lastSubmissionDate = rocDates.lastSubmissionDate;
        const REGODates = getEarliestNotIssuedDate(submissionHTML, "REGO");
        earliestREGONotIssuedDate = REGODates.earliestNotIssuedDate;
    } catch (error) {
        console.log(error);
        console.log("No submissions found for " + stationName);
    }

    return {
        firstUnexpiredREGOsNotIssued: earliestREGONotIssuedDate,
        firstUnexpiredROCsNotIssued: earliestROCNotIssuedDate,
        lastSubmission: lastSubmissionDate,
    };

    function formatDateForSelector(year: number, month: number): string {
        const date = new Date(year, month - 1, 1); // Month is 0-indexed in JavaScript, so subtract 1
        return date.toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        }).replace(",", ""); // Removes comma between date and time
    }

    function getROCDateValue(): string {
        const currentDate = new Date();
        const monthDay = currentDate.toISOString().slice(5, 10); // Extracts MM-DD

        if (monthDay >= "09-01") {
            return formatDateForSelector(currentDate.getFullYear() - 1, 4); // Previous year, April
        } else {
            return formatDateForSelector(currentDate.getFullYear() - 2, 4); // Year before, April
        }
    }

    function getREGODateValue(): string {
        const currentDate = new Date();
        const monthDay = currentDate.toISOString().slice(5, 10); // Extracts MM-DD

        if (monthDay >= "08-01") {
            return formatDateForSelector(currentDate.getFullYear(), 4); // Current year, April
        } else {
            return formatDateForSelector(currentDate.getFullYear() - 1, 4); // Previous year, April
        }
    }

    /**
     * Get end date of earliest period where certificates have not issues and have not expired for the specified scheme.
     */
    function getEarliestNotIssuedDate(submissionPageHTML: string, scheme: "RO" | "REGO"): { earliestNotIssuedDate: string, lastSubmissionDate: string | null } {
        const $ = cheerio.load(submissionPageHTML);
        const lastSubmissionElem = $("#ctl00_ContentPlaceHolder_dgOutputHistory > tbody > tr:nth-child(2) > td:nth-child(4)");

        const oldestUnexpiredPeriod = getOldestUnexpiredPeriod(scheme);

        //get ISO string representing last submission or null if no submissions
        const lastSubmissionDateString = convertToISODateString(lastSubmissionElem.text().trim());

        // initialise earliest not issued date as month after latest submission where there are submissions on or after the oldest unexpired period
        // and as oldest unexpired period where there are no submissions on or after the oldest unexpired period
        let initialEarliestNotIssuedDate: Date = new Date();
        if (lastSubmissionDateString && new Date(lastSubmissionDateString) >= oldestUnexpiredPeriod) {
            initialEarliestNotIssuedDate = new Date(lastSubmissionDateString);
            initialEarliestNotIssuedDate.setMonth(initialEarliestNotIssuedDate.getMonth() + 1);
        } else { // if there are no submissions
            initialEarliestNotIssuedDate = oldestUnexpiredPeriod;
        }
        let earliestNotIssuedDate = initialEarliestNotIssuedDate.toISOString();

        //loop through output submissions
        $("#ctl00_ContentPlaceHolder_dgOutputHistory > tbody > tr").each((index, row) => {
            // skip header row
            if (index === 0) return;

            const currentPeriodEndString = convertToISODateString($(row).find('td').eq(3).text().trim());
            if (!currentPeriodEndString) return; //if there is no date in this submission skip to next
            const currentPeriodEnd = new Date(currentPeriodEndString);
            if (currentPeriodEnd < oldestUnexpiredPeriod) return; //if this submission is older than the oldest period where certificates have not expired then skip to next

            //get text in scheme column
            const schemeText = $(row).find('td').eq(1).text().trim();
            const totalOutput = $(row).find('td').eq(7).text().trim();

            //get flags for whether certificates are issued
            const groups = scheme === "RO" ?
                schemeText.match(/RO\(([^)]+)\)/g) || [] :
                scheme === "REGO" ?
                    schemeText.match(/REGO\(([^)]+)\)/g) || [] :
                    [];
            //check if any groups of this type of certificate for this month are "Issued"
            const issuedFound = groups.some(group => group === `${scheme}(Issued)`);
            // check if certificates are not issued and update date
            if (!(issuedFound || +totalOutput === 0)) {
                const earliestNotIssuedString = currentPeriodEnd.toISOString();
                earliestNotIssuedDate = earliestNotIssuedString;
            }
        })
        return { earliestNotIssuedDate, lastSubmissionDate: lastSubmissionDateString };
    }
    /**
     * Gets the oldest period from which certificates have not now expired, i.e. the April 14 months before the next 30 June
     *  for REGOs and the April 28 months before the next 31 August for ROCs
     * @param scheme "RO" or "REGO"
     * @returns a date object representing the last day of the oldest submission period for which certificates of the 
     * specified type have not expired.
     */
    function getOldestUnexpiredPeriod(scheme: "RO" | "REGO") {
        const now = new Date();
        //get largest number of months that certificates are valid for
        const validForMonths = scheme === "RO" ? 28 : // April to next again year's August
            scheme === "REGO" ? 14 : // April to next year's June
                -1 as never;
        //get index of month in which certificates have expired
        const expirationMonthIndex = scheme === "RO" ? 8 : //September
            scheme === "REGO" ? 6 : //July
                -1 as never;

        // Get year of the next expiration event
        const expirationYear = now.getMonth() >= expirationMonthIndex ? now.getFullYear() + 1 : now.getFullYear();
        //get last date on which all currently tradeable certificates have not expired

        const oldestUnexpiredPeriodEnd = new Date(expirationYear, expirationMonthIndex - validForMonths, 0);

        return oldestUnexpiredPeriodEnd;
    }

    function getMostRecentMonthEnd(): Date {
        const now = new Date();
        const mostRecentMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
        return mostRecentMonthEnd;
    }
}


