import { addDesk } from "../../services/tasksServices.js";

const createDesk = async (req, res, next) => {
  const { title, icon, background } = req.body;
  const owner = req.user._id;

  const newDesk = await addDesk({ title, owner, icon, background });

  res.json(newDesk).status(201);
};

export default createDesk;
