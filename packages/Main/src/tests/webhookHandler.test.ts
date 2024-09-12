import webhookHandler from "../QuickFileWebhookHandler/webhookHandler.js";

const testEvent = {
    "version": "2.0",
    "routeKey": "$default",
    "rawPath": "/",
    "rawQueryString": "",
    "headers": {
        "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",
        "content-length": "662",
        "x-amzn-tls-version": "TLSv1.2",
        "x-amzn-trace-id": "Root=1-66e162ab-3270185d77e1cb2755b2da95",
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
        "requestId": "98563df4-b452-490b-bae5-8c0d657a37c7",
        "routeKey": "$default",
        "stage": "$default",
        "time": "11/Sep/2024:09:28:11 +0000",
        "timeEpoch": 1726046891248
    },
    "body": "{\"PayLoad\": {\"InvoicesViewed\":[{\"TimeStamp\":\"2024-09-11T09:23:46\",\"Id\":33494543,\"InvoiceType\":\"EST\",\"ClientId\":8195193,\"ClientContactId\":2692501},{\"TimeStamp\":\"2024-09-11T09:23:15\",\"Id\":33494480,\"InvoiceType\":\"EST\",\"ClientId\":8195193,\"ClientContactId\":2692501}],\"EstimatesStatusChange\":[{\"TimeStamp\":\"2024-09-11T09:24:53\",\"Id\":33494480,\"Status\":\"ACCEPTED\",\"ClientId\":8195193,\"ClientContactId\":2692501},{\"TimeStamp\":\"2024-09-11T09:24:30\",\"Id\":33494543,\"Status\":\"ACCEPTED\",\"ClientId\":8195193,\"ClientContactId\":2692501}],\"Timestamp\":\"2024-09-11T09:28:11.0697887+00:00\",\"Signature\":\"1e13f79ad4f356b42e3e47a345f043d9\",\"Hookid\":\"8942d27f-af84-4e49-aba7-d5822bcae8cf\"}}",
    "isBase64Encoded": false
}

webhookHandler(testEvent).then(console.log);