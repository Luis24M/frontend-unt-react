import React from "react";
import { Link } from "react-router-dom";
import Motomami from "../../Img/Motomami.png";

function Intro() {
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <center>
          <h1>RELUSUS</h1>
        </center>
        <center>
          <Link to="/Intro">
            <img src={Motomami} alt="Logo" width="1000" />
          </Link>
        </center>
        <h2>Autores: </h2>
        <h3>Castillo Muños, Ricardo</h3>
        <h3>Villar Castillo, Jesus</h3>
        <h3>Morales Lino, Luis</h3>
      </div>
    </div>
  );
}

export default Intro;
