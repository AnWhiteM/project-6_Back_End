import httpError from "../../helpers/httpError.js";
import { getTask } from "../../services/tasksServices.js";

const getOneTask = async (req, res, next) => {
  const { columnId, taskId } = req.params;
  const task = await getTask(taskId, columnId);

  if (!task) {
    throw httpError(404, "Task is not found");
  }

  res.json(task).status(200);
};

export default getOneTask;
