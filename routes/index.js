import express from "express";
import authRouter from "./authRouter.js";

const router = express.Router();

// router.use("/welcome")
router.use("/auth", authRouter);
// router.use("/home", trackerRouter)

export default router;
