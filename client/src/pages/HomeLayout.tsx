import { Outlet } from "react-router-dom";
import Menu from "../components/layout/Menu";

function HomeLayout() {
  return (
    <section className="flex h-screen">
      <Menu />
      <div className="pt-11.75 pl-17 pr-37.5 flex-1">
        <Outlet />
      </div>
    </section>
  );
}

export default HomeLayout;
