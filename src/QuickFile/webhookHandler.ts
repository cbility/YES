import QuickFileAPIHandler from "./QuickFileAPIHandler.js";
import SmartSuiteAPIHandler from "../SmartSuite/SmartSuiteAPIHandler.js";
import { invoices, opportunities, quoteItems } from "../SmartSuite/tables.js"

const MS_IN_A_DAY = 24 * 60 * 60 * 1000;

process.on('uncaughtException', function (err) { //handle uncaught exceptions
    logErrorToPly('Uncaught exception: ' + err).then(console.log);
});

export default async function quickFileWebhookHandler(eventGroup: WebhookEventGroup) {

    console.log("Payload: " + JSON.stringify(eventGroup.PayLoad));
    const events = eventGroup.PayLoad;

    const QF = new QuickFileAPIHandler("6131405563",
        "7275f840-8c9a-4142-ac39-2c71b4941d78", //Webhook Handler Application ID
        "6918A4B5-2C18-4A92-8"
    );
    const SS = new SmartSuiteAPIHandler("s5ch1upc",
        "bb7afd0906f8c666a21d15daf1924ff368843cd8" //technical@ API key
    );

    if (events.InvoicesCreated) { //process invoice creation before other events so updates are managed properly
        for (const newInvoice of events.InvoicesCreated) {
            //do stuff with new invoice
            switch (newInvoice.InvoiceType) {
                case "REC": {
                    //upsert new template invoice to SS table
                    await upsertNewInvoiceTemplate(newInvoice);
                    break;
                }
                case "INV": {
                    if (newInvoice.FromRecurring) {
                        //create new recurring invoice
                        await createNewRecurringInvoice(newInvoice);
                    } else {
                        //create invoice if not existing
                        await upsertNewSDPInvoice(newInvoice);
                    }
                    break;
                }
            }
        }
    }

    for (const eventKey in events) {
        switch (eventKey) {
            case "InvoicesUpdated": {
                for (const updatedInvoice of events.InvoicesUpdated!) {
                    switch (updatedInvoice.InvoiceType) {
                        case "REC": {
                            //update template invoice in ss table
                            await updateSSInvoiceTemplate(updatedInvoice.Id);
                            break;
                        }
                        case "INV": {
                            //ss invoice update
                            try {
                                await updateSSInvoice(updatedInvoice.Id);
                            } catch (error) {
                                await logErrorToPly((error as Error).toString());
                            }
                            break;
                        }
                        case "EST": {
                            //ss opportunity update
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
                for (const paidInvoice of events.InvoicesPayment!) {
                    await updateSSInvoice(paidInvoice.InvoiceId);
                }
                break;
            }
            case "InvoicesSent": {
                for (const sentInvoice of events.InvoicesSent!) {
                    try {
                        switch (sentInvoice.InvoiceType) {
                            case "EST": {
                                await logQuoteSend(sentInvoice);
                                break;
                            }
                            case "INV": {
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
                for (const updatedEstimate of events.EstimatesStatusChange!) {
                    try {
                        await logOpportunityStatusChange(updatedEstimate);
                    } catch (error) {
                        await logErrorToPly((error as Error).toString());
                    }
                    break;
                }
                break;
            }
            case "PaymentsCreated": {
                for (const payment of events.PaymentsCreated!) {
                    //ss invoice update
                }
                break;
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
    async function updateSSOpportunity(quoteId: number) {
        /*
        Update SmartSuite Opportunity issue and expiry, discount, total amount and QuickFile status to match QuickFile
        Update SmartSuite Quote Items price, line item description and quantity/hours  to match QuickFile
        */
        const QFQuote = await QF.invoiceGet({ InvoiceID: quoteId });
        const SSOpportunities = await SS.getRecordsByFieldValues(
            opportunities.id,
            opportunities.structure["QuickFile Quote ID"].slug,
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

        const missingItemErrors: string[] = []; //collect list of missing items for error loggin in async context

        const SSUpdatedItems = QFQuote.Invoice_Get.Body.InvoiceDetails.ItemLines ?
            QFQuote.Invoice_Get.Body.InvoiceDetails.ItemLines.Item.map(item => {
                if (!item.ItemName) return; //ignore system items
                const SSitem = SSQuoteItems.find(
                    (SSQuoteItem: any) => item.ItemName!.startsWith(SSQuoteItem[quoteItems.structure["Sub Type Autonumber"].slug])
                );
                if (!SSitem?.id) {
                    console.log("item: " + item);
                    missingItemErrors.push("Ttem " + item.ItemName + " from quote " + quoteId + " not found on SmartSuite.");
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
                    console.log("item: " + task);
                    missingItemErrors.push("Task " + task.ItemName + " from quote " + quoteId + " not found on SmartSuite.");
                    return; //ignore task if not found on SS
                }
                const updatedTask = {
                    id: SStask.id as string,
                    [quoteItems.structure["Quantity"].slug]: task.Qty / opportunity[opportunities.structure["Minimum Hours"].slug], //Qty is actually hours on a Task: adjust hours to quantity 
                    [quoteItems.structure["Line Item Description"].slug]: task.ItemDescription,
                    // hourly rate is not adjusted here because it is set in the company management solution
                };
                return updatedTask;
            }).filter(updatedTask => !!updatedTask)  //remove ignored items
            : [];

        if (missingItemErrors.length > 0) await logErrorToPly(missingItemErrors.join("; ")); //log missing items as error

        const issueDate = new Date(QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate);
        const termDaysInMs = MS_IN_A_DAY * QFQuote.Invoice_Get.Body.InvoiceDetails.TermDays;

        const opportunityUpdate = [{
            id: SSOpportunities[0].id,
            [opportunities.structure["Quote Issue and Expiry"].slug]: {
                from_date: QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate,
                to_date: new Date(issueDate.getTime() + termDaysInMs).toISOString()
            },
            [opportunities.structure["Discount"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Discount,
            [opportunities.structure["QuickFile Status"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Status,
            [opportunities.structure["Total QuickFile Quote Price"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.TotalAmount,
        }];

        const quoteItemsUpdate = [...SSUpdatedItems, ...SSUpdatedTasks] as {
            id: string;
            [slug: string]: unknown
        }[];

        await SS.bulkUpdateRecords(opportunities.id, opportunityUpdate);
        await SS.bulkUpdateRecords(quoteItems.id, quoteItemsUpdate);
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
            opportunities.id,
            opportunities.structure["QuickFile Quote ID"].slug,
            [sentQuote.Id]);

        if (SSOpportunities.length === 0) throw new Error("No Opportunity found for sent QuickFile quote with ID " + sentQuote.Id); //throw error and break out
        if (SSOpportunities.length > 1) {
            logErrorToPly(SSOpportunities.length + " Opportunities found for sent QuickFile quote with ID " + sentQuote.Id + ". All IDs: " +
                SSOpportunities.map((opp: any) => opp.id).join(", ") + ". Proceeding with ID " + SSOpportunities[0].id);
        }
        const QFQuote = await QF.invoiceGet({ InvoiceID: sentQuote.Id });

        SS.updateRecord(opportunities.id,
            SSOpportunities[0].id,
            {
                [opportunities.structure["Quote Last Sent"].slug]: sentQuote.TimeStamp,
                [opportunities.structure["QuickFile Status"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Status,
            }
        )
    }
    async function logOpportunityStatusChange(estimateStatusChange: EstimatesStatusChange) {
        const SSOpportunities = await SS.getRecordsByFieldValues(
            opportunities.id,
            opportunities.structure["QuickFile Quote ID"].slug,
            [estimateStatusChange.Id]);

        if (SSOpportunities.length === 0) throw new Error("No Opportunity found for accepted/declined QuickFile quote with ID " + estimateStatusChange.Id); //throw error and break out
        if (SSOpportunities.length > 1) {
            logErrorToPly(SSOpportunities.length + " Opportunities found for accepted/declined QuickFile quote with ID " + estimateStatusChange.Id + ". All IDs: " +
                SSOpportunities.map((opp: any) => opp.id).join(", ") + ". Proceeding with ID " + SSOpportunities[0].id);
        }
        const QFQuote = await QF.invoiceGet({ InvoiceID: estimateStatusChange.Id });

        SS.updateRecord(opportunities.id,
            SSOpportunities[0].id,
            {
                [opportunities.structure["Response Received"].slug]: estimateStatusChange.TimeStamp,
                [opportunities.structure["QuickFile Status"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Status,
            }
        )
    }
}

async function logErrorToPly(message: string) { //emails error messages to technical@yourenergysource using Ply automation, and logs to console
    const plyAutomationUrl = "https://app-server.ply.io/api/incoming/webhooks/RKMxR0PJ/"
    console.log(message);
    fetch(
        plyAutomationUrl,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        }
    );
    return message;
}

