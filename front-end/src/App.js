import React from "react";

import "./Styles/globalStyle.css";

// import "slick-carousel";

// import Routes from "./routes";
import Medico from "./Pages/CadastroPessoalMedico/index";
import Servicos from "./Pages/Servicos";
import Routes from "./routes";
import ListarFiliais from "./Pages/Filial/Registrar/Servicos";

function App() {
  return (
    <>
      <Servicos />
      {/* <ListarFiliais /> */}
    </>
  );
}

export default App;
