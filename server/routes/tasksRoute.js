import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTasks,
} from "../controllers/tasksController.js";
const tasksRouter = Router();

tasksRouter.get("/", getTasks);
tasksRouter.post("/", createTask);
tasksRouter.delete("/:id", deleteTask);

export default tasksRouter;
