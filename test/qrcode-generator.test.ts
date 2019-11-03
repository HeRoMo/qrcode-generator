import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import { App } from '@aws-cdk/core';
import { QrcodeGeneratorStack } from '@lib/qrcode-generator-stack';

test('Empty Stack', () => {
  const app = new App();
  // WHEN
  const stack = new QrcodeGeneratorStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(matchTemplate({
    Resources: {},
  }, MatchStyle.EXACT));
});
