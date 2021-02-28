/**
 * A Lambda function that logs the payload received from SQS.
 */
exports.sqsPayloadLoggerHandler = async (event, context) => {
  // All log statements are written to CloudWatch by default. For more information, see
  // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
  console.info(JSON.stringify(event));
};

/**
 * A Lambda function that logs the payload received from endpoint.
 */
exports.apiGatewayPayloadLoggerHandler = async (event, context) => {
  // All log statements are written to CloudWatch by default. For more information, see
  // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
  console.info(JSON.stringify(event));
  let response = {
    statusCode: 200,
    body: event.body,
  };

  return response;
};
