import React, { useState } from "react";
import "../styles/mainHome_s.css";

function MainHome() {
	let [name, setName] = useState("");
	let [adress, setAdress] = useState("");
	let [flavor, setFlavor] = useState("");
	let [quantity, setQuantity] = useState("");

	function HandleSubmit(event) {
		event.preventDefault();
		console.log(name, adress, flavor, quantity);
	}

	return (
		<main id="main_home" method="POST">
			<form id="form" onSubmit={HandleSubmit}>
				<label htmlFor="name">Nome:</label>
				<input
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<label htmlFor="adress">Endereco:</label>
				<input
					name="adress"
					id="adress"
					value={adress}
					onChange={(e) => setAdress(e.target.value)}
				/>

				<label htmlFor="list_items">Selecione o sabor:</label>

				<select
					name="list_items"
					id="select_items"
					value={flavor}
					onChange={(e) => {
						setFlavor(e.target.value);
					}}>
					<option value="leite condensado">Leite Condensado</option>
					<option value="chocolate">Chocolate</option>
					<option value="abacaxi">Abacaxi</option>
					<option value="goiaba">Goiaba</option>
					<option value="morango">Morango</option>
				</select>

				<label htmlFor="quantity">Quantidade:</label>
				<input
					name="quantity"
					type="number"
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
				/>
				<button type="submit">Cadastrar</button>
			</form>
		</main>
	);
}

export default MainHome;
