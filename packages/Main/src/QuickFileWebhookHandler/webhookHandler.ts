import QuickFileAPIHandler from "../../../QuickFile/dist/QuickFileAPIHandler.js";
import SmartSuiteAPIHandler from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js";
import tables from "../../../SmartSuite/dist/tables.js"
import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js";
import type { RecordFromTableID } from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js"

const { invoicesTable, SDPInvoiceItemsTable, invoiceTemplatesTable, opportunitiesTable, quoteItemsTable } = tables;

if (process.env.NODE_ENV !== "production") {
    await bootstrapEnvironment();
}

const MS_IN_A_DAY = 24 * 60 * 60 * 1000;
const PLY_ERROR_LOG_URL = "https://app-server.ply.io/api/incoming/webhooks/RKMxR0PJ/";
const INVOICING_TEAM_ID = "6694e97231153a5c57cefb61";
let cachedTeams: Team[] = []; //cache for teams used through function i.e. invoicing team

process.on('uncaughtException', async function (err) { //handle uncaught exceptions
    console.log(err);
    await fetch(
        PLY_ERROR_LOG_URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Webhook handler Uncaught exception: ' + err,
                link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#logsV2:log-groups/log-group/$252Faws$252Flambda$252FquickFileWebhookHandler"
            })
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
            switch (newInvoice.InvoiceType) {
                case "REC": {
                    console.log("New Recurring Invoice ID: " + newInvoice.Id);
                    //upsert new template invoice to SS table
                    await createNewInvoiceTemplates([newInvoice.Id]);
                    break;
                }
                case "INV": {
                    if (newInvoice.FromRecurring) {
                        console.log("New Invoice from recurring template ID: " + newInvoice.Id + ", template ID " + newInvoice.RecurringParentId);
                        //create new recurring invoice if not existing
                        await createNewRecurringInvoices([newInvoice]);
                    } else {
                        //create invoice if not existing
                        console.log("New Invoice: " + newInvoice.Id);
                        await createNewSDPInvoices([newInvoice]);
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
                            console.log("Updated Recurring Invoice Template ID: " + updatedInvoice.Id);
                            await updateSSInvoiceTemplates([updatedInvoice.Id]);
                            break;
                        }
                        case "INV": {
                            console.log("Updated Invoice ID: " + updatedInvoice.Id);
                            try {
                                await updateSDPInvoices([updatedInvoice.Id]);
                            } catch (error) {
                                await logErrorToPly(error as Error);
                            }
                            break;
                        }
                        case "EST": {
                            console.log("Updated Estimate ID: " + updatedInvoice.Id);
                            try {
                                await updateSSOpportunity(updatedInvoice.Id);
                            } catch (error) {
                                await logErrorToPly(error as Error);
                            }
                            break;
                        }
                    }
                }
                break;
            }
            case "InvoicesPayment": {
                console.log(events.InvoicesPayment?.length + "new payments recorded: " + events.InvoicesPayment?.map(invoice => invoice.InvoiceId).join(","));
                try {
                    await updateSDPInvoices(events.InvoicesPayment!.map(invoice => invoice.InvoiceId))
                } catch (error) {
                    await logErrorToPly(error as Error);
                }
                break;
            }
            case "InvoicesPaid": {
                console.log(events.InvoicesPaid?.length + " invoices marked as paid: " + events.InvoicesPaid?.map(invoice => invoice.InvoiceId).join(","));
                try {
                    await updateSDPInvoices(events.InvoicesPaid!.map(invoice => invoice.InvoiceId))
                } catch (error) {
                    await logErrorToPly(error as Error);
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
                                /*  TODO: wait for QuickFile to implement webhooks for sent reminder emails, then finish this block
                                //check if invoice or reminder was sent
                                const recentEvents = await QF.system_SearchEvents({
                                    SearchParameters: {
                                        ReturnCount: 200, //max
                                        FromDateTime: sentInvoice.TimeStamp.slice(0, 10), //on day of event
                                        SearchType: {
                                            SearchType: "Invoice",
                                            RefID: String(sentInvoice.Id),
                                        }
                                    }
                                });
                                const sendEvent = recentEvents.System_SearchEvents.Body.Events?.Event.find(event => event.EventTime === sentInvoice.TimeStamp);
                                if (!sendEvent) await logErrorToPly(new Error("No invoice send events found for sent invoice, id " + sentInvoice.Id));
                                if (sendEvent?.Note.includes("Reminder")) {
                                    if (sendEvent?.Note.includes("First Overdue Reminder")) {
                                        await logInvoiceReminder([{ sentInvoice, reminderNumber: 1 }]);
                                    }
                                    if (sendEvent?.Note.includes("Second Overdue Reminder")) {
                                        await logInvoiceReminder([{ sentInvoice, reminderNumber: 2 }]);
                                    }
                                    if (sendEvent?.Note.includes("Third Overdue Reminder")) {
                                        await logInvoiceReminder([{ sentInvoice, reminderNumber: 3 }]);
                                    }
                                } else { //if invoice is not a reminder or no event log is found
                                 */
                                await logInvoicesSend([sentInvoice]);
                                // }
                                break;
                            }
                            case "REC": {
                                await logErrorToPly(new Error("Recurring Invoice template logged as sent, id " + sentInvoice.Id));
                                break;
                            }
                        }
                    } catch (error) {
                        await logErrorToPly(error as Error);
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
                        await logErrorToPly(error as Error);
                    }
                }
                break;
            }
            case "PaymentsCreated": {
                console.log(events.PaymentsCreated?.length + " new payments created for Invoices: " + events.PaymentsCreated?.map(payment => payment.InvoiceId).join(","));
                try {
                    await updateSDPInvoices(events.PaymentsCreated!.map(payment => payment.InvoiceId))
                } catch (error) {
                    await logErrorToPly(error as Error);
                }
                break;
            }
            case "InvoicesDeleted": {
                console.log(events.InvoicesDeleted?.length + " Invoices deleted.");
                for (const deletedInvoiceEvent of events.InvoicesDeleted!) {
                    const deletedInvoice = await QF.invoiceGet({ InvoiceID: deletedInvoiceEvent.Id });
                    switch (deletedInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceType) {
                        case "INVOICE": {
                            try {
                                console.log("Invoice with ID " + deletedInvoiceEvent.Id + " deleted. Updating Invoice record...");
                                await updateSDPInvoices([deletedInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceID]);
                            } catch (error) {
                                await logErrorToPly(error as Error);
                            }
                            break;
                        }
                        case "ESTIMATE": {
                            try {
                                console.log("Estimate with ID " + deletedInvoiceEvent.Id + " deleted. Updating Opportunity record...");
                                await updateSSOpportunity(deletedInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceID, deletedInvoice);
                            } catch (error) {
                                await logErrorToPly(error as Error);
                            }
                            break;
                        }
                        case "RECURRING": {
                            try {
                                console.log("Reurring Template with ID " + deletedInvoiceEvent.Id + " deleted. Updating Template record...");
                                await updateSSInvoiceTemplates([deletedInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceID]);
                            } catch (error) {
                                await logErrorToPly(error as Error);
                            }
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


    async function createNewInvoiceTemplates(invoiceTemplateIDs: number[]): Promise<RecordFromTableID<typeof invoiceTemplatesTable.id>[]> {
        /*
       Create new recurring invoice template with client ID, discount, QuickFile status, invoice ID, invoice Number, interval, start date and Total Payment amount
       Ignore if record already exists
       Assign the record to the Invoicing team
       */
        const existingTemplates = await SS.getRecordsByFieldValues(invoiceTemplatesTable.id,
            invoiceTemplatesTable.structure["QuickFile Invoice Template ID"].slug,
            invoiceTemplateIDs
        )
        const nonExistingInvoiceTemplateIDs = invoiceTemplateIDs.filter(invoiceTemplateID => !existingTemplates.find(existingTemplate =>
            existingTemplate[invoiceTemplatesTable.structure["QuickFile Invoice Template ID"].slug] == invoiceTemplateID)
        )

        if (nonExistingInvoiceTemplateIDs.length === 0) {
            console.log("All new invoice templates already exist")
            return [];
        }
        const invoicingTeam = await getTeam(INVOICING_TEAM_ID);
        const newSSTemplates: Omit<Update<RecordFromTableID<typeof invoiceTemplatesTable.id>>, "id">[] = [];
        for (const invoiceTemplateID of nonExistingInvoiceTemplateIDs) {
            try {
                const QFTemplate = await QF.invoiceGet({ InvoiceID: invoiceTemplateID }) as RecurringTemplateGetResponse;
                console.log(`New Invoice Template: ${JSON.stringify(QFTemplate, null, 2)}`);

                const quickFileStatusValue = invoiceTemplatesTable.structure["QuickFile Status (System Field)"].choices.find(choice => choice.label === QFTemplate.Invoice_Get.Body.InvoiceDetails.Status
                )?.value as string;
                if (!quickFileStatusValue) throw new Error("QF Invoice Status '" + QFTemplate.Invoice_Get.Body.InvoiceDetails.Status + "' is not found in the existing options " +
                    invoiceTemplatesTable.structure["QuickFile Status (System Field)"].choices.map(choice => choice.label).join(", "));

                const updatedSSTemplate = {
                    [invoiceTemplatesTable.structure["QuickFile Invoice Number"].slug]: QFTemplate.Invoice_Get.Body.InvoiceDetails.InvoiceNumber as string,
                    [invoiceTemplatesTable.structure["QuickFile Invoice Template ID"].slug]: QFTemplate.Invoice_Get.Body.InvoiceDetails.InvoiceID,
                    [invoiceTemplatesTable.structure["QuickFile Invoice Client ID"].slug]: String(QFTemplate.Invoice_Get.Body.InvoiceDetails.ClientID) as string,
                    [invoiceTemplatesTable.structure["Discount"].slug]: QFTemplate.Invoice_Get.Body.InvoiceDetails.Discount,
                    [invoiceTemplatesTable.structure["Total Payment (Inc. VAT) (System Field)"].slug]: QFTemplate.Invoice_Get.Body.InvoiceDetails.TotalAmount,
                    [invoiceTemplatesTable.structure["QuickFile Status (System Field)"].slug]:
                        quickFileStatusValue,
                    [invoiceTemplatesTable.structure["Assigned To"].slug]: invoicingTeam.members as string[],
                    [invoiceTemplatesTable.structure["Interval"].slug]: QFTemplate.Invoice_Get.Body.InvoiceDetails.RecurringProfileSettings.Interval as string,
                    [invoiceTemplatesTable.structure["Start Date"].slug]: {
                        date: QFTemplate.Invoice_Get.Body.InvoiceDetails.RecurringProfileSettings.StartDate,
                        include_time: false,
                    } as DateFieldCell
                }
                newSSTemplates.push(updatedSSTemplate);
            } catch (error) {
                await logErrorToPly((error as Error));
            }
        }
        const createdTemplates = await SS.bulkAddNewRecords(invoiceTemplatesTable.id,
            newSSTemplates,
        );
        return createdTemplates;
    }
    async function updateSSInvoiceTemplates(templateIds: number[]): Promise<RecordFromTableID<typeof invoiceTemplatesTable.id>[]> {
        /*
        Update invoice template with client ID, QuickFile Status, Discount, Invoice Number, interval, start date and Total Payment amount
        */
        //create list for storing updated template objects
        const updatedSSTemplates: Update<RecordFromTableID<typeof invoiceTemplatesTable.id>>[] = [];
        //get existing template objects from SS
        const existingSSTemplates = await SS.getRecordsByFieldValues(invoiceTemplatesTable.id,
            invoiceTemplatesTable.structure["QuickFile Invoice Template ID"].slug,
            templateIds);

        for (const templateID of templateIds) {
            try {
                const existingSSTemplate = existingSSTemplates.find(existingTemplate =>
                    existingTemplate[invoiceTemplatesTable.structure["QuickFile Invoice Template ID"].slug] == templateID);
                if (!existingSSTemplate) throw new Error("Updated invoice Template with ID " + templateID + " not found on SmartSuite");
                const QFTemplate = await QF.invoiceGet({ InvoiceID: templateID }) as RecurringTemplateGetResponse;
                console.log(`Updated invoice template: ${JSON.stringify(QFTemplate, null, 2)}`);

                const quickFileStatusValue = invoiceTemplatesTable.structure["QuickFile Status (System Field)"].choices.find(choice => choice.label === QFTemplate.Invoice_Get.Body.InvoiceDetails.Status
                )?.value as string;
                if (!quickFileStatusValue) throw new Error("QF Invoice Status '" + QFTemplate.Invoice_Get.Body.InvoiceDetails.Status + "' is not found in the existing options " +
                    invoiceTemplatesTable.structure["QuickFile Status (System Field)"].choices.map(choice => choice.label).join(", "));

                const updatedSSTemplate = {
                    application_id: invoiceTemplatesTable.id,
                    id: existingSSTemplate.id,
                    [invoiceTemplatesTable.structure["QuickFile Invoice Client ID"].slug]: String(QFTemplate.Invoice_Get.Body.InvoiceDetails.ClientID) as string,
                    [invoiceTemplatesTable.structure["QuickFile Invoice Number"].slug]: QFTemplate.Invoice_Get.Body.InvoiceDetails.InvoiceNumber as string,
                    [invoiceTemplatesTable.structure["Total Payment (Inc. VAT) (System Field)"].slug]: QFTemplate.Invoice_Get.Body.InvoiceDetails.TotalAmount as number,
                    [invoiceTemplatesTable.structure["QuickFile Status (System Field)"].slug]:
                        quickFileStatusValue,
                    [invoiceTemplatesTable.structure["Interval"].slug]: QFTemplate.Invoice_Get.Body.InvoiceDetails.RecurringProfileSettings.Interval as string,
                    [invoiceTemplatesTable.structure["Start Date"].slug]: {
                        date: QFTemplate.Invoice_Get.Body.InvoiceDetails.RecurringProfileSettings.StartDate,
                        include_time: false,
                    } as DateFieldCell,
                    [invoiceTemplatesTable.structure["Discount"].slug]: QFTemplate.Invoice_Get.Body.InvoiceDetails.Discount as number,
                }
                updatedSSTemplates.push(updatedSSTemplate);
            } catch (error) {
                await logErrorToPly((error as Error));
            }
        }
        const updatedTemplates = await SS.bulkUpdateRecords(invoiceTemplatesTable.id,
            updatedSSTemplates,
            false
        );
        return updatedTemplates;
    }
    /**
        Checks if an invoice exists already and if not creates a new invoice linked to recurring invoice template.
        Create invoice with link to recurring template, issue and due date, discount, total amount, Client ID, Invoice ID and QuickFile status to match QuickFile
            Also sets Invoice Type and assigns the record to the Invoicing team.
        */
    async function createNewRecurringInvoices(newInvoices: RecurringInvoicesCreated[]): Promise<RecordFromTableID<typeof invoicesTable.id>[]> {

        let newSSInvoices: Omit<Update<RecordFromTableID<typeof invoicesTable.id>>, "id">[] = [];

        const existingSSinvoices = await SS.getRecordsByFieldValues(invoicesTable.id,
            invoicesTable.structure["QuickFile Invoice ID"].slug,
            newInvoices.map(newInvoice => newInvoice.Id)
        );

        const nonExistingNewInvoices = newInvoices.filter(newInvoice => !existingSSinvoices.find(existingInvoice => existingInvoice[invoicesTable.structure["QuickFile Invoice ID"].slug] == newInvoice.Id));

        if (nonExistingNewInvoices.length === 0) throw new Error("All new invoices already have SS records");

        const SSinvoiceTemplates = await SS.getRecordsByFieldValues(invoiceTemplatesTable.id,
            invoiceTemplatesTable.structure["QuickFile Invoice Template ID"].slug,
            newInvoices.map(newInvoice => newInvoice.RecurringParentId)
        );

        for (const newInvoice of nonExistingNewInvoices) {

            let SSInvoiceTemplate = SSinvoiceTemplates.find(template => template[invoiceTemplatesTable.structure["QuickFile Invoice Template ID"].slug] == newInvoice.RecurringParentId)
            if (!SSInvoiceTemplate) {
                await logErrorToPly(new Error("SS Recurring template with ID " + newInvoice.RecurringParentId + " not found on SS. Adding to SS."));
                SSInvoiceTemplate = (await createNewInvoiceTemplates([newInvoice.RecurringParentId]))[0];
            }

            const invoicingTeam = await getTeam(INVOICING_TEAM_ID); //get IDs of invoicing team utilising caching
            const QFInvoice = await QF.invoiceGet({ InvoiceID: newInvoice.Id });
            console.log(`New Invoice from recurring template: ${JSON.stringify(QFInvoice, null, 2)}`);

            const issueDate = QFInvoice.Invoice_Get.Body.InvoiceDetails.IssueDate;
            const termDaysInMs = QFInvoice.Invoice_Get.Body.InvoiceDetails.TermDays * 24 * 60 * 60 * 1000;
            const expiryDate = new Date(new Date(issueDate).getTime() + termDaysInMs).toISOString();
            const qfInvoiceStatusValue = invoicesTable.structure["QuickFile Invoice Status (System Field)"].choices.find(choice => choice.label === QFInvoice.Invoice_Get.Body.InvoiceDetails.Status
            )?.value as string;
            if (!qfInvoiceStatusValue) throw new Error("QF Invoice Status '" + QFInvoice.Invoice_Get.Body.InvoiceDetails.Status + "' is not found in the existing options " +
                invoicesTable.structure["QuickFile Invoice Status (System Field)"].choices.map(choice => choice.label).join(", "));
            const newSSInvoice = {
                [invoicesTable.structure["Due Date"].slug]: {
                    from_date: {
                        date: issueDate,
                        include_time: false
                    },
                    to_date: {
                        date: expiryDate,
                        include_time: false
                    }
                } as DueDateFieldCell,
                [invoicesTable.structure["QuickFile Invoice ID"].slug]: QFInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceID as number,
                [invoicesTable.structure["Service Invoice Template"].slug]: [SSInvoiceTemplate.id] as string[],
                [invoicesTable.structure["Discount"].slug]: QFInvoice.Invoice_Get.Body.InvoiceDetails.Discount as number,
                [invoicesTable.structure["Total Gross Payment"].slug]: QFInvoice.Invoice_Get.Body.InvoiceDetails.TotalAmount as number,
                [invoicesTable.structure["Invoice QuickFile Client ID"].slug]: String(QFInvoice.Invoice_Get.Body.InvoiceDetails.ClientID) as string,
                [invoicesTable.structure["QuickFile Invoice Status (System Field)"].slug]: qfInvoiceStatusValue,
                [invoicesTable.structure["Assigned To"].slug]: invoicingTeam.members as string[],
                [invoicesTable.structure["Invoice Type"].slug]: "OC8HP" as const, //recurring invoice
                [invoicesTable.structure["QuickFile Invoice Number"].slug]: QFInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceNumber as string,
            }
            newSSInvoices.push(newSSInvoice);
        }
        if (newSSInvoices.length > 0) {
            return await SS.bulkAddNewRecords(invoicesTable.id,
                newSSInvoices,
            )
        } else return [];
    }
    /**
        Check if invoices already exist in SS.
            Takes no action if exists already (invoice has been created from SS)
        Creates if does not exist
            Create invoice with issue and due date, discount, total amount, Client ID, Invoice ID, Invoice number and QuickFile status to match QuickFile
                Also sets invoice type and assigned to
            Doesn't link SDP items as can't tell what project the invoice is for
            Assigns the record to the Invoicing team.
        */
    async function createNewSDPInvoices(newInvoices: InvoicesCreated[]): Promise<RecordFromTableID<typeof invoicesTable.id>[]> {

        const SSInvoices = await SS.getRecordsByFieldValues(
            invoicesTable.id,
            invoicesTable.structure["QuickFile Invoice ID"].slug,
            newInvoices.map(newInvoice => newInvoice.Id));

        let newSSInvoices: Omit<Update<RecordFromTableID<typeof invoicesTable.id>>, "id">[] = [];
        for (const newInvoice of newInvoices) {
            const existingInvoice = SSInvoices.find(existingInvoice => existingInvoice[invoicesTable.structure["QuickFile Invoice ID"].slug] == newInvoice.Id)
            if (existingInvoice) {
                console.log("Invoice with ID " + newInvoice.Id + " already exists on SmartSuite");
                continue; //do nothing if invoice already exists
            }
            console.log("Invoice with ID " + newInvoice.Id + " does not exist on SmartSuite. Creating invoice...")
            const invoicingTeam = await getTeam(INVOICING_TEAM_ID); //get IDs of invoicing team utilising caching
            const QFInvoice = await QF.invoiceGet({ InvoiceID: newInvoice.Id });
            console.log(`New Invoice: ${JSON.stringify(QFInvoice, null, 2)}`);

            const issueDate = QFInvoice.Invoice_Get.Body.InvoiceDetails.IssueDate;
            const termDaysInMs = QFInvoice.Invoice_Get.Body.InvoiceDetails.TermDays * 24 * 60 * 60 * 1000;
            const expiryDate = new Date(new Date(issueDate).getTime() + termDaysInMs).toISOString();
            const qfInvoiceStatusValue = invoicesTable.structure["QuickFile Invoice Status (System Field)"].choices.find(choice => choice.label === QFInvoice.Invoice_Get.Body.InvoiceDetails.Status
            )?.value as string;
            if (!qfInvoiceStatusValue) throw new Error("QF Invoice Status '" + QFInvoice.Invoice_Get.Body.InvoiceDetails.Status + "' is not found in the existing options " +
                invoicesTable.structure["QuickFile Invoice Status (System Field)"].choices.map(choice => choice.label).join(", "));;
            const newSSInvoice = {
                [invoicesTable.structure["QuickFile Invoice ID"].slug]: QFInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceID as number,
                [invoicesTable.structure["Due Date"].slug]: {
                    from_date: {
                        date: issueDate,
                        include_time: false
                    },
                    to_date: {
                        date: expiryDate,
                        include_time: false
                    }
                } as DueDateFieldCell,
                [invoicesTable.structure["Discount"].slug]: QFInvoice.Invoice_Get.Body.InvoiceDetails.Discount as number,
                [invoicesTable.structure["Total Gross Payment"].slug]: QFInvoice.Invoice_Get.Body.InvoiceDetails.TotalAmount as number,
                [invoicesTable.structure["Invoice QuickFile Client ID"].slug]: String(QFInvoice.Invoice_Get.Body.InvoiceDetails.ClientID) as string,
                [invoicesTable.structure["QuickFile Invoice Status (System Field)"].slug]: qfInvoiceStatusValue,
                [invoicesTable.structure["Assigned To"].slug]: invoicingTeam.members as string[],
                [invoicesTable.structure["QuickFile Invoice Number"].slug]: QFInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceNumber as string,
                [invoicesTable.structure["Invoice Type"].slug]: "x01tk" as const, //single invoice
            }
            newSSInvoices.push(newSSInvoice);
        }
        if (newSSInvoices.length > 0) {
            return await SS.bulkAddNewRecords(invoicesTable.id,
                newSSInvoices,
            );
        } else return [];
    }
    async function updateSDPInvoices(invoiceIds: number[]): Promise<{ updatedInvoices: RecordFromTableID<typeof invoicesTable.id>[], updatedItems: RecordFromTableID<typeof SDPInvoiceItemsTable.id>[] }> {
        /*
       Update SmartSuite Invoice issue and due date, discount, total amount, Client ID, All Payment Received date, Invoice number and QuickFile status to match QuickFile
       Update SmartSuite Invoice Items price, line item description, hourly rate and hours to match QuickFile
       */
        const SSInvoices = await SS.getRecordsByFieldValues(
            invoicesTable.id,
            invoicesTable.structure["QuickFile Invoice ID"].slug,
            invoiceIds);
        if (SSInvoices.length === 0) throw new Error("No Invoices found for QuickFile Invoice ID(s) " + invoiceIds.join(", ") + ". The webhook handler tried to update these invoices."); //throw error and break out

        const allSSInvoiceItems = await SS.getRecordsByFieldValues(
            SDPInvoiceItemsTable.id,
            SDPInvoiceItemsTable.structure["QuickFile Invoice ID"].slug,
            invoiceIds);

        for (const invoiceId of invoiceIds) {
            try {
                //set updated invoice values
                const SSInvoice = SSInvoices.find(_SSInvoice => _SSInvoice[invoicesTable.structure["QuickFile Invoice ID"].slug] == invoiceId);
                if (!SSInvoice) throw new Error("No SmartSuite Invoice found for QuickFile Invoice ID " + invoiceId + ". The Webhook handler tried to update this invoice.");
                const QFInvoice = await QF.invoiceGet({ InvoiceID: invoiceId });
                console.log(`Updated Invoice: ${JSON.stringify(QFInvoice, null, 2)}`);
                if (QFInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceType !== "INVOICE") throw new Error("Handler expected an invoice of type INVOICE but received type + " +
                    QFInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceType + " when processing invoice ID " + QFInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceID)

                //set invoice values
                const issueDate = QFInvoice.Invoice_Get.Body.InvoiceDetails.IssueDate;
                const termDaysInMs = QFInvoice.Invoice_Get.Body.InvoiceDetails.TermDays * 24 * 60 * 60 * 1000;
                const expiryDate = new Date(new Date(issueDate).getTime() + termDaysInMs).toISOString();
                SSInvoice[invoicesTable.structure["Due Date"].slug] = {
                    from_date: { date: issueDate, include_time: false },
                    to_date: { date: expiryDate, include_time: false }
                } as DueDateFieldCell;
                SSInvoice[invoicesTable.structure["Discount"].slug] = QFInvoice.Invoice_Get.Body.InvoiceDetails.Discount as number;
                SSInvoice[invoicesTable.structure["QuickFile Invoice Number"].slug] = QFInvoice.Invoice_Get.Body.InvoiceDetails.InvoiceNumber as string;
                SSInvoice[invoicesTable.structure["Total Gross Payment"].slug] = QFInvoice.Invoice_Get.Body.InvoiceDetails.TotalAmount as number;
                SSInvoice[invoicesTable.structure["Invoice QuickFile Client ID"].slug] = String(QFInvoice.Invoice_Get.Body.InvoiceDetails.ClientID) as string;

                const qfInvoiceStatusValue = invoicesTable.structure["QuickFile Invoice Status (System Field)"].choices.find(choice =>
                    choice.label === QFInvoice.Invoice_Get.Body.InvoiceDetails.Status
                )?.value; //single select fields are set by value instead of label
                if (!qfInvoiceStatusValue) throw new Error("QF Invoice Status '" + QFInvoice.Invoice_Get.Body.InvoiceDetails.Status + "' is not found in the existing options " +
                    invoicesTable.structure["QuickFile Invoice Status (System Field)"].choices.map(choice => choice.label).join(", "));

                (SSInvoice[invoicesTable.structure["QuickFile Invoice Status (System Field)"].slug] as string) = qfInvoiceStatusValue;
                (SSInvoice[invoicesTable.structure["All Payment Received"].slug] as DateFieldCell | null) =
                    QFInvoice.Invoice_Get.Body.InvoiceDetails.PaidDate ?
                        {
                            date: QFInvoice.Invoice_Get.Body.InvoiceDetails.PaidDate,
                            include_time: false
                        } : null;

                let itemErrors: string[] = [];

                //get SS items in this invoice
                const SSInvoiceItems = allSSInvoiceItems.filter(item => item[SDPInvoiceItemsTable.structure["QuickFile Invoice ID"].slug] == invoiceId)

                const QFItems = QFInvoice.Invoice_Get.Body.InvoiceDetails.ItemLines?.Item ?? [];
                const QFTasks = QFInvoice.Invoice_Get.Body.InvoiceDetails.TaskLines?.Task ?? [];

                //set updated invoice item values
                for (const SSItem of SSInvoiceItems) {
                    const QFitem = QFItems.find(_QFItem => ((SSItem[SDPInvoiceItemsTable.structure["Item Name"].slug] as string).slice(0, 7) === _QFItem.ItemName?.slice(0, 7)));
                    const QFTask = QFTasks.find(_QFTask => ((SSItem[SDPInvoiceItemsTable.structure["Item Name"].slug] as string).slice(0, 7) === _QFTask.ItemName?.slice(0, 7)));
                    try {
                        if (!QFitem && !QFTask) throw new Error("No QF item or task found for SS invoice item " + SSItem[SDPInvoiceItemsTable.structure["Item Name"].slug]);
                        if (QFitem && QFTask) throw new Error("QF item AND QF task found for SS invoice item " + SSItem[SDPInvoiceItemsTable.structure["Item Name"].slug]);
                        //set values
                        if (QFitem) {
                            SSItem[SDPInvoiceItemsTable.structure["Price"].slug] = QFitem.UnitCost;
                            SSItem[SDPInvoiceItemsTable.structure["Item Description"].slug] = QFitem.ItemDescription;
                        } else if (QFTask) {
                            SSItem[SDPInvoiceItemsTable.structure["Hours"].slug] = QFTask.Qty;
                            SSItem[SDPInvoiceItemsTable.structure["Hourly Rate"].slug] = QFTask.UnitCost;
                            SSItem[SDPInvoiceItemsTable.structure["Item Description"].slug] = QFTask.ItemDescription;
                        }
                    } catch (error) {
                        itemErrors.push((error as Error).toString());
                    }
                }
                if (itemErrors.length > 0) await logErrorToPly(new Error(itemErrors.join(" | ") + ". Updating invoice with ID " + invoiceId + ", SS ID " + SSInvoice.id)); //log all item error with one message
            } catch (error) {
                await logErrorToPly(error as Error);
            }
        }
        //update SS invoices
        const updatedInvoices = await SS.bulkUpdateRecords(invoicesTable.id,
            SSInvoices,
            false
        );
        //update invoice items
        if (allSSInvoiceItems.length > 0) {
            const updatedItems = await SS.bulkUpdateRecords(SDPInvoiceItemsTable.id,
                allSSInvoiceItems,
                false
            );
            return { updatedInvoices, updatedItems };
        }
        return { updatedInvoices, updatedItems: [] };
    }
    async function logInvoicesSend(sentInvoices: InvoicesSent[]): Promise<RecordFromTableID<typeof invoicesTable.id>[]> {
        /*
        Update invoice sent date, quickfile status, issue date, and expiry date
        */
        const invoiceIDs = sentInvoices.map((invoice => invoice.Id));
        const SSInvoices = await SS.getRecordsByFieldValues(
            invoicesTable.id,
            invoicesTable.structure["QuickFile Invoice ID"].slug,
            invoiceIDs);

        if (SSInvoices.length === 0) {
            await logErrorToPly(new Error("No SS Invoices found for sent QF Invoices with IDs " + invoiceIDs.join(", ")));
            return [];
        }
        //update SS invoices on send to catch cases where invoice is updated and sent in one action
        await updateSDPInvoices(sentInvoices.map(invoice => invoice.Id));

        for (const sentInvoice of sentInvoices) {
            try {


                const SSInvoice = SSInvoices.find(_SSInvoice => _SSInvoice[invoicesTable.structure["QuickFile Invoice ID"].slug] == sentInvoice.Id);
                if (!SSInvoice) throw new Error("No SS Invoice found for invoice ID " + sentInvoice.Id + ". The webhook handler tried to mark this invoice as sent");
                const QFInvoice = await QF.invoiceGet({ InvoiceID: sentInvoice.Id });
                SSInvoice[invoicesTable.structure["Sent Date"].slug] = {
                    date: sentInvoice.TimeStamp,
                    include_time: true,
                };
                const quickFileStatusValue = invoicesTable.structure[
                    "QuickFile Invoice Status (System Field)"
                ].choices.find(choice =>
                    choice.label === QFInvoice.Invoice_Get.Body.InvoiceDetails.Status
                )?.value as string; //single select field must be set using field value, not label

                if (!quickFileStatusValue) throw new Error("QF Invoice Status '" + QFInvoice.Invoice_Get.Body.InvoiceDetails.Status + "' is not found in the existing options " +
                    invoicesTable.structure["QuickFile Invoice Status (System Field)"].choices.map(choice => choice.label).join(", "));

                SSInvoice[invoicesTable.structure["QuickFile Invoice Status (System Field)"].slug] = quickFileStatusValue;

                const issueDate = QFInvoice.Invoice_Get.Body.InvoiceDetails.IssueDate;
                const termDaysInMs = QFInvoice.Invoice_Get.Body.InvoiceDetails.TermDays * 24 * 60 * 60 * 1000;
                const expiryDate = new Date(new Date(issueDate).getTime() + termDaysInMs).toISOString();

                SSInvoice[invoicesTable.structure["Due Date"].slug] = {
                    from_date: {
                        date: issueDate,
                        include_time: false
                    },
                    to_date: {
                        date: expiryDate,
                        include_time: false
                    }
                }
                QFInvoice.Invoice_Get.Body.InvoiceDetails.Status;

            } catch (error) {
                logErrorToPly(error as Error)
            }
        }
        return await SS.bulkUpdateRecords(
            invoicesTable.id,
            SSInvoices,
            false
        )
    }

    async function logInvoiceReminder(invoiceReminders: { sentInvoice: InvoicesSent, reminderNumber: 1 | 2 | 3 }[]): Promise<RecordFromTableID<typeof invoicesTable.id>[]> {
        const SSRemindedInvoices = await SS.getRecordsByFieldValues(invoicesTable.id,
            invoicesTable.structure["QuickFile Invoice ID"].slug,
            invoiceReminders.map(reminder => reminder.sentInvoice.Id),
        );

        for (const remindedSSInvoice of SSRemindedInvoices) {
            try {
                const QFInvoiceReminder = invoiceReminders.find(
                    invoice => invoice.sentInvoice.Id === remindedSSInvoice[invoicesTable.structure["QuickFile Invoice ID"].slug]
                );
                if (!QFInvoiceReminder) throw new Error("Invoice that Reminder was sent for not found in returned invoices. SS record ID " + remindedSSInvoice.id);
                switch (QFInvoiceReminder.reminderNumber) {
                    case 1: remindedSSInvoice[invoicesTable.structure["First Chase"].slug] = { date: QFInvoiceReminder.sentInvoice.TimeStamp, include_time: true };
                        break;
                    case 2: remindedSSInvoice[invoicesTable.structure["Second Chase"].slug] = { date: QFInvoiceReminder.sentInvoice.TimeStamp, include_time: true };
                        break;
                    case 3: remindedSSInvoice[invoicesTable.structure["Final Chase"].slug] = { date: QFInvoiceReminder.sentInvoice.TimeStamp, include_time: true };
                        break;
                    default:
                        const exhaustiveCheck: never = QFInvoiceReminder.reminderNumber;
                        throw new Error(`Unhandled invoice reminder number: ${exhaustiveCheck}`);
                }
            } catch (error) {
                await logErrorToPly(error as Error);
            }
        }
        return await SS.bulkUpdateRecords(invoicesTable.id,
            SSRemindedInvoices,
            false);
    }

    async function updateSSOpportunity(quoteId: number, QFQuote: GeneralInvoiceGetResponse | undefined = undefined) {
        /*
        Update SmartSuite Opportunity issue and expiry, discount, total amount and QuickFile status to match QuickFile
        Update SmartSuite Quote Items price, line item description and quantity/hours  to match QuickFile
        */
        if (QFQuote === undefined) QFQuote = await QF.invoiceGet({ InvoiceID: quoteId }); //allow QF quote to be passed in if fetched earlier

        console.log(`Updated Quote: ${JSON.stringify(QFQuote, null, 2)}`);

        const SSOpportunities = await SS.getRecordsByFieldValues(
            opportunitiesTable.id,
            opportunitiesTable.structure["QuickFile Quote ID"].slug,
            [quoteId]);

        if (SSOpportunities.length === 0) throw new Error("No Opportunity found for QuickFile quote ID " + quoteId); //throw error and break out
        if (SSOpportunities.length > 1) {
            await logErrorToPly(new Error(SSOpportunities.length + " Opportunities found for QuickFile quote ID " + quoteId + ". All IDs: " +
                SSOpportunities.map((opp: any) => opp.id).join(", ") + ". Proceeding with ID " + SSOpportunities[0].id));
        }

        const opportunity = SSOpportunities[0]; //update first opportunity if there is more than one

        const SSQuoteItems = await SS.filterRecords(
            quoteItemsTable.id,
            [{
                field: quoteItemsTable.structure["Opportunity ID (System Field)"].slug,
                comparison: "is",
                value: opportunity.id,
            },
            {
                field: quoteItemsTable.structure["In Opportunity"].slug,
                comparison: "is",
                value: true,
            }],
            "and");
        const missingItemErrors: string[] = []; //collect list of missing items for error logging in async context

        const SSUpdatedItems = QFQuote.Invoice_Get.Body.InvoiceDetails.ItemLines ?
            QFQuote.Invoice_Get.Body.InvoiceDetails.ItemLines.Item.map(item => {
                if (!item.ItemName) return; //ignore system items
                const SSitem = SSQuoteItems.find(
                    (SSQuoteItem: any) => item.ItemName!.startsWith(SSQuoteItem[quoteItemsTable.structure["Sub Type Autonumber"].slug])
                );
                if (!SSitem?.id) {
                    console.log("item: " + JSON.stringify(item));
                    missingItemErrors.push("Item " + item.ItemName + " from quote " + quoteId + " not found on SmartSuite.");
                    return; //ignore item if not found on SS
                }
                const updatedItem = {
                    application_id: quoteItemsTable.id,
                    id: SSitem.id as string,
                    [quoteItemsTable.structure["Quantity"].slug]: item.Qty,
                    [quoteItemsTable.structure["Line Item Description"].slug]: item.ItemDescription,
                    [quoteItemsTable.structure["Custom Price"].slug]: (item.LineTotal / item.Qty)
                };
                return updatedItem;
            }).filter(updatedItem => !!updatedItem) //remove ignored items
            : [];

        const SSUpdatedTasks = QFQuote.Invoice_Get.Body.InvoiceDetails.TaskLines ?
            QFQuote.Invoice_Get.Body.InvoiceDetails.TaskLines.Task.map(task => {
                if (!task.ItemName) return; //ignore system items
                const SStask = SSQuoteItems.find(
                    (SSQuoteItem: any) => task.ItemName!.startsWith(SSQuoteItem[quoteItemsTable.structure["Sub Type Autonumber"].slug])
                );
                if (!SStask?.id) {
                    console.log("task: " + JSON.stringify(task));
                    missingItemErrors.push("Task " + task.ItemName + " from quote " + quoteId + " not found on SmartSuite.");
                    return; //ignore task if not found on SS
                }
                const updatedTask = {
                    application_id: quoteItemsTable.id,
                    id: SStask.id as string,
                    [quoteItemsTable.structure["Quantity"].slug]: task.Qty / (opportunity[opportunitiesTable.structure["Minimum Hours"].slug] as number), //Qty is actually hours on a Task: adjust hours to quantity 
                    [quoteItemsTable.structure["Line Item Description"].slug]: task.ItemDescription,
                    // hourly rate is not adjusted here because it is set in the company management solution
                };
                return updatedTask;
            }).filter(updatedTask => !!updatedTask)  //remove ignored items
            : [];

        if (missingItemErrors.length > 0) await logErrorToPly(new Error(missingItemErrors.join("; "))); //log missing items as error

        const issueDate = new Date(QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate);
        const termDaysInMs = MS_IN_A_DAY * (SSOpportunities[0][opportunitiesTable.structure["Term Days (System Field)"].slug] as number);

        const opportunityUpdate = [{
            application_id: opportunitiesTable.id,
            id: SSOpportunities[0].id,
            [opportunitiesTable.structure["Quote Issue and Expiry"].slug]: {
                from_date: {
                    date: QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate,
                    include_time: false
                },
                to_date: {
                    date: new Date(issueDate.getTime() + termDaysInMs).toISOString(),
                    include_time: false
                },
            },
            [opportunitiesTable.structure["Discount"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Discount,
            [opportunitiesTable.structure["QuickFile Status"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Status,
            [opportunitiesTable.structure["Total QuickFile Quote Price"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.TotalAmount,
            [opportunitiesTable.structure["Customer Quote Link"].slug]:
                QFQuote.Invoice_Get.Body.InvoiceDetails.DirectPreviewUri as string,
        }];

        const quoteItemsUpdate: Update<RecordFromTableID<typeof quoteItemsTable.id>>[] = [...SSUpdatedItems, ...SSUpdatedTasks] as Update<RecordFromTableID<typeof quoteItemsTable.id>>[];

        await SS.bulkUpdateRecords(opportunitiesTable.id, opportunityUpdate, false);
        if (quoteItemsUpdate.length > 0) await SS.bulkUpdateRecords(quoteItemsTable.id, quoteItemsUpdate, false);
    }
    async function logQuoteSend(sentQuote: InvoicesSent) {
        const SSOpportunities = await SS.getRecordsByFieldValues(
            opportunitiesTable.id,
            opportunitiesTable.structure["QuickFile Quote ID"].slug,
            [sentQuote.Id]);

        if (SSOpportunities.length === 0) throw new Error("No Opportunity found for sent QuickFile quote with ID " + sentQuote.Id); //throw error and break out
        if (SSOpportunities.length > 1) {
            logErrorToPly(new Error(SSOpportunities.length + " Opportunities found for sent QuickFile quote with ID " + sentQuote.Id + ". All IDs: " +
                SSOpportunities.map((opp: any) => opp.id).join(", ") + ". Proceeding with ID " + SSOpportunities[0].id));
        }
        const QFQuote = await QF.invoiceGet({ InvoiceID: sentQuote.Id });

        //update SS opportunity when quote sent to catch cases where quote is updated and sent in one action
        await updateSSOpportunity(sentQuote.Id, QFQuote);

        const issueDate = new Date(QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate);
        const termDaysInMs = MS_IN_A_DAY * (SSOpportunities[0][opportunitiesTable.structure["Term Days (System Field)"].slug] as number);

        SS.updateRecord(opportunitiesTable.id,
            SSOpportunities[0].id,
            {
                [opportunitiesTable.structure["Quote Last Sent"].slug]: sentQuote.TimeStamp,
                [opportunitiesTable.structure["QuickFile Status"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Status,
                [opportunitiesTable.structure["Quote Issue and Expiry"].slug]: {
                    from_date: {
                        date: QFQuote.Invoice_Get.Body.InvoiceDetails.IssueDate,
                        include_time: false
                    },
                    to_date: {
                        date: new Date(issueDate.getTime() + termDaysInMs).toISOString(),
                        include_time: false
                    }
                } as DueDateFieldCell,
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
            await logErrorToPly(new Error(SSOpportunities.length + " Opportunities found for accepted/declined QuickFile quote with ID " + estimateStatusChange.Id + ". All IDs: " +
                SSOpportunities.map((opp: any) => opp.id).join(", ") + ". Proceeding with ID " + SSOpportunities[0].id));
        }
        const QFQuote = await QF.invoiceGet({ InvoiceID: estimateStatusChange.Id });

        await SS.updateRecord(opportunitiesTable.id,
            SSOpportunities[0].id,
            {
                [opportunitiesTable.structure["Response Received"].slug]:
                    QFQuote.Invoice_Get.Body.InvoiceDetails.Status === "AGREED" ? estimateStatusChange.TimeStamp : null, //only update acceptance date for agreed quotes
                [opportunitiesTable.structure["QuickFile Status"].slug]: QFQuote.Invoice_Get.Body.InvoiceDetails.Status,
            }
        )
        console.log(`Opportunity with ID ${SSOpportunities[0].id} updated`);
    }
    async function logErrorToPly(error: Error) { //emails error messages to technical@yourenergysource using Ply automation, and logs to console
        const errorMessage = error.toString();
        const stack = error.stack;
        console.log(errorMessage);
        console.log(stack);
        await fetch(
            PLY_ERROR_LOG_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: "Quickfile Webhook handler; timestamp: " + events.Timestamp + " | " + errorMessage,
                    link: `https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#logsV2:log-groups/log-group/$252Faws$252Flambda$252FquickFileWebhookHandler/log-events/${lambdaContext?.logStreamName ?? ""}`
                })
            }
        );
        return errorMessage;
    }
    async function getTeam(teamID: string): Promise<Team> {
        //if team is cached return cached value, else request and cache it
        const cachedTeam = cachedTeams.find(team => team.id === teamID)
        if (cachedTeam) {
            return cachedTeam;
        }
        const teams = await SS.listTeams();
        const team = teams.find(team => team.id === teamID);
        if (!team) throw new Error(`Team with ID ${teamID} not found`);
        cachedTeams.push(team);
        return team;

    }
}
