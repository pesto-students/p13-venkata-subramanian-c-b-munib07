let tasks = [];
let taskId = 1;

const getAllTasks = (req, res) => {
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = {
    id: taskId++,
    title,
    description,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(task => task.id === id);
  if (!task) {
    res.status(404).json({ error: 'Task not found' });
  } else {
    res.json(task);
  }
};

const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const { completed } = req.body;
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    res.status(404).json({ error: 'Task not found' });
  } else {
    tasks[taskIndex] = {
      id,
      title: tasks[taskIndex].title,
      description: tasks[taskIndex].description,
      completed: completed || tasks[taskIndex].completed
    };
    res.json(tasks[taskIndex]);
  }
};

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    res.status(404).json({ error: 'Task not found' });
  } else {
    tasks.splice(taskIndex, 1);
    res.sendStatus(204);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
};
