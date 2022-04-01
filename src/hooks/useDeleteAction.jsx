import { toast } from "react-toastify";
import { useClients } from "../provider/ClientsProvider";

export default function useDeleteAction() {
  let [listClients, setListClients] = useClients();

  function handleDelete() {
    if (listClients.length > 0) {
      localStorage.clear();
      setListClients([]);
      toast.error("Pedidos apagados!", {
        autoClose: 2500,
        toastId: 20,
      });
    } else {
      toast.warn("Não há pedidos a serem apagados!", {
        autoClose: 2500,
        toastId: 21,
      });
    }
  }

  return handleDelete;
}
