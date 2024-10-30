import tables from "../../../../SmartSuite/dist/tables.js";
import { RecordFromTableID } from "../../../../SmartSuite/src/SmartSuiteAPIHandler.js";

const { ROLoginsTable } = tables;

export default async function logInUser(loginRecord: RecordFromTableID<typeof ROLoginsTable.id>, page: any): Promise<void> {

    const username = loginRecord[ROLoginsTable.structure.Username.slug];
    const password = loginRecord[ROLoginsTable.structure.Password.slug];

    await page.goto('https://renewablesandchp.ofgem.gov.uk/', { waitUntil: "networkidle0" });
    const usernameField = await page.$('#txtUsername');
    await usernameField.type(username);
    const passwordField = await page.$('#txtPassword');
    await passwordField.type(password);
    const submitButton = await page.$('#btnSubmit');
    await Promise.all([submitButton.click(),
    page.waitForNavigation()]);
}

