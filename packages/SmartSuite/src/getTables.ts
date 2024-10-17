//stores the existing SmartSuite structure at ./tables.json
//store condensed structure at ./condensedTables.json
//store database structure ts file at ../src/tablesTest.ts

import SmartSuite from "./SmartSuiteAPIHandler.js";
import { default as cachedTables } from "./tables.js";
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

await updateTables();

async function updateTables() {
    try {
        //get existing tables from API
        const existingTables = await ss.listTables();
        const filteredExistingTables: SmartSuiteTable[] = existingTables.map((table: any) => {
            const structure: any = {};
            table.structure.forEach((field: any) => {
                structure[field.label] = {
                    label: field.label,
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
        });
        const workspaceTables = cachedTables[accountID as WorkspaceID];
        for (const existingTableLabel in filteredExistingTables) {
            const existingTable = filteredExistingTables[existingTableLabel];
            const [_, cachedExistingTable] = Object.entries(workspaceTables).find(([_, _cachedTable]) => _cachedTable.id === existingTable.id) ?? [];
            if (!cachedExistingTable) { //table is not cached
                //check for naming conflicts
                const workspaceTables = cachedTables[accountID as WorkspaceID];
                let tableLabel: keyof typeof workspaceTables = existingTable.name as keyof typeof workspaceTables;
                const namingConflict: SmartSuiteTable | undefined = workspaceTables[tableLabel];
                if (namingConflict) {
                    tableLabel = existingTable.name + existingTable.id
                    console.warn(`Table with label ${existingTable.name} already exists in workspace so new table with name ${existingTable.name} given label ${tableLabel}`);
                }
                console.log(`Adding new table ${existingTable.name}, id: ${existingTable.id} to workspace under label ${tableLabel}`);
                //add table to workspace
                (cachedTables as { [workspaceID: string]: { [tableLabel: string]: SmartSuiteTable } })[accountID as WorkspaceID][tableLabel] = existingTable;
            }
        }
        for (const tableLabel in workspaceTables) {
            //get cached table from cache
            const cachedTable: SmartSuiteTable & { structure: { [name: string]: SmartSuiteField } } = workspaceTables[tableLabel as keyof typeof workspaceTables];
            const existingTable = filteredExistingTables.find((_existingTable: SmartSuiteTable) => _existingTable.id === cachedTable.id);
            if (!existingTable) {
                console.log("No existing table found for " + tableLabel + ", name: " + cachedTable.name + ", id: " + cachedTable.id + ". This table will be removed from the workspace.");
                //remove table from workspace
                delete workspaceTables[tableLabel as keyof typeof workspaceTables];
                continue;
            }
            //update table name
            (cachedTable.name as string) = existingTable.name;
            //add new fields to cached fields
            for (const existingFieldName in existingTable.structure) {
                const existingField = existingTable.structure[existingFieldName];
                //find cached field with same slug as this existing field
                const [cachedFieldLabel, cachedField] = Object.entries(cachedTable.structure).find(
                    ([_cachedFieldLabel, _cachedField]) => _cachedField.slug === existingField.slug
                ) ?? [];
                if (cachedFieldLabel || cachedField) continue; //skip to next without amending name if field already cached 
                const nameConflictField = cachedTable.structure[existingFieldName as keyof typeof cachedTable.structure] as SmartSuiteField | undefined
                if (nameConflictField) {
                    //if this field's label is already used as field name use field slug to extend name
                    const newFieldName = existingField.label + existingField.slug;
                    console.log(`Field with name ${existingFieldName} already cached with label ${nameConflictField.label},
                         slug ${nameConflictField.slug}. New field with label ${existingField.label}, 
                         slug ${existingField.slug} assigned name ${newFieldName}`);
                    cachedTable.structure[newFieldName] = existingField;  // add new field with modified name
                } else {  // new uncached field with no naming conflict
                    // add new field 
                    cachedTable.structure[existingField.label as keyof typeof cachedTable.structure] = existingField;
                }
                //update existing cached fields 
                //after adding new fields to avoid naming conflicts between old and new fields
                for (const cachedFieldLabel in cachedTable.structure) {
                    let cachedField = cachedTable.structure[cachedFieldLabel as keyof typeof cachedTable.structure] as SmartSuiteField;
                    const [existingFieldLabel, existingField] = Object.entries(existingTable.structure).find(([_existingFieldLabel, _existingField]) => _existingField.slug === cachedField.slug) ?? [];
                    if (!existingFieldLabel || !existingField) {
                        console.log("No existing field found for " + cachedFieldLabel + ", slug: " + cachedField.slug + ", type: " + cachedField.field_type + ". This field will be removed from " + tableLabel + ".");
                        //remove cached field
                        delete cachedTable.structure[cachedFieldLabel];
                        continue;
                    }
                    cachedTable.structure[cachedFieldLabel as keyof typeof cachedTable.structure] = existingField //update cached field with existing field details
                }
            }
        }

        //write updated tables to database model
        const tsContent = `const tables = ${JSON.stringify(cachedTables, null, 2)} as const;\n\nexport default tables;`;
        let filePath = path.resolve(__dirname, '../src/tables.ts');
        await fs.writeFile(filePath, tsContent, 'utf8');

        //write existing tables to file for reference
        let jsonData = JSON.stringify(filteredExistingTables, null, 2);
        filePath = path.join(__dirname, 'condensedTables.json');
        await fs.writeFile(filePath, jsonData, 'utf8');

        jsonData = JSON.stringify(existingTables, null, 2);
        filePath = path.join(__dirname, 'tables.json');
        await fs.writeFile(filePath, jsonData, 'utf8');

        console.log('Write success');
        return 'Write success';
    } catch (error) {
        console.error('Error updating tables:', error);
        throw error;
    }
}
