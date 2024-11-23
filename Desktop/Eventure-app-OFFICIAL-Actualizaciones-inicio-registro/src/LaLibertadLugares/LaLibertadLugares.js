import "./LaLibertadLugares.css";
import { Link } from "react-router-dom";


function LaLibertadLugares() {
  return (
    <div>
      <br></br>
      {/* Tablas */}
      <h4 id="seccion">
      <a href="http://localhost:3000/">Inicio</a> {'>'} Lugares La Libertad
      </h4>
      <br></br>
      <div className="table-container">
      <Link to="/Hotel-Mediterraneo">
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    className="imagen"
                    src="./Seleccion-Lalibertad/Hotel-Mediterraneo.jpeg"
                    alt="Hotel Mediterráneo"
                  />
                  <p className="LibertadLugares">Hotel Mediterráneo</p>
                </td>
              </tr>
            </tbody>
          </table>
        </Link>
        
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src="./Seleccion-Lalibertad/Hotel-Alamo.jpeg"
                  alt="Coastal living room"
                />
                <p className="LibertadLugares">Hotel Alamo Internacional</p>
              </td>
            </tr>
          </tbody>
        </table>
        
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src="/tipos-sala/salas-fotos/contemporanea3.jpeg"
                  alt="Modern living room"
                />
                <p className="LibertadLugares">Montemilia</p>
              </td>
            </tr>
          </tbody>
        </table>
        
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src="/tipos-sala/salas-fotos/contemporanea4.jpeg"
                  alt="Scandinavian design living room"
                />
                <p className="LibertadLugares">Los 3 cerditos</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />

      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src="/tipos-sala/salas-fotos/contemporanea5.png"
                  alt="Elegant living room style"
                />
                <p className="LibertadLugares">Finca Café Jardín el Carmel </p>
              </td>
            </tr>
          </tbody>
        </table>
        
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src="/tipos-sala/salas-fotos/contemporanea6.jpeg"
                  alt="Mediterranean rooms"
                />
                <p className="LibertadLugares">Centro de Eventos Valencia </p>
              </td>
            </tr>
          </tbody>
        </table>
        
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src="/tipos-sala/salas-fotos/contemporanea7.jpeg"
                  alt="Classic rooms"
                />
                <p className="LibertadLugares">Classic rooms</p>
              </td>
            </tr>
          </tbody>
        </table>
        
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="imagen"
                  src="/tipos-sala/salas-fotos/contemporanea8.jpeg"
                  alt="Cottage living room"
                />
                <p className="LibertadLugares">Cottage living room</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default LaLibertadLugares;
