import puppeteer, { Browser, Page } from 'puppeteer';
import XLSX from 'xlsx';
import getInitialInfo from './getInitialInfo.js';
import logInUser from "./logInUser.js";
import validateLogin from './validateLogin.js';
import chooseAvailableRHIs from './chooseAvailableRHIs.js';
import getSubmissionDetails from './getSubmissionDetails.js';
import askQuestion from './askQuestion.js';
import getCapacity from './getCapacity.js';

interface MeterInformation { label: string, serial: string, description: string, reading: number, previousReading: number };

export interface SubmissionData {
    submissionDate: Date,
    submissionYear: number | undefined,
    submissionQuarter: number | undefined,
    submissionStatus: string,
    submissionAction: string,
    meterInformation: MeterInformation[]
    eho: number | undefined,
    payment: number | undefined,
}[];


(async () => {

    try {

        //get save location, username and password from user
        const { saveName, username, password, } = await getInitialInfo();

        console.log("Opening browser...")

        const browser: Browser = await puppeteer.launch({
            headless: "shell", //use faster old headless mode
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page: Page = await browser.newPage();

        //log in to Ofgem portal
        await logInUser(page, username, password);

        //throw error for failed login
        if (await validateLogin(page)) {
            console.log("Login success for user " + username);
        } else {
            console.log("Login failed for user " + username + ". DO NOT RETRY WITH THE SAME PASSWORD - you could lock the account!");
            throw new Error(username + " login failed. DO NOT RETRY WITH THE SAME PASSWORD.")
        }

        //prompt user to select RHIs
        const userSelectedRHIs: { RHIName: string, index: number }[] = await chooseAvailableRHIs(page);

        const RHIs: { RHINumber: string, RHIName: string, submissions: SubmissionData[], capacity: number }[] = [];

        // Loop through the selected RHIs and gather data
        for (let index = 0; index < userSelectedRHIs.length; index++) {
            RHIs[index] = {
                RHINumber: userSelectedRHIs[index].RHIName.slice(0, 13),
                RHIName: userSelectedRHIs[index].RHIName,
                capacity: await getCapacity(page, userSelectedRHIs[index].RHIName.slice(0, 13)),
                submissions: await getSubmissionDetails(page, userSelectedRHIs[index].RHIName),
            }
        }
        //close browser 
        browser.close();

        //process data for output to excel
        let excelData: {
            sheetData: (string | number | Date | undefined)[][]
            sheetName: string
        }[] = RHIs.map(RHI => ({ sheetName: RHI.RHINumber, sheetData: [[]] }));

        for (let RHIIndex = 0; RHIIndex < RHIs.length; RHIIndex++) {
            //get meters, use label as PK to deduplicate entries. 
            const meters: MeterInformation[] = Object.values(Object.fromEntries(
                RHIs[RHIIndex].submissions.map(submission =>
                    submission.meterInformation.map(meter =>
                        [meter.label, meter]
                    )
                ).flat()
            ));

            excelData[RHIIndex].sheetData[0] = [RHIs[RHIIndex].RHIName, undefined, undefined, undefined, "Capacity (kWt):", RHIs[RHIIndex].capacity]
            excelData[RHIIndex].sheetData[1] = [undefined, undefined, "Date", "EHO (kWht)", ...meters.map((_) => undefined), "Payment (£)", "Load Factor"]//first row
            excelData[RHIIndex].sheetData[2] = [undefined, "Meter Label", undefined, undefined, ...meters.map(meter => meter.label)];
            excelData[RHIIndex].sheetData[3] = [undefined, "Meter Serial", undefined, undefined, ...meters.map(meter => meter.serial)];
            excelData[RHIIndex].sheetData[4] = [undefined, "Meter Description", undefined, undefined, ...meters.map(meter => meter.description)];
            excelData[RHIIndex].sheetData[5] = ["Year", "Quarter"];

            const numHeaderRows = 6;

            for (let submissionIndex = 0; submissionIndex < RHIs[RHIIndex].submissions.length; submissionIndex++) {
                const submission = RHIs[RHIIndex].submissions[submissionIndex];
                const nextSubmission: SubmissionData | undefined = RHIs[RHIIndex].submissions[submissionIndex - 1];
                const sheetRow = RHIs[RHIIndex].submissions.length + numHeaderRows - 1 - submissionIndex; //write latest dates to bottom of file

                let meterReadings: (number | undefined)[] = meters.map((_) => undefined); //initialise meter reading array for insertion into excel sheet

                submission.meterInformation.forEach(meterReading => {
                    const meterIndex = meters.findIndex(meter => meter.label === meterReading.label);
                    meterReadings[meterIndex] = meterReading.reading;
                })

                //add reading row to sheet data
                excelData[RHIIndex].sheetData[sheetRow] = [
                    submission.submissionYear,
                    submission.submissionQuarter,
                    submission.submissionDate,
                    nextSubmission && submission.submissionQuarter != nextSubmission.submissionQuarter ? submission.eho : undefined, //only print eho in last submission in quarter
                    ...meterReadings,
                    nextSubmission && submission.submissionQuarter != nextSubmission.submissionQuarter ? submission.payment : undefined,  //only print payment in last submission in quarter
                    sheetRow == numHeaderRows + 1 ?
                        //load factor formula, uses eho, capacity and difference between current date and prev quarter date
                        '=IF(ISBLANK(D8), "",D8/((C8-XLOOKUP(1,(B:B<>B8)*(B:B<>"")*(C:C<C8),C:C, "", 0, -1))*24*$F$1))'
                        : undefined];
            }
        }

        //export data to excel
        console.log("Writing to excel...");
        const workbook = XLSX.utils.book_new();

        for (let sheetIndex = 0; sheetIndex < excelData.length; sheetIndex++) {
            const worksheet = XLSX.utils.aoa_to_sheet(excelData[sheetIndex].sheetData);
            XLSX.utils.book_append_sheet(workbook, worksheet, excelData[sheetIndex].sheetName);
        }
        XLSX.writeFile(workbook, saveName);
        console.log("File written to " + saveName);
        askQuestion("Press enter to close");

    } catch (error) {
        console.log(error);
        askQuestion("Press enter to close");
    }

})();


