import bcryptjs from "bcryptjs";
import httpError from "../../helpers/httpError.js";
import User from "../../models/userModel.js";

export async function updUserInfo(req, res, next) {
  const user = await User.findById(req.user._id);

  const checkingNameValueForChange = async (req) => {
    if (!req.body.name || req.body.name === user.name || req.body.name === "") {
      return true;
    }
    return false;
  };

  const checkingEmailValueForChange = async (req) => {
    if (
      !req.body.email ||
      req.body.email === user.email ||
      req.body.email === ""
    ) {
      return true;
    } else {
      const isEmailUsed = await User.findOne({
        email: req.body.email.toLowerCase(),
      });
      if (isEmailUsed !== null) {
        throw httpError(409);
      }
      return false;
    }
  };

  if (
    (await checkingNameValueForChange(req)) &&
    (await checkingEmailValueForChange(req))
  ) {
    throw httpError(204);
  } else {
    if (
      !req.body.password ||
      !(await bcryptjs.compare(req.body.password, user.password))
    ) {
      throw httpError(403);
    }
  }

  const updInfo = await User.findOneAndUpdate(
    req.user._id,
    { name: req.body.name, email: req.body.email },
    { new: true }
  );

  res.status(200).send({
    name: updInfo.name,
    email: updInfo.email,
    avatarURL: updInfo.avatarURL,
    theme: updInfo.theme,
  });
}

export default updUserInfo;
