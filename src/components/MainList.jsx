import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../styles/mainList_s.css";

function MainList() {
	let [removed, setRemoved] = useState(false);

	function remove(name) {
		for (let index = 0; index < localStorage.length; index++) {
			let list = JSON.parse(localStorage.getItem(index));
			let new_data = {
				name: "",
				adress: "",
				order: [],
				active: true,
			};

			if (name === list.name) {
				new_data.name = name;
				new_data.active = false;
				new_data.order.push({ flavor: "", quantity: 1, price: 10.0 });
				localStorage.setItem(index, JSON.stringify(new_data));
				toast.error(`${name} removido com sucesso!`, {
					autoClose: 2500,
					position: "top-center",
					hideProgressBar: true,
				});
				setRemoved(true);
			}
		}
	}

	useEffect(function generateList() {
		for (let index = 0; index < localStorage.length; index++) {
			let data = JSON.parse(localStorage.getItem(index));

			if (data.active) {
				let li = document.createElement("li");
				let ul = document.getElementById("area_list");

				ul.innerHTML = "";

				let name_text = document.createElement("h2");
				let name = data.name;
				name_text.innerText =
					"Nome: " + (name.charAt(0).toUpperCase() + name.slice(1));

				let adress_text = document.createElement("h3");
				adress_text.innerText = "Endereço: " + data.adress;

				let flavor_text = document.createElement("h3");
				flavor_text.innerText = "Sabor de " + data.order[0].flavor;

				let quantity_text = document.createElement("h3");
				quantity_text.innerText = "Quantidade: " + data.order[0].quantity;

				let price_text = document.createElement("h3");
				price_text.innerText =
					"Preço: R$ " +
					parseFloat(data.order[0].price).toFixed(2).replace(".", ",");

				let button = document.createElement("button");
				button.innerText = "Remover";

				button.addEventListener("click", (e) => {
					e.preventDefault();
					remove(name);
				});

				li.appendChild(name_text);
				li.appendChild(adress_text);
				li.appendChild(flavor_text);
				li.appendChild(quantity_text);
				li.appendChild(price_text);
				li.appendChild(button);

				ul.appendChild(li);
			}
		}
	});

	return (
		<main id="main_list">
			<ul id="area_list"></ul>
		</main>
	);
}

export default MainList;
