import httpError from "../../helpers/httpError.js";
import { rewriteTask } from "../../services/tasksServices.js";

const changeTaskOwner = async (req, res, next) => {
  const { owner } = req.body;
  const { columnId, taskId } = req.params;
  const task = await rewriteTask(taskId, columnId, {
    owner,
  });

  if (!task) {
    throw httpError(404, "Task is not found");
  }

  res.json(task).status(200);
};

export default changeTaskOwner;
