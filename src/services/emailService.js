// /src/services/emailService.js
const sendEmail = async (emailDetails) => {
    const response = await fetch('/api/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailDetails),
    });
    return response.json();
  };
  
  export { sendEmail };
  