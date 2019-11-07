# QRCode Generator 

This is a [AWS CDK](https://aws.amazon.com/cdk/) application sample of Lambda and API Gateway.
This application can generate QRCode.

## Requiurements

- AWS account
- Node.js (> 10.x) and Yarn

## Setup

```console
$ clone https://github.com/HeRoMo/qrcode-generator.git
$ cd qrcode-generator
$ yarn install
$ yarn build
$ yarn cdk deploy
```

After deploy, yout API endpoint is output to console.

## Usage

Access the following URL.

```
https://<your-api-endpoint>/?txt=<string-what-you-want-to-encode>
```

This API returns a QRCode that is encoded `txt` parameter as SVG image.

# Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## LICENSE

[MIT](LICENSE)
