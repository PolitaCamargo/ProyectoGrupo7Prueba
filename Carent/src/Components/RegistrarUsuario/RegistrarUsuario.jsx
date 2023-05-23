import React, { useState } from "react";
import axios from "axios";
import "./RegistrarUsuario.css";

const RegistrarUsuario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    confirmarEmail: "",
    contraseña: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validar los campos antes de enviar los datos al backend
    if (!formData.nombre) {
      formErrors.nombre = "El campo es requerido";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.nombre)) {
      formErrors.nombre =
        "El nombre no debe contener números ni caracteres especiales";
    } else if (formData.nombre.length < 3) {
      formErrors.nombre = "El nombre debe tener al menos 3 caracteres";
    }

    if (!formData.apellido) {
      formErrors.apellido = "El campo es requerido";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.apellido)) {
      formErrors.apellido =
        "El apellido no debe contener números ni caracteres especiales";
    } else if (formData.apellido.length < 3) {
      formErrors.apellido = "El apellido debe tener al menos 3 caracteres";
    }

    if (!formData.email) {
      formErrors.email = "El campo es requerido";
    } else if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      formErrors.email = "El email debe tener un formato válido";
    }

    if (!formData.confirmarEmail) {
      formErrors.confirmarEmail = "El campo es requerido";
    } else if (formData.email !== formData.confirmarEmail) {
      formErrors.confirmarEmail = "Los correos electrónicos no coinciden";
    }

    if (!formData.contraseña) {
      formErrors.contraseña = "El campo es requerido";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$%&]).{8,}/.test(
        formData.contraseña
      )
    ) {
      formErrors.contraseña =
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial (#$%&)";
    }

    // Actualizar los errores de validación
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Hacer la solicitud de registro al backend utilizando axios
      axios
        .post("url_del_endpoint", formData)
        .then((response) => {
          // Manejar la respuesta del backend
          console.log(response.data);
        })
        .catch((error) => {
          // Manejar los errores de la solicitud
          console.error(error);
        });
    }
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo-formulario">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          {errors.nombre && (
            <span className="error-message">{errors.nombre}</span>
          )}
        </div>
        <div className="campo-formulario">
          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
          {errors.apellido && (
            <span className="error-message">{errors.apellido}</span>
          )}
        </div>
        <div className="campo-formulario">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="campo-formulario">
          <label>Confirmar Email</label>
          <input
            type="email"
            name="confirmarEmail"
            value={formData.confirmarEmail}
            onChange={handleChange}
            required
          />
          {errors.confirmarEmail && (
            <span className="error-message">{errors.confirmarEmail}</span>
          )}
        </div>
        <div className="campo-formulario">
          <label>Contraseña</label>
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
          {errors.contraseña && (
            <span className="error-message">{errors.contraseña}</span>
          )}
        </div>
        <button type="submit">Registrar Usuario</button>
      </form>
    </div>
  );
};

export default RegistrarUsuario;
