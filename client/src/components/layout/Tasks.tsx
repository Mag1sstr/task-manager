import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useFilters } from "../../hooks/useFilters";
import {
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../../store/api";
import type { StatusType } from "../../types";
import HighlightText from "../ui/HighlightText";
import { useAppDispatch } from "../../store/store";
import { setDragItem } from "../../store/slices/filterSlice";

function Tasks() {
  const dispatch = useAppDispatch();
  const { searchValue, taskStatus, dragItem } = useFilters();
  const { data: tasks = [] } = useGetTasksQuery({
    title: useDebounce(searchValue),
  });
  const [editId, setEditId] = useState<null | string>(null);
  const { sortType } = useFilters();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask, { isSuccess: isUpdateSuccess }] = useUpdateTaskMutation();

  const statusConfig: Record<StatusType, { text: string; styles: string }> = {
    done: {
      text: "Done",
      styles: "bg-[#0BB07B]/20 border-[#0BB07B] text-[#0BB07B]",
    },
    cancelled: {
      text: "Cancelled",
      styles: "bg-[#F03D3D]/20 border-[#F03D3D] text-[#F03D3D]",
    },
    confirmed: {
      text: "Done",
      styles: "bg-purple-800/20 border-purple-800 text-purple-800",
    },
    in_progress: {
      text: "In progress",
      styles: "bg-[#FFAD0D]/20 border-[#FFAD0D] text-[#FFAD0D]",
    },
    new: {
      text: "New",
      styles: "bg-[#4070F4]/20 border-[#4070F4] text-[#4070F4]",
    },
  };

  const sortingTasks = sortType
    ? [...tasks].sort((a, b) => {
        switch (sortType) {
          case "date":
            return (
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
          case "length":
            return a.title.length - b.title.length;
          case "dateDesc":
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          default:
            return a.title.length - b.title.length;
        }
      })
    : tasks;
  useEffect(() => {
    if (isUpdateSuccess) {
      alert("Статус обновлен");
      setEditId(null);
    }
  }, [isUpdateSuccess]);

  console.log(dragItem);

  return (
    <section className="w-full">
      <div className="flex px-6.25 pb-5 border-b border-[#CED2DB] mb-6">
        <div className="w-[94px] mr-14">Status</div>
        <div className="flex-1">Title</div>
        <div className="w-[105px] mr-18.75">Publish Date</div>
        <div className="w-[130px]">Insights</div>
      </div>
      <ul className="flex flex-col gap-5">
        {sortingTasks
          .filter((el) => {
            if (!taskStatus.length) return el;
            for (const item of taskStatus) {
              if (el.status.includes(item)) {
                return el;
              }
            }
          })
          .map((el) => (
            <li key={el._id} className="flex pl-1.75 pr-7.5 text-[#858FA6]">
              <div
                onClick={() =>
                  setEditId((prev) => (prev === el._id ? null : el._id))
                }
                className={`relative border self-start text-[12px] mr-[73px]  inline-block py-1 p-3 w-[94px] text-center transition-all cursor-pointer mb-4 rounded-sm ${statusConfig[el.status].styles || ""}`}
              >
                {editId === el._id && (
                  <div className="absolute py-2 bg-zinc-100 shadow-2xl rounded-lg w-40 top-full left-0 mt-1 z-10">
                    <p>Change status:</p>
                    {Object.entries(statusConfig).map(([key, v]) => (
                      <div
                        key={key}
                        onClick={() => {
                          updateTask({
                            _id: el._id,
                            body: {
                              status: key as StatusType,
                            },
                          });
                        }}
                        className="p-3 hover:bg-zinc-200 text-[14px] cursor-pointer"
                      >
                        {v.text}
                      </div>
                    ))}
                  </div>
                )}
                {statusConfig[el.status].text}
              </div>
              <p
                draggable
                onDragStart={() => {
                  dispatch(setDragItem(el));
                }}
                className="flex-1 break-all pr-8.75 self-start underline"
              >
                <HighlightText text={el.title} />
              </p>
              <div className="w-[105px] mr-12">
                {new Date(el.createdAt)
                  .toLocaleDateString()
                  .replaceAll(".", "-")}
              </div>
              <button className="w-[129px] py-3 bg-[#6BC2BB] shadow-sm inset-shadow-[#000000]/30 active:inset-shadow-[#000000]/60 hover:inset-shadow-sm transition-all cursor-pointer mr-6 self-start rounded-[5px] text-white text-[12px] font-bold">
                Actions
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Tasks;
