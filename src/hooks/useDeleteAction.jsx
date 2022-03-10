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
        position: "top-center",
        toastId: 20,
      });
    } else {
      toast.warning("Não há pedidos a serem apagados!", {
        autoClose: 2500,
        position: "top-center",
        toastId: 21,
      });
    }
  }

  return handleDelete;
}
