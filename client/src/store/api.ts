import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { ITask } from "../types";
import type { CreateTaskForm } from "../components/layout/CreateTask";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["tasks", "users"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:2222/api" }),
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], Partial<ITask>>({
      query: (params) => ({
        url: "/tasks",
        params,
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
    }),
    updateTask: builder.mutation<ITask, { _id: string; body: Partial<ITask> }>({
      query: ({ _id, body }) => ({
        url: `/tasks/${_id}`,
        body,
        method: "PUT",
      }),
      invalidatesTags: ["tasks"],
    }),
    getUser: builder.query<
      { username: string; password: string },
      { username: string; password: string }
    >({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["users"],
    }),
    createUser: builder.mutation<
      { username: string; password: string },
      { username: string; password: string }
    >({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useCreateUserMutation,
  useGetUserQuery,
} = api;
