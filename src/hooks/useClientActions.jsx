import { toast } from "react-toastify";
import { useClients } from "../provider/ClientsProvider";

export default function useClientActions() {
  let [listClients, setListClients, saveStore] = useClients();

  function removeClient(name) {
    let newList = listClients.filter((client) => client.name !== name);

    setListClients([...newList]);

    saveStore(newList);

    toast.error("Cliente removido!");
  }

  return { removeClient };
}
