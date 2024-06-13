import express from "express";
import userSchemas from "../schemas/userSchemas.js";
import mdwrs from "../middlewares/index.js";
import ctrls from "../controllers/index.js";

const { updUserInfoSchema, changeThemeSchema, changeAvatarSchema } =
  userSchemas;

const userRouter = express.Router();

// get user info
userRouter.get("/", mdwrs.authenticate, ctrls.getUserInfo);

// update user info
userRouter.patch(
  "/update",
  mdwrs.validateBody(updUserInfoSchema),
  mdwrs.authenticate,
  ctrls.updUserInfo
);

// change theme
userRouter.put(
  "/theme",
  mdwrs.validateBody(changeThemeSchema),
  mdwrs.authenticate,
  ctrls.changeTheme
);

// change avatar
userRouter.put(
  "/avatar",
  mdwrs.validateBody(changeAvatarSchema),
  mdwrs.authenticate,
  ctrls.changeUserAvatar
);

export default userRouter;
