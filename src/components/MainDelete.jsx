import useDeleteAction from "../hooks/useDeleteAction";
import "../styles/mainDelete_s.css";

export default function MainDelete() {
  let handleDelete = useDeleteAction();

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
