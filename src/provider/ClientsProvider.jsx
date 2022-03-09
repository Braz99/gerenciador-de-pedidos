import { createContext, useState, useContext } from "react";

let clientsContext = createContext([]);

export function ClientsProvider({ children }) {
  let [listClients, setListClients] = useState(
    JSON.parse(localStorage.getItem("clients")) ?? []
  );

  let saveStore = (info) =>
    localStorage.setItem("clients", JSON.stringify([...info]));

  return (
    <clientsContext.Provider value={[listClients, setListClients, saveStore]}>
      {children}
    </clientsContext.Provider>
  );
}

export const useClients = () => useContext(clientsContext);
