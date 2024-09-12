import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js";
import QuickFileAPIHandler from "../QuickFileAPIHandler.js";
bootstrapEnvironment();

const QF = new QuickFileAPIHandler("6131405563",
    "8e48b467-333a-46cc-958c-a2f286dad614",
    process.env.QUICKFILE_API_KEY as string);

QF.invoiceUpdate({

    "InvoiceData": {
        InvoiceID: "33004210",
        "InvoiceType": "ESTIMATE",
        "ClientID": "2295321"
        , "InvoiceDescription": "Q00308 AMD",
        "ClientAddress":
            { "Address": "Parkview Croftamie Glasgow G63 0EU United Kingdom", "CountryISO": "GB" },
        "Currency": "GBP",
        "Language": "en",
        "TermDays": 30,
        "Terms": "Items with a set price are subject to an initial charge of 50% of the quoted price, invoiced when you have accepted the quote. We will not begin working on your project until this first 50% has been invoiced and paid. The remaining 50% will be invoiced on submission of your work.<br><br>Please note; we cannot be held responsible for issues where the government's guidance is unclear or where the government changes how they respond over time. \n\nOur advice cannot be treated as legal advice and should be seen as a guide to current best practice only.\n\nOur preferred payment is by BACS transfer to:\nENERGY SOURCE LTD\nCo-operative bank\nSort code: 08-92-99\nAccount number: 69 54 73 84",
        "InvoiceLines": {
            "ItemLines":
            {
                "ItemLine":
                    [{
                        "ItemID": 0,
                        "ItemName": "011 AMD",
                        "ItemDescription": "Replace Meters - up to 3 meters",
                        "ItemNominalCode": "4000",
                        "Tax1":
                        {
                            "TaxName": "VAT",
                            "TaxPercentage": 20.00
                        },
                        "UnitCost": 380.0,
                        "Qty": 1
                    }]
            }
        },
        Scheduling: {
            SingleInvoiceData: {
                IssueDate: "2024-07-31",
                InvoiceNumber: "000888"
            }
        }
    }
}
).then(console.log)
