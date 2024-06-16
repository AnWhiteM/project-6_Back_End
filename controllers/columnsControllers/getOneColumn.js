import httpError from "../../helpers/httpError.js";
import { getColumn, listTasks } from "../../services/tasksServices.js";

const getOneColumn = async (req, res, next) => {
  const { deskId, columnId } = req.params;
  const column = await getColumn(columnId, deskId);

  if (!column) {
    throw httpError(404, "Column is not found");
  }

  const tasks = await listTasks(column._id);
  column.tasks = tasks;

  res.json(column).status(200);
};

export default getOneColumn;
