import { listColumns, listTasks } from "../../services/tasksServices.js";

const getAllColumns = async (req, res, next) => {
  const { deskId } = req.params;
  const columns = await listColumns(deskId);

  for (const column of columns) {
    const tasks = await listTasks(column._id);
    column.tasks = tasks;
  }
  res.json(columns).status(200);
};

export default getAllColumns;
