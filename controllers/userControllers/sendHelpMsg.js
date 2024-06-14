import sendEmail from "../../helpers/sendEmail.js";

export async function sendHelpMsg(req, res, next) {
  const { email, comment } = req.body;

  const helpEmail = {
    Messages: [
      {
        From: {
          Email: "taskprosupport@ukr.net",
          // Email: "vitaliy.shchukin@gmail.com",
        },
        To: [
          {
            Email: "vitaliy.shchukin@gmail.com",
          },
        ],
        Subject: "Need help",
        HTMLPart: `
            <div>${comment}</div></br>
            <div><a href="mailto:${email}" target="_blank">${email}</a></div>`,
        TEXTPart: `${comment} ${email}`,
        CustomID: "AppGettingStartedTest",
      },
    ],

    // to: process.env.SUPPORT_EMAIL,
    // from: process.env.UKRNET_SENDER,
    // subject: "Need Help",
    // html: `
    //   <div>${comment}</div></br>
    //   <div><a href="mailto:${email}" target="_blank">${email}</a></div>`,
    // text: `${comment} ${email}`,
  };

  await sendEmail(helpEmail);

  res.status(202).send({ message: "Help message sent" });
}

export default sendHelpMsg;
