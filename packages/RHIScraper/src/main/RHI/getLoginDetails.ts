import { loginsTable } from "../../../../SmartSuite/dist/tables.js";
import { Page } from "puppeteer-core";

export default async function getLoginDetails(originalLoginRecord: RHILoginRecord, page: Page): Promise<RHILoginRecord> {

    const loginRecord: RHILoginRecord = {
        [loginsTable.fields["Login Type"]]: "FrLDR", //undetermined
        id: originalLoginRecord.id,
        application_id: originalLoginRecord.application_id,
    }
    //const updatedLoginRecord: RHILoginRecord =
    const updatePasswordLink = await page.$("#SecondaryPlaceHolder_rptLeftNavigation_hlnkLeftNav_2");
    //account is AS if option to update password is available
    if (updatePasswordLink) {
        loginRecord[loginsTable.fields["Login Type"]] = "eRuOB" //authorised signatory
    } else {
        loginRecord[loginsTable.fields["Login Type"]] = "fIKh7"; //additional user
    }
    return loginRecord;
}