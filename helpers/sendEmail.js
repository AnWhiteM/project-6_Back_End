// import nodemailer from "nodemailer";
import mailjet from "node-mailjet";

async function sendEmail(data) {
  const request = mailjet
    .apiConnect(
      "49a4e0ea8f3ca6f7bdb266346798b877",
      "ce04cc49bf2b770cf8359225ade4ae66"
    )
    .post("send", { version: "v3.1" })
    .request(data);
  
  // request
  //   .then((result) => {
  //     console.log(result.body);
  //   })
  //   .catch((err) => {
  //     console.log(err.statusCode);
  //   });

  // const nodemailerConfig = {
  //   host: "smtp.ukr.net",
  //   port: 2525,
  //   secure: true,
  //   auth: {
  //     user: process.env.UKRNET_AUTH_USER,
  //     pass: process.env.UKRNET_AUTH_PASS,
  //   },
  // };

  // await nodemailer.createTransport(nodemailerConfig).sendMail(data);

  return true;
}

export default sendEmail;
