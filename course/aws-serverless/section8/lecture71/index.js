exports.handler = async (event) => {
  console.log(`Received event ${JSON.stringify(event, null, 2)}`);
  let payload = JSON.parse(event.body);

  let result = 0;
  try {
    if ((payload.op = '-')) {
      result = payload.a - payload.b;
      console.log(result);
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: `Cannot procces event ${error}`,
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      processed: true,
      result: result,
    }),
  };
};
