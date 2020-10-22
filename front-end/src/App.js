import React from "react";

import "./Styles/globalStyle.css";

// import "slick-carousel";

// import Routes from "./routes";
import ProfissionalDaSaude from "./Pages/trabalhoMedico/index"
import Medico from "./Pages/CadastroPessoalMedico/index";
import Routes from "./routes";
import ListarFiliais from "./Pages/Filial/Registrar/index";

function App() {
  return (
    <>
      <ProfissionalDaSaude/>
      {/* <Medico /> */}
      {/* <ListarFiliais /> */}
    </>
  );
}

export default App;
