interface RequestHeader {
    MessageType: "Request",
    SubmissionNumber: string,
    Authentication: Authentication,
}
interface Authentication {
    AccNumber: string,
    MD5Value: string,
    ApplicationID: string,
}

interface Contact {
    FirstName: string;
    Surname: string;
    Email: string;
    Password: string; //min length 6 max length 20
    TelephoneNumbers: {
        Telephone: string //formatted with + and country code
    }[] //up to two telephone numbers

}

interface ClientContacts {
    DefaultContact: Contact;
    AdditionalContacts?: { AdditionalContact: Contact }[]; //up to 10 additional contacts
}

interface ClientCreateDetails {
    CompanyName: string; //max length 100 
    AccountReference?: string; // Your own account identifier, max length 30
    AddressLine1?: string; //max length 75
    AddressLine2?: string; //max length 75
    AddressLine3?: string; //max length 75
    Town?: string; //max length 75
    CountryISO: string; //max length 3
    Postcode?: string; //max length 15
    VATNumber?: string; //max length 20
    VATExempt?: boolean;
    GoCardlessMandateID?: string; // Optional GoCardless Direct Debit mandate ID
    AllowAttachPDF?: boolean; // Set this to allow invoices/statements and estimates to be attached to emails in PDF format
    Preferences?: {
        DefaultSendMethod?: "EMAIL" | "SNAILMAIL";  //What default send method would you like to use for outbound invoices?
        DefaultCurrency?: string //max length 3, if not supplied will revert to account default
        DefaultTerm?: number; //if not supplied will revert to account default
        PaymentRestrictions?: { // A list of up to 10 restricted payment processors for this client
            PaymentRestriction?: "PAYPAL" | "GOCARDLESS" | "PAYMENTSENSE" | "BITPAY" | "STRIPE" | "WORLDPAY" | "SAGEPAY";
        }[]
        TradingStyleId?: number // The Trading Style ID where multiple trading styles are defined on the account. 
        //To locate the ID click to edit the trading style within the web application.
    }
}

interface ClientUpdateDetails extends Partial<ClientCreateDetails> {
    ClientID: number;
}

interface RequestBody { }

interface ResponseBody { }

interface ClientUpdate extends RequestBody {
    ClientDetails: ClientUpdateDetails;
    ClientContacts?: Partial<ClientContacts>;
}

interface ClientCreate extends RequestBody {
    ClientDetails: ClientCreateDetails;
    ClientContacts?: ClientContacts;
}

interface ClientGet extends RequestBody { ClientID: number; }

interface ClientInsertContacts extends RequestBody {
    ClientID: number;
    ClientContacts: Partial<ClientContacts>;
}

interface InvoiceGet extends RequestBody {
    InvoiceID: number;
}
interface InvoiceGetResponse extends ResponseBody {
    "Invoice_Get": {
        "Header": {
            "MessageType": string;
            "SubmissionNumber": string;
        },
        "Body": {
            "InvoiceDetails": {
                "InvoiceID": number;
                "CreatedDate": string; //YYYY-MM-DDTHH:MM:SS
                "InvoiceType": "INVOICE" | "ESTIMATE" | "RECURRING";
                "InvoiceNumber": string;
                "PurchaseReference": null | string;
                "Description": string;
                "IssueDate": string; //YYYY-MM-DDTHH:MM:SS
                "PaidDate": null | string; //YYYY-MM-DDTHH:MM:SS
                "ClientID": number;
                "ClientCompanyName": string;
                "ClientContactName": null | string;
                "ClientContactEmail": null | string;
                "ClientAddress": null | string;
                "ClientCountryISO": string;
                "ClientVatNumber": [
                    {
                        "#text": string
                    }
                ],
                "PayeeCompanyName": string;
                "PayeeAddress": string;
                "PayeeVatNumber": string;
                "Currency": string;
                "TotalAmount": number;
                "Discount": number;
                "Notes": null | string;
                "Viewed": Boolean;
                "TermDays": number;
                "TermNotes": null | string;
                "Language": string;
                "Status": "ACTIVE" | "PAUSED" | "AGREED" | "CONVERTED" | "DRAFT" | "SENT" | "PAIDPART" | "PAIDFULL" | "CREDIT NOTE" | "CREDITED"
                "RecurringProfileSettings": null | {}; //TODO: fill this out
                "ItemLines"?: {
                    "Item": {
                        "ItemLineID": number;
                        "CreatedDate": string; //YYYY-MM-DDTHH:MM:SS;
                        "ItemID": number;
                        "ItemName": null | string;
                        "ItemDescription": string;
                        "NominalCode": string; //4000 for default
                        "TaxName1": string;
                        "TaxPercentage1": number;
                        "UnitCost": number;
                        "Qty": number;
                        "LineTotal": number;
                    }[];
                };
                "TaskLines"?: {
                    "Task": {
                        "ItemLineID": number;
                        "CreatedDate": string; //YYYY-MM-DDTHH:MM:SS
                        "ItemID": number;
                        "ItemName": null | string;
                        "ItemDescription": string;
                        "NominalCode": string; //4000 for default
                        "TaxName1": string;
                        "TaxPercentage1": number;
                        "UnitCost": number; //hourly rate
                        "Qty": number; // hours
                        "LineTotal": number;
                    }[]
                }
                DirectPreviewUri?: string; // client side view URL
            }
        }
    }
}

