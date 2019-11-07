// eslint-disable-next-line import/no-unresolved
import { APIGatewayEvent, Callback, Context } from 'aws-lambda';
import * as QRCode from 'qrcode';

function extractTxt(event: APIGatewayEvent): string {
  return (event && event.queryStringParameters && event.queryStringParameters.txt) || 'NO TEXT';
}

export async function handler(
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
): Promise<void> {
  const qr = await QRCode.toString(
    extractTxt(event),
    { type: 'svg' },
  );

  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'image/svg+xml' },
    body: qr,
  });
}
