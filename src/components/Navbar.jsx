import { Link, useLocation } from "react-router-dom";
import "../styles/navbar_s.css";

function Navbar() {
  const location = useLocation();

  const url = location.pathname.replace("/", "");

  return (
    <nav id="navbar">
      <ul id="menu">
        <li className={`item_menu ${url === "" ? "active" : ""}`} id="register">
          <Link to="/">Registrar</Link>
        </li>
        <li className={`item_menu ${url === "list" ? "active" : ""}`} id="list">
          <Link to="/list">Listar</Link>
        </li>
        <li
          className={`item_menu ${url === "delete" ? "active" : ""}`}
          id="delete"
        >
          <Link to="/delete">Apagar registros</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
