import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrearProducto from "./Components/Crearproducto/CrearProducto";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import RegistrarUsuario from "./Components/RegistrarUsuario/RegistrarUsuario";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/CrearProducto" element={<CrearProducto />} />
        <Route path="/RegistrarUsuario" element={<RegistrarUsuario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
