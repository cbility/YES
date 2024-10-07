import metrics from "../scripts/metrics.js";

import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js"
await bootstrapEnvironment();

const input = {
    APIKey: process.env.TECHNICAL_SMARTSUITE_KEY as string
}

const result = await metrics(input);