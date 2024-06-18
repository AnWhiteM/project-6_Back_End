import bcryptjs from "bcryptjs";
import httpError from "../../helpers/httpError.js";
import User from "../../models/userModel.js";

export async function changeCurrent(req, res, next) {
  const { id } = req.user;
  const { name, email, password } = req.body;
  const changeDataObj = {};

  if (name) {
    changeDataObj.name = name;
  }

  if (email) {
    const isEmailUsed = await User.findOne({
      email: email.toLowerCase(),
    });
    if (isEmailUsed !== null && isEmailUsed._id.toString() !== id) {
      throw httpError(409);
    }
    changeDataObj.email = email.toLowerCase();
  }

  if (password) {
    changeDataObj.password = await bcryptjs.hash(password, 10);
  }

  if (Object.keys(changeDataObj).length === 0) {
    throw httpError(204, "No changes fo update");
  }

  const changedUser = await User.findOneAndUpdate({ _id: id }, changeDataObj, {
    new: true,
  });
  if (!changedUser) {
    throw httpError(404, "User not found");
  }

  res.status(200).send({
    name: changedUser.name,
    email: changedUser.email,
    avatarURL: changedUser.avatarURL,
    theme: changedUser.theme,
  });
}

export default changeCurrent;
