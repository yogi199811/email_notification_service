
// /services/emailDispatch.js
const providerFactory = require('./providerFactory');
const emailEvents = require('../events/emailEvents');

const sendEmail = async (emailDetails) => {
  const provider = providerFactory.getProvider();
  try {
    const response = await provider.send(emailDetails);
    emailEvents.emit('emailSent', response);
  } catch (error) {
    emailEvents.emit('emailFailed', error);
    // Implement retry or fallback logic here
  }
};

module.exports = { sendEmail };
