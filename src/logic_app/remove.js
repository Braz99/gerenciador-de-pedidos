import { toast } from "react-toastify";
import { generateList } from "./generate_list";

export function remove(name) {
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

			generateList();
		}
	}
}
