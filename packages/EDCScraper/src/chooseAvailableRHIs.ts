import { Page } from 'puppeteer';
import askQuestion from './askQuestion.js';

export default async function chooseAvailableRHIs(page: Page): Promise<{ RHIName: string; index: number; }[]> {

    await page.goto('https://rhi.ofgem.gov.uk/PeriodicData/SubmitPeriodicData.aspx');

    const RHIOptions = await page.evaluate(() => {
        const selectElement = document.querySelector('select#FullWidthPlaceholder_FullWidthContentPlaceholder_ddlInstallation') as HTMLSelectElement;
        if (!selectElement) return [];

        return Array.from(selectElement.options).map(option => ({
            value: option.value,
            text: option.text,
            title: option.title
        }));
    });

    RHIOptions.shift(); //remove "Please select" option
    const rhiChoices: { RHIName: string, index: number }[] = RHIOptions.map((RHIOption, index) => ({ index: index + 1, RHIName: RHIOption.text }));

    //skip choice if there is only one option
    if (rhiChoices.length === 1) return rhiChoices;

    console.log("Available RHIs:");
    rhiChoices.forEach(choice => console.log(`${choice.index}: ${choice.RHIName}`));

    // Let user select RHIs
    let cont = false;
    let selectedChoices: { RHIName: string, index: number }[] = [];
    do {
        const userChoice = askQuestion("Enter the index of the first RHI you want to download the readings from: ");
        if ((parseInt(userChoice) - 1) in rhiChoices) {
            const index = parseInt(userChoice);
            selectedChoices.push({ index, RHIName: rhiChoices.find(rhiChoice => rhiChoice.index === index)!.RHIName });
            cont = true;
        } else console.log("Please select a number between " + rhiChoices[0].index + " and " + rhiChoices[rhiChoices.length - 1].index)
    } while (!cont);

    let chooseAnother = askQuestion("Would you like to choose another RHI? [y/n]: ");
    while (chooseAnother !== "y" && chooseAnother !== "n") {
        chooseAnother = askQuestion("Please enter 'y' for Yes or 'n' for No: ");
    }

    while (chooseAnother === 'y' && selectedChoices.length < rhiChoices.length) {
        const nextChoice = askQuestion("Enter the index of the next RHI you want to download the readings from: ");
        const index = parseInt(nextChoice);
        //try again if already selected
        if (selectedChoices.map(rhiChoice => rhiChoice.index).includes(index)) {
            console.log(index + " is already selected");
            continue;
        }
        //try again if out of range
        if (!((index - 1) in rhiChoices)) {
            console.log("Please select a number between " + rhiChoices[0].index + " and " + rhiChoices[rhiChoices.length - 1].index);
            continue;
        }
        selectedChoices.push({ index, RHIName: rhiChoices.find(rhiChoice => rhiChoice.index === index)!.RHIName });
        chooseAnother = askQuestion("Would you like to choose another RHI? [y/n]: ");

    }

    return selectedChoices;
}