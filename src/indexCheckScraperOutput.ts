//lambda for parsing scraper outputs in step function and updating inputs for next batch

module.exports = {
    handler
};


function handler(event: ScraperOutputEvent) {
    const batchIndex: number = event.inputBatches.current.batchIndex;
    const updateSuccess = event.currentOutput.Payload.body.includes("Update Complete");
    const isFinal = event.inputBatches.current.isFinal;

    event.inputBatches.all[batchIndex].done = true;
    event.inputBatches.all[batchIndex].success = updateSuccess;

    if (!isFinal) {
        event.inputBatches.current.inputs = JSON.stringify(event.inputBatches.all?.[batchIndex + 1].inputs);
        event.inputBatches.current.batchIndex++;
    }

    return event
}