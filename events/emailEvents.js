// /events/emailEvents.js
const EventEmitter = require('events');
const emailEvents = new EventEmitter();

emailEvents.on('emailSent', (response) => {
  console.log('Email successfully sent:', response);
});

emailEvents.on('emailFailed', (error) => {
  console.error('Failed to send email:', error);
});

module.exports = emailEvents;
