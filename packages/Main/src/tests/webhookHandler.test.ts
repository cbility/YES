import webhookHandler from "../QuickFileWebhookHandler/webhookHandler.js";

const testEvent = {
    "version": "2.0",
    "routeKey": "$default",
    "rawPath": "/",
    "rawQueryString": "",
    "headers": {
        "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",
        "content-length": "291",
        "x-amzn-tls-version": "TLSv1.2",
        "x-amzn-trace-id": "Root=1-67210369-7c8a18df0802c8f41a00c3d1",
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
        "requestId": "de7630a9-a1b2-493d-8ccc-f2939763c3f8",
        "routeKey": "$default",
        "stage": "$default",
        "time": "29/Oct/2024:15:46:49 +0000",
        "timeEpoch": 1730216809106
    },
    "body": "{\"PayLoad\": {\"InvoicesCreated\":[{\"TimeStamp\":\"2024-10-29T15:45:11\",\"Id\":34048907,\"InvoiceType\":\"INV\",\"FromRecurring\":false,\"RecurringParentId\":0}],\"Timestamp\":\"2024-10-29T15:46:48.8847297+00:00\",\"Signature\":\"36da4c323abeaab5ebfe24537a707bf3\",\"Hookid\":\"e40f26ee-935f-45c3-87bc-3951df615b19\"}}",
    "isBase64Encoded": false
}

webhookHandler(testEvent).then(console.log);