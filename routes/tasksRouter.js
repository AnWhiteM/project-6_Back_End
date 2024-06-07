import express from "express";
import { createDeskSchema, updateDeskSchema } from "../schemas/deskSchemas.js";
import {
  createColumnSchema,
  updateColumnSchema,
} from "../schemas/columnSchemas.js";
import mdwrs from "../middlewares/index.js";
import ctrls from "../controllers/index.js";

const taskRouter = express.Router();

// Desk Routes

taskRouter.get("/", ctrls.getAllDesks);

taskRouter.get("/:id", ctrls.getOneDesk);

taskRouter.post("/", mdwrs.validateBody(createDeskSchema), ctrls.createDesk);

taskRouter.put("/:id", mdwrs.validateBody(updateDeskSchema), ctrls.updateDesk);

taskRouter.delete("/:id", ctrls.deleteDesk);

// Column Routes

taskRouter.get("/:deskId/columns", ctrls.getAllColumns);

taskRouter.get("/:deskId/columns/:columnId", ctrls.getOneColumn);

taskRouter.post(
  "/:deskId/columns",
  mdwrs.validateBody(createColumnSchema),
  ctrls.createColumn
);

taskRouter.put(
  "/:deskId/columns/:columnId",
  mdwrs.validateBody(updateColumnSchema),
  ctrls.updateColumn
);

taskRouter.delete("/:deskId/columns/:columnId", ctrls.deleteColumn);

export default taskRouter;
