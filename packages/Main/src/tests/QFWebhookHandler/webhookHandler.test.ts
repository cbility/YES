import webhookHandler from "../../QuickFileWebhookHandler/webhookHandler.js";

const testEvent = {
    "version": "2.0",
    "routeKey": "$default",
    "rawPath": "/",
    "rawQueryString": "",
    "headers": {
        "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",
        "content-length": "406",
        "x-amzn-tls-version": "TLSv1.2",
        "x-amzn-trace-id": "Root=1-6776cb6f-0380e76f38ecac8a5cd3b9b3",
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
        "requestId": "99c2d836-5d6e-4ec4-8e55-01f7afc36d98",
        "routeKey": "$default",
        "stage": "$default",
        "time": "02/Jan/2025:17:22:56 +0000",
        "timeEpoch": 1735838576036
    },
    "body": "{\"PayLoad\": {\"InvoicesViewed\":[{\"TimeStamp\":\"2025-01-02T17:21:55\",\"Id\":34734267,\"InvoiceType\":\"INV\",\"ClientId\":8551234,\"ClientContactId\":2806572},{\"TimeStamp\":\"2025-01-02T17:21:09\",\"Id\":34129314,\"InvoiceType\":\"EST\",\"ClientId\":4805124,\"ClientContactId\":2805456}],\"Timestamp\":\"2025-01-02T17:22:55.6392083+00:00\",\"Signature\":\"9762c9a5f95f0547760c0e29f8477545\",\"Hookid\":\"21f451b1-8d4c-4026-a7bd-bb550eeb1b88\"}}",
    "isBase64Encoded": false
}

webhookHandler(testEvent).then(console.log);