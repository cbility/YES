export default async function validateLogin(page): Promise<boolean> {

    try {
        const welcomeMessage = await page.$('#WelcomeAndLogoutPlaceHolder_lblWelcomeUser');
        const textContent = await page.evaluate((element: { textContent: any; }) => element.textContent, welcomeMessage);
        return textContent.slice(0, 7) === 'Welcome';
    }
    catch (err) {
        return false;
    }
}
