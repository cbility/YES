import { Page } from 'puppeteer';
import * as cheerio from 'cheerio';
import { SubmissionData } from "./main.js";

export default async function getSubmissionDetails(page: Page, RHIName: string): Promise<SubmissionData[]> {

    let submissionsData: (SubmissionData & { submissionPageHtml?: string })[] = [];

    console.log(`Getting meter readings for ${RHIName}...`);

    await Promise.all([
        page.goto('https://rhi.ofgem.gov.uk/PeriodicData/SubmitPeriodicData.aspx'),
        page.waitForNavigation()
    ])

    await page.evaluate((RHINumber) => {
        // Find the select element
        const selectElement = document.querySelector('#FullWidthPlaceholder_FullWidthContentPlaceholder_ddlInstallation') as HTMLSelectElement;
        if (!selectElement) throw new Error(`RHI Selector element not found`);

        for (let option of Array.from(selectElement.options)) {
            if (option.text.startsWith(RHINumber)) {
                // Set the option as selected
                selectElement.value = option.value;
                selectElement.dispatchEvent(new Event('change'));
                break;
            }
        }
    }, RHIName);

    await page.waitForNavigation();

    //download page content and load into cheerio
    const html = await page.content();
    const $ = cheerio.load(html);

    const periodicSubmissionTable = $('#FullWidthPlaceholder_FullWidthContentPlaceholder_gvTimeLines > tbody > tr');

    if (!periodicSubmissionTable || periodicSubmissionTable.length == 0) return [];

    //get submission dates and statuses
    periodicSubmissionTable.each((index, element) => {
        const submissionName = $(element).find('td:nth-child(1)').text().trim();
        if (submissionName.length > 0) {
            submissionsData.push({
                submissionDate: getSecondDateInLine(submissionName),
                submissionStatus: $(element).find('td:nth-child(2)').text().trim(),
                submissionAction: $(element).find('td:nth-child(3)').text().trim(),
                meterInformation: [],
                eho: undefined,
                payment: undefined,
            });
        }
    })

    //get submission page details
    for (let submissionIndex = 1; submissionIndex < submissionsData.length; submissionIndex++) { //exclude index 0 table headers
        process.stdout.write('\r' + `${submissionIndex + 1}/${submissionsData.length}`);
        if (submissionsData[submissionIndex].submissionStatus !== "Approved" &&
            submissionsData[submissionIndex].submissionStatus !== "Submitted" &&
            submissionsData[submissionIndex].submissionStatus !== "In Review") continue; //don't include non submitted data

        const submissionDetailsLink = await page.$(`#FullWidthPlaceholder_FullWidthContentPlaceholder_gvTimeLines_lnkAction_${submissionIndex}`);
        if (!submissionDetailsLink) throw new Error(`Submission details link for index ${submissionIndex} not found`);
        //go to submission details page
        await submissionDetailsLink.click();
        await page.waitForNavigation();
        submissionsData[submissionIndex].submissionPageHtml = await page.content(); //get page data for later synchronous processing
        //got back to submission list page
        const backButton = await page.$('#FullWidthPlaceholder_FullWidthContentPlaceholder_btnBackvwSubmission2');
        if (!backButton) throw new Error(`Back button not found for index ${submissionIndex}`);
        await backButton.click();
        await page.waitForNavigation();
    }
    console.log('\nProcessing submission details...');

    //process submission page details
    for (let submissionIndex = 0; submissionIndex < submissionsData.length; submissionIndex++) {
        const submissionPageHtml = submissionsData[submissionIndex].submissionPageHtml;
        if (submissionPageHtml === undefined) continue;

        const $ = cheerio.load(submissionPageHtml);

        //get payment and eho
        const ehoElement = $('#FullWidthPlaceholder_FullWidthContentPlaceholder_txtEHO');
        if (ehoElement.length > 0 && ehoElement.attr('value')) submissionsData[submissionIndex].eho = parseInt(ehoElement.attr('value')!);
        const paymentElement = $('#FullWidthPlaceholder_FullWidthContentPlaceholder_txtPaymentValue');
        if (paymentElement.length > 0 && paymentElement.attr('value')) submissionsData[submissionIndex].payment = parseInt(paymentElement.attr('value')!);

        //get meter reading info
        const meterReadingTableRows = $('#FullWidthPlaceholder_FullWidthContentPlaceholder_gvMeters > tbody > tr');
        meterReadingTableRows.each((meterIndex, rowElement) => {
            const reading = $(rowElement).find('input[name^="ctl00$ctl00$FullWidthPlaceholder$FullWidthContentPlaceholder$gvMeters$ctl"]').val();
            const cells = $(rowElement).find('td');
            if (cells.length > 0) {
                const label = cells.eq(0).text().trim();
                const serial = cells.eq(1).text().trim();
                const description = cells.eq(2).text().trim();
                const reading = $(rowElement).find('input[name^="ctl00$ctl00$FullWidthPlaceholder$FullWidthContentPlaceholder$gvMeters$ctl"]').val();
                submissionsData[submissionIndex].meterInformation!.push({
                    label,
                    serial,
                    description,
                    reading: parseInt(reading as string),
                })
            }
        })
    }
    const returnData: SubmissionData[] = submissionsData as SubmissionData[];
    return returnData;
}



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