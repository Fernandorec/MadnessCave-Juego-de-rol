import usuarioImg from "./usuario.png";
import candadoImg from "./candadoImg.png";
import emailImg from "./emailImg.png";
import "./Login.css";
import { useState, useEffect } from "react"; // Importamos useState
import axios from "axios"; // Importar axios para hacer la solicitud
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para redirigir

export function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado para el spinner
  const [isRegistered, setIsRegistered] = useState(false); // Nueva variable booleana

  const navigate = useNavigate(); // Usamos useNavigate para redirigir

  // Recuperar el estado de registro desde localStorage
  useEffect(() => {
    const savedRegistrationStatus = localStorage.getItem("registrationStatus");
    if (savedRegistrationStatus === "1") {
      setIsRegistered(true); // Si está registrado, cambiamos el estado
    }
  }, []);

  // Manejador de la lógica de registro
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Mostrar spinner al iniciar la solicitud
    try {
      await axios.post(
        "https://api.sheetbest.com/sheets/1ad7f435-32b2-454f-96ac-e11abac0e7fb",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      alert("Registro exitoso");

      // Guardar en localStorage
      localStorage.setItem("username", name);
      localStorage.setItem("email", email);
      localStorage.setItem("registrationStatus", "1");

      setIsRegistered(true); // Cambiar el estado de registro exitoso
      setName("");
      setEmail("");
      setPassword("");

      // Redirigir a la página principal (raíz de la aplicación)
      navigate("/"); // Redirige al home de tu app (http://localhost:3000/)
      window.location.reload(); // Recarga la página actual
    } catch (error) {
      console.log("Error al enviar los datos", error);
      alert("Surgió un error, intente de nuevo");
    } finally {
      setTimeout(() => setIsLoading(false), 3000); // Ocultar el spinner después de 3 segundos
    }
  };

  // Función para manejar el inicio de sesión
  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    setIsLoading(true); // Mostrar spinner mientras se procesa la solicitud

    try {
      // Realizamos una solicitud GET para obtener todos los registros de usuarios
      const response = await axios.get("https://api.sheetbest.com/sheets/1ad7f435-32b2-454f-96ac-e11abac0e7fb");

      // Buscar si existe un usuario con el email y la contraseña correctos
      const user = response.data.find((user) => user.email === email && user.password === password);

      if (user) {
        // Si se encuentra un usuario con los datos correctos
        alert("Bienvenido");

        // Guardar en localStorage al iniciar sesión
        localStorage.setItem("email", email);
        localStorage.setItem("password", password); // Aquí guardamos la contraseña, aunque no es recomendable hacerlo
        
        // Cambiar registrationStatus a 1 al iniciar sesión
        localStorage.setItem("registrationStatus", "1");

        // Actualizar el estado de isRegistered a 1
        setIsRegistered(true);

        navigate("/"); // Redirigir al usuario a App.js
        window.location.reload(); // Recarga la página actual

      } else {
        // Si no se encuentra un usuario con los datos correctos
        alert("Datos erróneos");
      }
    } catch (error) {
      console.log("Error al verificar los datos", error);
      alert("Hubo un problema al verificar los datos. Intenta de nuevo.");
    } finally {
      setIsLoading(false); // Ocultar el spinner después de la solicitud
    }
  };

  // Manejador para alternar entre iniciar sesión y registrarse
  const handleLoginClick = () => {
    setIsLoggedIn((prevState) => !prevState); // Alternar entre los formularios
  };

  // Convertir el valor de isRegistered a 0 o 1
  const registrationStatus = isRegistered ? 1 : 0;
  console.log("Estado de registrationStatus:", registrationStatus); // Esto mostrará 1 o 0

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "20px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          maxWidth: "800px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Sección de Registro */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            width: "50%",
            maxWidth: "400px",
            boxSizing: "border-box",
          }}
        >
          <img
            src={usuarioImg}
            alt="Logo"
            className="login-image"
            style={{ marginBottom: "20px", width: "180px", height: "140px" }}
          />
          <h1
            style={{ marginBottom: "20px", color: "black", fontSize: "24px" }}
          >
            Regístrate
          </h1>
          <form
            onSubmit={handleSubmit} // Asignar el evento de submit
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* Campo de Nombre */}
            <div
              className="IDredondear"
              style={{ marginBottom: "15px", width: "100%" }}
            >
              <input
                type="text"
                placeholder="Nombre de Usuario"
                value={name}
                onChange={(e) => setName(e.target.value)} // Actualizar el estado de nombre
                style={{
                  width: "100%",
                  padding: "10px 10px 10px 40px",
                  borderRadius: " 10px",
                  border: "1px solid #ccc",
                  backgroundImage: `url(${usuarioImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10px center",
                  backgroundSize: "20px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Campo de Correo */}
            <div
              className="IDredondear"
              style={{ marginBottom: "15px", width: "100%" }}
            >
              <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Actualizar el estado de correo
                style={{
                  width: "100%",
                  padding: "10px 10px 10px 40px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  backgroundImage: `url(${usuarioImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10px center",
                  backgroundSize: "20px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Campo de Contraseña */}
            <div
              className="IDredondear"
              style={{ marginBottom: "15px", width: "100%" }}
            >
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Actualizar el estado de contraseña
                style={{
                  width: "100%",
                  padding: "10px 10px 10px 40px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  backgroundImage: `url(${candadoImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10px center",
                  backgroundSize: "20px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Botón de registro */}
            <button
              type="submit"
              disabled={isLoading} // Deshabilitar el botón mientras se está procesando
              style={{
                padding: "10px",
                backgroundColor: "#808080",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                width: "100%",
                marginTop: "20px",
                boxSizing: "border-box",
              }}
            >
              {isLoading ? "Cargando..." : "Registrarse"}
            </button>
          </form>
        </section>

        {/* Sección de Iniciar Sesión */}
        <section
          className="Iniciar-sesion"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            width: "50%",
            maxWidth: "400px",
            boxSizing: "border-box",
          }}
        >
          <img
            src={usuarioImg}
            alt="Logo"
            className="login-image"
            style={{ marginBottom: "20px", width: "180px", height: "140px" }}
          />
          <h1
            style={{ marginBottom: "20px", color: "black", fontSize: "24px" }}
          >
            Iniciar Sesión
          </h1>
          <form
            onSubmit={handleLoginSubmit} // Asignar el evento de submit
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* Campo de Correo */}
            <div
              className="IDredondear"
              style={{ marginBottom: "15px", width: "100%" }}
            >
              <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Actualizar el estado del correo
                style={{
                  width: "100%",
                  padding: "10px 10px 10px 40px",
                  borderRadius: " 10px",
                  border: "1px solid #ccc",
                  backgroundImage: `url(${emailImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10px center",
                  backgroundSize: "20px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Campo de Contraseña */}
            <div
              className="IDredondear"
              style={{ marginBottom: "15px", width: "100%" }}
            >
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Actualizar el estado de la contraseña
                style={{
                  width: "100%",
                  padding: "10px 10px 10px 40px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  backgroundImage: `url(${candadoImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10px center",
                  backgroundSize: "20px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Botón de inicio de sesión */}
            <button
              type="submit"
              disabled={isLoading} // Deshabilitar el botón mientras se está procesando
              style={{
                padding: "10px",
                backgroundColor: "#808080",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                width: "100%",
                marginTop: "20px",
                boxSizing: "border-box",
              }}
            >
              {isLoading ? "Cargando..." : "Iniciar sesión"}
            </button>
          </form>
        </section>
                
        <section
          className={`Cuadro movible ${isLoggedIn ? "moved" : ""}`}
          style={{
            right: "200px",
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "white",
            alignItems: "center",
            padding: "40px",
            width: "35%",
            height: "550px",
            borderRadius: "0 20px 20px 0",
            boxSizing: "border-box",
            animation: isLoggedIn
              ? "moveLeft 0.5s forwards"
              : "moveRight 0.5s forwards",
          }}
        >
          <h1 style={{ marginBottom: "20px", fontSize: "32px", color: "#333" }}>
            {isLoggedIn ? "Inicia Sesion" : "EVENTURE"}
          </h1>
          <h2 style={{ marginBottom: "20px", fontSize: "24px", color: "#666" }}>
            {isLoggedIn ? "Inicia tu aventura ahora" : "Bienvenido"}
          </h2>
          <p style={{ fontSize: "16px", textAlign: "center", color: "#777" }}>
            {isLoggedIn
              ? "Estás listo para explorar más diseños y organizar tu evento."
              : "Regístrate para encontrar más diseños y poder tener un evento más organizado."}
          </p>
          <div
            className="Boton"
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <button className="Subir-Boton" onClick={handleLoginClick}>
              {isLoggedIn ? "Registrarse" : "Iniciar sesion"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
