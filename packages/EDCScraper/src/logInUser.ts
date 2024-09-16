import { Page } from 'puppeteer';

export default async function logInUser(page: Page, username: string, password: string) {

    await page.goto('https://rhi.ofgem.gov.uk/')
    const usernameField = await page.$('#SecondaryPlaceHolder_RightColumnContentPlaceHolder_txtUserName');
    await usernameField?.type(username);
    const passwordField = await page.$('#SecondaryPlaceHolder_RightColumnContentPlaceHolder_txtPassword');
    await passwordField?.type(password);
    const logInButton = await page.$('#SecondaryPlaceHolder_RightColumnContentPlaceHolder_btnContinue');
    await logInButton?.click();
    await page.waitForNavigation();
}