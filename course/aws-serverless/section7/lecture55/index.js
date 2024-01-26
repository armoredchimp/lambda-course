exports.handler = async function (event, context) {
  console.log('Standard Log');
  console.info('Info Log');
  console.warn('Warning Log');

  const body = `Function name: ${context.functionName} LogStream name: ${context.logStreamName}`;

  return body;
};
