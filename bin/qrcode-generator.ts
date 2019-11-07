#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { QrcodeGeneratorStack } from '../lib/qrcode-generator-stack';

import { prepareLayerModules } from '../lib/prepareLayerModules';

prepareLayerModules();

const env = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};
const app = new App();
new QrcodeGeneratorStack(app, 'QrcodeGeneratorStack', { env });
