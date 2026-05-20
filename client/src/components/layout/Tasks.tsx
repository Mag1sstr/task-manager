import { useDeleteTaskMutation, useGetTasksQuery } from "../../store/api";

function Tasks() {
  const { data: tasks } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
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
          <tr key={_id} className="pb-4">
            <td>{status}</td>
            <td>{title}</td>
            <td>
              {new Date(createdAt).toLocaleDateString().replaceAll(".", "-")}
            </td>
            <td>
              <button onClick={() => deleteTask(_id)} className="bg-red-500">
                -
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tasks;
