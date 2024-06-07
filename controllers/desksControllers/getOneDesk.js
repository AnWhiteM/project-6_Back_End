import httpError from "../../helpers/httpError.js";
import { getDesk } from "../../services/tasksServices.js";

const getOneDesk = async (req, res, next) => {
  const { id } = req.params;
  const desk = await getDesk(id, req.user._id);

  if (!desk) {
    throw httpError(404, "Desk is not found");
  }

  res.json(desk).status(200);
};

export default getOneDesk;
