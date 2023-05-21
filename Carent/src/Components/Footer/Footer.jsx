import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="contenedor">
        <div className="footer-logo">
          <img src="/ruta-del-logo.png" alt="Logo" />
        </div>
        <div className="footer-social">
          {/* Campos para las redes sociales */}
          <a href="https://ejemplo.com">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://ejemplo.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://ejemplo.com">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-copyright">
          {/* Campo para derechos de autor */}
          <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
