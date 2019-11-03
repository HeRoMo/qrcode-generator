#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { QrcodeGeneratorStack } from '../lib/qrcode-generator-stack';

const app = new cdk.App();
new QrcodeGeneratorStack(app, 'QrcodeGeneratorStack');
