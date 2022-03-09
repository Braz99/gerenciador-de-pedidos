import { toast } from "react-toastify";
import { useClients } from "../provider/ClientsProvider";
import "../styles/mainDelete_s.css";

export default function MainDelete() {
  let [listClients, setListClients] = useClients();

  function handleDelete() {
    if (listClients.length > 0) {
      localStorage.clear();
      setListClients([]);

      toast.error("Pedidos apagados!", {
        autoClose: 2500,
        position: "top-center",
        id: 20,
      });
    } else {
      toast.warning("Não há pedidos a serem apagados!", {
        autoClose: 2500,
        position: "top-center",
        id: 21,
      });
    }
  }

  return (
    <main id="main_delete">
      <h1>Apagar pedidos</h1>

      <p>Clique no botão a seguir para apagar todos os pedidos dos clientes.</p>

      <button id="button_delete" onClick={handleDelete}>
        Apagar Pedidos
      </button>
    </main>
  );
}
