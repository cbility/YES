import { ExistingRecord, loginsTable } from "../globals";

export default async function logInUser(loginRecord: ExistingRecord, page: any): Promise<void> {

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

