//stores the current SmartSuite structure at dist/SmartSuite/tables.json

import SmartSuite from "./SmartSuiteAPIHandler.js";
import { promises as fs } from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import type { WorkspaceID } from "./SmartSuiteAPIHandler.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const accountID = process.argv[2];
const APIKey: string = process.argv[3];
const ss = new SmartSuite(accountID as WorkspaceID, APIKey);

let relativePath = 'tables.json';

updateTables();

async function updateTables() {
    try {
        const tables = await ss.listTables();
        const filteredTables = tables.map((table: any) => {
            const structure: any = {};

            table.structure.forEach((field: any) => {
                structure[field.label] = {
                    slug: field.slug,
                    field_type: field.field_type,
                    target_field_type: field?.["params"]?.["target_field_structure"]?.["field_type"],
                    choices: field?.params?.choices?.map((choice: { value: string; label: string; }) => ({ value: choice.value, label: choice.label }))
                };
            });

            return {
                name: table.name,
                id: table.id,
                structure: structure
            }
        }
        );

        let jsonData = JSON.stringify(filteredTables, null, 2);
        let filePath = path.join(__dirname, 'condensedTables.json');
        await fs.writeFile(filePath, jsonData, 'utf8');

        jsonData = JSON.stringify(tables, null, 2);
        filePath = path.join(__dirname, 'tables.json');
        await fs.writeFile(filePath, jsonData, 'utf8');

        console.log('Write success');
        return 'Write success';
    } catch (error) {
        console.error('Error updating tables:', error);
        throw error;
    }
}