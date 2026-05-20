import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["new", "done", "cancelled", "confirmed", "in_progress"],
      default: "new",
    },
  },
  { timestamps: true },
);
export const Task = mongoose.model("Task", TaskSchema);
