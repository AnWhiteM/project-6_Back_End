import User from "../models/userModel.js";

async function logout(req, res, next) {
  const { _id } = req.user;

  await User.findOneAndUpdate(_id, { token: null });

  res.status(204).send();
}
export default logout;
