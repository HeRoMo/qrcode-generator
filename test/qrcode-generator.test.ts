import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import QrcodeGenerator = require('../lib/qrcode-generator-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new QrcodeGenerator.QrcodeGeneratorStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});