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

const { RHILoginsTable, RHIAccountsTable, ROLoginsTable, ROAccountsTable, configurationsTable } = tables;
const batchSize = 40; //max size of batch of logins for scraper. Cannot take more than 15 minutes to process.


export async function handler(event: { test?: boolean, testInputs: { loginID: string }[], mode: "RHI" | "RO" }) {
    console.log("EVENT: " + JSON.stringify(event));

    // get configuration table in Scraper
    const configurations: Record<string, unknown>[] = await ss.getAllRecords(configurationsTable.id);
    const now = new Date(); //current date and time

    switch (event.mode) {
        case "RHI":
        case undefined: // RHI mode is default

            //Record IDs for scraper config records in Configuration table
            const completeRHIUpdateConfigID = "663d4044175c1b3c979a9afd";
            const projectRHIUpdateConfigID = "665f350a343198c25eda5fe6";
            const serviceRHIUpdateConfigID = "665f353ba173734d1df2211a";

            if (event.test) {
                const testRHILogins: ScraperInput[] = event.testInputs; //for testing purposes
                const testRHIInput: OfgemCheckInput = {
                    all: getBatches(testRHILogins),
                    current: {
                        inputs: JSON.stringify(getBatches(testRHILogins)[0]?.inputs ?? []),
                        batchIndex: 0,
                        isFinal: getBatches(testRHILogins).length <= 1,
                    }
                }
                return testRHIInput;
            }

            const nextCompleteRHIUpdate = getNextDate(configurations, completeRHIUpdateConfigID);
            const nextProjectRHIUpdate = getNextDate(configurations, projectRHIUpdateConfigID);
            const nextRHIServiceUpdate = getNextDate(configurations, serviceRHIUpdateConfigID);

            let rhiBatches: ScraperBatch[] = [];

            //declare inputs for batching
            let projectRHIInputs: ScraperInput[] = [];
            let filteredServiceRHIInputs: ScraperInput[] = [];

            if (nextCompleteRHIUpdate <= now) {
                console.log("Getting all logins")

                const allRHILogins = await ss.getAllRecords(RHILoginsTable.id);
                const allRHILoginIDs: ScraperInput[] = allRHILogins.map((login: Record<string, unknown>) => ({ loginID: login.id as string }));
                rhiBatches = getBatches(allRHILoginIDs);

                await updateLastDate(completeRHIUpdateConfigID);

            } else {

                if (nextProjectRHIUpdate <= now) {
                    console.log("Getting project logins")
                    projectRHIInputs = await getRelevantLoginIds(RHIAccountsTable.structure["Active Project Count"].slug, RHIAccountsTable.structure["Login ID"].slug, RHIAccountsTable.id);

                    await updateLastDate(projectRHIUpdateConfigID);
                }

                if (nextRHIServiceUpdate <= now) {
                    console.log("Getting service logins")
                    const serviceInputs = await getRelevantLoginIds(RHIAccountsTable.structure["Active Service Count"].slug, RHIAccountsTable.structure["Login ID"].slug, RHIAccountsTable.id);
                    //remove previously checked logins
                    const projectLoginIDs = new Set(projectRHIInputs.map(projectInput => projectInput.loginID));
                    filteredServiceRHIInputs = serviceInputs.filter(
                        (serviceInput) => !projectLoginIDs.has(serviceInput.loginID)
                    );

                    await updateLastDate(serviceRHIUpdateConfigID);
                }
                rhiBatches = getBatches([...projectRHIInputs, ...filteredServiceRHIInputs])
            }

            const rhiInputBatches: OfgemCheckInput = {
                all: rhiBatches,
                current: {
                    inputs: JSON.stringify(rhiBatches[0]?.inputs ?? []),
                    batchIndex: 0,
                    isFinal: rhiBatches.length <= 1,
                }
            }
            return rhiInputBatches;
        case "RO":
            //Record IDs for scraper config records in Configuration table
            const completeROUpdateConfigID = "6720ca7477e5ffcf022429fa";
            const projectROUpdateConfigID = "6720ca67594a6fce6985a6d0";
            const serviceROUpdateConfigID = "6720ca6e1516bb73d7778557";

            if (event.test) {
                const testLogins: ScraperInput[] = event.testInputs; //for testing purposes
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

            // get configuration table in Scraper

            const nextCompleteROUpdate = getNextDate(configurations, completeROUpdateConfigID);
            const nextProjectROUpdate = getNextDate(configurations, projectROUpdateConfigID);
            const nextServiceROUpdate = getNextDate(configurations, serviceROUpdateConfigID);

            let roBatches: ScraperBatch[] = [];

            //declare inputs for batching
            let projectROInputs: ScraperInput[] = [];
            let filteredServiceROInputs: ScraperInput[] = [];

            if (nextCompleteROUpdate <= now) {
                console.log("Getting all logins")

                const allLogins = await ss.getAllRecords(ROLoginsTable.id);
                const allLoginIDs: ScraperInput[] = allLogins.map((login: Record<string, unknown>) => ({ loginID: login.id as string }));
                roBatches = getBatches(allLoginIDs);

                await updateLastDate(completeROUpdateConfigID);

            } else {

                if (nextProjectROUpdate <= now) {
                    console.log("Getting project logins")
                    projectROInputs = await getRelevantLoginIds(ROAccountsTable.structure["Live Projects Count"].slug, ROAccountsTable.structure["Login Record ID"].slug, ROAccountsTable.id);

                    await updateLastDate(projectROUpdateConfigID);
                }

                if (nextServiceROUpdate <= now) {
                    console.log("Getting service logins")
                    const serviceInputs = await getRelevantLoginIds(ROAccountsTable.structure["Live Services Count"].slug, ROAccountsTable.structure["Login Record ID"].slug, ROAccountsTable.id);
                    //remove previously checked logins
                    const projectLoginIDs = new Set(projectROInputs.map(projectInput => projectInput.loginID));
                    filteredServiceROInputs = serviceInputs.filter(
                        (serviceInput) => !projectLoginIDs.has(serviceInput.loginID)
                    );

                    await updateLastDate(serviceROUpdateConfigID);
                }
                roBatches = getBatches([...projectROInputs, ...filteredServiceROInputs])
            }

            const roInputBatches: OfgemCheckInput = {
                all: roBatches,
                current: {
                    inputs: JSON.stringify(roBatches[0]?.inputs ?? []),
                    batchIndex: 0,
                    isFinal: roBatches.length <= 1,
                }
            }
            return roInputBatches;
        default:
            const exhaustivenessCheck: never = event.mode;
            throw new Error(`Invalid mode ${event.mode}. Mode must be "RHI" or "RO".`);
    };

}

async function getRelevantLoginIds(DeliverableCountSlug: string, loginIDSlug: string, accountTableID: typeof RHIAccountsTable.id | typeof ROAccountsTable.id) {
    //get loginIDs that have either active projects or active services
    const accountsToUpdate = await ss.filterRecords(accountTableID, [
        {
            field: DeliverableCountSlug,
            comparison: "is_greater_than",
            value: 0,
        },
        {
            field: loginIDSlug,
            comparison: "is_not_empty",
            value: "",
        },
    ]);

    let loginIDs: ScraperInput[] = accountsToUpdate.map((accountRecord: Record<string, any>) => (
        { loginID: accountRecord[loginIDSlug] }
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

