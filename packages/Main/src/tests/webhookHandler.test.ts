import webhookHandler from "../QuickFileWebhookHandler/webhookHandler.js";

const testEvent = {
    "version": "2.0",
    "routeKey": "$default",
    "rawPath": "/",
    "rawQueryString": "",
    "headers": {
        "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",
        "content-length": "277",
        "x-amzn-tls-version": "TLSv1.2",
        "x-amzn-trace-id": "Root=1-67063668-2eb7092076c0e0b24054c341",
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
        "requestId": "036ad835-4b5e-46bf-a0bb-a645da8e56f3",
        "routeKey": "$default",
        "stage": "$default",
        "time": "09/Oct/2024:07:53:12 +0000",
        "timeEpoch": 1728460392564
    },
    "body": "{\"PayLoad\": {\"InvoicesDeleted\":[{\"TimeStamp\":\"2024-10-09T07:49:13\",\"Id\":33760600},{\"TimeStamp\":\"2024-10-09T07:48:59\",\"Id\":33722445}],\"Timestamp\":\"2024-10-09T07:53:12.3822178+00:00\",\"Signature\":\"70542fd78070ba1dffa2ff0718ae98a2\",\"Hookid\":\"1aaa4fee-0e8d-4172-8a9e-600edd0bfbf2\"}}",
    "isBase64Encoded": false
}

webhookHandler(testEvent).then(console.log);