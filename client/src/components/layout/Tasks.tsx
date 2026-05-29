import { useDebounce } from "../../hooks/useDebounce";
import { useFilters } from "../../hooks/useFilters";
import { useDeleteTaskMutation, useGetTasksQuery } from "../../store/api";
import type { StatusType } from "../../types";

function Tasks() {
  const { searchValue } = useFilters();
  const { data: tasks } = useGetTasksQuery({
    title: useDebounce(searchValue),
  });
  const [deleteTask] = useDeleteTaskMutation();

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
        {tasks?.map(({ title, status, createdAt, _id }) => (
          <tr key={_id} className="pb-4 ">
            <td
              className={`relative border inline-block py-1 p-3 min-w-[94px] text-center transition-all cursor-pointer mb-4 rounded-sm ${statusConfig[status].styles || ""}`}
            >
              <div className="absolute py-2 bg-zinc-100 shadow-2xl rounded-lg w-40 top-full left-0 mt-1 z-10">
                <p>Change status:</p>
                {Object.entries(statusConfig).map(([key, v]) => (
                  <div key={key} className="p-3 hover:bg-zinc-200 text-[14px]">
                    {v.text}
                  </div>
                ))}
              </div>
              {statusConfig[status].text}
            </td>
            <td>{title}</td>
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
