import { createContext, useState, useContext } from "react";

let clientsContext = createContext([]);

export function ClientsProvider({ children }) {
  let [listClients, setListClients] = useState(
    JSON.parse(localStorage.getItem("clients")) ?? []
  );

  let saveStore = (info) =>
    localStorage.setItem("clients", JSON.stringify([...info]));

  let getStore = JSON.parse(localStorage.getItem("clients"));

  return (
    <clientsContext.Provider
      value={[listClients, setListClients, saveStore, getStore]}
    >
      {children}
    </clientsContext.Provider>
  );
}

export const useClients = () => useContext(clientsContext);
