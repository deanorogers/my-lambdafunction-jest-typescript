
/*
var response = {};

var responseBody = {
    "key3": "value3",
    "key2": "value2",
    "key1": "value1"
};

var response = {
    "statusCode": 200,
    "headers": {
        "my_header": "my_value"
    },
    "body": JSON.stringify(responseBody),
    "isBase64Encoded": false
};

response.statusCode = 200;

console.log('Response object => ', response);
*/

export const nameConcat = (forename: String, surname: String) => {
    var fullname = surname + ", " + forename; 
    // console.log(surname + ", " + forename);
    return fullname; 
}; 