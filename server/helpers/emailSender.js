const nodemailer = require('nodemailer')
require('dotenv').config();

const sendMailer = async (auth, options) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth,
      debug: true
    });
    return transporter.sendMail(options);
    
  } 
  const auth = { user: process.env.EMAIL, pass: process.env.EMAIL_PASS }

module.exports = async (email, subject, temp) => {
   await sendMailer(auth, {
        to: email.trim(),
        from: auth.email,
        replyTo: auth.email,
        subject: subject,
        text: '',
        html: temp
      });
}