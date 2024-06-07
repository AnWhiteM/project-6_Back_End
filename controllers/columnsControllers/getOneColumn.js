import httpError from "../../helpers/httpError.js";
import { getColumn } from "../../services/tasksServices.js";

const getOneColumn = async (req, res, next) => {
  const { deskId, columnId } = req.params;
  const column = await getColumn(columnId, deskId);

  if (!column) {
    throw httpError(404, "Column is not found");
  }

  res.json(column).status(200);
};

export default getOneColumn;
