import { Template } from 'aws-cdk-lib/assertions';
import { App } from 'aws-cdk-lib';
import { QrcodeGeneratorStack } from '@lib/qrcode-generator-stack';

import { removeAssetsElements } from './test_helpers';

describe('Snapshot Test', () => {
  it('match snapshot', () => {
    const app = new App();
    const stack = new QrcodeGeneratorStack(app, 'MyTestStack');
    const template = Template.fromStack(stack).toJSON();
    removeAssetsElements(template);

    expect(template).toMatchSnapshot();
  });
});

describe('Contain specific resources', () => {
  let template: Template;
  beforeEach(() => {
    const app = new App();
    const stack = new QrcodeGeneratorStack(app, 'MyTestStack');
    template = Template.fromStack(stack);
  });
  it('have Lambda Function', () => {
    template.hasResourceProperties('AWS::Lambda::Function', {
      Runtime: 'nodejs18.x',
    });
  });
  it('have ApiGateway', () => {
    template.hasResourceProperties('AWS::ApiGateway::RestApi', {
      Name: 'qrcode',
    });
  });
});
