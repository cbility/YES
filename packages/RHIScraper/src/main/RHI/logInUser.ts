import tables from "../../../../SmartSuite/dist/tables.js";
import { RecordFromTableID } from "../../../../SmartSuite/src/SmartSuiteAPIHandler.js";

const { RHILoginsTable } = tables;

export default async function logInUser(loginRecord: RecordFromTableID<typeof RHILoginsTable.id>, page: any): Promise<void> {

    const username = loginRecord[RHILoginsTable.structure.Username.slug];
    const password = loginRecord[RHILoginsTable.structure.Password.slug];

    await page.goto('https://rhi.ofgem.gov.uk/', { waitUntil: "networkidle0" })
    const usernameField = await page.$('#SecondaryPlaceHolder_RightColumnContentPlaceHolder_txtUserName');
    await usernameField.type(username);
    const passwordField = await page.$('#SecondaryPlaceHolder_RightColumnContentPlaceHolder_txtPassword');
    await passwordField.type(password);
    const logInButton = await page.$('#SecondaryPlaceHolder_RightColumnContentPlaceHolder_btnContinue');
    await logInButton.click();
    await page.waitForNavigation();
}

