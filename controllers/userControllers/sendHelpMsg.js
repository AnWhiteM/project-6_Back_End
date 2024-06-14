import sendEmail from "../../helpers/sendEmail.js";

export async function sendHelpMsg(req, res, next) {
  const { email, comment } = req.body;

  const helpEmail = {    Messages: [
      {
        From: {
          Email: process.env.UKRNET_SENDER,
        },
        To: [
          {
            Email: process.env.SUPPORT_EMAIL,
          },
          {
            Email: process.env.SUB_SUPPORT_EMAIL,
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
  };

  await sendEmail(helpEmail);

  res.status(202).send({ message: "Help message sent" });
}

export default sendHelpMsg;
