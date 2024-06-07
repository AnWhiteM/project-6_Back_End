import { listColumns } from "../../services/tasksServices.js";

const getAllColumns = async (req, res, next) => {
  const { deskId } = req.params;
  const columns = await listColumns(deskId);
  res.json(columns).status(200);
};

export default getAllColumns;
