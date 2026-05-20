import { Task } from "../models/TaskModel.js";

export const getTasks = async (req, res) => {
  let filters = {};
  const { title } = req.query;
  if (title) {
    filters.title = { $regex: title, $options: "i" };
  }
  const tasks = await Task.find(filters);
  res.json(tasks);
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (error) {
    res.json({ message: error });
  }
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  res.json(task);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json(task);
};
