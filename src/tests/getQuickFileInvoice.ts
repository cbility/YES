import QuickFileAPIHandler from "../QuickFile/QuickFileAPIHandler.js";

const QF = new QuickFileAPIHandler("6131405563",
    "8e48b467-333a-46cc-958c-a2f286dad614",
    "6918A4B5-2C18-4A92-8");

QF.invoiceGet({ InvoiceID: 32844191 }).then(response => console.log(response.Invoice_Get.Body.InvoiceDetails));
