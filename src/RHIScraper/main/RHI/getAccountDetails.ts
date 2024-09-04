import { AccountRecord } from "../globals";
import { accountsTable } from "../globals";
import { extractPostcodeFromAddress } from "../globals";
import { ElementHandle, Page } from "puppeteer-core";
import * as cheerio from "cheerio";

// eslint-disable-next-line max-len
export const ukPostalCodePattern = /\b(GIR 0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW])\s?[0-9][ABD-HJLNP-UW-Z]{2})\b/gi;


export default async function getAccountDetails(
    accountRecord: Omit<AccountRecord, "id">,
    page: Page): Promise<Omit<AccountRecord, "id">> {

    let viewAccountButton: ElementHandle<Element> | null = null;
    while (viewAccountButton === null) {
        await page.goto("https://rhi.ofgem.gov.uk/UserManagement/ManageAccount.aspx");
        viewAccountButton = await page.$("#mainPlaceHolder_ContentPlaceHolder_UserAccountManage_btnEditAccount");
    }
    await viewAccountButton.click();
    await page.waitForNavigation();

    const accountDetailsHTML = await page.content();

    const $ = cheerio.load(accountDetailsHTML);

    accountRecord.title =
        $("#accordion-default-content-1 > dl > div.govuk-summary-list__row > dd.govuk-summary-list__value")
            .text().replace("\n", "").trim();

    accountRecord[accountsTable.fields["Account Address"]] = {};

    const addressData: { modifiedAddress: string; postcode: string | undefined } = {
        ...extractPostcodeFromAddress($(
            "#accordion-default-content-2 > dl > div.govuk-summary-list__row > dd.govuk-summary-list__value")
            .text().trim())
    };

    // Assign the extracted values to the address object properties
    (accountRecord[accountsTable.fields["Account Address"]] as { location_address }).location_address =
        addressData.modifiedAddress;
    (
        accountRecord[accountsTable.fields["Account Address"]] as { location_zip }
    ).location_zip = addressData.postcode?.trim();

    (accountRecord[accountsTable.fields["Account Address"]] as { location_country }).location_country = "UK";

    accountRecord[accountsTable.fields["Company Phone"]] =
        [formatPhoneNumber(
            $("#accordion-default-content-3 > dl > div.govuk-summary-list__row > dd.govuk-summary-list__value")
                .text().replace("\n", "").trim())
        ];

    accountRecord[accountsTable.fields["Company Number"]] =
        [$("#accordion-default-content-5 > dl > div.govuk-summary-list__row > dd.govuk-summary-list__value")
            .text().replace("\n", "").trim()];

    accountRecord[accountsTable.fields["AS Name"]] = {};
    (accountRecord[accountsTable.fields["AS Name"]] as { first_name }).first_name =
        $("#accordion-default-content-6 > dl:nth-child(3) > div > dd.govuk-summary-list__value")
            .text().replace("\n", "").trim();
    (accountRecord[accountsTable.fields["AS Name"]] as { middle_name }).middle_name =
        $("#accordion-default-content-6 > dl:nth-child(7) > div > dd.govuk-summary-list__value")
            .text().replace("\n", "").trim();
    (accountRecord[accountsTable.fields["AS Name"]] as { last_name }).last_name =
        $("#accordion-default-content-6 > dl:nth-child(5) > div > dd.govuk-summary-list__value")
            .text().replace("\n", "").trim();

    accountRecord[accountsTable.fields["AS Email"]] =
        [$("#accordion-default-content-6 > dl:nth-child(13) > div > dd.govuk-summary-list__value")
            .text().replace("\n", "").trim()];

    accountRecord[accountsTable.fields["AS Job Title"]] =
        $("#accordion-default-content-6 > dl:nth-child(11) > div > dd.govuk-summary-list__value")
            .text().replace("\n", "").trim();

    accountRecord[accountsTable.fields["Remittance Email"]] =
        [$(`#mainPlaceHolder_ContentPlaceHolder_UserAccountManage_liRemittanceEmailReadonly >
             dd.govuk-summary-list__value`).text().replace("\n", "").trim()];

    return accountRecord;
}

function formatPhoneNumber(phoneNumber: string): string {
    if (phoneNumber.startsWith("+")) {
        // Phone number already has country code, return as is
        return phoneNumber;
    }

    if (phoneNumber.startsWith("0")) {
        // Remove leading 0 and assume the number is from the UK
        phoneNumber = phoneNumber.slice(1);
        return "+44" + phoneNumber;
    }

    // If no country code is provided and number doesn't start with 0, return with + at start
    return "+" + phoneNumber;
}


