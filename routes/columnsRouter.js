import express from "express";
import {
  createColumnSchema,
  updateColumnSchema,
} from "../schemas/columnSchemas.js";
import mdwrs from "../middlewares/index.js";
import ctrls from "../controllers/index.js";

const columnRouter = express.Router();

columnRouter.get("/:deskId", ctrls.getAllColumns);

columnRouter.get("/:deskId/:columnId", ctrls.getOneColumn);

columnRouter.post(
  "/:deskId",
  mdwrs.validateBody(createColumnSchema),
  ctrls.createColumn
);

columnRouter.put(
  "/:deskId/:columnId",
  mdwrs.validateBody(updateColumnSchema),
  ctrls.updateColumn
);

columnRouter.delete("/:deskId/:columnId", ctrls.deleteColumn);

export default columnRouter;
