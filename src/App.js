import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import "./styles/toast-s.css";

function App() {
  return (
    <>
      <ToastContainer
        limit={3}
        hideProgressBar={true}
        draggable={true}
        position="top-left"
      />
      <Routes />
    </>
  );
}

export default App;
