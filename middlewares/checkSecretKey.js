import httpError from "../helpers/httpError.js";

export function checkSecretKey(req, res, next) {
  try {
    const { secretkey } = req.headers;
    if (secretkey !== process.env.SECRET_KEY) {
      throw error;
    }
    next();
  } catch (error) {
    next(httpError(666, "GORI V ADU, MAMKIN HATSKER"));
  }
}

export default checkSecretKey;
