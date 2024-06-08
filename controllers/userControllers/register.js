import bcryptjs from "bcryptjs";
import httpError from "../../helpers/httpError.js";
import User from "../../models/userModel.js";

export async function register(req, res, next) {
  const { name, email, password } = req.body;

  const isEmailUsed = await User.findOne({ email: email.toLowerCase() });
  if (isEmailUsed !== null) {
    throw httpError(400, "Email in use");
  }

  const hashPassword = await bcryptjs.hash(password, 10);

  const newUser = await User.create({
    name,
    email: email.toLowerCase(),
    password: hashPassword,
  });

  res.status(201).send({
    user: {
      name: newUser.name,
      email: newUser.email,
      avatarURL: newUser.avatarURL,
      theme: newUser.theme,
    },
  });
}

export default register;
