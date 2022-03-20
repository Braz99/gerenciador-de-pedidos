import { Link, useLocation } from "react-router-dom";
import "../styles/components/navbar-s.css";

function Navbar() {
  const location = useLocation();

  const url = location.pathname.replace("/", "");

  return (
    <nav className="navbar">
      <ul className="menu">
        <li className={url === "" ? "active" : "item-menu "}>
          <Link to="/">Registrar</Link>
        </li>
        <li className={url === "list" ? "active " : "item-menu "}>
          <Link to="/list">Listar</Link>
        </li>
        <li className={url === "delete" ? "active" : "item-menu"}>
          <Link to="/delete">Apagar registros</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
