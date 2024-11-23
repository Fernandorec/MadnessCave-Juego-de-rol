import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Portada.css";

function Portada() {
  const [isRegistered, setIsRegistered] = useState(false); // Estado para saber si está registrado
  const navigate = useNavigate();

  // Este useEffect se ejecutará cada vez que el valor de registrationStatus cambie en localStorage
  useEffect(() => {
    const checkRegistrationStatus = () => {
      const registrationStatus = localStorage.getItem("registrationStatus");
      setIsRegistered(registrationStatus === "1");
    };

    // Verifica el estado inicial al montar el componente
    checkRegistrationStatus();

    // Escucha cambios en localStorage
    window.addEventListener("storage", checkRegistrationStatus);

    // Limpieza del efecto para evitar escuchar cuando el componente se desmonte
    return () => {
      window.removeEventListener("storage", checkRegistrationStatus);
    };
  }, []); // Esto solo se ejecuta una vez cuando el componente se monta

  const handleLoginClick = () => {
    navigate("/login"); // Redirige a la página de inicio de sesión
  };

  const handleRegisterClick = () => {
    setIsRegistered(true); // Cambiar estado de registro a verdadero
    navigate("/login"); // Redirige a la página de inicio de sesión para registro
  };

  return (
    <div className="Portada">
      <main className="main-content">
        <h2 className="title">Organiza tus eventos</h2>
        <p className="subtitle">Organiza, planifica, crea con Eventure</p>
        <div className="image-container">
          <img
            src="ImagenesPortada/Evento1.jpg"
            alt="Evento 1"
            className="event-image"
          />
          <img
            src="ImagenesPortada/Evento2.jpg"
            alt="Evento 2"
            className="event-image"
          />
          <img
            src="ImagenesPortada/Evento3.jpg"
            alt="Evento 3"
            className="event-image"
          />
          <img
            src="ImagenesPortada/Event4.jpg"
            alt="Evento 4"
            className="event-image"
          />
        </div>
        <div className="button-container">
          {/* Aquí utilizamos clases CSS para ocultar/mostrar los botones */}
          <button 
            className={`action-button ${isRegistered ? 'hidden' : ''}`} 
            onClick={handleRegisterClick}
          >
            Registrarse
          </button>
          <button 
            className={`action-button ${isRegistered ? 'hidden' : ''}`} 
            onClick={handleLoginClick}
          >
            Iniciar sesión
          </button>
        </div>
      </main>
    </div>
  );
}

export default Portada;
