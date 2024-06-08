import httpError from "../../helpers/httpError.js";
import { rewriteTask } from "../../services/tasksServices.js";

const updateTask = async (req, res, next) => {
  const { title, description, labelColor, deadline, priority } = req.body;
  const { columnId, taskId } = req.params;
  const task = await rewriteTask(taskId, columnId, {
    title,
    description,
    labelColor,
    deadline,
    priority,
  });

  if (!task) {
    throw httpError(404, "Task is not found");
  }

  res.json(task).status(200);
};

export default updateTask;
