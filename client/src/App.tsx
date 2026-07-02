import ToastContainer from "./components/feature/ToastContainer";
import Load from "./components/layout/Load";
import AppRouter from "./pages/AppRouter";

function App() {
  return (
    <>
      <ToastContainer>
        <Load />
        <AppRouter />
      </ToastContainer>
    </>
  );
}

export default App;
