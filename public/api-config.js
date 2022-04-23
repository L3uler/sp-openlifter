window["apiConfig"] = {
    "baseUrl": "http://localhost/api",
    "liftAttempt":{
        "route": "/liftattempt",
        "goodLift": {
            "sendData": true,
            "delay": 5000
        },
        "noLift": {
            "sendData": true,
            "delay": 5000
        },
        "dayDropdownChange": {
            "sendData": false,
            "delay": 0
        },
        "platformDropdownChange": {
            "sendData": false,
            "delay": 0
        },
        "liftDropdownChange": {
            "sendData": false,
            "delay": 0
        },
        "flightDropdownChange": {
            "sendData": false,
            "delay": 0
        },
        "attemptDropdownChange": {
            "sendData": false,
            "delay": 0
        },
        "lifterDropdownChange": {
            "sendData": false,
            "delay": 0
        }
    },
    "liftResult":{
        "route": "/liftresult",
        "goodLift":{
            "sendData": true
        },
        "noLift":{
            "sendData": true
        }
    }
};