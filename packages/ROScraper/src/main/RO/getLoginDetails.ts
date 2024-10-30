import * as cheerio from "cheerio";
import { Page } from "puppeteer-core"

export default async function getLoginDetails(page: Page) {

    //go to login details page
    if (page.url() !== "https://renewablesandchp.ofgem.gov.uk/Account/EditDetails.aspx") {
        await page.goto("https://renewablesandchp.ofgem.gov.uk/Account/EditDetails.aspx", { waitUntil: "networkidle0" });
    }

    const userHTML = await page.content();
    const $ = cheerio.load(userHTML);

    const registeredUserFirstName = ($("#ctl00_ContentPlaceHolder_ContactDetails_txtFirstName").val() as string)?.trim();
    const registeredUserLastName = ($("#ctl00_ContentPlaceHolder_ContactDetails_txtLastName").val() as string)?.trim();
    const registeredEmail = ($("#ctl00_ContentPlaceHolder_ContactDetails_txtEmailAddress").val() as string)?.trim();
    const registeredPhone = ($("#ctl00_ContentPlaceHolder_ContactDetails_txtTelNo").val() as string)?.trim();

    //login is for superuser if account details are available to view

    await page.goto("https://renewablesandchp.ofgem.gov.uk/Account/EditOrganisationDetails.aspx?mode=edit", { waitUntil: "networkidle0" });

    const genRefElem = await page.$("#ctl00_ContentPlaceHolder_txtOrgRef");
    const loginType = genRefElem ? "Superuser" : "Additional User"


    const updatedLoginRecord = {
        loginType,
        registeredEmail,
        registeredPhone,
        registeredUserLastName,
        registeredUserFirstName,
    }

    return updatedLoginRecord;
}