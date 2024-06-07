import httpError from "../../helpers/httpError.js";
import { removeColumn } from "../../services/tasksServices.js";

const deleteColumn = async (req, res, next) => {
  const { deskId, columnId } = req.params;

  const column = await removeColumn(columnId, deskId);

  if (!column) {
    throw httpError(404, "Column is not found");
  }
  res.status(204).send();
};

export default deleteColumn;
