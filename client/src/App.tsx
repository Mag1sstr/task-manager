import { ToastContainer } from "react-toastify";
import Load from "./components/layout/Load";
import AppRouter from "./pages/AppRouter";

function App() {
  return (
    <>
      <Load />
      <ToastContainer />
      <AppRouter />
    </>
  );
}

export default App;
