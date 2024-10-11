import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js";
import QuickFileAPIHandler from "../QuickFileAPIHandler.js";
await bootstrapEnvironment();

//searches for invoice events on the specified invoice from one month ago onwards

const QF = new QuickFileAPIHandler("6131405563",
    "8e48b467-333a-46cc-958c-a2f286dad614",
    process.env.QUICKFILE_API_KEY as string);

const oneMonthAgo = new Date();
oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
const isoString = oneMonthAgo.toISOString();


QF.system_SearchEvents({
    SearchParameters: {
        ReturnCount: 200,
        FromDateTime: isoString,
        SearchType: {
            SearchType: "Invoice",
            RefID: process.argv[2]
        }
    }
}).then((response) => {
    console.log(response.System_SearchEvents.Body.Events);
});