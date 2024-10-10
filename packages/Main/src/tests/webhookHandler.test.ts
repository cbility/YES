import webhookHandler from "../QuickFileWebhookHandler/webhookHandler.js";

const testEvent = {
    "version": "2.0",
    "routeKey": "$default",
    "rawPath": "/",
    "rawQueryString": "",
    "headers": {
        "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",
        "content-length": "527",
        "x-amzn-tls-version": "TLSv1.2",
        "x-amzn-trace-id": "Root=1-6707c409-322768052da63fee5627b3de",
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
        "requestId": "3fedea1c-421d-40b3-b1ab-3f7bd20e59f1",
        "routeKey": "$default",
        "stage": "$default",
        "time": "10/Oct/2024:12:09:45 +0000",
        "timeEpoch": 1728562185224
    },
    "body": "{\"PayLoad\": {\"InvoicesUpdated\":[{\"TimeStamp\":\"2024-10-10T12:09:27\",\"Id\":33832875,\"InvoiceType\":\"INV\"},{\"TimeStamp\":\"2024-10-10T12:09:07\",\"Id\":33832862,\"InvoiceType\":\"INV\"},{\"TimeStamp\":\"2024-10-10T12:08:31\",\"Id\":33831810,\"InvoiceType\":\"INV\"},{\"TimeStamp\":\"2024-10-10T12:08:11\",\"Id\":33831297,\"InvoiceType\":\"INV\"},{\"TimeStamp\":\"2024-10-10T12:07:54\",\"Id\":33830904,\"InvoiceType\":\"INV\"}],\"Timestamp\":\"2024-10-10T12:09:45.0187938+00:00\",\"Signature\":\"5115fbd4fd453dd68bba3265bc5902a6\",\"Hookid\":\"c0eff58d-1314-4ebd-9e1c-6d0aaf8d178d\"}}",
    "isBase64Encoded": false
}

webhookHandler(testEvent).then(console.log);