interface InvoiceCreateData {
    InvoiceType: "INVOICE" | "ESTIMATE" | "RECURRING";
    ClientID: string;
    ClientContactName?: string; // Contact name to appear on the invoice. Omit node to apply default contact for the client.
    ClientAddress?: {
        Address: string;  // Use br tags to denote carriage returns.
        CountryISO: string;
    }
    Currency: string; // ISO 4217 Currency Code
    Discount?: number; // Optional discount percentage applied to invoice total.
    TermDays: number; // Number of days permitted to pay the invoice.
    Language: string; // ISO 639-1 language  code
    InvoiceDescription?: string; //invoice name. Max length 35, min length 2
    Terms?: string;
    Notes?: string;
    VATCodes?: { // Possible codes: exempt (VAT Exempt), oos (VAT Out of Scope), cisrc (CIS Reverse Charge), nisogs (EU supply of goods), niserv (EU supply of services).
        Code: string //min length 1 max length 30
    }[] //up to 10 codes
    ProjectTags?: {
        Tag: string; //min length 1 max length 30
    }[] //up to 5 additional project tags tags
    InvoiceLines: {
        ItemLines?: { // Use for products and services priced using the quantity and unit cost model.
            ItemLine: {
                ItemID: number; // Item ID from inventory. Enter zero to use a one-off item.
                ItemName?: string; //min length 0 max length 20
                ItemDescription?: string; //max length 20000
                ItemNominalCode?: string; //min length 2 max length 5
                Tax1?: { // Optional tax element to be levied on the item.
                    TaxName: string; //Tax name e.g. VAT
                    TaxPercentage: number; //Tax percentage e.g. 20
                    TaxAmount?: number; //Tax amount in currency
                }
                Tax2?: { // Optional tax element to be levied on the item.
                    TaxName: string; //Tax name e.g. VAT
                    TaxPercentage: number; //Tax percentage e.g. 20
                    TaxAmount?: number; //Tax amount in currency
                }
                UnitCost?: number;
                Qty?: number;
            }[] //up to 500 items
        }
        TaskLines?: {
            TaskLine: {
                ItemID: number; // Item ID from inventory. Enter zero to use a one-off item.
                ItemName?: string; //min length 0 max length 20
                TaskDescription?: string; //max length 20000
                ItemNominalCode?: string; //min length 2 max length 5
                Tax1?: { // Optional tax element to be levied on the item.
                    TaxName: string; //Tax name e.g. VAT
                    TaxPercentage: number; //Tax percentage e.g. 20
                    TaxAmount?: number; //Tax amount in currency
                }
                Tax2?: { // Optional tax element to be levied on the item.
                    TaxName: string; //Tax name e.g. VAT
                    TaxPercentage: number; //Tax percentage e.g. 20
                    TaxAmount?: number; //Tax amount in currency
                }
                HourlyRate?: number;
                Hours?: number;
            }[] //up to 500 tasks
        }
    }
    Scheduling: {
        SingleInvoiceData?: {
            InvoiceNumber?: string; //min length 1 max length 20, if not supplied the system will auto increment
            PurchaseReference?: string; // Optional purchase reference number.
            IssueDate: string //Date invoice was issued
        }
        RecurringInvoiceData?: {
            Interval: string; // The preset interval between issuing invoices. 1WEEK equals weekly, 2WEEK equals fortnightly, 1MONTH equals monthly, etc...
            Frequency: number; //How many intervals should the profile run for?
            StartDate: string; //When will the first invoice be issued?
            ProRataDays?: number; //use to pro rata the first payment for x number of days
            GoCardlessAutoBill?: Boolean; // Set as true to use the pre-authorised Direct Debit details to automatically collect payment.
            GoCardlessRequestAfter?: number; // Specify the number of days delay you would like to add before initiating a Direct Debit collection. max 60
            SendByEmail?: Boolean; // Send invoices by email when they are created from this recurring template.
            SendByPost?: Boolean; // Send invoices by post when they are created from this recurring template.
            ActivateOnCreation?: Boolean; //  Activates the recurring profile on creation. By default this is set to false and the profile will remain in DRAFT status until it is activated in QuickFile
        }
    }
    CreditNote?: { // Credit Note Meta data for negative invoices. See here for usage: https://community.quickfile.co.uk/t/creating-a-credit-note-using-the-api/23204
        CreditNoteType: "VOID" | "REFUND" | "HOLD";
        ParentInvoiceID: number; // The invoice ID you would like to set the credit note against
        PaidFromAccount: number; // For refunds enter the bank nominal (1200-1299) that the refund should be paid from. Min 1200 max 1299
    }
}

