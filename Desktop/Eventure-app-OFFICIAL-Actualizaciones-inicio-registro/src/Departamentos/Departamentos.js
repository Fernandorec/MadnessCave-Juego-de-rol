import "./Departamentos.css";
import { Link } from "react-router-dom";

function Departamentos() {
  return (
    <div className="App">
      {/* Fonts */}
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
          rel="stylesheet"
        />
      </>
      <div className="row">
        <div className="col-custom box" id="box1">
          <p className="Departamento">Ahuachapán</p>
        </div>
        <div className="col-custom box" id="box2">
          <p className="Departamento">Santa Ana</p>
        </div>
        <div className="col-custom box" id="box3">
          <p className="Departamento">Sonsonate</p>
        </div>
        <div className="col-custom box" id="box4">
          <p className="Departamento">Chalatenango</p>
        </div>
        <Link className="col-custom box nav-link" to="/lalibertad" id="box5">
          <p className="Departamento" color="white">La Libertad</p>
        </Link>
        <div className="col-custom box" id="box6">
          <p className="Departamento">San Salvador</p>
        </div>
        <div className="col-custom box" id="box7">
          <p className="Departamento">Cuscatlán</p>
        </div>
        <div className="col-custom box" id="box8">
          <p className="Departamento">La Paz</p>
        </div>
        <div className="col-custom box" id="box9">
          <p className="Departamento">Cabañas</p>
        </div>
        <div className="col-custom box" id="box10">
          <p className="Departamento">San Vicente</p>
        </div>
        <div className="col-custom box" id="box11">
          <p className="Departamento">Usulután</p>
        </div>
        <div className="col-custom box" id="box12">
          <p className="Departamento">San Miguel</p>
        </div>
        <div className="col-custom box" id="box13">
          <p className="Departamento">Morazán</p>
        </div>
        <div className="col-custom box" id="box14">
          <p className="Departamento">La Unión</p>
        </div>
      </div>
    </div>

    
  );
}


export default Departamentos;
