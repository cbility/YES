import { Page } from "puppeteer";

export default async function validateLogin(page: Page): Promise<boolean> {

    try {
        const welcomeMessage = await page.$('#WelcomeAndLogoutPlaceHolder_lblWelcomeUser');
        const textContent = await page.evaluate((element) => element?.textContent, welcomeMessage);
        return textContent?.slice(0, 7) === 'Welcome';
    }
    catch (err) {
        return false;
    }
}
