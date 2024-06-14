import mailjet from "node-mailjet";

export async function sendEmail({ emailSubject, html, text, supportEmail }) {
  const EmailObj = {
    Messages: [
      {
        From: { Email: process.env.UKRNET_SENDER },
        To: [{ Email: supportEmail }, { Email: process.env.SRVADM_EMAIL }],
        Subject: emailSubject,
        HTMLPart: html,
        TEXTPart: text,
        CustomID: "AppGettingStartedTest",
      },
    ],
  };

  mailjet
    .apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
    .post("send", { version: "v3.1" })
    .request(EmailObj);

  return true;
}

export default sendEmail;
