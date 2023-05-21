import React from "react";
import "./Body.css";
import SeccionTarjetas from "./SeccionTarjetas";

function Body() {
  return (
    <div>
      <section className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar por marca"
            className="search-input"
          />
          <label htmlFor="fechaRetiro" className="input-label">
            Fecha de Retiro:
          </label>
          <input type="date" id="fechaRetiro" className="date-input" />
          <label htmlFor="fechaDevolucion" className="input-label">
            Fecha de Devolución:
          </label>
          <input type="date" id="fechaDevolucion" className="date-input" />
          <button className="search-button">Buscar</button>
          <input
            type="text"
            placeholder="Ingresar cupón"
            className="coupon-input"
          />
        </div>
      </section>

      <section>
        <div className="categorias-container">
          <h4>¿Qué tipo de vehículo?</h4>
          <div className="categoria-card">
            <img
              src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg"
              alt="Categoría 1"
            />
            <h3 className="categoria-nombre">SUV</h3>
          </div>
          <div className="categoria-card">
            <img
              src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg"
              alt="Categoría 2"
            />
            <h3 className="categoria-nombre">Camionetas</h3>
          </div>
          <div className="categoria-card">
            <img
              src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg"
              alt="Categoría 3"
            />
            <h3 className="categoria-nombre">Familiares</h3>
          </div>
          <div className="categoria-card">
            <img
              src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg"
              alt="Categoría 3"
            />
            <h3 className="categoria-nombre">Elite</h3>
          </div>
        </div>
      </section>
      <SeccionTarjetas />
    </div>
  );
}

export default Body;
