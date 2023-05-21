import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="sticky-header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <button className="nav-button">Iniciar Sesión</button>
        <button className="nav-button">Registrar Producto</button>
        <button className="nav-button">Registrar Usuario</button>
      </nav>
    </header>
  );
};

export default Header;
