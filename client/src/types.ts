export type StatusType =
  | "new"
  | "done"
  | "cancelled"
  | "confirmed"
  | "in_progress";

export interface ITask {
  _id: string;
  title: string;
  description?: string;
  status: StatusType;
  createdAt: Date;
  updatedAt: Date;
}
