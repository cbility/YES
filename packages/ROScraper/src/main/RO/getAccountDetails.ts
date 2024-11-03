import tables from "../../../../SmartSuite/dist/tables.js";
import { Page } from "puppeteer-core";
import * as cheerio from "cheerio";
import getAccountCertificates from "./getAccountCertificates.js";
import getPendingTransfers from "./getPendingTransfers.js";

const { ROAccountsTable } = tables;

export default async function getAccountDetails(page: Page) {

    //go to account details page. This is only available for superuser accounts
    if (page.url() !== "https://renewablesandchp.ofgem.gov.uk/Account/EditOrganisationDetails.aspx?mode=edit") {
        await page.goto("https://renewablesandchp.ofgem.gov.uk/Account/EditOrganisationDetails.aspx?mode=edit", { waitUntil: "networkidle0" });
    }

    const accountDetailsHTML = await page.content();
    const $ = cheerio.load(accountDetailsHTML);

    const organisationReference = ($("#ctl00_ContentPlaceHolder_txtOrgRef").val() as string)?.trim();

    const companyName = ($("#ctl00_ContentPlaceHolder_txtCompany").val() as string)?.trim();

    const companyRegistrationNumber = ($("#ctl00_ContentPlaceHolder_txtRegisteredNumber").val() as string)?.trim();

    const addressLine1 = ($("#ctl00_ContentPlaceHolder_AddressDetails_txtAddress1").val() as string)?.trim();
    const addressLine2 = ($("#ctl00_ContentPlaceHolder_AddressDetails_txtAddress2").val() as string)?.trim();
    const addressLine3 = ($("#ctl00_ContentPlaceHolder_AddressDetails_txtAddress3").val() as string)?.trim();
    const city = ($("#ctl00_ContentPlaceHolder_AddressDetails_txtTown").val() as string)?.trim();
    const county = ($("#ctl00_ContentPlaceHolder_AddressDetails_txtCounty").val() as string)?.trim();
    const country = ($("#ctl00_ContentPlaceHolder_AddressDetails_drpCountry").val() as string)?.trim();
    const postcode = ($("#ctl00_ContentPlaceHolder_AddressDetails_txtPostCode").val() as string)?.trim();

    const telephoneNumber = ($("#ctl00_ContentPlaceHolder_ContactDetails_txtTelNo").val() as string)?.trim();

    const { rocsTradeable, regosTradeable } = await getAccountCertificates(page);

    const { rocsPending, regosPending } = await getPendingTransfers(page);

    return {
        address: {
            addressLine1,
            addressLine2,
            city,
            county,
            postcode,
            country,
        },
        telephoneNumber,
        companyRegistrationNumber,
        companyName,
        organisationReference,
        regosTradeable,
        rocsTradeable,
        rocsPending,
        regosPending,
    }
}