import { loginsTable } from "../../../../SmartSuite/dist/tables.js";
import { Page } from "puppeteer-core";

export default async function getLoginDetails(loginRecord: RHILoginRecord, page: Page): Promise<RHILoginRecord> {

    const updatePasswordLink = await page.$("#SecondaryPlaceHolder_rptLeftNavigation_hlnkLeftNav_2");
    //account is AS if option to update password is available
    if (updatePasswordLink) {
        loginRecord[loginsTable.fields["Login Type"]] = "eRuOB"; //authorised signatory
    } else {
        loginRecord[loginsTable.fields["Login Type"]] = "fIKh7"; //id for additional user option
        return loginRecord; //account name not available on AU logins
    }
    return loginRecord;
}