import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import httpError from "../helpers/httpError.js";

async function authenticate(req, res, next) {
  try {
    const { authorization } = req.headers;
    if (typeof authorization === undefined) {
      throw error;
    }

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
      throw error;
    }

    const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      throw error;
    }

    req.user = user;
    next();
  } catch (error) {
    next(httpError(401, "Not authorized"));
  }
}

export default authenticate;
