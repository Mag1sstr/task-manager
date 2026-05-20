import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import Load from "./components/layout/Load";

function App() {
  return (
    <>
      <Load />
      <ToastContainer />
      <HomePage />
    </>
  );
}

export default App;
