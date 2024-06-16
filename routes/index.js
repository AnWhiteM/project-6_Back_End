import express from "express";
import authRouter from "./authRouter.js";
import tasksRouter from "./tasksRouter.js";
import userRouter from "./userRouter.js";
import middlewares from "../middlewares/index.js";

const router = express.Router();

// router.use("/welcome")
router.use("/auth", authRouter);
router.use("/users", middlewares.authenticate, userRouter);
router.use("/home", middlewares.authenticate, tasksRouter);

export default router;
