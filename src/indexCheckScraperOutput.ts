//lambda for parsing scraper outputs in step function and updating inputs for next batch

export default async function handler(event: ScraperOutputEvent) {

    console.log("INPUT EVENT: \n" + JSON.stringify(event, null, 2));

    const batchIndex: number = event.inputBatches.current.batchIndex;
    const updateSuccess = event.currentOutput.Payload.body.includes("Update Complete");
    const isFinal: Boolean = event.inputBatches.current.isFinal;

    event.inputBatches.all[batchIndex].done = true;
    event.inputBatches.all[batchIndex].success = updateSuccess;

    if (!isFinal) {
        event.inputBatches.current.inputs = JSON.stringify(event.inputBatches.all?.[batchIndex + 1].inputs);
        event.inputBatches.current.batchIndex++;
        event.inputBatches.current.isFinal = event.inputBatches.current.batchIndex + 1 >= event.inputBatches.all.length;
    }

    console.log("OUTPUT EVENT: \n" + JSON.stringify(event, null, 2));
    return event;
}

module.exports = {
    handler
};