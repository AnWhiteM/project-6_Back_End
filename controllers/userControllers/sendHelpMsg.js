import sendEmail from "../../helpers/sendEmail.js";

export async function sendHelpMsg(req, res, next) {
  const { email, comment } = req.body;

  const supportEmail = process.env.SUPPORT_EMAIL;
  const emailSubject = "Need help";
  const html = `
          <div>${comment}</div></br>
          <div><a href="mailto:${email}" target="_blank">${email}</a></div>`;
  const text = `${comment} ${email}`;

  const helpEmail = { emailSubject, html, text, supportEmail };

  await sendEmail(helpEmail);

  res.status(202).send({ message: "Help message sent" });
}

export default sendHelpMsg;
