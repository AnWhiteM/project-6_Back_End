import express from "express";
import {
  changeCurrentSchema,
  changeThemeSchema,
  sendHelpMsgSchema,
} from "../schemas/userSchemas.js";
import mdwrs from "../middlewares/index.js";
import ctrls from "../controllers/index.js";

export const userRouter = express.Router();

// get user info
userRouter.get("/current", ctrls.getCurrent);

// update user info
userRouter.patch(
  "/update",
  mdwrs.validateBody(changeCurrentSchema),
  ctrls.changeCurrent
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
  ctrls.changeAvatar
);

// send help email
userRouter.post(
  "/help",
  mdwrs.validateBody(sendHelpMsgSchema),
  ctrls.sendHelpMsg
);

export default userRouter;
