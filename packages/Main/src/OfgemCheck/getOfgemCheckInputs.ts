//gets inputs from SmartSuite for step function running RHI Ofgem check
// - checks SS for what type of update is required
// - gets IDs of login records for RHIs to be updated
// - compiles login records into input for step function
import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js";
import SmartSuite from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js";
import tables from "../../../SmartSuite/dist/tables.js";

if (process.env.NODE_ENV !== 'production') { //use local environment variables if environment is not lambda
    await bootstrapEnvironment();
}

const ss = new SmartSuite("s5ch1upc", process.env.TECHNICAL_SMARTSUITE_KEY as string);

const batchSize = 40; //max size of batch of logins for scraper. Cannot take more than 15 minutes to process.

const { RHILoginsTable, RHIAccountsTable, configurationsTable } = tables;

//Record IDs for scraper config records in Configuration table
const completeUpdateConfigID = "663d4044175c1b3c979a9afd";
const projectUpdateConfigID = "665f350a343198c25eda5fe6";
const serviceUpdateConfigID = "665f353ba173734d1df2211a";


export async function handler(event: { test?: boolean, inputs: { loginID: string }[] }) {
    console.log("EVENT: " + JSON.stringify(event));

    if (event.test) {
        const testLogins: ScraperInput[] = event.inputs; //for testing purposes
        const testInput: OfgemCheckInput = {
            all: getBatches(testLogins),
            current: {
                inputs: JSON.stringify(getBatches(testLogins)[0]?.inputs ?? []),
                batchIndex: 0,
                isFinal: getBatches(testLogins).length <= 1,
            }
        }
        return testInput;
    }

    // get configuration table in RHI Scraper
    const configurations: Record<string, unknown>[] = await ss.getAllRecords(configurationsTable.id);

    const nextCompleteUpdate = getNextDate(configurations, completeUpdateConfigID);
    const nextProjectUpdate = getNextDate(configurations, projectUpdateConfigID);
    const nextServiceUpdate = getNextDate(configurations, serviceUpdateConfigID);
    const now = new Date(); //current date and time

    let batches: ScraperBatch[] = [];

    //declare inputs for batching
    let projectInputs: ScraperInput[] = [];
    let filteredServiceInputs: ScraperInput[] = [];

    if (nextCompleteUpdate <= now) {
        console.log("Getting all logins")

        const allLogins = await ss.getAllRecords(RHILoginsTable.id);
        const allLoginIDs: ScraperInput[] = allLogins.map((login: Record<string, unknown>) => ({ loginID: login.id as string }));
        batches = getBatches(allLoginIDs);

        await updateLastDate(completeUpdateConfigID);

    } else {

        if (nextProjectUpdate <= now) {
            console.log("Getting project logins")
            projectInputs = await getRelevantLoginIds(RHIAccountsTable.structure["Active Project Count"].slug);

            await updateLastDate(projectUpdateConfigID);
        }

        if (nextServiceUpdate <= now) {
            console.log("Getting service logins")
            const serviceInputs = await getRelevantLoginIds(RHIAccountsTable.structure["Active Service Count"].slug);
            //remove previously checked logins
            const projectLoginIDs = new Set(projectInputs.map(projectInput => projectInput.loginID));
            filteredServiceInputs = serviceInputs.filter(
                (serviceInput) => !projectLoginIDs.has(serviceInput.loginID)
            );

            await updateLastDate(serviceUpdateConfigID);
        }
        batches = getBatches([...projectInputs, ...filteredServiceInputs])
    }

    const inputBatches: OfgemCheckInput = {
        all: batches,
        current: {
            inputs: JSON.stringify(batches[0]?.inputs ?? []),
            batchIndex: 0,
            isFinal: batches.length <= 1,
        }
    }
    return inputBatches;
};

async function getRelevantLoginIds(DeliverableCountSlug: string) {
    //get loginIDs that have either active projects or active services
    const accountsToUpdate = await ss.filterRecords(RHIAccountsTable.id, [
        {
            field: DeliverableCountSlug,
            comparison: "is_greater_than",
            value: 0,
        },
        {
            field: RHIAccountsTable.structure["Login ID"].slug,
            comparison: "is_not_empty",
            value: "",
        },
    ]);

    let loginIDs: ScraperInput[] = accountsToUpdate.map((accountRecord: Record<string, any>) => (
        { loginID: accountRecord[RHIAccountsTable.structure["Login ID"].slug] }
    ));

    return loginIDs;
}

function getBatches(inputs: ScraperInput[]): ScraperBatch[] {

    if (inputs.length === 0) return [];

    //split list of loginIDs into manageable chunks for lambda
    let batches: ScraperBatch[] = [];
    while (batches.length * batchSize < inputs.length) {
        let batch = {
            inputs: inputs.slice(batches.length * batchSize, (batches.length + 1) * batchSize),
            done: false,
            success: null,
        };
        batches.push(batch);
    }
    return batches;
}

function getNextDate(configurations: Record<string, any>[], id: string) {
    return new Date(configurations.find((record => record.id === id))?.[configurationsTable.structure["Next Run"].slug].date as string);
}

function updateLastDate(updateConfigID: string) {

    const updateTime = (new Date()).toISOString();

    ss.updateRecord(configurationsTable.id, updateConfigID, {
        [configurationsTable.structure["Last Run"].slug]: updateTime,
    });
}

