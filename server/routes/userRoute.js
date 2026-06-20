import { Router } from "express";
import { createUser, getUser } from "../controllers/userController.js";

export const userRoute = Router();

userRoute.get("/", getUser);
userRoute.post("/", createUser);

export default userRoute;
