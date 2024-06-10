import handler from '../indexCheckScraperOutput';

const event = {
    "inputBatches": {
        "all": [
            {
                "inputs": [
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
                        "loginID": "65e37da7f8428f036fd999e3"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999ec"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999ee"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99c31"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99c3b"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd9997c"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99993"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999ab"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999ad"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999d2"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999d8"
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
                        "loginID": "6638c364640061547a024621"
                    },
                    {
                        "loginID": "6655dcd460f904234d217e63"
                    },
                    {
                        "loginID": "66582e1ea346111328a7c127"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99788"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99786"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99789"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd9978f"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd998b0"
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
                        "loginID": "65e37da7f8428f036fd99991"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd9999a"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd999c1"
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
                        "loginID": "65e37da7f8428f036fd998aa"
                    },
                    {
                        "loginID": "65e37da7f8428f036fd99953"
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
            "inputs": "[{\"loginID\":\"65e37da7f8428f036fd997c1\"},{\"loginID\":\"66048a2deacc4d19bab05bbc\"}]",
            "batchIndex": 0,
            "isFinal": true
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
                    "ff7f11a9-f2f5-445a-945b-7e027543c941"
                ],
                "Content-Length": [
                    "107"
                ],
                "Date": [
                    "Sun, 09 Jun 2024 23:52:46 GMT"
                ],
                "X-Amzn-Trace-Id": [
                    "root=1-66664024-6364cd2f5fdf60b932648935;parent=70dd30516ee9a623;sampled=0;lineage=0800b79e:0"
                ],
                "Content-Type": [
                    "application/json"
                ]
            },
            "HttpHeaders": {
                "Connection": "keep-alive",
                "Content-Length": "107",
                "Content-Type": "application/json",
                "Date": "Sun, 09 Jun 2024 23:52:46 GMT",
                "X-Amz-Executed-Version": "$LATEST",
                "x-amzn-Remapped-Content-Length": "0",
                "x-amzn-RequestId": "ff7f11a9-f2f5-445a-945b-7e027543c941",
                "X-Amzn-Trace-Id": "root=1-66664024-6364cd2f5fdf60b932648935;parent=70dd30516ee9a623;sampled=0;lineage=0800b79e:0"
            },
            "HttpStatusCode": 200
        },
        "SdkResponseMetadata": {
            "RequestId": "ff7f11a9-f2f5-445a-945b-7e027543c941"
        },
        "StatusCode": 200
    }
}

handler(event);