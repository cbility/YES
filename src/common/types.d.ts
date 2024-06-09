interface ScraperInput { loginID: string }; //input for scraper lambda function

interface ScraperBatch { //single batch of inputs for scraper
    done: Boolean,
    success: Boolean | undefined,
    inputs: ScraperInput[],
};
interface OfgemCheckInput { //input for Ofgem Check step function
    batches: ScraperBatch[],
    current: {
        inputs: ScraperInput[],
        batchIndex: number,
        isFinal: Boolean,
    }
};