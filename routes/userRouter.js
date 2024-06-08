import express from "express";
import userSchemas from "../schemas/userSchemas.js";
import mdwrs from "../middlewares/index.js";
import ctrls from "../controllers/index.js";

const { updUserInfoSchema, changeThemeSchema } = userSchemas;

const userRouter = express.Router();

// get user info
userRouter.get("/", mdwrs.authenticate, ctrls.getUserInfo);

// update user info
userRouter.put(
  "/",
  mdwrs.validateBody(updUserInfoSchema),
  mdwrs.authenticate,
  ctrls.updUserInfo
);

// change theme
mdwrs.authenticate,
  userRouter.patch(
    "/theme",
    mdwrs.validateBody(changeThemeSchema),
    mdwrs.authenticate,
    ctrls.changeTheme
  );

export default userRouter;
