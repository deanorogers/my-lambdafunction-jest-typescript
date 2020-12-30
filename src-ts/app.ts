import { 
  APIGatewayProxyEvent, 
  APIGatewayProxyResult 
} from "aws-lambda";

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  
  let targetUrl = null;
  const queries = JSON.stringify(event.queryStringParameters);
  console.log ("HttpMethod => " + event.httpMethod);

  let defaultResponse = {
    statusCode: 500,
    body: "Internal server error"
  }

  if ( process.env['TARGET_URL'] != undefined ) {
    targetUrl = process.env['TARGET_URL'];
  } else {
    console.log ("Environment variable TARGET_URL must be set.")
    return defaultResponse;
  }
    
  return {
    statusCode: 200,
    body: '{"purn": "rogerdea"}'
  }
}

