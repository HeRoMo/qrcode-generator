#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { QrcodeGeneratorStack } from '../lib/qrcode-generator-stack';

import { prepareLayerModules } from '../lib/prepareLayerModules';

prepareLayerModules();

const app = new App();
new QrcodeGeneratorStack(app, 'QrcodeGeneratorStack');
