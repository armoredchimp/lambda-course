exports.handler = async (event) => {
  console.log('event: \n' + JSON.stringify(event, null, n2));

  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda'),
  };
};
