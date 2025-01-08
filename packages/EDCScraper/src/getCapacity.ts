import { Page } from 'puppeteer';
import * as cheerio from 'cheerio';

export default async function getCapacity(page: Page, rhiNumber: string): Promise<number> {

    await Promise.all([
        page.goto('https://rhi.ofgem.gov.uk/Accreditation/ApplyAccreditation.aspx?mode=13'),
        page.waitForNavigation()
    ]);

    let capacity: number;
    const accreditationSummaryHTML = await page.content();
    const $ = cheerio.load(accreditationSummaryHTML);
    const numRows = $(
        "#mainPlaceHolder_ContentPlaceHolder_gvEditOrViewAccredAppList > tbody > tr").length;

    for (let tableRow = 1; tableRow <= numRows; tableRow++) {
        //check if RHI number matches
        if ($(`#mainPlaceHolder_ContentPlaceHolder_gvEditOrViewAccredAppList > tbody > tr:nth-child(${tableRow}) > td:nth-child(2)`).text() === rhiNumber) {
            const viewDetailsButton = await page.$(`#mainPlaceHolder_ContentPlaceHolder_gvEditOrViewAccredAppList_btnViewAccredApp_${tableRow - 2}`);
            if (!viewDetailsButton) throw new Error('View Details button not found');
            await Promise.all([
                page.waitForNavigation(),
                viewDetailsButton.click()
            ]);
            //get capacity
            const capacityText: string | null = await page.evaluate(() => {
                // Get all the rows in the table
                const rows = document.querySelectorAll<HTMLTableRowElement>('#mainPlaceHolder_ContentPlaceHolder_gvAccredAppQuestionsAndAnswers > tbody > tr');
                let capacityElement: HTMLTableCellElement | undefined = undefined;
            
                // Loop through each row to find HA120
                rows.forEach(row => {
                    const firstColumnText = row.cells[0] ? row.cells[0].textContent?.trim() : ''; 
                    if (firstColumnText === 'HA120') {
                        capacityElement = row.cells[2] as HTMLTableCellElement; 
                    }
                });
                return capacityElement ? (capacityElement as HTMLTableCellElement).textContent: null;
            });
            
            
            if (!capacityText) throw new Error("Capacity not found on page");
            capacity = parseInt(capacityText);
            break;
        }
    }
    if (!capacity!) throw new Error("Capacity not set");
    return capacity;
}