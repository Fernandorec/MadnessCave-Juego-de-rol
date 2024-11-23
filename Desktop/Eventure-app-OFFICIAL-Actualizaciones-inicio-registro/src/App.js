// src/App.js
import "./App.css";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Departamentos from "./Departamentos/Departamentos";
import LaLibertadLugares from "./LaLibertadLugares/LaLibertadLugares";
import HotelMediterraneo from "./Hotel-Mediterraneo/Hotel-Mediterraneo";
import Login from "./Login/Login";
import Portada from "./Portada/Portada";
import Navbar from "./Navbar/Navbar";
import Reservaciones from "./Reservaciones/Reservaciones"; // Importamos Reservaciones

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState, useEffect } from "react";

function App() {
  const navigate = useNavigate();
  
  // Estado local que mantiene el valor de registrationStatus
  const [registrationStatus, setRegistrationStatus] = useState(localStorage.getItem("registrationStatus") || "0");

  // Este hook se activa cada vez que el estado de registrationStatus cambia
  useEffect(() => {
    localStorage.setItem("registrationStatus", registrationStatus);
  }, [registrationStatus]);

  const handleLogout = () => {
    setRegistrationStatus("0");
    navigate("/"); // Redirige a la página principal (Portada)
  };

  return (
    <div className="App">
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet" />

      {/* Navbar con props */}
      <Navbar registrationStatus={registrationStatus} handleLogout={handleLogout} />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function AllPage() {
  return (
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<><Portada /><Departamentos /></>} />
        <Route path="/lalibertad" element={<LaLibertadLugares />} />
        <Route path="/Hotel-Mediterraneo" element={<HotelMediterraneo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservaciones" element={<Reservaciones />} /> {/* Agregar esta ruta */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AllPage;
