"use client";
import type { ReactNode } from "react";
import { useFilters } from "../../hooks/useFilters";
import type { StatusType } from "../../types";
import { useUpdateTaskMutation } from "../../store/api";
interface IProps {
  count: number;
  type: StatusType | null;
  children: ReactNode;
  onClick?: () => void;
}
function StatusItem({ count, type, children, onClick }: IProps) {
  const { taskStatus, dragItem } = useFilters();
  const names = {
    cancelled: "errors",
    confirmed: "confirmed",
    done: "done",
    in_progress: "in progress",
    new: "new",
  };
  const isHas = taskStatus.some((el) => el === type);
  const num = taskStatus.indexOf(type as StatusType);
  const [updateTask] = useUpdateTaskMutation();

  return (
    <li
      onClick={onClick}
      onDragOver={(e) => {
        e.preventDefault();
        e.currentTarget.style.outlineColor = "#6BC2BB";
        e.currentTarget.style.opacity = "0.6";
      }}
      onDragLeave={(e) => {
        e.currentTarget.style.outlineColor = "transparent";
        e.currentTarget.style.opacity = "1";
      }}
      onDrop={(e) => {
        e.preventDefault();
        if (!dragItem) return;

        updateTask({
          _id: dragItem._id,
          body: {
            ...dragItem,
            status: type as StatusType,
          },
        });
        e.currentTarget.style.outlineColor = "transparent";
        e.currentTarget.style.opacity = "1";
      }}
      className={`relative flex-1 py-6.5 px-4.5 rounded-[10px] flex items-center gap-4.5 shadow-[0px_4px_8px_0px_#0B1F4D1A] outline-2  ${isHas ? " outline-blue-500" : "outline-transparent"}`}
    >
      {isHas && (
        <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-medium absolute top-2 right-2">
          {num + 1}
        </div>
      )}
      {children}

      <p className="text-[14px] text-[#858FA6]">
        <strong className="text-[42px]">{count}</strong>{" "}
        {names[type as keyof typeof names] || "unknown"}
      </p>
    </li>
  );
}
export default StatusItem;
