import { addTask } from "../../services/tasksServices.js";

const createTask = async (req, res, next) => {
  const { title, description, deadline, priority } = req.body;
  const { columnId } = req.params;

  const newTask = await addTask({
    title,
    columnId,
    description,
    deadline,
    priority,
  });

  res.json(newTask).status(201);
};

export default createTask;
