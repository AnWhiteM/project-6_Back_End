import express from "express";
import authRouter from "./authRouter.js";
import tasksRouter from "./tasksRouter.js";

const router = express.Router();

// router.use("/welcome")
router.use("/auth", authRouter);
router.use("/home", tasksRouter);

export default router;
