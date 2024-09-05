import { loginsTable } from "../../../../SmartSuite/tables.js";
import { Page } from "puppeteer-core";

export default async function getLoginDetails(loginRecord: RHILoginRecord, page: Page): Promise<RHILoginRecord> {

    const updatePasswordLink = await page.$("#SecondaryPlaceHolder_rptLeftNavigation_hlnkLeftNav_2");
    //account is AS if option to update password is available
    if (updatePasswordLink) {
        loginRecord[loginsTable.fields["Login Type"]] = "Authorised Signatory";
    } else {
        loginRecord[loginsTable.fields["Login Type"]] = "Additional User";
        return loginRecord; //account name not available on AU logins
    }
    return loginRecord;
}