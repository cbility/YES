import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js";
import QuickFileAPIHandler from "../QuickFileAPIHandler.js";
bootstrapEnvironment();

const QF = new QuickFileAPIHandler("6131405563",
    "8e48b467-333a-46cc-958c-a2f286dad614",
    process.env.QUICKFILE_API_KEY as string);

QF.invoiceGet({ InvoiceID: 33008169 }).then(response => console.log(response.Invoice_Get.Body.InvoiceDetails));
