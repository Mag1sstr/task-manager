import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { ITask } from "../types";
import type { CreateTaskForm } from "../components/layout/CreateTask";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["tasks"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:2222/api" }),
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], void>({
      query: () => ({
        url: "/tasks",
      }),
      providesTags: ["tasks"],
    }),
    createTask: builder.mutation<ITask, CreateTaskForm>({
      query: (body) => ({
        url: "/tasks",
        method: "POST",
        body,
      }),
      invalidatesTags: ["tasks"],
    }),
    deleteTask: builder.mutation<ITask, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
} = api;
