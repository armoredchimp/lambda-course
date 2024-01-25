exports.handler = async (event) => {
  console.log('event: \n' + JSON.stringify(event, null, 2));

  const total = event.num1 * event.num2;

  const response = {
    statusCode: 200,
    body: JSON.stringify(
      `The total of ${event.num1} times ${event.num2} is ${total}`
    ),
  };
  return response;
};
