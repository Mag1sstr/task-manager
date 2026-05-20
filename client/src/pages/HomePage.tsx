import Search from "../components/ui/Search";
import Header from "../components/layout/Header";
import Menu from "../components/layout/Menu";
import StatusInfo from "../components/layout/StatusInfo";
import Tasks from "../components/layout/Tasks";
import CreateTask from "../components/layout/CreateTask";

function HomePage() {
  return (
    <section className="flex h-screen">
      <Menu />
      <div className="pt-11.75 pl-17 pr-37.5 flex-1">
        <Header />
        <Search />
        <StatusInfo />
        <Tasks />
        <CreateTask />
      </div>
    </section>
  );
}

export default HomePage;
