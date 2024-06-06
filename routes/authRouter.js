import express from "express";
import userSchemas from "../schemas/userSchemas.js";

const { registerSchema, loginSchema } = userSchemas;
import mdwrs from "../middlewares/index.js";
import ctrls from "../controllers/index.js";

const authRouter = express.Router();

// registration
authRouter.post(
  "/register",
  mdwrs.validateBody(registerSchema),
  ctrls.register
);

// login
authRouter.post("/login", mdwrs.validateBody(loginSchema), ctrls.login);

// logout
authRouter.post("/logout", mdwrs.authenticate, ctrls.logout);

export default authRouter;
