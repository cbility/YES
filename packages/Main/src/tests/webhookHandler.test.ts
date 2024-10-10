import webhookHandler from "../QuickFileWebhookHandler/webhookHandler.js";

const testEvent = {
    "version": "2.0",
    "routeKey": "$default",
    "rawPath": "/",
    "rawQueryString": "",
    "headers": {
        "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",
        "content-length": "425",
        "x-amzn-tls-version": "TLSv1.2",
        "x-amzn-trace-id": "Root=1-6707aeec-7e8e3116659d22265891aba9",
        "x-forwarded-proto": "https",
        "host": "zzgwpptcirookdzrt7ctu73gs40ouytr.lambda-url.eu-west-2.on.aws",
        "x-forwarded-port": "443",
        "content-type": "application/json",
        "x-forwarded-for": "13.79.122.255",
        "user-agent": "quickfile-webhook-service/1.0"
    },
    "requestContext": {
        "accountId": "anonymous",
        "apiId": "zzgwpptcirookdzrt7ctu73gs40ouytr",
        "domainName": "zzgwpptcirookdzrt7ctu73gs40ouytr.lambda-url.eu-west-2.on.aws",
        "domainPrefix": "zzgwpptcirookdzrt7ctu73gs40ouytr",
        "http": {
            "method": "POST",
            "path": "/",
            "protocol": "HTTP/1.1",
            "sourceIp": "13.79.122.255",
            "userAgent": "quickfile-webhook-service/1.0"
        },
        "requestId": "a1876069-9865-400a-ae23-178f26db3d81",
        "routeKey": "$default",
        "stage": "$default",
        "time": "10/Oct/2024:10:39:40 +0000",
        "timeEpoch": 1728556780996
    },
    "body": "{\"PayLoad\": {\"InvoicesCreated\":[{\"TimeStamp\":\"2024-10-10T10:38:05\",\"Id\":33831297,\"InvoiceType\":\"INV\",\"FromRecurring\":false,\"RecurringParentId\":0}],\"InvoicesViewed\":[{\"TimeStamp\":\"2024-10-10T10:36:29\",\"Id\":33711414,\"InvoiceType\":\"INV\",\"ClientId\":3436826,\"ClientContactId\":1187350}],\"Timestamp\":\"2024-10-10T10:39:40.7222584+00:00\",\"Signature\":\"a318a7216fa39f5f8232113cb44e9164\",\"Hookid\":\"4181d83b-4966-4ebc-b283-c7dd089a246f\"}}",
    "isBase64Encoded": false
}

webhookHandler(testEvent).then(console.log);