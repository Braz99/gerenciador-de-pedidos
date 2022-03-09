import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ClientsProvider } from "./provider/ClientsProvider";

ReactDOM.render(
  <React.StrictMode>
    <ClientsProvider>
      <App />
    </ClientsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
