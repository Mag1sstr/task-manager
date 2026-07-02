import { useForm, type SubmitHandler } from "react-hook-form";
import type { ITask } from "../../types";
import { useCreateTaskMutation } from "../../store/api";
import { useEffect, useState } from "react";

export type CreateTaskForm = Omit<ITask, "createdAt" | "updatedAt" | "status">;

function CreateTask() {
  const [type, setType] = useState(false);
  const [createTask, { isSuccess, isLoading }] = useCreateTaskMutation();
  const { register, handleSubmit } = useForm<CreateTaskForm>();
  const submit: SubmitHandler<CreateTaskForm> = (data) => {
    createTask(data);
  };

  useEffect(() => {
    if (isSuccess) {
      // toast.success("Добавлено");
    }
  }, [isSuccess]);
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col">
      <div className="mb-5.5 ">
        <h1>Create</h1>
        <label
          className="block font-bold text-[12px] mb-2 text-[#CED2DB]"
          htmlFor=""
        >
          Title:
        </label>
        <input
          {...register("title", { required: "Обязательно" })}
          className="w-full border border-[#CED2DB] rounded-[5px] px-3.75"
          type="text"
        />
      </div>
      <textarea
        {...register("description")}
        className="resize-none mb-4  px-3.75 py-2.75 h-100 w-full border border-[#CED2DB] rounded-[5px] placeholder:text-[#CED2DB] placeholder:text-[12px]"
        placeholder="Description"
      ></textarea>

      <button
        disabled={isLoading}
        className={`ml-auto py-2.5 font-bold text-[12px] px-12.5 bg-[#6BC2BB] rounded-[5px] text-white ${isLoading && "opacity-40"}`}
      >
        Add
      </button>
    </form>
  );
}

export default CreateTask;
