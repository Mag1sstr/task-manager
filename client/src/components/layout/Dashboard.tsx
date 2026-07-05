import Search from "../ui/Search";
import Sort from "../ui/Sort";
import CreateTask from "./CreateTask";
import Header from "./Header";
import StatusInfo from "./StatusInfo";
import Tasks from "./Tasks";

function Dashboard() {
  return (
    <>
      <Header />
      <div className="flex gap-3 mb-13.25">
        <Search />
        <Sort />
      </div>

      <StatusInfo />
      <Tasks />
      <CreateTask />
    </>
  );
}

export default Dashboard;
