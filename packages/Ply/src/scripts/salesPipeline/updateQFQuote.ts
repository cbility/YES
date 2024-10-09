import QuickFileAPIHandler from "../../../../QuickFile/dist/QuickFileAPIHandler";

const MS_IN_A_DAY = 24 * 60 * 60 * 1000;
interface Input { APIKey: string; items: any[]; hourlyRate: number; minimumHours: number; quoteID: string; quoteName: string; termDays: number; paymentTerms: string; clientID: string; issueDate: string; currentDate: string; invoiceNumber: string; }

export default async function updateQFQuote(input: Input): Promise<GeneralInvoiceGetResponse & { expiryDate: string }> {

    const QF = new QuickFileAPIHandler("6131405563",
        "84a82f71-d19c-4c5a-b50e-797126e504fb", //Ply Quote Drafter Application ID
        input.APIKey
    );

    let quoteItems = []; // set price items
    let quoteTasks = [] // hourly charged items

    quoteItems = input.items.filter((item: Record<string, any>) => !item.sd9c921c76)?.map((item: Record<string, any>) => ({
        //filter for items not charged hourly
        "ItemID": 0,
        "ItemName": item.s5f064af81 + " " + item.sd9c00d85f, //sub type autonumber + job type code
        "ItemDescription": item.s30f4806c7,
        "ItemNominalCode": "4000",
        "Tax1": {
            "TaxName": "VAT",
            "TaxPercentage": 20.00,
        },
        "UnitCost": item.s9640ecb64,
        "Qty": item.s20b2ac406
    }));

    quoteTasks = input.items.filter((item: Record<string, any>) => item.sd9c921c76)?.map((item: Record<string, any>) => ({
        //filter for items charged hourly
        "ItemID": 0,
        "ItemName": item.s5f064af81 + " " + item.sd9c00d85f, //sub type autonumber + job type code
        "TaskDescription": item.s30f4806c7,
        "ItemNominalCode": "4000",
        "Tax1": {
            "TaxName": "VAT",
            "TaxPercentage": 20.00,
        },
        "HourlyRate": input.hourlyRate,
        "Hours": input.minimumHours * item.s20b2ac406, //standard hours times quantity
    }));

    let invoiceLines = {
        ...(quoteItems.length != 0 ? { // include set price items if not empty
            ItemLines: {
                ItemLine: quoteItems
            }
        } : {}),
        ...(quoteTasks.length != 0 ? { // include hourly items if not empty
            TaskLines: {
                TaskLine: quoteTasks
            }
        } : {}),
    }

    const newQuote: InvoiceUpdate = {
        InvoiceData: {
            InvoiceID: input.quoteID,
            InvoiceDescription: input.quoteName,
            TermDays: input.termDays,
            Terms: input.paymentTerms,
            InvoiceLines: invoiceLines,
            InvoiceType: "ESTIMATE" as "ESTIMATE",
            ClientID: input.clientID,
            Currency: "GBP",
            Language: "en",
            Scheduling: {
                SingleInvoiceData: {
                    IssueDate: input.issueDate ? input.issueDate.slice(0, 10) : input.currentDate,
                    InvoiceNumber: input.invoiceNumber,
                }
            }
        }
    }

    const updateResponse = await QF.invoiceUpdate(newQuote);

    const invoiceGet: InvoiceGet = { InvoiceID: updateResponse.Invoice_Create.Body.InvoiceID };

    const quoteDetails = await QF.invoiceGet(invoiceGet);

    const expiryDate = new Date(
        new Date(quoteDetails.Invoice_Get.Body.InvoiceDetails.IssueDate).getTime() + input.termDays * MS_IN_A_DAY
    ).toISOString().slice(0, 10); //exclude time
    const result = { ...quoteDetails, expiryDate };

    return result;
}

//USAGE: return await updateQFQuote(input);