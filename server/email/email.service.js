const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  email
};

async function email({ name, email, subject, message }) {
  return await sgMail.send({
    to: 'thismothersjourney.com@gmail.com',
    from: {
      name,
      email,
    },
    subject,
    text: message,
    html: `<p>${message}</p>`
  });
}
