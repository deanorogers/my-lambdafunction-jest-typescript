import {lambdaHandler} from '../src-ts/app';
import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda"; 

test('Returns correct JSON body', async () => {
    
    const event: APIGatewayProxyEvent = {
        body: '',
        headers: {},
        httpMethod: 'GET',
        isBase64Encoded: false,
        path: '',
        pathParameters: {},
        queryStringParameters: {"firstname":"Dean","lastname":"Rogers"},
        stageVariables: {},
        requestContext: undefined,
        multiValueHeaders: undefined,
        multiValueQueryStringParameters: undefined,
        resource: '' };

    const actualValue: APIGatewayProxyResult = await lambdaHandler(event);
    let jsonString: string = actualValue.body;
    
    // turn back into JSON object for comparison
    let jsonObj = JSON.parse(jsonString);
    
    let expectedJson = JSON.parse('{"purn": "rogerdea"}');
    
    expect(jsonObj).toEqual(expectedJson);

});