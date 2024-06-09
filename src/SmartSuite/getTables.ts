//stores the current SmartSuite structure at dist/SmartSuite/tables.json

import SmartSuite from "./SmartSuiteAPIHandler";
import { promises as fs } from 'fs';
import path from 'path';

const accountID: string = process.argv[2];
const APIKey: string = process.argv[3];
const ss = new SmartSuite(accountID, APIKey);

let relativePath = 'tables.json';

updateTables();

async function updateTables() {
    try {
        const tables = await ss.listTables();
        const jsonData = JSON.stringify(tables, null, 2);

        const filePath = path.join(__dirname, 'tables.json');
        await fs.writeFile(filePath, jsonData, 'utf8');

        console.log('Write success');
        return 'Write success';
    } catch (error) {
        console.error('Error updating tables:', error);
        throw error;
    }
}