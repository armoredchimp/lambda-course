exports.handler = async (event) => {
  console.log('Receioved event', JSON.stringify(event, null, 2));

  const method = event.requestContext.http.method; //HTTP method
  const queryP = event.queryStringParameters.message;
  console.log(`Received ${method} request with ${queryP}`);

  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello from ${queryP}`),
  };
  return response;
};
