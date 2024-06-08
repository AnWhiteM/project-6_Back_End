import { addTask } from "../../services/tasksServices.js";

const createTask = async (req, res, next) => {
  const { title, description, labelColor, deadline, priority } = req.body;
  const { columnId } = req.params;

  const newTask = await addTask({
    title,
    columnId,
    description,
    labelColor,
    deadline,
    priority,
  });

  res.json(newTask).status(201);
};

export default createTask;
