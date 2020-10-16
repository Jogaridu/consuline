import React from "react";

import "./Styles/globalStyle.css";

// import "slick-carousel";

// import Routes from "./routes";
import Medico from "./Pages/Medico/Registrar/index";
import Routes from "./routes";
import ListarFiliais from "./Pages/Filial/Registrar/index";
import infoPessoal from "./Pages/Medico/Registrar/infoPessoalMedico";

function App() {
  return (
    <>
      <Medico/>
      {/* <ListarFiliais /> */}
    </>
  );
}

export default App;
