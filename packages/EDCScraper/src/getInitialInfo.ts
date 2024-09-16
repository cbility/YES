import * as readline from 'readline-sync';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import askQuestion from "./askQuestion.js"


// Function to check file write access
const hasWriteAccess = (filePath: string): boolean => {
    try {
        fs.accessSync(filePath, fs.constants.W_OK);
        return true;
    } catch (err) {
        return false;
    }
};

export default async function getInitialInfo() {
    // Credentials for RHI portal login
    const username = askQuestion("Enter the RHI portal username: ");
    const password = askQuestion("Enter the RHI portal password: ");

    // Initialize variables for file path and write access
    let saveName: string;
    let filePath: string;
    let writeAccess = false;

    // Ask user for file path and ensure write access
    do {
        let saveLocation = askQuestion("Paste the file path to save meter readings. Leave this empty to save to desktop: ");

        // Default to Desktop if no path is provided
        if (saveLocation === "") {
            saveLocation = path.join(os.homedir(), "Desktop");
        }

        // Set filePath explicitly
        filePath = path.join(saveLocation, `${username}.xlsx`);
        saveName = filePath; // This is where the file will be saved

        // Check if the path is absolute and if write access is available
        if (path.isAbsolute(filePath)) {
            if (hasWriteAccess(path.dirname(filePath))) {
                writeAccess = true;
            } else {
                console.log(`Error: You do not have write access to ${path.dirname(filePath)}.`);
            }
        } else {
            console.log("Please enter an absolute path, starting with C:\\ or another drive name.");
        }
    } while (!writeAccess)

    // Check if the file exists and ask for overwrite confirmation
    if (fs.existsSync(filePath as string)) {
        let overwrite = askQuestion("RHI readings from this account may have already been saved to this file location. Overwrite? [y/n]: ");

        while (!['y', 'n'].includes(overwrite)) {
            overwrite = askQuestion("Enter 'y' for Yes or 'n' for No: ");
        }

        if (overwrite === 'n') {
            console.log("Exiting...");
            process.exit();
        }
    }

    return { saveName, username, password, }
}