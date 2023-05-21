import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CrearProductos from "./Components/Crearproducto/CrearProducto";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Page/Home";
import Body from "./Components/Body/Body";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
