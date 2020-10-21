import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./Pages/Home/index";
import Login from "./Pages/Login/index";
import HomeCrud from "./Pages/Home-Crud/index";
import RegistrarFilial from "./Pages/Filial/Registrar";
import ListagemFilial from "./Pages/Filial/Listar-Filiais";
import ConsultaFilial from "./Pages/Filial/Editar/index";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
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
    </BrowserRouter>
  );
}

export default Routes;
