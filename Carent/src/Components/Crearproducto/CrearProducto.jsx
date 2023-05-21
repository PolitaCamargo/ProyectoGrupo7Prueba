import React, { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert";

import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";
import "../Crearproducto/CrearProducto.css";

const Formulario = () => {
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [color, setColor] = useState("");
  const [puertas, setPuertas] = useState("");
  const [combustible, setCombustible] = useState("");
  const [imagen, setImagen] = useState(null);
  const opcionesCombustible = ["Gasolina", "Diésel", "Eléctrico"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputKey, setInputKey] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = () => {
    event.preventDefault();
    const regex = /[^\w\s]/;

    if (
      !regex.test(placa) &&
      !regex.test(modelo) &&
      !regex.test(marca) &&
      !regex.test(color) &&
      !regex.test(puertas)
    ) {
      if (
        placa &&
        modelo &&
        marca &&
        color &&
        puertas &&
        combustible &&
        imagen
      ) {
        setIsModalOpen(true);
        setErrorMessage("");
        setIsFormSubmitted(true);
      } else {
        Swal({
          title: "Alerta",
          text: "Todos los campos son obligatorios",
          icon: "warning",
          buttons: {
            confirm: {
              text: "Aceptar",
              value: true,
              visible: true,
              className: "",
              closeModal: true,
            },
          },
        });
      }
    } else {
      Swal({
        title: "importante",
        text: "Los campos no deben contener signos especiales",
        icon: "warning",
        buttons: {
          confirm: {
            text: "Aceptar",
            value: true,
            visible: true,
            className: "",
            closeModal: true,
          },
        },
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPlaca("");
    setModelo("");
    setMarca("");
    setColor("");
    setPuertas("");
    setCombustible("");
    setImagen(null);
    setInputKey(inputKey + 1);
    setIsFormSubmitted(false);
    setErrorMessage("");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImagen(file);
  };

  return (
    <div className="paginaMayor">
      <div className="center">
        <div className="form">
          <form onSubmit={handleSubmit} className="form-container">
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <h2 className="titulo">Formulario de Vehículo</h2>
            <div className="camposFormulario">
              <TextField
                label="Placa"
                value={placa}
                className="buttonText"
                onChange={(event) => setPlaca(event.target.value)}
                required
                disabled={isFormSubmitted}
              />

              <TextField
                label="Modelo"
                value={modelo}
                className="buttonText"
                onChange={(event) => setModelo(event.target.value)}
                required
                disabled={isFormSubmitted}
              />

              <TextField
                label="Marca"
                value={marca}
                className="buttonText"
                onChange={(event) => setMarca(event.target.value)}
                required
                disabled={isFormSubmitted}
              />

              <TextField
                label="Color"
                value={color}
                className="buttonText"
                onChange={(event) => setColor(event.target.value)}
                required
                disabled={isFormSubmitted}
              />

              <TextField
                label="Número de puertas"
                value={puertas}
                className="buttonText"
                onChange={(event) => setPuertas(event.target.value)}
                required
                disabled={isFormSubmitted}
              />

              <FormControl>
                <InputLabel>Tipo de combustible</InputLabel>
                <Select
                  className="select-field"
                  value={combustible}
                  onChange={(event) => setCombustible(event.target.value)}
                  required
                  disabled={isFormSubmitted}
                >
                  <MenuItem value="">Seleccione</MenuItem>
                  {opcionesCombustible.map((opcion) => (
                    <MenuItem key={opcion} value={opcion}>
                      {opcion}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="image-selector">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="cargar"
                  disabled={isFormSubmitted}
                />
              </div>
              <div className="submit-button-container">
                {!isFormSubmitted && (
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    className="submit-button"
                    disabled={isFormSubmitted}
                  >
                    Enviar
                  </Button>
                )}
              </div>
            </div>
          </form>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Vehículo registrado"
            className="modal-content"
            overlayClassName="modal-overlay"
          >
            <h2>Vehículo registrado</h2>
            <button onClick={closeModal}>Cerrar</button>
          </Modal>
        </div>
        <div className="img">
          {imagen && (
            <img
              src={URL.createObjectURL(imagen)}
              alt="Vista previa de la imagen"
              className="image-preview"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Formulario;
