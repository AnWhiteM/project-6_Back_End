import sendEmail from "../../helpers/sendEmail.js";

export async function sendHelpMsg(req, res, next) {
  const { email, comment } = req.body;

  const addressee = process.env.SUPPORT_EMAIL;
  const subject = "Need help";
  const html = `
          <div>${comment}</div></br>
          <div><a href="mailto:${email}" target="_blank">${email}</a></div>`;
  const text = `${comment}\n${email}`;

  const helpEmail = { subject, html, text, addressee };

  await sendEmail(helpEmail);

  res.status(202).send({ message: "Help message sent" });
}

export default sendHelpMsg;
