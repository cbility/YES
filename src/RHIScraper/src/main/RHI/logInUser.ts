import { loginsTable } from "../../../../SmartSuite/tables.js";

export default async function logInUser(loginRecord: RHILoginRecord, page: any): Promise<void> {

    const username = loginRecord[loginsTable.fields.Username];
    const password = loginRecord[loginsTable.fields.Password];

    await page.goto('https://rhi.ofgem.gov.uk/')
    const usernameField = await page.$('#SecondaryPlaceHolder_RightColumnContentPlaceHolder_txtUserName');
    await usernameField.type(username);
    const passwordField = await page.$('#SecondaryPlaceHolder_RightColumnContentPlaceHolder_txtPassword');
    await passwordField.type(password);
    const logInButton = await page.$('#SecondaryPlaceHolder_RightColumnContentPlaceHolder_btnContinue');
    await logInButton.click();
    await page.waitForNavigation();
}

