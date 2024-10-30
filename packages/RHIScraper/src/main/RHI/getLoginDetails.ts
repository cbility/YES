import tables from "../../../../SmartSuite/dist/tables.js";
import { Page } from "puppeteer-core";
import { RecordFromTableID } from "../../../../SmartSuite/src/SmartSuiteAPIHandler.js";

const { RHILoginsTable } = tables;

export default async function getLoginDetails(originalLoginRecord: RecordFromTableID<typeof RHILoginsTable.id>, page: Page): Promise<Update<RecordFromTableID<typeof RHILoginsTable.id>>> {

    const loginRecord: Update<RecordFromTableID<typeof RHILoginsTable.id>> = {
        [RHILoginsTable.structure["Login Type"].slug]: "FrLDR", //undetermined
        id: originalLoginRecord.id,
        application_id: originalLoginRecord.application_id,
    }

    const updatePasswordLink = await page.$("#SecondaryPlaceHolder_rptLeftNavigation_hlnkLeftNav_2");
    //account is AS if option to update password is available
    if (updatePasswordLink) {
        loginRecord[RHILoginsTable.structure["Login Type"].slug] = "eRuOB" //authorised signatory
    } else {
        loginRecord[RHILoginsTable.structure["Login Type"].slug] = "fIKh7"; //additional user
    }
    return loginRecord;
}