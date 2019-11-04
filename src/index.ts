// eslint-disable-next-line import/no-unresolved
import { APIGatewayEvent, Callback, Context } from 'aws-lambda';
import * as QRCode from 'qrcode';

export async function handler(
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
): Promise<void> {
  const qr = await QRCode.toString(
    'Hello QR',
    { type: 'svg' },
  );

  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'image/svg+xml' },
    body: qr,
  });
}
