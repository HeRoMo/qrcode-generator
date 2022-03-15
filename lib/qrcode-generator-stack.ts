import { Construct, Stack, StackProps } from '@aws-cdk/core';
import {
  NodejsFunction as LambdaFunc,
} from '@aws-cdk/aws-lambda-nodejs';
import { Runtime } from '@aws-cdk/aws-lambda';
import { LambdaRestApi } from '@aws-cdk/aws-apigateway';

export class QrcodeGeneratorStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const runtime = Runtime.NODEJS_14_X;

    // Lambda Function
    const func = new LambdaFunc(this, 'QRCodeGenerator', {
      runtime,
      entry: 'src/index.ts',
      handler: 'handler',
      bundling: {
        minify: true,
        sourceMap: true,
        target: 'es2020',
      },
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
