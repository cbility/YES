import QuickFileAPIHandler from "../../../../QuickFile/dist/QuickFileAPIHandler";

interface Input { APIKey: string; serviceTermsDoc: string; jobTypes: string; invoiceId: string; }

export default async function uploadServiceTerms(input: Input): Promise<DocumentUploadResponse> {

    const QF = new QuickFileAPIHandler("6131405563",
        "84a82f71-d19c-4c5a-b50e-797126e504fb", //Ply Quote Drafter Application ID
        input.APIKey
    );

    const base64Pdf = await fetch(
        "https://hook.eu2.make.com/sycrib9oqmynilvpv1wcpjcg4cl8hai7?id=" + input.serviceTermsDoc
    ).then(async response => {
        if (!response.ok) throw new Error(response.status + " " + response.statusText + " " + await response.text());
        return response.text()
    }); //using make scenario https://eu2.make.com/120341/scenarios/753547

    const uploadRequest: DocumentUpload = {
        DocumentDetails: [{
            EmbeddedFileBinaryObject: base64Pdf,
            FileName: `Service Terms (${input.jobTypes}).pdf`,
            Type: {
                SalesAttachment: {
                    InvoiceId: input.invoiceId,
                }
            } as SalesAttachmentType
        }]
    }
    const response = await QF.documentUpload(uploadRequest);

    return response;
}

//USAGE: return await uploadServiceTerms(input);
