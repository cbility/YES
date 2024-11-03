import { Page } from "puppeteer-core";
import * as cheerio from "cheerio";

export default async function getPendingTransfers(page: Page): Promise<{ rocsPending: any; regosPending: any; }> {
    //go to roc transfers page
    if (page.url() !== "https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/SchemeOptions.aspx?scheme=roc") {
        await page.goto("https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/SchemeOptions.aspx?scheme=roc", { waitUntil: "networkidle0" })
        await page.goto("https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/TransferRequestView.aspx?scheme=roc", { waitUntil: "networkidle0" });
    }
    const rocTransferHTML = await page.content();
    const roc$ = cheerio.load(rocTransferHTML)

    await page.goto("https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/SchemeOptions.aspx?scheme=rego", { waitUntil: "networkidle0" })
    await page.goto("https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/TransferRequestView.aspx?scheme=rego", { waitUntil: "networkidle0" });

    const regoTransferHTML = await page.content();
    const rego$ = cheerio.load(regoTransferHTML);

    const rocsPending = getPendingCertificates(roc$);
    const regosPending = getPendingCertificates(rego$);

    return { rocsPending, regosPending };
}

function getPendingCertificates($: cheerio.CheerioAPI): number {
    let totalCertificates = 0;
    // Select all rows in the table body (excluding the header row)
    $('tbody tr').each((index, element) => {
        // Select the specific cell in the "Certificates" column
        const certificatesText = $(element).find('td').eq(7).text().trim();
        // Parse the text as a number and add it to the total
        const certificatesNumber = parseInt(certificatesText, 10);
        if (!isNaN(certificatesNumber)) {
            totalCertificates += certificatesNumber;
        }
    });
    return totalCertificates;
}
