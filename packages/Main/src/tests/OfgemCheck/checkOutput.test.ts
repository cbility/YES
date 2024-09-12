import { handler } from '../../OfgemCheck/checkScraperOutput.js';

const checkOutputLambdaEvent = {
    "inputBatches": {
        "all": [
            {
                "inputs": [
                    {
                        "loginID": "65e37da7f8428f036fd9978e"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd9978d"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd9978f"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99792"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99794"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd997c1"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd997fc"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd9980f"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd9987f"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99914"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd9991a"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999e3"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999ec"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999ee"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999f0"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99a2f"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99c02"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99c28"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99c31"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99c3b"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99991"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99992"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99993"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd9999a"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999ab"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999ad"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999af"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999c1"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999ca"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999d2"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999d8"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999db"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99a6f"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99a97"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99aa1"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99bad"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99bb2"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99bcb"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99bf3"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd998ea"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99953"
                    },
                    {
                        "loginID": "66048a2deacc4d19bab05ba7"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99bfa"
                    },
                    {
                        "loginID": "6638c364640061547a024621"
                    },
                    {
                        "loginID": "6655dcd460f904234d217e63"
                    },
                    {
                        "loginID": "66582e1ea346111328a7c127"
                    },
                    {
                        "loginID": "66715cd4bd94eedbc3cfaa9d"
                    },
                    {
                        "loginID": "6672c3bb3cb726aa99a0d285"
                    },
                    {
                        "loginID": "6672c4f69888ec59f99de521"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99786"
                    }
                ],
                "done": false,
                "success": null
            },
            {
                "inputs": [
                    {
                        "loginID": "65e37da7f8428f036fd99789"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99870"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd998b0"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99910"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99935"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99951"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999e9"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99975"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd9999e"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999b4"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99ae1"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99b9f"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99bc0"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99928"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd998aa"
                    },
                    {
                        "loginID": "66048a2deacc4d19bab05bbb"
                    },
                    {
                        "loginID": "66048a2deacc4d19bab05bbc"
                    }
                ],
                "done": false,
                "success": null
            }
        ],
        "current": {
            "inputs": "[{\"loginID\":\"65e37da7f8428f036fd9978e\"},{\"loginID\":\"65e37da7f8428f036fd9978d\"},{\"loginID\":\"65e37da7f8428f036fd9978f\"},{\"loginID\":\"65e37da7f8428f036fd99792\"},{\"loginID\":\"65e37da7f8428f036fd99794\"},{\"loginID\":\"65e37da7f8428f036fd997c1\"},{\"loginID\":\"65e37da7f8428f036fd997fc\"},{\"loginID\":\"65e37da7f8428f036fd9980f\"},{\"loginID\":\"65e37da7f8428f036fd9987f\"},{\"loginID\":\"65e37da7f8428f036fd99914\"},{\"loginID\":\"65e37da7f8428f036fd9991a\"},{\"loginID\":\"65e37da7f8428f036fd999e3\"},{\"loginID\":\"65e37da7f8428f036fd999ec\"},{\"loginID\":\"65e37da7f8428f036fd999ee\"},{\"loginID\":\"65e37da7f8428f036fd999f0\"},{\"loginID\":\"65e37da7f8428f036fd99a2f\"},{\"loginID\":\"65e37da7f8428f036fd99c02\"},{\"loginID\":\"65e37da7f8428f036fd99c28\"},{\"loginID\":\"65e37da7f8428f036fd99c31\"},{\"loginID\":\"65e37da7f8428f036fd99c3b\"},{\"loginID\":\"65e37da7f8428f036fd99991\"},{\"loginID\":\"65e37da7f8428f036fd99992\"},{\"loginID\":\"65e37da7f8428f036fd99993\"},{\"loginID\":\"65e37da7f8428f036fd9999a\"},{\"loginID\":\"65e37da7f8428f036fd999ab\"},{\"loginID\":\"65e37da7f8428f036fd999ad\"},{\"loginID\":\"65e37da7f8428f036fd999af\"},{\"loginID\":\"65e37da7f8428f036fd999c1\"},{\"loginID\":\"65e37da7f8428f036fd999ca\"},{\"loginID\":\"65e37da7f8428f036fd999d2\"},{\"loginID\":\"65e37da7f8428f036fd999d8\"},{\"loginID\":\"65e37da7f8428f036fd999db\"},{\"loginID\":\"65e37da7f8428f036fd99a6f\"},{\"loginID\":\"65e37da7f8428f036fd99a97\"},{\"loginID\":\"65e37da7f8428f036fd99aa1\"},{\"loginID\":\"65e37da7f8428f036fd99bad\"},{\"loginID\":\"65e37da7f8428f036fd99bb2\"},{\"loginID\":\"65e37da7f8428f036fd99bcb\"},{\"loginID\":\"65e37da7f8428f036fd99bf3\"},{\"loginID\":\"65e37da7f8428f036fd998ea\"},{\"loginID\":\"65e37da7f8428f036fd99953\"},{\"loginID\":\"66048a2deacc4d19bab05ba7\"},{\"loginID\":\"65e37da7f8428f036fd99bfa\"},{\"loginID\":\"6638c364640061547a024621\"},{\"loginID\":\"6655dcd460f904234d217e63\"},{\"loginID\":\"66582e1ea346111328a7c127\"},{\"loginID\":\"66715cd4bd94eedbc3cfaa9d\"},{\"loginID\":\"6672c3bb3cb726aa99a0d285\"},{\"loginID\":\"6672c4f69888ec59f99de521\"},{\"loginID\":\"65e37da7f8428f036fd99786\"}]",
            "batchIndex": 1,
            "isFinal": false
        }
    },
    "currentOutput": {
        "ExecutedVersion": "$LATEST",
        "Payload": {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": "{\"message\":\"Update Complete\"}"
        },
        "SdkHttpMetadata": {
            "AllHttpHeaders": {
                "X-Amz-Executed-Version": [
                    "$LATEST"
                ],
                "x-amzn-Remapped-Content-Length": [
                    "0"
                ],
                "Connection": [
                    "keep-alive"
                ],
                "x-amzn-RequestId": [
                    "a009f025-b3a5-4435-bd23-623772f02bc1"
                ],
                "Content-Length": [
                    "107"
                ],
                "Date": [
                    "Mon, 24 Jun 2024 11:51:12 GMT"
                ],
                "X-Amzn-Trace-Id": [
                    "root=1-66795b1c-08ddef7b5996791f19b2ed19;parent=4db2bb95b3bb6ea6;sampled=0;lineage=0800b79e:0"
                ],
                "Content-Type": [
                    "application/json"
                ]
            },
            "HttpHeaders": {
                "Connection": "keep-alive",
                "Content-Length": "107",
                "Content-Type": "application/json",
                "Date": "Mon, 24 Jun 2024 11:51:12 GMT",
                "X-Amz-Executed-Version": "$LATEST",
                "x-amzn-Remapped-Content-Length": "0",
                "x-amzn-RequestId": "a009f025-b3a5-4435-bd23-623772f02bc1",
                "X-Amzn-Trace-Id": "root=1-66795b1c-08ddef7b5996791f19b2ed19;parent=4db2bb95b3bb6ea6;sampled=0;lineage=0800b79e:0"
            },
            "HttpStatusCode": 200
        },
        "SdkResponseMetadata": {
            "RequestId": "a009f025-b3a5-4435-bd23-623772f02bc1"
        },
        "StatusCode": 200
    }
}

handler(checkOutputLambdaEvent);