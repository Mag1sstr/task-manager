import { Route, Routes } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import Dashboard from "../components/layout/Dashboard";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
