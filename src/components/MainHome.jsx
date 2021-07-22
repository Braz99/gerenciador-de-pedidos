import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../styles/mainHome_s.css";

function MainHome() {
	let [name, setName] = useState("");
	let [adress, setAdress] = useState("");
	let [flavor, setFlavor] = useState("");
	let [quantity, setQuantity] = useState(1);
	let [price, setPrice] = useState(10.0);
	let storage = localStorage.length + 1;

	useEffect(() => {
		let quant_int = parseInt(quantity);

		setPrice(parseFloat(quant_int * 10.0));
	}, [quantity]);

	let data = {
		name: "",
		adress: "",
		order: [],
		active: true,
	};

	function HandleSubmit(event) {
		event.preventDefault();
		if (name === "" || adress === "" || flavor === "" || quantity === "") {
			toast.error("Preencha todos os campos corretamente!", {
				autoClose: 3000,
				position: "top-center",
				hideProgressBar: true,
			});
		} else {
			let exist = false;
			for (let index = 0; index < storage; index++) {
				let items = JSON.parse(localStorage.getItem(index));

				if (localStorage.getItem(index) === null && exist === false) {
					data.name = name;
					data.adress = adress;
					data.order.push({
						flavor: flavor,
						quantity: parseInt(quantity),
						price: price,
					});
					localStorage.setItem(index, JSON.stringify(data));

					toast.success("Cliente Cadastrado!", {
						autoClose: 3000,
						position: "top-center",
						hideProgressBar: true,
					});
				} else if (localStorage.getItem(index) !== null) {
					if (items.name === name) {
						exist = true;
						data.active = true;
						data.name = name;
						data.adress = adress;

						let number = parseInt(items.order[0].quantity) + parseInt(quantity);

						if (items.order[0].flavor !== flavor) {
							number = parseInt(quantity);
						}

						let total_price = parseFloat(number * 10.0);

						data.order.pop();

						data.order.push({
							flavor: flavor,
							quantity: number,
							price: total_price,
						});
						localStorage.setItem(index, JSON.stringify(data));
					}

					toast.warning(`Dados de ${name} atualizados com sucesso!`, {
						autoClose: 3000,
						position: "top-center",
						hideProgressBar: true,
					});
				}
			}

			setName("");
			setAdress("");
			setFlavor("");
			setQuantity(1);
			setPrice(10.0);
		}
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
					<option value="leite condensado">Leite Condensado</option>
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
				<h4>Preço: R$ {parseFloat(price).toFixed(2).replace(".", ",")}</h4>
				<button type="submit" id="button_form">
					Cadastrar
				</button>
			</form>
		</main>
	);
}

export default MainHome;
