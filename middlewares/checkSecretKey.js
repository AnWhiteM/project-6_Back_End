import httpError from "../helpers/httpError.js";

export function checkSecretKey(req, res, next) {
  try {
    const { secretkey } = req.headers;
    console.log("req.headers: ", req.headers);

    if (secretkey !== process.env.SECRET_KEY) {
      throw httpError(666, "SAM SOSKA, GORI V ADU");
    }
    next();
  } catch (error) {
    next(error);
  }
}

export default checkSecretKey;
