import { addColumn } from "../../services/tasksServices.js";

const createColumn = async (req, res, next) => {
  const title = req.body.title;
  const { deskId } = req.params;

  const newColumn = await addColumn({ title, deskId });

  res.json(newColumn).status(201);
};

export default createColumn;
