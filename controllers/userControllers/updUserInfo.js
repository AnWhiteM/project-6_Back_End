import bcryptjs from "bcryptjs";
import httpError from "../../helpers/httpError.js";
import User from "../../models/userModel.js";

export async function updUserInfo(req, res, next) {
  const { name, email, password } = req.body;

  const user = await User.findById(req.user._id);

  const comparePassword = await bcryptjs.compare(password, user.password);
  if (!comparePassword) {
    throw httpError(401, "Password wrong");
  }

  const updInfo = await User.findOneAndUpdate(
    req.user._id,
    { name, email },
    {
      new: true,
    }
  );
  if (!updInfo) {
    throw httpError(404);
  }

  res.status(200).send({
    name: updInfo.name,
    email: updInfo.email,
    avatarURL: updInfo.avatarURL,
    theme: updInfo.theme,
  });
}

export default updUserInfo;
