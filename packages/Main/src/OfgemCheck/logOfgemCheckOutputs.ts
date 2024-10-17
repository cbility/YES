import SmartSuite from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js";
import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js";
import tables from "../../../SmartSuite/src/tables.js";
if (process.env.NODE_ENV !== "production") {
    await bootstrapEnvironment();
}

const ss = new SmartSuite("s5ch1upc", process.env.TECHNICAL_SMARTSUITE_KEY as string);

const { updatesTable } = tables.s5ch1upc;

const now = new Date();

export async function handler(batches: ScraperBatch[]) {

    console.log("EVENT: \n" + JSON.stringify(batches, null, 2));

    const successes = batches.filter(
        (batch) => batch.success && batch.done).map(
            (batch) => batch.inputs.map(
                (input) => input.loginID
            )
        ).flat()

    console.log(`successes: ${successes}`);

    const fails = batches.filter(
        (batch) => !batch.success && batch.done).map(
            (batch) => batch.inputs.map(
                (input) => input.loginID
            )
        ).flat()

    console.log(`fails: ${fails}`);

    //Create successes record
    if (successes.length > 0) {
        const successRecord: Record<string, string | string[]> = {
            [updatesTable.structure["Updated Logins"].slug]: successes,
            [updatesTable.structure["Date"].slug]: now.toISOString(),
            [updatesTable.structure["Run success"].slug]: "Success",
        }
        //add record to SS
        await ss.addNewRecord(updatesTable.id, successRecord);
    }

    //Create fails record

    if (fails.length > 0) {

        const failRecord: Record<string, string | string[]> = {
            [updatesTable.structure["Updated Logins"].slug]: fails,
            [updatesTable.structure["Date"].slug]: now.toISOString(),
            [updatesTable.structure["Run success"].slug]: "Fail",
        }
        //add record to SS
        await ss.addNewRecord(updatesTable.id, failRecord);
    }

}