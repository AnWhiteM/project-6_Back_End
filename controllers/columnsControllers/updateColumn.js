import httpError from "../../helpers/httpError.js";
import { rewriteColumn } from "../../services/tasksServices.js";

const updateColumn = async (req, res, next) => {
  const title = req.body.title;
  const { deskId, columnId } = req.params;
  const column = await rewriteColumn(columnId, deskId, { title });

  if (!column) {
    throw httpError(404, "Column is not found");
  }

  res.json(column).status(200);
};

export default updateColumn;