interface InvoiceUpdateData extends Partial<InvoiceCreateData> {
    InvoiceID: string; // If supplied update will be applied to existing invoice. If no InvoiceID new invoice will be created.
}

interface InvoiceCreate extends RequestBody {
    InvoiceData: InvoiceCreateData
}

interface InvoiceUpdate extends PartialRequestBody {
    InvoiceData: InvoiceUpdateData
}

interface InvoiceCreateResponse extends ResponseBody {
    "Invoice_Create": {
        "Header": {
            "MessageType": string;
            "SubmissionNumber": string
        },
        "Body": {
            "InvoiceID": number
            "InvoiceNumber": string
            "LineItemsCreated": number
            "InvoiceTotal": number //currency
        }
    }
}

interface InvoiceUpdateResponse extends InvoiceCreateResponse { }

interface DocumentType { }
interface ReceiptType extends DocumentType {
    Receipt: {
        PurchaseID?: number; //  If supplied the document will be attached to the supplied purchase ID. When absent the document will appear in the Receipt Hub untagged.
        CaptureDateTime: string; //YYYY-MM-DDTHH:mm:ss
        ReceiptName: string; //max length 35
    }
}
interface SalesAttachmentType extends DocumentType {
    SalesAttachment: {
        InvoiceId: string; // The associated ID for the sales invoice you would like to attach to.
        Notes?: string //max length 600
    }
}
interface GeneralType extends DocumentType {
    General: {
        CollectionName?: string // The Doc Management folder to which the file will be uploaded
    }
}

interface DocumentUpload extends RequestBody {
    DocumentDetails: {
        FileName: string; //include file extension
        EmbeddedFileBinaryObject: string; //base64 encoded file contents
        Type: DocumentType
    }[] //up to 10 documents per call
}

interface DocumentUploadResponse extends ResponseBody {
    UploadTimeStamp: string; //YYYY-MM-DDTHH:mm:ss
    DocumentData: {
        Data: {
            Id: number;
            Path: string;
        }[]
    }
}

interface System_SearchEvents extends RequestBody {
    SearchParameters: {
        ReturnCount: number; // How many records would you like the API to return (MAX 200).
        ContinuationToken?: string; // Represents a continuation token from the server when the operation returns a partial result.

        FromDateTime?: string; //YYYY-MM-DDTHH:mm:ss
        ToDateTime?: string; //YYYY-MM-DDTHH:mm:ss
        SearchType?: {
            SearchType: "Invoice" | "Client" | "Supplier" | "Purchase";
            RefID: string; // Here you would supply the clientID, supplierID, invoiceID or purchaseID depending on the SearchType
        }
    }
}

interface System_SearchEventsResponse extends ResponseBody {
    "ReturnCount": number;
    "ContinuationToken": null | string;
    "Events": null | {
        "Event": {
            "EventTime": string; //YYYY-MM-DDTHH:mm:ss
            "LoginUser": string;
            "Note": string;
        }[]
    }
}





/////////////////////WEBHOOK TYPES/////////////////////////////////

interface WebhookEvent { }

interface InvoiceEvent extends WebhookEvent {
    TimeStamp: string; //Date and time the event occured
    Id: number; //Unique invoice/estimate ID
}
interface ClientEvent extends WebhookEvent {
    TimeStamp: string; //Date and time the event occured
    Id: number; //Unique client ID
}
interface SupplierEvent extends WebhookEvent {
    TimeStamp: string; //Date and time the event occured
    Id: number; //Unique supplier ID
}

