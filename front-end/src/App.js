import React from "react";

import "./Styles/globalStyle.css";

// import "slick-carousel";

// import Routes from "./routes";
import Medico from "./Pages/CadastroPessoalMedico/index";
import Routes from "./routes";
import ListarFiliais from "./Pages/Filial/Registrar/Servicos/index";

function App() {
  return (
    <>
      {/* <Medico /> */}
      <Routes />
    </>
  );
}

export default App;
