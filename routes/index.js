import express from "express";
import authRouter from "./authRouter.js";
import desksRouter from "./desksRouter.js";
import columnsRouter from "./columnsRouter.js";
import tasksRouter from "./tasksRouter.js";
import userRouter from "./userRouter.js";
import middlewares from "../middlewares/index.js";

const router = express.Router();

// router.use("/welcome")
router.use("/auth", authRouter);
router.use("/current", middlewares.authenticate, userRouter);
router.use("/desks", middlewares.authenticate, desksRouter);
router.use("/columns", middlewares.authenticate, columnsRouter);
router.use("/tasks", middlewares.authenticate, tasksRouter);

export default router;
