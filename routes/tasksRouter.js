import express from "express";
import {
  createTaskSchema,
  updateTaskSchema,
  changeTaskOwnerSchema,
} from "../schemas/taskSchemas.js";
import mdwrs from "../middlewares/index.js";
import ctrls from "../controllers/index.js";

const taskRouter = express.Router();

taskRouter.get("/:deskId/:columnId", ctrls.getAllTasks);

taskRouter.get("/:deskId/:columnId/:taskId", ctrls.getOneTask);

taskRouter.post(
  "/:deskId/:columnId",
  mdwrs.validateBody(createTaskSchema),
  ctrls.createTask
);

taskRouter.put(
  "/:deskId/:columnId/:taskId",
  mdwrs.validateBody(updateTaskSchema),
  ctrls.updateTask
);

taskRouter.patch(
  "/:deskId/:columnId/:taskId",
  mdwrs.validateBody(changeTaskOwnerSchema),
  ctrls.changeTaskOwner
);

taskRouter.delete("/:deskId/:columnId/:taskId", ctrls.deleteTask);

export default taskRouter;
