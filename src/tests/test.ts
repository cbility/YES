import handler from '../lambda/logOfgemCheckOutputs';

const event = [
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
        "done": true,
        "success": true
    }
]

handler(event as any);