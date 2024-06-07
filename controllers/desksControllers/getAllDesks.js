import { listDesks } from "../../services/tasksServices.js";

const getAllDesks = async (req, res, next) => {
  const desks = await listDesks(req.user._id);
  res.json(desks).status(200);
};

export default getAllDesks;
