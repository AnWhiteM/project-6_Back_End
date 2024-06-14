import validateBody from "../middlewares/validateBody.js";
import authenticate from "./authenticate.js";
import checkSecretKey from "./checkSecretKey.js";
import uploadAvatar from "./uploadAvatar.js";

export default { validateBody, authenticate, checkSecretKey, uploadAvatar };
