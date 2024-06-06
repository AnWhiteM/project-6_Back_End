import express from "express";
import { createDeskSchema, updateDeskSchema } from "../schemas/deskSchemas.js";
import mdwrs from "../middlewares/index.js";
import ctrls from "../controllers/index.js";

const taskRouter = express.Router();

taskRouter.get("/", mdwrs.authenticate, ctrls.getAllDesks);

taskRouter.get("/:id", mdwrs.authenticate, ctrls.getOneDesk);

taskRouter.post(
  "/",
  mdwrs.validateBody(createDeskSchema),
  mdwrs.authenticate,
  ctrls.createDesk
);

taskRouter.put(
  "/:id",
  mdwrs.validateBody(updateDeskSchema),
  mdwrs.authenticate,
  ctrls.updateDesk
);

taskRouter.delete("/:id", mdwrs.authenticate, ctrls.deleteDesk);

export default taskRouter;
