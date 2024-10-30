import { Page } from "puppeteer-core";

export default async function logOut(page: Page): Promise<void> {
    const maxRetries = 5;
    for (let retries = 0; retries < maxRetries; retries++) {
        try {
            const logoutButton = await page.$('#ctl00_hprTopNavigation');
            if (!logoutButton) throw new Error("Logout button not found");
            await logoutButton.click();
            await page.waitForNavigation();
            const confirmLogoutButton = await page.$('#ctl00_ContentPlaceHolder_btnLogoutYes');
            if (!confirmLogoutButton) throw new Error("Confirm logout button not found");
            await Promise.all([confirmLogoutButton.click(),
            page.waitForNavigation()]);
            return;
        }
        catch (err) {
            console.log(err);
            console.log(`Logout attempt ${retries + 1}/${maxRetries} Failed`, err);
        }
    }
    throw new Error("Logout Failed");
}
