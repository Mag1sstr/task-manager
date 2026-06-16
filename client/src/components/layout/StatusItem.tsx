"use client";
import type { ReactNode } from "react";
import { useFilters } from "../../hooks/useFilters";
import type { StatusType } from "../../types";
interface IProps {
  count: number;
  type: StatusType | null;
  children: ReactNode;
  onClick?: () => void;
}
function StatusItem({ count, type, children, onClick }: IProps) {
  const { taskStatus } = useFilters();
  const names = {
    cancelled: "errors",
    confirmed: "confirmed",
    done: "done",
    in_progress: "in progress",
    new: "new",
  };
  const isHas = taskStatus.some((el) => el === type);
  const num = taskStatus.indexOf(type as StatusType);

  return (
    <li
      onClick={onClick}
      className={`relative flex-1 py-6.5 px-4.5 rounded-[10px] flex items-center gap-4.5 shadow-[0px_4px_8px_0px_#0B1F4D1A] ${isHas && "outline-2 outline-blue-500"}`}
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
