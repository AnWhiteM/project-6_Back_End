import httpError from "../../helpers/httpError.js";
import User from "../../models/userModel.js";

export async function changeTheme(req, res, next) {
  const user = await User.findOneAndUpdate(
    req.user._id,
    { theme: req.body.theme },
    { new: true }
  );
  if (!user) {
    throw httpError(404);
  }
  res.status(200).send({
    theme: user.theme,
  });
}

export default changeTheme;
