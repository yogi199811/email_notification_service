// /services/providerFactory.js
const config = require('../config/config');
const AWS = require('aws-sdk');
const nodemailer = require('nodemailer');
const mailgun = require('mailgun-js')(config.emailProviders.mailgun);

class AWSSESProvider {
  constructor() {
    this.ses = new AWS.SES({
      accessKeyId: config.emailProviders.aws.accessKeyId,
      secretAccessKey: config.emailProviders.aws.secretAccessKey,
      region: config.emailProviders.aws.region,
    });
  }

  send(emailDetails) {
    const params = {
      Source: emailDetails.from,
      Destination: { ToAddresses: [emailDetails.to] },
      Message: {
        Subject: { Data: emailDetails.subject },
        Body: { Text: { Data: emailDetails.body } },
      },
    };
    return this.ses.sendEmail(params).promise();
  }
}

class MailgunProvider {
  send(emailDetails) {
    const data = {
      from: emailDetails.from,
      to: emailDetails.to,
      subject: emailDetails.subject,
      text: emailDetails.body,
    };
    return mailgun.messages().send(data);
  }
}

class ProviderFactory {
  static getProvider() {
    // Add logic here to choose provider based on config or strategy
    return new AWSSESProvider(); // For example, using AWS SES as default
  }
}

module.exports = ProviderFactory;
