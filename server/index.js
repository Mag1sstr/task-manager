import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import tasksRouter from "./routes/tasksRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasksRouter);
app.use("/api/users", userRoute);

async function startApp() {
  try {
    await app.listen(2222, () => console.log("Сервер запущен на 2222"));
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("БД работает"));
  } catch (error) {
    console.log(error);
  }
}

startApp();

// DMrQttnoexBOSAeC
