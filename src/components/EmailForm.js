// /src/components/EmailForm.js
import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';

const EmailForm = () => {
  const [emailDetails, setEmailDetails] = useState({
    from: '',
    to: '',
    subject: '',
    body: '',
  });

  const handleChange = (e) => {
    setEmailDetails({ ...emailDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(emailDetails);
      alert('Email sent successfully');
    } catch (error) {
      alert('Failed to send email');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="from" placeholder="From" onChange={handleChange} />
      <input name="to" placeholder="To" onChange={handleChange} />
      <input name="subject" placeholder="Subject" onChange={handleChange} />
      <textarea name="body" placeholder="Body" onChange={handleChange} />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
