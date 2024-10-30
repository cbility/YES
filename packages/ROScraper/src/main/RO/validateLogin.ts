import { Page } from "puppeteer-core";

export default async function validateLogin(page: Page): Promise<boolean> {

    try {
        const loginFailedMessage = await page.$('#lblNotLogIn');
        if (loginFailedMessage) return false;
        else return true;
    }
    catch (err) {
        return false;
    }
}
