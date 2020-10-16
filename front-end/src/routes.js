import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./Pages/Home/index";
import Login from "./Pages/Login/index";
import HomeCrud from "./Pages/Home-Crud/index";
import RegistrarFilial from "./Pages/Filial/Registrar";
import HomeFilial from "./Pages/Filial/Home/index";
import infoMedico from "./Pages/Medico/Registrar/info-pessoal"

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
        <Route path="/home">
          <HomeCrud />
        </Route>
        <Route path="/filial-cadastro">
          <RegistrarFilial />
        </Route>
        <Route path="/home-filial">
          <HomeFilial />
        </Route>
        <Route path="/info-pessoal">
          <infoMedico />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
