#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { QrcodeGeneratorStack } from '../lib/qrcode-generator-stack';

const env = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};
const app = new App();
new QrcodeGeneratorStack(app, 'QrcodeGeneratorStack', { env });
