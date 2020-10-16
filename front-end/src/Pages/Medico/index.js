import React from "react";
// import { Link } from "react-router-dom";



import "../../Styles/globalStyle.css";

import logoprojeto2 from "../../Assets/logoprojeto2.png";

import adc from "../../Assets/adc.png";

import usuario from "../../Assets/usuario.png";

import mapa from "../../Assets/mapa.png";

import trancado from "../../Assets/trancado.png";
import infoMedico from "./Registrar/info-pessoal";
import MenuCentral from "../../Components/MenuCentral";
import TituloPrincipal from "../../Components/TituloPrincipal";


// import mapa from "../../Assets/mapa.png";

// import trancado from "../../Assets/trancado.png";

function Medico  () {
  return (
    <>
        <body>
            <div className="container-medicos">
                <infoMedico/>
                <TituloPrincipal/>
                <MenuCentral/>
            </div>
        </body>
    </>
  );
};

export default Medico;
