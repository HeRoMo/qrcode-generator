import '@aws-cdk/assert/jest';
import { SynthUtils } from '@aws-cdk/assert';
import { App, Stack } from '@aws-cdk/core';
import { QrcodeGeneratorStack } from '@lib/qrcode-generator-stack';

import { fakeLayerModules } from './test_helper';

beforeAll(() => {
  fakeLayerModules();
});

describe('Snapshot Test', () => {
  it('match snapshot', () => {
    const app = new App();
    const stack = new QrcodeGeneratorStack(app, 'MyTestStack');
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });
});

describe('Contain specific resources', () => {
  let stack: Stack;
  beforeEach(() => {
    const app = new App();
    stack = new QrcodeGeneratorStack(app, 'MyTestStack');
  });
  it('have Lambda Layer', () => {
    expect(stack).toHaveResource('AWS::Lambda::LayerVersion', {
      CompatibleRuntimes: ['nodejs12.x'],
    });
  });
  it('have Lambda Function', () => {
    expect(stack).toHaveResource('AWS::Lambda::Function', {
      Runtime: 'nodejs12.x',
    });
  });
  it('have ApiGateway', () => {
    expect(stack).toHaveResource('AWS::ApiGateway::RestApi', {
      Name: 'qrcode',
    });
  });
});
