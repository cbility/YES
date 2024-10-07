import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js"
if (process.env.NODE_ENV !== "production") {
    await bootstrapEnvironment();
}

const input = { smartSuiteAPIKey: process.env.TECHNICAL_SMARTSUITE_KEY as string, "submissionEnd": "2023-11-28T00:00:00Z", "quarterStart": "2023-08-29T00:00:00Z", "EHO": 2248440, "portalPayment": 120516.38, "qualifyingPercentage": 100, "RHI": [[[{ "id": "6603684fe67ab7d6b797f10e", "title": "RHI0000026461" }]]], "submissionMonth": 42, "tierCutoff": 3820.236, "supportService": [{ "id": "6616a5b96cb58576560f4e76", "title": "JCG Hale CHP RHI  | J.G. HALE CONSTRUCTION LIMITED" }] }///////PLY CODE START////////////////////////////////
