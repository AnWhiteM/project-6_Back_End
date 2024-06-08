import httpError from "../../helpers/httpError.js";
import { removeTask } from "../../services/tasksServices.js";

const deleteTask = async (req, res, next) => {
  const { columnId, taskId } = req.params;

  const task = await removeTask(taskId, columnId);

  if (!task) {
    throw httpError(404, "Task is not found");
  }
  res.status(204).send();
};

export default deleteTask;
