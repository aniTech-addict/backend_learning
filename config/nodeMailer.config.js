import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "kirti7666anand15@gmail.com",
    pass: EMAIL_PASSWORD,
  },
});

// Email sending function - call this when needed
export const sendWelcomeEmail = async () => {
  const info = await transporter.sendMail({
    from: '"Kirti Anand" <kirti7666anand15@gmail.com>',
    to: "kirtianand7666@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent:", info.messageId);
  return info;
};
export default transporter;