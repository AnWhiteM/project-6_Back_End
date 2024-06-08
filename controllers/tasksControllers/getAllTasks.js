import { listTasks } from "../../services/tasksServices.js";

const getAllTasks = async (req, res, next) => {
  const { columnId } = req.params;
  const tasks = await listTasks(columnId);
  res.json(tasks).status(200);
};

export default getAllTasks;
