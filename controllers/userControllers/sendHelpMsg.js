import sendEmail from "../../helpers/sendEmail.js";

export async function sendHelpMsg(req, res, next) {
  const { email, comment } = req.body;

  const helpEmail = {
    to: process.env.SUPPORT_EMAIL,
    from: process.env.UKRNET_SENDER,
    subject: "Need Help",
    html: `
      <div>${comment}</div></br>
      <div><a href="mailto:${email}" target="_blank">${email}</a></div>`,
    text: `${comment} ${email}`,
  };

  await sendEmail(helpEmail);

  res.status(202).send({ message: "NeedHelp message sent" });
}

export default sendHelpMsg;
