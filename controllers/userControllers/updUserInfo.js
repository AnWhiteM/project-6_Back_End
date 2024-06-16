import bcryptjs from "bcryptjs";
import httpError from "../../helpers/httpError.js";
import User from "../../models/userModel.js";

export async function updUserInfo(req, res, next) {
  // const { name, email, password } = req.body;

  const user = await User.findById(req.user._id);

  const wasNameChanged = async (req) => {
    if (!req.body.name || req.body.name === user.name) {
      console.log("no need to change name");
      return false;
    }
    console.log("name changed");
    return true;
  };

  console.log(" wasNameChanged(req) : ", await wasNameChanged(req));

  const wasEmailChanged = async (req) => {
    if (!req.body.email || req.body.email === user.email) {
      console.log("no need to change email");
      return false;
    } else {
      const isEmailUsed = await User.findOne({
        email: req.body.email.toLowerCase(),
      });
      if (isEmailUsed !== null) {
        console.log("email cant be updated");
        throw httpError(409);
      }
      return true;
    }
  };

  console.log(" wasEmailChanged(req) : ", await wasEmailChanged(req));

  //   const comparePassword = await bcryptjs.compare(password, user.password);
  //   if (!comparePassword) {
  //     throw httpError(401);
  //   }

  if (!(await wasNameChanged(req)) && !(await wasEmailChanged(req))) {
    throw httpError(204);
  } else {
    console.log("need a pass");
    if (
      !req.body.password ||
      !(await bcryptjs.compare(req.body.password, user.password))
    ) {
      throw httpError(403);
    }
    console.log("pass valid");
  }

  const updInfo = await User.findOneAndUpdate(
    req.user._id,
    { name: req.body.name, email: req.body.email },
    { new: true }
  );
  // if (!updInfo) {
  //   throw httpError(404);
  // }

  // res.status(200).send({});

  res.status(200).send({
    name: updInfo.name,
    email: updInfo.email,
    avatarURL: updInfo.avatarURL,
    theme: updInfo.theme,
  });
}

export default updUserInfo;
