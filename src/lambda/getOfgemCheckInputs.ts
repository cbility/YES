//gets inputs from SmartSuite for step function running RHI Ofgem check
// - checks SS for what type of update is required
// - gets IDs of login records for RHIs to be updated
// - compiles login records into input for step function
import SmartSuite from "../SmartSuite/SmartSuiteAPIHandler";


if (process.env.NODE_ENV !== 'production') { //use local environment variables if environment is not lambda
    require('dotenv').config();
}

const ss = new SmartSuite("s5ch1upc", process.env.SMARTSUITE_KEY as string);

const batchSize = 60; //max size of batch of logins for scraper. Cannot take more than 15 minutes to process.

const loginsTable = { id: "65e37da7f8428f036fd99785" };
const accountsTable = {
    id: "64d155a9c71c81dc0b41d527",
    fields: {
        "Active Project Count": "s5f94ecc3e",
        "Login ID": "s987febca5",
        "Active Service Count": "sd64357468",
    }
}
const configurationsTable = {
    id: "663d2313b4e7828a33b1ac07",
    fields: {
        "Last Run": "s3d2ee46fa"
    }
}
//Record IDs for scraper config records in Configuration table
const completeUpdateConfigID = "663d4044175c1b3c979a9afd";
const projectUpdateConfigID = "665f350a343198c25eda5fe6";
const serviceUpdateConfigID = "665f353ba173734d1df2211a";


export default async function handler() {

    // get configuration table in RHI Scraper
    const configurations: Record<string, unknown>[] = await ss.getAllRecords(configurationsTable.id);

    const nextCompleteUpdate = getNextDate(configurations, completeUpdateConfigID);
    const nextProjectUpdate = getNextDate(configurations, projectUpdateConfigID);
    const nextServiceUpdate = getNextDate(configurations, serviceUpdateConfigID);
    const now = new Date(); //current date and time

    let batches: ScraperBatch[] = [];

    //declare project inputs now so service inputs can be filtered for duplicates
    let projectInputs: ScraperInput[] = [];

    if (nextCompleteUpdate <= now) {
        console.log("Updating all logins")

        const allLogins = await ss.getAllRecords(loginsTable.id);
        const allLoginIDs: ScraperInput[] = allLogins.map((login: Record<string, unknown>) => ({ loginID: login.id as string }));
        batches = getBatches(allLoginIDs);
    } else {

        if (nextProjectUpdate <= now) {
            console.log("Updating project logins")
            projectInputs = await getRelevantLoginIds(accountsTable.fields["Active Project Count"]);
            batches = getBatches(projectInputs);
        }

        if (nextServiceUpdate <= now) {
            console.log("Updating service logins")
            const serviceInputs = await getRelevantLoginIds(accountsTable.fields["Active Service Count"]);
            //remove previously checked logins
            const projectLoginIDs = new Set(projectInputs.map(projectInput => projectInput.loginID));
            const filteredServiceInputs = serviceInputs.filter(
                (serviceInput) => !projectLoginIDs.has(serviceInput.loginID)
            );
            batches.push(...getBatches(filteredServiceInputs));
        }
    }

    const ofgemCheckInput: OfgemCheckInput = {
        batches,
        current: {
            inputs: batches[0].inputs,
            batchIndex: 0,
            isFinal: batches.length > 1,
        }
    }
    return ofgemCheckInput;
};

async function getRelevantLoginIds(DeliverableCountSlug: string) {
    //get loginIDs that have either active projects or active services
    const accountsToUpdate = await ss.filterRecords(accountsTable.id, {
        field: DeliverableCountSlug,
        comparison: "is_greater_than",
        value: 0,
    });

    let loginIDs: ScraperInput[] = accountsToUpdate.map((accountRecord: Record<string, any>) => (
        { loginID: accountRecord[accountsTable.fields["Login ID"]] }
    ));

    return loginIDs;
}

function getBatches(inputs: ScraperInput[]): ScraperBatch[] {

    if (inputs.length === 0) return [];

    //split list of loginIDs into manageable chunks for lambda
    let batches: ScraperBatch[] = [];
    while (batches.length * batchSize < inputs.length) {
        let batch = { inputs: inputs.splice(0, batchSize), done: false, success: null };
        batches.push(batch);
    }
    return batches;
}

function getNextDate(configurations: Record<string, any>[], id: string) {
    const nextDateFieldSlug = "s8173a46ec"; //next date field in configuration table for scraper
    return new Date(configurations.find((record => record.id === id))?.[nextDateFieldSlug].date as string);
}

