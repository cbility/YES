import QuickFileAPIHandler from "../../../../QuickFile/dist/QuickFileAPIHandler.js";
import tables from "../../../../SmartSuite/dist/tables.js";
const { invoicesTable, SDPInvoiceItemsTable: itemsTable } = tables;
interface Input {
    APIKey: string;
    items: any[];
    invoiceName: string;
    termDays: number;
    paymentTerms: string;
    clientID: number;
    issueDate: string | null;
    currentDate: string;
    invoiceNumber: string;
    action: "create" | "update";
    invoiceID?: string;
}

export default async function createOrUpdateQFInvoice(input: Input): Promise<GeneralInvoiceGetResponse & { expiryDate: string }> {

    //amend issue date to not include time
    input.issueDate = input.issueDate ? input.issueDate.slice(0, 10) : input.issueDate;

    try {
        const QF = new QuickFileAPIHandler("6131405563",
            "fd983e91-e1bf-427b-91b2-f2b0dc7f279c", //Ply Invoice Drafter Application ID
            input.APIKey
        );

        const MS_IN_A_DAY = 24 * 60 * 60 * 1000;

        // set price items
        const invoiceItems = input.items.filter((item: Record<string, any>) => !item[itemsTable.structure["Charged Hourly?"].slug])?.map((item: Record<string, any>) => ({
            //filter for items not charged hourly
            "ItemID": 0,
            "ItemName": item[itemsTable.structure["Item Name"].slug],
            "ItemDescription": item[itemsTable.structure["Item Description"].slug],
            "ItemNominalCode": "4000",
            "Tax1": {
                "TaxName": "VAT",
                "TaxPercentage": 20.00,
            },
            "UnitCost": item[itemsTable.structure["Payment (Exc. VAT)"].slug],
            "Qty": 1
        }));
        // hourly charged items
        const invoiceTasks = input.items.filter((item: Record<string, any>) => item[itemsTable.structure["Charged Hourly?"].slug])?.map((item: Record<string, any>) => ({
            //filter for items charged hourly
            "ItemID": 0,
            "ItemName": item[itemsTable.structure["Item Name"].slug],
            "TaskDescription": item[itemsTable.structure["Item Description"].slug],
            "ItemNominalCode": "4000",
            "Tax1": {
                "TaxName": "VAT",
                "TaxPercentage": 20.00,
            },
            "HourlyRate": item[itemsTable.structure["Hourly Rate"].slug],
            "Hours": item[itemsTable.structure["Hours"].slug]
        }));

        let invoiceLines = {
            ...(invoiceItems.length != 0 ? { // include set price items if not empty
                ItemLines: {
                    ItemLine: invoiceItems
                }
            } : {}),
            ...(invoiceTasks.length != 0 ? { // include hourly items if not empty
                TaskLines: {
                    TaskLine: invoiceTasks
                }
            } : {}),
        }

        let invoiceResponse: InvoiceCreateResponse | InvoiceUpdateResponse | undefined = undefined;

        if (input.action === "create") {
            const newInvoice: InvoiceCreate = {
                InvoiceData: {
                    InvoiceDescription: input.invoiceName,
                    TermDays: input.termDays,
                    Terms: input.paymentTerms,
                    InvoiceLines: invoiceLines,
                    InvoiceType: "INVOICE",
                    ClientID: String(input.clientID),
                    Currency: "GBP",
                    Language: "en",
                    Scheduling: {
                        SingleInvoiceData: {
                            IssueDate: input.issueDate ? input.issueDate : input.currentDate,
                            InvoiceNumber: input.invoiceNumber,
                        }
                    }
                }
            }

            invoiceResponse = await QF.invoiceCreate(newInvoice);
        }
        else if (input.action === "update") {
            if (!input.invoiceID) throw new Error("Invoice ID must be defined when action is 'update'");

            const updateInvoice: InvoiceUpdate = {
                InvoiceData: {
                    InvoiceID: input.invoiceID,
                    InvoiceDescription: input.invoiceName,
                    TermDays: input.termDays,
                    Terms: input.paymentTerms,
                    InvoiceLines: invoiceLines,
                    InvoiceType: "INVOICE",
                    ClientID: String(input.clientID),
                    Currency: "GBP",
                    Language: "en",
                    Scheduling: {
                        SingleInvoiceData: {
                            IssueDate: input.issueDate ? input.issueDate : input.currentDate,
                            InvoiceNumber: input.invoiceNumber,
                        }
                    }
                }
            }

            invoiceResponse = await QF.invoiceUpdate(updateInvoice);

        } else throw new Error("Invalid action value: " + input.action);

        const invoiceGet: InvoiceGet = { InvoiceID: invoiceResponse.Invoice_Create.Body.InvoiceID };
        const invoiceDetails = await QF.invoiceGet(invoiceGet);
        const expiryDate = new Date(
            new Date(invoiceDetails.Invoice_Get.Body.InvoiceDetails.IssueDate).getTime() + input.termDays * MS_IN_A_DAY
        ).toISOString().slice(0, 10); //exclude time
        const result = { ...invoiceDetails, expiryDate };

        return result;

    } catch (err: any) {
        throw new Error(err.stack); //add stack trace to error
    }
}
//USAGE: return await createOrUpdateQFInvoice(input);

