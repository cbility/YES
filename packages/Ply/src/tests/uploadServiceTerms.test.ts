import uploadServiceTerms from "../scripts/salesPipeline/uploadServiceTerms.js";
import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js"
if (process.env.NODE_ENV !== "production") {
    await bootstrapEnvironment();
}

const input = { //test data
    APIKey: process.env.QUICKFILE_API_KEY as string,
    serviceTermsDoc: "1Oj0am_i0IR-FuGsWNY7zTXGTBC48QiZvLS4exhU8QWc",
    jobTypes: "IRM",
    invoiceId: "32992559"
}

const result = await uploadServiceTerms(input);
console.log(result);