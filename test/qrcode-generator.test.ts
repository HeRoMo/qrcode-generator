import { Template } from '@aws-cdk/assertions';
import { App, Stack } from '@aws-cdk/core';
import { QrcodeGeneratorStack } from '@lib/qrcode-generator-stack';

describe('Snapshot Test', () => {
  it('match snapshot', () => {
    const app = new App();
    const stack = new QrcodeGeneratorStack(app, 'MyTestStack');
    expect(Template.fromStack(stack)).toMatchSnapshot();
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
      Runtime: 'nodejs14.x',
    });
  });
  it('have ApiGateway', () => {
    template.hasResourceProperties('AWS::ApiGateway::RestApi', {
      Name: 'qrcode',
    });
  });
});
