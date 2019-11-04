import { Stack, Construct } from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';

export class LambdaSatack extends Stack {
  constructor(scope: Construct, id: String, props: any) {
    super();

    const func = new lambda.Function(this, 'QRCodeGenerator', {
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-handler')),
    });
  }
}
