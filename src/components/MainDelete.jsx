import React from "react";
import { handleDelete } from "../logic_app/delete_all";
import "../styles/mainDelete_s.css";

function MainDelete() {
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

export default MainDelete;
