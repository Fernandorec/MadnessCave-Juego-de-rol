import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Reservaciones.css";

function Reservaciones() {
  return (
    <div>
      <>
        <div className="Centro">
          {" "}
          {/*Este de aca sera el div centrado */}
          <div className="card">
            <div className="card-img">
              <img></img>
            </div>
            <div className="card-title">
              <h2 style={{ colo: "#250a58" }}>Product title</h2>
            </div>
            <div className="card-subtitle">
              Product description. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </div>
            <hr className="card-divider" />
            <div className="card-footer">
              <div className="card-price"></div>
              <button>Cancelar Reservación</button>
            </div>
          </div>
        </div>
        <br></br>
      </>
    </div>
  );
}

export default Reservaciones;
