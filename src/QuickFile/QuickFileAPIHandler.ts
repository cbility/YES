import crypto from 'crypto';
import HTTPError from '../common/HTTPError';

export default class QuickFileAPIHandler {
    private AccNumber: string;
    private ApplicationID: string;
    private APIKey: string;

    constructor(AccNumber: string, ApplicationID: string, APIKey: string) {
        this.AccNumber = AccNumber;
        this.ApplicationID = ApplicationID;
        this.APIKey = APIKey;
    }

    async request(endpoint: string, body: RequestBody, method: "POST" | "GET" = "POST") {
        const url = "https://api.quickfile.co.uk/1_2/" + endpoint;
        const SubmissionNumber = uniqueId();
        const header: RequestHeader = {
            MessageType: "Request",
            SubmissionNumber,
            Authentication: {
                AccNumber: this.AccNumber,
                ApplicationID: this.ApplicationID,
                MD5Value: md5Hash(this.AccNumber + this.APIKey + SubmissionNumber)
            }
        }
        const requestBody = {
            payload: {
                Body: body,
                Header: header
            }
        }
        try {
            const response = await fetch(url, { body: JSON.stringify(requestBody), method });
            if (!response.ok) {
                console.log(await response.text())
                throw new HTTPError(response.status, response.statusText);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            throw new Error("Error occurred during fetch operation: " + error)
        }
    }

    //Client methods

    async clientGet(body: ClientGet): Promise<unknown> { //TODO: implement clientGet response type
        return await this.request("client/get", body)
    }

    async clientCreate(body: ClientCreate): Promise<unknown> { //TODO: implement ClientCreate response type
        return await this.request("client/create", body)
    }

    async clientUpdate(body: ClientUpdate): Promise<unknown> { //TODO: implement ClientUpdate response type
        return await this.request("client/update", body)
    }

    async clientInsertContacts(body: ClientInsertContacts): Promise<unknown> { //TODO: implement ClientInsertContacts response type
        return await this.request("client/insertcontacts", body)
    }

    //Invoice methods

    async invoiceGet(body: InvoiceGet): Promise<InvoiceGetResponse> {
        return await this.request("invoice/get", body)
    }

    async invoiceCreate(body: InvoiceCreate): Promise<InvoiceCreateResponse> {
        return await this.request("invoice/create", body)
    }

    async invoiceUpdate(body: InvoiceUpdate): Promise<InvoiceUpdateResponse> {
        return await this.request("invoice/create", body)
    }
}

//helper functions

function uniqueId() {
    //QF requests require a unique identifier, see https://api.quickfile.co.uk/
    const timestamp = new Date().getTime().toString(36);
    const randomPart = Math.random().toString(36).slice(2, 7);
    return timestamp + randomPart;
}

function md5Hash(data: string) {
    return crypto.createHash('md5').update(data).digest('hex');
}
