import express from "express";
import userSchemas from "../schemas/userSchemas.js";
import mdwrs from "../middlewares/index.js";
import ctrls from "../controllers/index.js";

const { updUserInfoSchema, changeThemeSchema, sendHelpMsgSchema } = userSchemas;

const userRouter = express.Router();

// get user info
userRouter.get("/", ctrls.getUserInfo);

// update user info
userRouter.patch(
  "/update",
  mdwrs.validateBody(updUserInfoSchema),
  ctrls.updUserInfo
);

// change theme
userRouter.put(
  "/theme",
  mdwrs.validateBody(changeThemeSchema),
  ctrls.changeTheme
);

// change avatar
userRouter.put(
  "/avatar",
  mdwrs.uploadAvatar.single("avatar"),
  ctrls.changeUserAvatar
);

// send help email
userRouter.post(
  "/help",
  mdwrs.validateBody(sendHelpMsgSchema),
  ctrls.sendHelpMsg
);

export default userRouter;
