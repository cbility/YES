
import { LoginRecord } from "../globals";
import { loginsTable } from "../globals";
import { Page } from "puppeteer-core";

export default async function getLoginDetails(loginRecord: LoginRecord, page: Page): Promise<LoginRecord> {

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