import { Page } from "puppeteer-core";
import * as cheerio from 'cheerio';
import getAccountCertificates from "./getAccountCertificates.js";

/**
 * Gets the account (or generator) name only.
 * Works for superuser and restricted accounts.
 * May not work if access to the Accreditation section is denied, or no stations are accredited.
 */
export default async function getReducedAccountDetails(page: Page): Promise<{ generatorName: string; generatorReference: string, rocsTradeable: number, regosTradeable: number }> {

    if (page.url() !== "https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/default.aspx") {
        await page.goto("https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/default.aspx",
            { waitUntil: "networkidle0" });
    }

    const { rocsTradeable, regosTradeable } = await getAccountCertificates(page);

    await page.goto("https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/TransferRequestCreate.aspx?scheme=roc",
        { waitUntil: "networkidle0" });
    try {
        //wait for generator ref to be available
        await page.waitForSelector("#ctl00_ContentPlaceHolder_lblTransferorReference");

        const transferROCPageHTML = await page.content();

        const $ = cheerio.load(transferROCPageHTML)
        const generatorName = $("#ctl00_ContentPlaceHolder_lblTransferorName").text().trim();
        const generatorReference = $("#ctl00_ContentPlaceHolder_lblTransferorReference").text().trim();

        if (!generatorName || !generatorReference) throw new Error("Generator name or reference not found on page.");
        return { generatorName, generatorReference, rocsTradeable, regosTradeable };
    } catch (error) {
        throw new Error("Account name not available: " + error);
    }
}
