import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar_s.css";

function Navbar() {
	const url = useLocation();

	useEffect(() => {
		if (url.pathname === "/") {
			document.getElementById("register").classList.add("active");
		}

		if (url.pathname === "/list") {
			document.getElementById("list").classList.add("active");
		}

		if (url.pathname === "/delete") {
			document.getElementById("delete").classList.add("active");
		}
	});

	return (
		<nav id="navbar">
			<ul id="menu">
				<li className="item_menu" id="register">
					<Link to="/">Registrar</Link>
				</li>
				<li className="item_menu " id="list">
					<Link to="/list">Listar</Link>
				</li>
				<li className="item_menu " id="delete">
					<Link to="/delete">Apagar registros</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
