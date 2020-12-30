import {lambdaHandler} from '../src-ts/app';
import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda"; 

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

test('Returns correct JSON body', async () => {

    process.env['TARGET_URL'] = "http://localhost:8080/index";
    
    const actualValue: APIGatewayProxyResult = await lambdaHandler(event);
    let jsonString: string = actualValue.body;
    
    // turn back into JSON object for comparison
    let jsonObj = JSON.parse(jsonString);
    
    let expectedJson = JSON.parse('{"purn": "rogerdea"}');
    
    expect(jsonObj).toEqual(expectedJson);

});

test('Returns error because missing TARGET_URL env var', async () => {

    delete process.env.TARGET_URL;
    
    const actualValue: APIGatewayProxyResult = await lambdaHandler(event);
    let actualStatusCode: number = actualValue.statusCode;
    expect(actualStatusCode).toEqual(500);

});
