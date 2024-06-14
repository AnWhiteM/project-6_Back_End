import nodemailer from "nodemailer";

async function sendEmail(data) {
  const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 2525,
    secure: true,
    auth: {
      user: process.env.UKRNET_AUTH_USER,
      pass: process.env.UKRNET_AUTH_PASS,
    },
  };

  await nodemailer.createTransport(nodemailerConfig).sendMail(data);

  return true;
}

export default sendEmail;
