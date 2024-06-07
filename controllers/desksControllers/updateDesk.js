import httpError from "../../helpers/httpError.js";
import { rewriteDesk } from "../../services/tasksServices.js";

const updateDesk = async (req, res, next) => {
  const { title, icon, background } = req.body;
  const { id } = req.params;
  const desk = await rewriteDesk(id, req.user._id, {
    title,
    icon,
    background,
  });

  if (!desk) {
    throw httpError(404, "Desk is not found");
  }

  res.json(desk).status(200);
};

export default updateDesk;
