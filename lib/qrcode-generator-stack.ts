import { Construct, Stack, StackProps } from '@aws-cdk/core';
import {
  Code,
  Function as LambdaFunc,
  LayerVersion,
  Runtime,
} from '@aws-cdk/aws-lambda';
import { LambdaRestApi } from '@aws-cdk/aws-apigateway';
import * as path from 'path';

export class QrcodeGeneratorStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const runtime = Runtime.NODEJS_12_X;

    // Lambda Layer
    const layer = new LayerVersion(this, 'QRCodeGeneratorLayer', {
      compatibleRuntimes: [runtime],
      code: Code.fromAsset('dist'),
    });

    // Lambda Function
    const func = new LambdaFunc(this, 'QRCodeGenerator', {
      runtime,
      handler: 'index.handler',
      code: Code.fromAsset(path.join(__dirname, '../src')),
      layers: [layer],
    });

    // APIGateway
    const api = new LambdaRestApi(this, 'QRCodeGeneratorAPI', {
      handler: func,
      restApiName: 'qrcode',
      proxy: false,
    });
    api.root.addMethod('GET');
  }
}
