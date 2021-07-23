import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "./routes";
import "./styles/App.css";

function App() {
	return (
		<>
			<ToastContainer limit={1} />
			<Router />
		</>
	);
}

export default App;
