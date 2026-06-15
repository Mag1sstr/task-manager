"use client";
import type { ReactNode } from "react";
import { useFilters } from "../../hooks/useFilters";
import { setStatusType } from "../../store/slices/filterSlice";
import { useAppDispatch } from "../../store/store";
import type { StatusType } from "../../types";
interface IProps {
  count: number;
  type: StatusType | null;
  children: ReactNode;
}
function StatusItem({ count, type, children }: IProps) {
  const dispatch = useAppDispatch();
  const { taskStatus } = useFilters();
  const names = {
    cancelled: "errors",
    confirmed: "confirmed",
    done: "done",
    in_progress: "in progress",
    new: "new",
  };
  return (
    <li
      onClick={() => dispatch(setStatusType(taskStatus === type ? null : type))}
      className={`flex-1 py-6.5 px-4.5 rounded-[10px] flex items-center gap-4.5 shadow-[0px_4px_8px_0px_#0B1F4D1A] ${taskStatus === type && "outline-2 outline-blue-500"}`}
    >
      {children}

      <p className="text-[14px] text-[#858FA6]">
        <strong className="text-[42px]">{count}</strong>{" "}
        {names[type as keyof typeof names] || "unknown"}
      </p>
    </li>
  );
}
export default StatusItem;
