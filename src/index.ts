// eslint-disable-next-line import/no-unresolved
import { APIGatewayEvent, Callback, Context } from 'aws-lambda';
import * as QRCode from 'qrcode';

function extractTxt(event: APIGatewayEvent): string|null {
  return event && event.queryStringParameters && event.queryStringParameters.txt;
}

export async function handler(
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
): Promise<void> {
  const txt = extractTxt(event);

  if (txt) {
    const qr = await QRCode.toString(txt, { type: 'svg' });

    callback(null, {
      statusCode: 200,
      body: qr,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } else {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ error: 'Please add `txt` query parameter!' }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
