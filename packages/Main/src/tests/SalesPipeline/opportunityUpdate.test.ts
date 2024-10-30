//update all opportunities on SmartSuite to reflect values on QuickFile

import QuickFileAPIHandler from "../../../../QuickFile/dist/QuickFileAPIHandler.js";
import SmartSuiteAPIHandler from "../../../../SmartSuite/dist/SmartSuiteAPIHandler.js";
import tables from "../../../../SmartSuite/dist/tables.js";
import bootstrapEnvironment from "../../../../Common/dist/bootstrapEnvironment.js";

const { opportunitiesTable, quoteItemsTable } = tables;
if (process.env.NODE_ENV !== "production") {
    await bootstrapEnvironment();
}
const MS_IN_A_DAY = 24 * 60 * 60 * 1000;

const QF = new QuickFileAPIHandler("6131405563",
    "8e48b467-333a-46cc-958c-a2f286dad614",
    process.env.QUICKFILE_API_KEY as string);

const SS = new SmartSuiteAPIHandler("s5ch1upc",
    process.env.TECHNICAL_SMARTSUITE_KEY as string
);
(async () => {
    const allOpportunities = await SS.getAllRecords(opportunitiesTable.id);
    const notOnQuickFile = [];

    //allOpportunities.forEach(async (opportunity: { [x: string]: any; }) => {

    for (const opportunity of allOpportunities) {
        const quickFileID = opportunity[opportunitiesTable.structure["QuickFile Quote ID"].slug];
        if (!quickFileID) {
            console.log(opportunity.id + " not found on QF")
            notOnQuickFile.push(opportunity.id);
            continue;
        }
        try {
            console.log("SS ID: " + opportunity.id);
            const update = await updateSSOpportunity(quickFileID as number, opportunity);
            console.log("updated QF quote ID: " + quickFileID, " SmartSuite ID:" + opportunity.id);
            await wait(800);

        } catch (err) {
            console.log(err);
        }
    }

    console.log(notOnQuickFile.join(", "));

    function wait(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function updateSSOpportunity(quoteId: number, opportunity: { [x: string]: any; }) {
        /*
        Update SmartSuite Opportunity issue and expiry, discount, total amount and QuickFile status to match QuickFile
        Update SmartSuite Quote Items price, line item description and quantity/hours  to match QuickFile
        */
        //console.log("Opportunity:");
        //console.log(opportunity);
        const QFQuote = await QF.invoiceGet({ InvoiceID: quoteId });

        //get quote acceptance date from events log

        /*
    
        let acceptanceDate: string | null = null;
    
        const quoteEventHistory = await QF.system_SearchEvents({
            SearchParameters: {
                ReturnCount: 200,
                SearchType: {
                    SearchType: "Invoice",
                    RefID: String(quoteId),
                }
            }
        });
    
        quoteEventHistory.System_SearchEvents.Body.Events?.Event.forEach(event => {
            if (event.Note.includes("agreed")) {
                acceptanceDate = event.EventTime;
            }
        });
    
    
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
    
        const missingItemErrors: string[] = []; //collect list of missing items for error login in async context
    
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
    
        */
        const issueDate = new Date(QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate);
        const termDaysInMs = MS_IN_A_DAY * 30; //always use 30 days for term days

        const opportunityUpdate = [{
            id: opportunity.id,
            application_id: opportunitiesTable.id,
            // [opportunities.structure["Quote Issue and Expiry"].slug]: {
            //   from_date: QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate.slice(0, 10), //remove timestamp from date
            // to_date: (new Date(issueDate.getTime() + termDaysInMs).toISOString()).slice(0, 10), //remove timestamp from date
            // },
            [opportunitiesTable.structure["Discount"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Discount,
            [opportunitiesTable.structure["QuickFile Status"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Status,
            [opportunitiesTable.structure["Total QuickFile Quote Price"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.TotalAmount,
            [opportunitiesTable.structure["Customer Quote Link"].slug]:
                QFQuote.Invoice_Get.Body.InvoiceDetails.DirectPreviewUri ?? null,
            //[opportunities.structure["Response Received"].slug]: acceptanceDate,
        }];

        /*        const quoteItemsUpdate = [...SSUpdatedItems, ...SSUpdatedTasks] as {
            id: string;
            [slug: string]: unknown
        }[];
        */

        await SS.bulkUpdateRecords(opportunitiesTable.id, opportunityUpdate, false);
        console.log("Opportunity updated successfully");

        /*
        if (quoteItemsUpdate.length > 0) {
            await SS.bulkUpdateRecords(quoteItems.id, quoteItemsUpdate);
            console.log("Quote Items updated successfully");
        } else {
            console.log("No Quote Items to update");
        }
            */
    }

    function logErrorToPly(arg0: string) {
        console.log(arg0);
    }

})();