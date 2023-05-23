import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="sticky-header">
      <Link to="/">
        <div className="logo">Logo</div>
      </Link>
      <nav className="nav">
        <Link to="/RegistrarUsuario">
          <button className="nav-button">Registrar Usuario</button>
        </Link>
        <Link to="/CrearProducto">
          <button className="nav-button">Registrar Producto</button>
        </Link>
        <button className="nav-button">Iniciar Sesión</button>
      </nav>
    </header>
  );
};

export default Header;
