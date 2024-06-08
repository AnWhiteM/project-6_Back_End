import httpError from "../../helpers/httpError.js";
import { removeDesk } from "../../services/tasksServices.js";

const deleteDesk = async (req, res, next) => {
  const { id } = req.params;

  const desk = await removeDesk(id, req.user._id);

  if (!desk) {
    throw httpError(404, "Desk is not found");
  }
  res.status(204).send();
};

export default deleteDesk;
