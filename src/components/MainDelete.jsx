import useDeleteAction from "../hooks/useDeleteAction";
import "../styles/components/main-delete-s.css";

export default function MainDelete() {
  let handleDelete = useDeleteAction();

  return (
    <main className="delete-main">
      <h1 className="delete-title">Apagar pedidos</h1>

      <p className="delete-disclaimer">Clique no botão a seguir para apagar todos os pedidos dos clientes.</p>

      <button className="delete-button" onClick={handleDelete}>
        Apagar Pedidos
      </button>
    </main>
  );
}
