import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/tasksController.js";
const tasksRouter = Router();

tasksRouter.get("/", getTasks);
tasksRouter.post("/", createTask);
tasksRouter.delete("/:id", deleteTask);
tasksRouter.put("/:id", updateTask);

export default tasksRouter;
