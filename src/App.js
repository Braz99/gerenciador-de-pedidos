import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";
import "./styles/App.css";

function App() {
  return (
    <>
      <ToastContainer limit={3} />
      <Routes />
    </>
  );
}

export default App;
