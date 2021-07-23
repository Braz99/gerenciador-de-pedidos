import React from "react";
import "../styles/mainDelete_s.css";

function MainDelete() {
	return (
		<main id="main_delete">
			<h1>Apagar Cadastros</h1>

			<p>
				Clique no botão a seguir para apagar todos os cadastros de clientes.
			</p>

			<button id="button_delete" onClick={() => localStorage.clear()}>
				Apagar Cadastros
			</button>
		</main>
	);
}

export default MainDelete;
