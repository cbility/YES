import webhookHandler from "../QuickFile/webhookHandler.js";

const testEvent = {
    "PayLoad": {
        "InvoicesCreated": [
            {
                "TimeStamp": "2015-03-26T20:16:52",
                "Id": 123456,
                "InvoiceType": "INV",
                "FromRecurring": false,
                "RecurringParentId": 0
            }
        ],
        "Timestamp": "2015-03-26T22:03:18",
        "Signature": "6b1025b9304caee85895dcdccdcb4500",
        "Hookid": "7893782a-bdd3-461c-9c84-f50fe9a6b3da"
    }
}