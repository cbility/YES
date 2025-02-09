import webhookHandler from "../../QuickFileWebhookHandler/webhookHandler.js";

const testEvent = {
    "version": "2.0",
    "routeKey": "$default",
    "rawPath": "/",
    "rawQueryString": "",
    "headers": {
        "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",
        "content-length": "381",
        "x-amzn-tls-version": "TLSv1.2",
        "x-amzn-trace-id": "Root=1-678526f7-54c802e503d533d14a1dc877",
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
        "requestId": "9b001876-9786-4b0a-90fb-cd172a153b4d",
        "routeKey": "$default",
        "stage": "$default",
        "time": "13/Jan/2025:14:45:11 +0000",
        "timeEpoch": 1736779511646
    },
    "body": "{\"PayLoad\": {\"InvoicesUpdated\":[{\"TimeStamp\":\"2025-01-13T14:41:40\",\"Id\":34880628,\"InvoiceType\":\"EST\"}],\"InvoicesViewed\":[{\"TimeStamp\":\"2025-01-13T14:43:01\",\"Id\":34880628,\"InvoiceType\":\"EST\",\"ClientId\":8677336,\"ClientContactId\":2842962}],\"Timestamp\":\"2025-01-13T14:45:11.4846114+00:00\",\"Signature\":\"e1da4ed18f44a8a8c8c0adcf3de5d5f1\",\"Hookid\":\"1fa19ea2-a97c-448b-a95f-1fe14d14435b\"}}",
    "isBase64Encoded": false
}

webhookHandler(testEvent).then(console.log);