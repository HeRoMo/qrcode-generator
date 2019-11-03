import { Construct, Stack, StackProps } from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import { LambdaRestApi } from '@aws-cdk/aws-apigateway';
import * as path from 'path';

export class QrcodeGeneratorStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // IAM Role

    // Lambda Function
    const func = new lambda.Function(this, 'QRCodeGenerator', {
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../src')),
    });

    // APIGateway
    new LambdaRestApi(this, 'QRCodeGeneratorAPI', {
      handler: func,
      restApiName: 'qrcode',
    });
  }
}
