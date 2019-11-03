import { APIGatewayEvent, Callback, Context } from 'aws-lambda';

export async function handler(
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
): Promise<void> {
  const result = {
    status: 200,
    message: 'OK!!!!!',
  };

  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(result),
  });
}
