interface ScraperInput { loginID: string } //input for scraper lambda function

interface ScraperBatch { //single batch of inputs for scraper
    done: Boolean,
    success: Boolean | null,
    inputs: ScraperInput[],
}

interface OfgemCheckInput { //input for Ofgem Check step function
    all: ScraperBatch[],
    current: {
        inputs: string, //stringified ScraperInput[]
        batchIndex: number,
        isFinal: Boolean,
    }
}

interface ScraperOutputEvent extends Partial<Event> {
    inputBatches: OfgemCheckInput,
    currentOutput: {
        Payload: {
            statusCode: number,
            headers: object,
            body: string, //"{\"message\":\"Update Complete\"}"
        },
    },
}