import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import HomeCrud from "./Pages/Home-Crud";
import RegistrarFilial from "./Pages/Filial/Registrar";
import ListagemFilial from "./Pages/Filial/Listar-Filiais";
import ConsultaFilial from "./Pages/Filial/Editar/index";
import MenuCentral2 from "./Pages/Medico/Registrar/infoPessoalMedico";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profissional-saude">
          <MenuCentral2 />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home-central">
          <HomeCrud />
        </Route>

        {/* Rota de filiais */}

        <Route path="/filial">
          <RegistrarFilial />
        </Route>

        <Route path="/filiais">
          <ListagemFilial />
        </Route>

        {/* <Route path="/filial/">
          <ConsultaFilial />
        </Route> */}

      </Switch>
    </BrowserRouter >
  );
}

export default Routes;
