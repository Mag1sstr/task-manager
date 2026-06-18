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

function Tasks() {
  const { searchValue, taskStatus } = useFilters();
  const { data: tasks } = useGetTasksQuery({
    title: useDebounce(searchValue),
  });
  const [editId, setEditId] = useState<null | string>(null);
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
  useEffect(() => {
    if (isUpdateSuccess) {
      alert("Статус обновлен");
      setEditId(null);
    }
  }, [isUpdateSuccess]);

  return (
    <table className="w-full">
      <thead>
        <tr className="flex flex-1 gap-0">
          <td>Status</td>
          <td className="flex-1">Title</td>
          <td>Publish Date</td>
          <td>Insights</td>
        </tr>
      </thead>
      <tbody>
        {tasks
          ?.filter((el) => {
            if (!taskStatus.length) return el;
            for (const item of taskStatus) {
              if (el.status.includes(item)) {
                return el;
              }
            }
          })
          .map(({ title, status, createdAt, _id }) => (
            <tr key={_id} className="pb-4 ">
              <td
                onClick={() => setEditId((prev) => (prev === _id ? null : _id))}
                className={`relative border  inline-block py-1 p-3 min-w-[94px] text-center transition-all cursor-pointer mb-4 rounded-sm ${statusConfig[status].styles || ""}`}
              >
                {editId === _id && (
                  <div className="absolute py-2 bg-zinc-100 shadow-2xl rounded-lg w-40 top-full left-0 mt-1 z-10">
                    <p>Change status:</p>
                    {Object.entries(statusConfig).map(([key, v]) => (
                      <div
                        key={key}
                        onClick={() => {
                          updateTask({
                            _id,
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
                {statusConfig[status].text}
              </td>
              <td>
                <HighlightText text={title} />
              </td>
              <td>
                {new Date(createdAt).toLocaleDateString().replaceAll(".", "-")}
              </td>
              <td>
                <button onClick={() => deleteTask(_id)} className="bg-red-500">
                  -
                </button>
                <button>edit</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Tasks;
