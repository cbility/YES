import { Page } from "puppeteer-core";
/**
 * Transfer certificates for a certain station and period to a certain transferee. 
 * A period will have certificates transferred if its first day is within the range specified by startDate and endDate, matched inclusively 
 * e.g. 01 March -> 01 April will include the March and April certificates, but 02 March ->01 April will only include April's certificates
 */
export default async function transferCertificates(page: Page, {
    stationName,
    certificateType,
    transfereeReference,
    startDate,
    endDate,
    userPassword
}: {
    stationName: string;
    certificateType: "roc" | "rego";
    transfereeReference: string;
    startDate: Date;
    endDate: Date;
    userPassword: string
}): Promise<{ certificatesTransferred: number; transferTime: Date; } | null> {


    //parse output date 
    const startDateValue = getStartDateValue(startDate);
    const now = new Date();
    const endDateValue = endDate < now ? getEndDateValue(endDate) : getEndDateValue(now);

    if (page.url() != `https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/TransferRequestCreate.aspx?scheme=${certificateType}`) {
        //navigate to certificate options page first to satisfy portal navigation
        await page.goto(`https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/SchemeOptions.aspx?scheme=${certificateType}`, { waitUntil: "networkidle0" });
        await page.goto(`https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/TransferRequestCreate.aspx?scheme=${certificateType}`, { waitUntil: "networkidle0" });
    }

    //select station
    const stationSelectValue = await page.$eval(
        '#ctl00_ContentPlaceHolder_ddlGeneratorName',
        (selectElement, stationName) => {
            const options = Array.from((selectElement as HTMLSelectElement).options);
            const matchingOption = options.find(option => option.text === stationName);
            return matchingOption ? matchingOption.value : null;
        },
        stationName
    );
    if (stationSelectValue) {
        await page.select('#ctl00_ContentPlaceHolder_ddlGeneratorName', stationSelectValue);
    } else {
        console.log(`No ${certificateType.toUpperCase()} certificates available to transfer for "${stationName}".`);
        return null;
    }

    //enter organisation reference
    const orgReferenceInput = await page.$("#ctl00_ContentPlaceHolder_txtTransfereeReference");
    if (!orgReferenceInput) throw new Error(`Could not find organisation reference input field while transferring certificates for ${stationName}`);
    await orgReferenceInput.type(transfereeReference);

    //enter issue date period start
    let inactiveElement = await page.$("#ctl00_ContentPlaceHolder_lblTransferor1");
    if (!inactiveElement) throw new Error(`Could not find inactive element field while transferring certificates for ${stationName}`);
    await inactiveElement.click();
    await page.waitForSelector("#ctl00_ContentPlaceHolder_txtDateFrom");
    const issueDateInput = await page.$("#ctl00_ContentPlaceHolder_txtDateFrom");
    if (!issueDateInput) throw new Error(`Could not find issue date start input field while transferring certificates for ${stationName}`);
    await issueDateInput.click({ clickCount: 3 }); // Select all existing text
    await issueDateInput.press('Backspace');       // Clear selected text
    await issueDateInput.type("01/01/2000");        //Type new date

    inactiveElement = await page.$("#ctl00_ContentPlaceHolder_lblTransferor1");
    if (!inactiveElement) throw new Error(`Could not find inactive element field while transferring certificates for ${stationName}`);
    await inactiveElement.click();

    //select transfer period start and end
    await page.select('#ctl00_ContentPlaceHolder_ddlOutputPeriodStartDate', startDateValue);
    try {
        await page.select('#ctl00_ContentPlaceHolder_ddlOutputPeriodEndDate', endDateValue);
    } catch (endDateSelectionError) {
        console.log(`End date value ${endDateValue} not found for ${stationName}, continuing with default`);
    }

    const applyFilterButton = await page.$("#ctl00_ContentPlaceHolder_btnApplyFilter");
    if (!applyFilterButton) throw new Error(`Apply Filter button not found for ${stationName}`);
    await applyFilterButton.click();
    await page.waitForNavigation();

    const selectAllButton = await page.$('#ctl00_ContentPlaceHolder_chkSelectAll');
    if (!selectAllButton) {
        console.log(`No ${certificateType.toUpperCase()}s found issued to ${stationName} within bounds of agreement, ${startDate} to ${endDate}`);
        return null;
    }
    await selectAllButton.click();
    await page.waitForNavigation();

    const submitButton = await page.$("#ctl00_ContentPlaceHolder_btnSubmit");
    if (!submitButton) throw new Error(`Submit button not found for station ${stationName}`);
    await submitButton.click();
    await page.waitForNavigation();

    const certificatesTransferred = await page.evaluate(() => {
        // Select all rows in the tbody (excluding the header row)
        const rows = document.querySelectorAll('tbody tr');
        // Check if there are rows present
        if (rows.length > 1) {
            // Get the last row (excluding header) and target the "Transfer" column (5th column)
            const lastRow = rows[rows.length - 1];
            const transferCell = lastRow.querySelector('td:nth-child(5)') as HTMLElement;
            return transferCell ? transferCell.innerText.trim() : null;
        }
        return null; // Return null if no rows are found
    });

    if (certificatesTransferred === null) throw new Error(`Cannot find number of certificates transferred for ${stationName}`)

    const proceedButton = await page.$("#ctl00_ContentPlaceHolder_btnContinue");
    if (!proceedButton) throw new Error(`Cannot find proceed button for ${stationName}`);
    await proceedButton.click();
    await page.waitForNavigation();

    const passwordField = await page.$("#ctl00_ContentPlaceHolder_VerifyUser1_txtPassword");
    if (!passwordField) throw new Error(`Cannot find password entry field for ${stationName}`);
    await passwordField.type(userPassword);
    const finalSubmitButton = await page.$("#ctl00_ContentPlaceHolder_VerifyUser1_btnSubmitPassword");
    if (!finalSubmitButton) throw new Error(`Cannot find submit button for ${stationName} after entering password`);
    await finalSubmitButton.click();
    await page.waitForNavigation();
    console.log(`${certificatesTransferred} ${certificateType.toUpperCase()}s transferred to ${transfereeReference} for ${stationName}}`);

    const backToTransferOptionsButton = await page.$("#ctl00_ContentPlaceHolder_btnOK");
    if (!backToTransferOptionsButton) throw new Error(`Cannot find back to transfer options button for ${stationName} after transferring certificates`);
    await backToTransferOptionsButton.click();
    await page.waitForNavigation();

    return { certificatesTransferred: +(certificatesTransferred ?? 0), transferTime: new Date() }
}

function getStartDateValue(date: Date) {
    //get date value for use in date select field

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `01/${month}/${year} 00:00:00`;
}

function getEndDateValue(date: Date) {
    // Get the last date of the month for use in date select field

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Get the current month (1-indexed)

    // Create a date for the first day of the next month
    const lastDayOfMonth = new Date(year, month, 0); // Passing 0 as day gives us the last day of the current month

    const day = String(lastDayOfMonth.getDate()).padStart(2, '0');
    const formattedMonth = String(lastDayOfMonth.getMonth() + 1).padStart(2, '0');

    return `${day}/${formattedMonth}/${year} 00:00:00`;
}


