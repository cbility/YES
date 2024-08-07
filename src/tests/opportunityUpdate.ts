//update all opportunities on SmartSuite to reflect values on QuickFile

import QuickFileAPIHandler from "../QuickFile/QuickFileAPIHandler.js";
import SmartSuiteAPIHandler from "../SmartSuite/SmartSuiteAPIHandler.js";
import { opportunities, quoteItems } from "../SmartSuite/tables.js";

const MS_IN_A_DAY = 24 * 60 * 60 * 1000;

const QF = new QuickFileAPIHandler("6131405563",
    "8e48b467-333a-46cc-958c-a2f286dad614",
    "6918A4B5-2C18-4A92-8");

const SS = new SmartSuiteAPIHandler("s5ch1upc",
    "bb7afd0906f8c666a21d15daf1924ff368843cd8" //technical@ API key
);

const allOpportunities = await SS.getAllRecords(opportunities.id);
const notOnQuickFile = [];

//allOpportunities.forEach(async (opportunity: { [x: string]: any; }) => {

for (const opportunity of allOpportunities) {
    const quickFileID = opportunity[opportunities.structure["QuickFile Quote ID"].slug];
    if (!quickFileID) {
        console.log(opportunity.id + " not found on QF")
        notOnQuickFile.push(opportunity.id);
        continue;
    }
    try {
        console.log("SS ID: " + opportunity.id);
        const update = await updateSSOpportunity(quickFileID, opportunity);
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
    //console.log("Quote: ")
    //console.log(QFQuote.Invoice_Get.Body.InvoiceDetails);

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

    const issueDate = new Date(QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate);
    const termDaysInMs = MS_IN_A_DAY * QFQuote.Invoice_Get.Body.InvoiceDetails.TermDays;

    const opportunityUpdate = [{
        id: opportunity.id,
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
    console.log("Opportunity updated successfully");
    if (quoteItemsUpdate.length > 0) {
        await SS.bulkUpdateRecords(quoteItems.id, quoteItemsUpdate);
        console.log("Quote Items updated successfully");
    } else {
        console.log("No Quote Items to update");
    }
}

function logErrorToPly(arg0: string) {
    console.log(arg0);
}

