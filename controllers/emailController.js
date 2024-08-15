// /controllers/emailController.js
const { sendEmail } = require('../services/emailDispatch');

const sendEmailController = async (req, res) => {
  const emailDetails = req.body;
  try {
    await sendEmail(emailDetails);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Failed to send email');
  }
};

module.exports = { sendEmailController };
