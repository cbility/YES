import { accountsTable } from "../../../../SmartSuite/dist/tables.js";
import { ElementHandle, Page } from "puppeteer-core";
import extractPostcodeFromAddress from "../extractPostcodeFromAddress.js";
import * as cheerio from "cheerio";

export default async function getAccountDetails(
    accountRecord: RHIAccountRecordUpdate,
    page: Page): Promise<RHIAccountRecordUpdate> {

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

    const addressData: { modifiedAddress: string; postcode: string | undefined } = {
        ...extractPostcodeFromAddress($(
            "#accordion-default-content-2 > dl > div.govuk-summary-list__row > dd.govuk-summary-list__value")
            .text().trim())
    };

    accountRecord[accountsTable.fields["Account Address"]] = {
        location_address: addressData.modifiedAddress,
        location_country: "UK",
        location_zip: addressData.postcode?.trim()
    } as AddressFieldCell;

    accountRecord[accountsTable.fields["Company Phone"]] =
        {
            phone_number: formatPhoneNumber(
                $("#accordion-default-content-3 > dl > div.govuk-summary-list__row > dd.govuk-summary-list__value")
                    .text().replace("\n", "").trim())
        } as Update<PhoneNumberFieldCell>;

    accountRecord[accountsTable.fields["Company Number"]] =
        [$("#accordion-default-content-5 > dl > div.govuk-summary-list__row > dd.govuk-summary-list__value")
            .text().replace("\n", "").trim()];

    accountRecord[accountsTable.fields["AS Name"]] = {
        first_name: $("#accordion-default-content-6 > dl:nth-child(3) > div > dd.govuk-summary-list__value")
            .text().replace("\n", "").trim(),
        middle_name: $("#accordion-default-content-6 > dl:nth-child(7) > div > dd.govuk-summary-list__value")
            .text().replace("\n", "").trim(),
        last_name: $("#accordion-default-content-6 > dl:nth-child(5) > div > dd.govuk-summary-list__value")
            .text().replace("\n", "").trim(),
    };

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


