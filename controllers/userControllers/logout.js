import User from "../../models/userModel.js";

export async function logout(req, res, next) {
  const { _id } = req.user;

  await User.findOneAndUpdate(_id, { token: null });

  res.status(200).send({ message: "Logout completed" });
}

export default logout;
