import { Page } from "puppeteer-core";
import * as cheerio from "cheerio";

export default async function getAccountCertificates(page: Page) {
    //go to certificates page
    if (page.url() !== "https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/default.aspx") {
        await page.goto("https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/default.aspx", { waitUntil: "networkidle0" });
    }
    const certificatesHTML = await page.content();
    const certs$ = cheerio.load(certificatesHTML);

    const rocRow = certs$('#ctl00_ContentPlaceHolder_gvCertificates > tbody > tr:contains("ROC")');
    const rocsTradeable = rocRow.length > 0 ? +rocRow.find('td').eq(1).text() : 0;
    const regoRow = certs$('#ctl00_ContentPlaceHolder_gvCertificates > tbody > tr:contains("REGO")');
    const regosTradeable = regoRow.length > 0 ? +regoRow.find('td').eq(1).text() : 0;
    return { rocsTradeable, regosTradeable };
}