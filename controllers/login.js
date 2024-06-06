import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import httpError from "../helpers/httpError.js";
import bcryptjs from "bcryptjs";

async function login(req, res, next) {
  const { email, password } = req.body;

  const user = await User.findOne({
    email: email.toLowerCase(),
  });
  if (!user) {
    throw httpError(401, "Email or password wrong");
  }

  const comparePassword = await bcryptjs.compare(password, user.password);
  if (!comparePassword) {
    throw httpError(401, "Email or password wrong");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).send({
    token,
    user: {
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
    },
  });
}

export default login;
