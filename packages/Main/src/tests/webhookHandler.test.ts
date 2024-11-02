import webhookHandler from "../QuickFileWebhookHandler/webhookHandler.js";

const testEvent = {
    "version": "2.0",
    "routeKey": "$default",
    "rawPath": "/",
    "rawQueryString": "",
    "headers": {
        "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",
        "content-length": "378",
        "x-amzn-tls-version": "TLSv1.2",
        "x-amzn-trace-id": "Root=1-6724d1ff-7cd194bc58f7ba46520a72f5",
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
        "requestId": "238d0f23-8320-4b57-94f0-293ff6840239",
        "routeKey": "$default",
        "stage": "$default",
        "time": "01/Nov/2024:13:05:03 +0000",
        "timeEpoch": 1730466303942
    },
    "body": "{\"PayLoad\": {\"InvoicesCreated\":[{\"TimeStamp\":\"2024-11-01T12:32:00\",\"Id\":34093267,\"InvoiceType\":\"INV\",\"FromRecurring\":false,\"RecurringParentId\":0}],\"InvoicesSent\":[{\"TimeStamp\":\"2024-11-01T12:33:10\",\"Id\":34093267,\"InvoiceType\":\"INV\"}],\"Timestamp\":\"2024-11-01T12:34:57.9521647+00:00\",\"Signature\":\"d9911dc5a77c7d50ad92a709baa88622\",\"Hookid\":\"bd487b53-596a-4341-ad32-d71c48dcc523\"}}",
    "isBase64Encoded": false
}

webhookHandler(testEvent).then(console.log);