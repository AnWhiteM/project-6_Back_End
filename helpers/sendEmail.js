import mailjet from "node-mailjet";

async function sendEmail(data) {
  mailjet
    .apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
    .post("send", { version: "v3.1" })
    .request(data);
  return true;
}

export default sendEmail;
