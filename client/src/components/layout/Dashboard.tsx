import Search from "../ui/Search";
import CreateTask from "./CreateTask";
import Header from "./Header";
import StatusInfo from "./StatusInfo";
import Tasks from "./Tasks";

function Dashboard() {
  return (
    <>
      <Header />
      <Search />
      <StatusInfo />
      <Tasks />
      <CreateTask />
    </>
  );
}

export default Dashboard;
