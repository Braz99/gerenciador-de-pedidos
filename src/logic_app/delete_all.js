import { toast } from "react-toastify";

export const handleDelete = (e) => {
	e.preventDefault();

	if (localStorage.length > 0) {
		localStorage.clear();

		toast.error("Pedidos apagados!", {
			autoClose: 2500,
			position: "top-center",
			hideProgressBar: true,
		});
	} else {
		toast.warning("Não há pedidos a serem apagados!", {
			autoClose: 2500,
			position: "top-center",
			hideProgressBar: true,
		});
	}
};