//invoice functions
interface InvoicesCreated extends InvoiceEvent {
    InvoiceType: "INV" | "EST" | "REC";
    FromRecurring: Boolean;
    RecurringParentId?: number;
}
interface InvoicesUpdated extends InvoiceEvent {
    InvoiceType: "INV" | "EST" | "REC";
}
interface InvoicesDeleted extends InvoiceEvent { }
interface InvoicesViewed extends InvoiceEvent {
    InvoiceType: "INV" | "EST" | "REC";
    ClientId: number; //Unique client ID
    ClientContactId: number //Unique client contact ID. The contact record associated with the client that viewed the item
}
interface InvoicesSent extends InvoiceEvent {
    InvoiceType: "INV" | "EST" | "REC";
}
interface InvoicesPaid extends InvoiceEvent { //Online payment channel only
    PaymentId: number; //Unique payment record ID
    PaymentMethod: "PAYPAL" | "SAGEPAY" | "WORLDPAY" | "PAYSENSE" | "BITPAY" | "STRIPE";
}
interface InvoicesPayment extends WebhookEvent {
    PaymentId: number; //Unique payment record ID
    TimeStamp: string; //Date and time the event occurred
    InvoiceId: number; //Unique invoice ID
    AmountPaid: number; //Total amount of the payment in currency
    CurrencyCode: string; //Currency ISO code, e.g. GBP, EUR, USD etc
}
interface EstimatesStatusChange extends InvoiceEvent {
    Status: "ACCEPTED" | "DECLINED";
    ClientId: number //	Unique client ID
    ClientContactId: number; //	Unique client contact ID. The contact record associated with the client that accepted or declined the estimate
}

//client functions
interface ClientsCreated extends ClientEvent { }
interface ClientsUpdated extends ClientEvent { }
interface ClientsDeleted extends ClientEvent { }
interface ClientContactEvent extends WebhookEvent {
    TimeStamp: string; //Date and time the event occurred
    Id: number; //Unique client contact ID
    ClientId: number; //Unique client ID
}
interface ClientContactsCreated extends ClientContactEvent { }
interface ClientContactsUpdated extends ClientContactEvent { }
interface ClientContactsDeleted extends ClientContactEvent { }
interface ClientMerged extends WebhookEvent {
    TimeStamp: string; //Date and time the event occurred
    SourceId: number; //Merging "from" client ID
    TargetId: string; //Merging "to" client ID
    Deleted: Boolean; //Source record deleted?
}

//supplier functions
interface SuppliersCreated extends SupplierEvent { }
interface SuppliersUpdated extends SupplierEvent { }
interface SuppliersDeleted extends SupplierEvent { }
interface SupplierMerged extends WebhookEvent {
    TimeStamp: string; //Date and time the event occurred
    SourceId: number; //Merging "from" supplier ID
    TargetId: string; //Merging "to" supplier ID
    Deleted: Boolean; //Source record deleted?
}

//Sales Payment Functions
interface PaymentsCreated extends WebhookEvent {
    TimeStamp: string; //Date Time (yyyy-MM-ddThh:MM:ss) e.g. 2015-03-26T22:03:18
    InvoiceId: number; //Unique invoice ID to which the payment has been bound
    PaymentId: number; //Unique payment ID
    CurrencyCode: string; //Currency ISO code, e.g. GBP, EUR, USD etc
    AmountPaid: number; //Total amount of the payment in currency
}

interface WebhookEventGroup {
    PayLoad: {
        Timestamp: string; //Date Time (yyyy-MM-ddThh:MM:ss) e.g. 2015-03-26T22:03:18
        Signature: string; //Unique webhook signature, refer to https://api.quickfile.co.uk/Webhooks for more details
        Hookid: string; //	Unique GUID for the webhook
        //invoice functions
        InvoicesCreated?: InvoicesCreated[];
        InvoicesUpdated?: InvoicesUpdated[];
        InvoicesDeleted?: InvoicesDeleted[];
        InvoicesViewed?: InvoicesViewed[];
        InvoicesSent?: InvoicesSent[];
        InvoicesPaid?: InvoicesPaid[];
        InvoicesPayment?: InvoicesPayment[];
        EstimatesStatusChange?: EstimatesStatusChange[];
        //client functions
        ClientsCreated?: ClientsCreated[];
        ClientsUpdated?: ClientsUpdated[];
        ClientsDeleted?: ClientsDeleted[];
        ClientContactsCreated?: ClientContactsCreated[];
        ClientContactsUpdated?: ClientContactsUpdated[];
        ClientContactsDeleted?: ClientContactsDeleted[];
        ClientMerged?: ClientMerged[];
        //supplier functions
        SuppliersCreated?: SuppliersCreated[];
        SuppliersUpdated?: SuppliersUpdated[];
        SuppliersDeleted?: SuppliersDeleted[];
        SupplierMerged?: SupplierMerged[];
        //sales functions
        PaymentsCreated?: PaymentsCreated[];
    }
}

