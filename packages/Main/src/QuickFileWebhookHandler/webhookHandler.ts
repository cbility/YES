import QuickFileAPIHandler from "../../../QuickFile/dist/QuickFileAPIHandler.js";
import SmartSuiteAPIHandler from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js";
import { invoices as invoicesTable, opportunitiesTable, quoteItems } from "../../../SmartSuite/dist/tables.js"
import bootstrapEnvironment from "../../../Common/dist/BootstrapEnvironment.js";

bootstrapEnvironment();

const MS_IN_A_DAY = 24 * 60 * 60 * 1000;
const PLY_ERROR_LOG_URL = "https://app-server.ply.io/api/incoming/webhooks/RKMxR0PJ/"

process.on('uncaughtException', function (err) { //handle uncaught exceptions
    console.log(err);
    fetch(
        PLY_ERROR_LOG_URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'Uncaught exception: ' + err })
        }
    );
});

interface QuickFileEvent extends Record<string, unknown> { body: string }

export default async function quickFileWebhookHandler(lambdaEvent: QuickFileEvent, lambdaContext?: { logStreamName: string }) {

    console.log("EVENT: " + JSON.stringify(lambdaEvent, null, 2));
    console.log("CONTEXT: " + JSON.stringify(lambdaContext, null, 2));

    const eventGroup: WebhookEventGroup = JSON.parse(lambdaEvent.body);
    const events = eventGroup.PayLoad;

    const QF = new QuickFileAPIHandler("6131405563",
        "7275f840-8c9a-4142-ac39-2c71b4941d78", //Webhook Handler Application ID
        process.env.QUICKFILE_API_KEY as string
    );
    const SS = new SmartSuiteAPIHandler("s5ch1upc",
        process.env.TECHNICAL_SMARTSUITE_KEY as string
    );

    if (events.InvoicesCreated) { //process invoice creation before other events so updates are managed properly
        console.log(events.InvoicesCreated?.length + " invoices created.")
        for (const newInvoice of events.InvoicesCreated) {
            //do stuff with new invoice
            switch (newInvoice.InvoiceType) {
                case "REC": {
                    console.log("New Recurring Invoice ID: " + newInvoice.Id);
                    //upsert new template invoice to SS table
                    await upsertNewInvoiceTemplate(newInvoice);
                    break;
                }
                case "INV": {
                    if (newInvoice.FromRecurring) {
                        console.log("New Invoice from recurring template ID: " + newInvoice.Id, + ", template ID " + newInvoice.RecurringParentId!);
                        //create new recurring invoice
                        await createNewRecurringInvoice(newInvoice);
                    } else {
                        //create invoice if not existing
                        console.log("New Invoice: " + newInvoice.Id);
                        await upsertNewSDPInvoice(newInvoice);
                    }
                    break;
                }
                case "EST": {
                    console.log("New Estimate: " + newInvoice.Id);
                    //no action for new estimates
                    break;
                }

            }
        }
    }

    for (const eventKey in events) {
        switch (eventKey) {
            case "InvoicesUpdated": {
                console.log(events.InvoicesUpdated?.length + " invoices updated.");
                for (const updatedInvoice of events.InvoicesUpdated!) {
                    switch (updatedInvoice.InvoiceType) {
                        case "REC": {
                            console.log("Updated Recurring Invoice ID: " + updatedInvoice.Id);
                            await updateSSInvoiceTemplate(updatedInvoice.Id);
                            break;
                        }
                        case "INV": {
                            console.log("Updated Invoice ID: " + updatedInvoice.Id);
                            try {
                                await updateSSInvoice(updatedInvoice.Id);
                            } catch (error) {
                                await logErrorToPly((error as Error).toString());
                            }
                            break;
                        }
                        case "EST": {
                            console.log("Updated Estimate ID: " + updatedInvoice.Id);
                            try {
                                await updateSSOpportunity(updatedInvoice.Id);
                            } catch (error) {
                                await logErrorToPly((error as Error).toString());
                            }
                            break;
                        }
                    }
                }
                break;
            }
            case "InvoicesPayment": {
                console.log(events.InvoicesPayment?.length + "new payments recorded.");
                for (const paidInvoice of events.InvoicesPayment!) {
                    console.log("Payment recorded for Invoice ID: " + paidInvoice.InvoiceId);
                    await updateSSInvoice(paidInvoice.InvoiceId);
                }
                break;
            }
            case "InvoicesSent": {
                console.log(events.InvoicesSent?.length + " Invoices sent.");
                for (const sentInvoice of events.InvoicesSent!) {
                    try {
                        switch (sentInvoice.InvoiceType) {
                            case "EST": {
                                console.log("Sent Estimate ID: " + sentInvoice.Id);
                                await logQuoteSend(sentInvoice);
                                break;
                            }
                            case "INV": {
                                console.log("Sent Invoice ID: " + sentInvoice.Id);
                                await logInvoiceSend(sentInvoice);
                                break;
                            }
                            case "REC": {
                                await logErrorToPly("Recurring Invoice template logged as sent, id " + sentInvoice.Id);
                                break;
                            }
                        }
                    } catch (error) {
                        await logErrorToPly((error as Error).toString());
                    }
                }
                break;
            }
            case "EstimatesStatusChange": { //quote acceptance or rejection
                console.log(events.EstimatesStatusChange?.length + " Estimate status changes recorded.")
                for (const updatedEstimate of events.EstimatesStatusChange!) {
                    try {
                        console.log("Estimate ID " + updatedEstimate.Id + " updated to status " + updatedEstimate.Status);
                        await logOpportunityStatusChange(updatedEstimate);
                    } catch (error) {
                        await logErrorToPly((error as Error).toString());
                    }
                }
                break;
            }
            case "PaymentsCreated": {
                console.log(events.InvoicesPayment?.length + " new payments created for Invoices.");
                for (const payment of events.PaymentsCreated!) {
                    console.log("Payment created for Invoice ID: " + payment.InvoiceId);
                    //TODO: ss invoice update
                }
                break;
            }
            case "InvoicesDeleted": {
                console.log(events.InvoicesDeleted?.length + " Invoices deleted.");
                for (const deletedInvoiceEvent of events.InvoicesDeleted!) {
                    const deletedInvoice = await QF.invoiceGet({ InvoiceID: deletedInvoiceEvent.Id });
                    switch (deletedInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceType) {
                        case "INVOICE": {
                            //TODO: ss invoice update
                            break;
                        }
                        case "ESTIMATE": {
                            try {
                                await updateSSOpportunity(deletedInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceID, deletedInvoice);
                            } catch (error) {
                                await logErrorToPly((error as Error).toString());
                            }
                            break;
                        }
                        case "RECURRING": {
                            //TODO: ss recurring template update
                            break;
                        }
                    }
                }
            }
            default:
                break; //ignore keys not specified above
        }
    }

    return "success";


    async function upsertNewInvoiceTemplate(newInvoice: InvoicesCreated) {
        //TODO: implement function
    }
    async function createNewRecurringInvoice(newInvoice: InvoicesCreated) {
        //TODO: implement function
    }
    async function upsertNewSDPInvoice(newInvoice: InvoicesCreated) {
        //TODO: implement function
    }
    async function updateSSInvoiceTemplate(invoiceId: number) {
        const template = await QF.invoiceGet({ InvoiceID: invoiceId });
        //TODO: implement function
    }
    async function updateSSOpportunity(quoteId: number, QFQuote: InvoiceGetResponse | undefined = undefined) {
        /*
        Update SmartSuite Opportunity issue and expiry, discount, total amount and QuickFile status to match QuickFile
        Update SmartSuite Quote Items price, line item description and quantity/hours  to match QuickFile
        */
        if (QFQuote === undefined) QFQuote = await QF.invoiceGet({ InvoiceID: quoteId }); //allow QF quote to be passed in if fetched earlier

        const SSOpportunities = await SS.getRecordsByFieldValues(
            opportunitiesTable.id,
            opportunitiesTable.structure["QuickFile Quote ID"].slug,
            [quoteId]);

        if (SSOpportunities.length === 0) throw new Error("No Opportunity found for QuickFile quote ID " + quoteId); //throw error and break out
        if (SSOpportunities.length > 1) {
            await logErrorToPly(SSOpportunities.length + " Opportunities found for QuickFile quote ID " + quoteId + ". All IDs: " +
                SSOpportunities.map((opp: any) => opp.id).join(", ") + ". Proceeding with ID " + SSOpportunities[0].id);
        }

        const opportunity = SSOpportunities[0]; //update first opportunity if there is more than one

        const SSQuoteItems = await SS.filterRecords(
            quoteItems.id,
            [{
                field: quoteItems.structure["Opportunity ID (System Field)"].slug,
                comparison: "is",
                value: opportunity.id,
            },
            {
                field: quoteItems.structure["In Opportunity"].slug,
                comparison: "is",
                value: true,
            }],
            "and");
        const missingItemErrors: string[] = []; //collect list of missing items for error logging in async context

        const SSUpdatedItems = QFQuote.Invoice_Get.Body.InvoiceDetails.ItemLines ?
            QFQuote.Invoice_Get.Body.InvoiceDetails.ItemLines.Item.map(item => {
                if (!item.ItemName) return; //ignore system items
                const SSitem = SSQuoteItems.find(
                    (SSQuoteItem: any) => item.ItemName!.startsWith(SSQuoteItem[quoteItems.structure["Sub Type Autonumber"].slug])
                );
                if (!SSitem?.id) {
                    console.log("item: " + JSON.stringify(item));
                    missingItemErrors.push("Item " + item.ItemName + " from quote " + quoteId + " not found on SmartSuite.");
                    return; //ignore item if not found on SS
                }
                const updatedItem = {
                    id: SSitem.id as string,
                    [quoteItems.structure["Quantity"].slug]: item.Qty,
                    [quoteItems.structure["Line Item Description"].slug]: item.ItemDescription,
                    [quoteItems.structure["Price"].slug]: (item.LineTotal / item.Qty)
                };
                return updatedItem;
            }).filter(updatedItem => !!updatedItem) //remove ignored items
            : [];

        const SSUpdatedTasks = QFQuote.Invoice_Get.Body.InvoiceDetails.TaskLines ?
            QFQuote.Invoice_Get.Body.InvoiceDetails.TaskLines.Task.map(task => {
                if (!task.ItemName) return; //ignore system items
                const SStask = SSQuoteItems.find(
                    (SSQuoteItem: any) => task.ItemName!.startsWith(SSQuoteItem[quoteItems.structure["Sub Type Autonumber"].slug])
                );
                if (!SStask?.id) {
                    console.log("task: " + JSON.stringify(task));
                    missingItemErrors.push("Task " + task.ItemName + " from quote " + quoteId + " not found on SmartSuite.");
                    return; //ignore task if not found on SS
                }
                const updatedTask = {
                    id: SStask.id as string,
                    [quoteItems.structure["Quantity"].slug]: task.Qty / (opportunity[opportunitiesTable.structure["Minimum Hours"].slug] as number), //Qty is actually hours on a Task: adjust hours to quantity 
                    [quoteItems.structure["Line Item Description"].slug]: task.ItemDescription,
                    // hourly rate is not adjusted here because it is set in the company management solution
                };
                return updatedTask;
            }).filter(updatedTask => !!updatedTask)  //remove ignored items
            : [];

        if (missingItemErrors.length > 0) await logErrorToPly(missingItemErrors.join("; ")); //log missing items as error

        const issueDate = new Date(QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate);
        const termDaysInMs = MS_IN_A_DAY * (SSOpportunities[0][opportunitiesTable.structure["Term Days (System Field)"].slug] as number);

        const opportunityUpdate = [{
            id: SSOpportunities[0].id,
            [opportunitiesTable.structure["Quote Issue and Expiry"].slug]: {
                from_date: QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate,
                to_date: new Date(issueDate.getTime() + termDaysInMs).toISOString()
            },
            [opportunitiesTable.structure["Discount"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Discount,
            [opportunitiesTable.structure["QuickFile Status"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Status,
            [opportunitiesTable.structure["Total QuickFile Quote Price"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.TotalAmount,
            [opportunitiesTable.structure["Customer Quote Link"].slug]:
                QFQuote.Invoice_Get.Body.InvoiceDetails.DirectPreviewUri as string,
        }];

        const quoteItemsUpdate = [...SSUpdatedItems, ...SSUpdatedTasks] as {
            id: string;
            [slug: string]: string | number;
        }[];

        await SS.bulkUpdateRecords(opportunitiesTable.id, opportunityUpdate, false);
        if (quoteItemsUpdate.length > 0) await SS.bulkUpdateRecords(quoteItems.id, quoteItemsUpdate, false);
    }
    async function updateSSInvoice(invoiceId: number) {
        const invoice = await QF.invoiceGet({ InvoiceID: invoiceId });
        //TODO: implement function
    }
    async function logInvoiceSend(sentInvoice: InvoicesSent) {
        //TODO: implement function
    }
    async function logQuoteSend(sentQuote: InvoicesSent) {
        const SSOpportunities = await SS.getRecordsByFieldValues(
            opportunitiesTable.id,
            opportunitiesTable.structure["QuickFile Quote ID"].slug,
            [sentQuote.Id]);

        if (SSOpportunities.length === 0) throw new Error("No Opportunity found for sent QuickFile quote with ID " + sentQuote.Id); //throw error and break out
        if (SSOpportunities.length > 1) {
            logErrorToPly(SSOpportunities.length + " Opportunities found for sent QuickFile quote with ID " + sentQuote.Id + ". All IDs: " +
                SSOpportunities.map((opp: any) => opp.id).join(", ") + ". Proceeding with ID " + SSOpportunities[0].id);
        }
        const QFQuote = await QF.invoiceGet({ InvoiceID: sentQuote.Id });

        const issueDate = new Date(QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate);
        const termDaysInMs = MS_IN_A_DAY * (SSOpportunities[0][opportunitiesTable.structure["Term Days (System Field)"].slug] as number);

        SS.updateRecord(opportunitiesTable.id,
            SSOpportunities[0].id,
            {
                [opportunitiesTable.structure["Quote Last Sent"].slug]: sentQuote.TimeStamp,
                [opportunitiesTable.structure["QuickFile Status"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Status,
                [opportunitiesTable.structure["Quote Issue and Expiry"].slug]: {
                    from_date: QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate,
                    to_date: new Date(issueDate.getTime() + termDaysInMs).toISOString()
                },
                [opportunitiesTable.structure["Customer Quote Link"].slug]:
                    QFQuote.Invoice_Get.Body.InvoiceDetails.DirectPreviewUri as string,
            }
        )
    }
    async function logOpportunityStatusChange(estimateStatusChange: EstimatesStatusChange) {
        const SSOpportunities = await SS.getRecordsByFieldValues(
            opportunitiesTable.id,
            opportunitiesTable.structure["QuickFile Quote ID"].slug,
            [estimateStatusChange.Id]);

        if (SSOpportunities.length === 0) throw new Error("No Opportunity found for accepted/declined QuickFile quote with ID " + estimateStatusChange.Id); //throw error and break out
        if (SSOpportunities.length > 1) {
            logErrorToPly(SSOpportunities.length + " Opportunities found for accepted/declined QuickFile quote with ID " + estimateStatusChange.Id + ". All IDs: " +
                SSOpportunities.map((opp: any) => opp.id).join(", ") + ". Proceeding with ID " + SSOpportunities[0].id);
        }
        const QFQuote = await QF.invoiceGet({ InvoiceID: estimateStatusChange.Id });

        SS.updateRecord(opportunitiesTable.id,
            SSOpportunities[0].id,
            {
                [opportunitiesTable.structure["Response Received"].slug]:
                    QFQuote.Invoice_Get.Body.InvoiceDetails.Status === "AGREED" ? estimateStatusChange.TimeStamp : null, //only update acceptance date for agreed quotes
                [opportunitiesTable.structure["QuickFile Status"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Status,
            }
        )
    }
    async function logErrorToPly(errorMessage: string) { //emails error messages to technical@yourenergysource using Ply automation, and logs to console
        console.log(errorMessage);
        fetch(
            PLY_ERROR_LOG_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: "timestamp: " + events.Timestamp + " | " + errorMessage })
            }
        );
        return errorMessage;
    }

}



