import React, { useEffect } from "react";

function MainList() {
	useEffect(() => {
		function generateList() {
			for (let index = 0; index < localStorage.length; index++) {
				let data = JSON.parse(localStorage.getItem(index));
				let li = document.createElement("li");
				let ul = document.getElementById("list_clients");

				let name_text = document.createElement("h2");
				name_text.innerText = data.name;

				let adress_text = document.createElement("h3");
				adress_text.innerText = data.adress;

				let flavor_text = document.createElement("h3");
				flavor_text.innerText = data.order[0].flavor;

				let quantity_text = document.createElement("h3");
				quantity_text.innerText = data.order[0].quantity;

				let price_text = document.createElement("h3");
				price_text.innerText = data.order[0].price;

				let button = document.createElement("button");

				li.appendChild(name_text);
				li.appendChild(adress_text);
				li.appendChild(quantity_text);
				li.appendChild(price_text);
				li.appendChild(button);

				ul.appendChild(li);
			}
		}
	});
	return (
		<main className="main_list">
			<ul id="list_clients"></ul>
		</main>
	);
}

export default MainList;
