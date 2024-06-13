import bcryptjs from "bcryptjs";
import httpError from "../../helpers/httpError.js";
import User from "../../models/userModel.js";

export async function register(req, res, next) {
  const { name, email, password } = req.body;

  const isEmailUsed = await User.findOne({ email: email.toLowerCase() });
  if (isEmailUsed !== null) {
    throw httpError(409);
  }

  const hashPassword = await bcryptjs.hash(password, 10);

  await User.create({
    name,
    email: email.toLowerCase(),
    password: hashPassword,
  });

  res.status(201).send({
    message: "Registration success",
  });
}

export default register;
