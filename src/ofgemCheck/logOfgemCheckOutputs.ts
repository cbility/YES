import SmartSuite from "../SmartSuite/SmartSuiteAPIHandler.js";

if (process.env.NODE_ENV !== 'production') { //use local environment variables if environment is not lambda
    require('dotenv').config();
}
const ss = new SmartSuite("s5ch1upc", process.env.SMARTSUITE_KEY as string);

const updatesTable = {
    id: "663d3d23a1a0542114b1ac24",
    fields: {
        "Updated Logins": "sb70b9b91a",
        "Date": "sed70935b7",
        "Run success": "sda0be9742",
    }
}

const now = new Date();

export default async function handler(batches: ScraperBatch[]) {

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
            [updatesTable.fields["Updated Logins"]]: successes,
            [updatesTable.fields["Date"]]: now.toISOString(),
            [updatesTable.fields["Run success"]]: "Success",
        }
        //add record to SS
        await ss.addNewRecord(updatesTable.id, successRecord);
    }

    //Create fails record

    if (fails.length > 0) {

        const failRecord: Record<string, string | string[]> = {
            [updatesTable.fields["Updated Logins"]]: fails,
            [updatesTable.fields["Date"]]: now.toISOString(),
            [updatesTable.fields["Run success"]]: "Fail",
        }
        //add record to SS
        await ss.addNewRecord(updatesTable.id, failRecord);
    }

}