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
			<h1>Cadastro</h1>
			<form id="form" onSubmit={HandleSubmit}>
				<label htmlFor="name">Nome:</label>
				<input
					name="name"
					value={name}
					id="input_name"
					onChange={(e) => setName(e.target.value)}
				/>

				<label htmlFor="adress">Endereco:</label>
				<input
					name="adress"
					id="input_adress"
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
					<option value="">Sabor</option>
					<option value="leite condensado" selected>
						Leite Condensado
					</option>
					<option value="chocolate">Chocolate</option>
					<option value="abacaxi">Abacaxi</option>
					<option value="goiaba">Goiaba</option>
					<option value="morango">Morango</option>
				</select>

				<label htmlFor="quantity">Quantidade:</label>
				<input
					name="quantity"
					id="input_quantity"
					type="number"
					min="1"
					max="500"
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
				/>
				<button type="submit" id="button_form">
					Cadastrar
				</button>
			</form>
		</main>
	);
}

export default MainHome;
