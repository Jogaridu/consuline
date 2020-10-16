import React from "react";

import "./Styles/globalStyle.css";

// import "slick-carousel";

// import Routes from "./routes";
import Medico from "./Pages/Medico/index";
import Routes from "./routes";
import ListarFiliais from "./Pages/Filial/Registrar/index";

function App() {
  return (
    <>
      <Medico />
      {/* <ListarFiliais /> */}
    </>
  );
}

export default App;
