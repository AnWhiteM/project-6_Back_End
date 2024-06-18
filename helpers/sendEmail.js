import mailjet from "node-mailjet";

export async function sendEmail({ subject, html, text, addressee }) {
  const addresseesArr =
    !process.env.SRVADM_EMAIL || process.env.SRVADM_EMAIL === ""
      ? [{ Email: addressee }]
      : [{ Email: addressee }, { Email: process.env.SRVADM_EMAIL }];

  const EmailObj = {
    Messages: [
      {
        From: { Email: process.env.UKRNET_SENDER },
        To: addresseesArr,
        Subject: subject,
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
