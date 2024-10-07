import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js"
import quickFileAPIRequestInputs from "../scripts/quickFileAPIRequestInputs.js";
if (process.env.NODE_ENV !== "production") {
    await bootstrapEnvironment();
}

const input = {
    APIKey: process.env.QUICKFILE_API_KEY as string,
    endpoint: "test",
    body: "test"
};
const result = quickFileAPIRequestInputs(input);
console.log(result);