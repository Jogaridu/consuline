import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import HomeCrud from "./Pages/Home-Crud";
import RegistrarFilial from "./Pages/Filial/Registrar";
import HomeFilial from "./Pages/Filial/Home";
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
        <Route path="/filial-cadastro">
          <RegistrarFilial />
        </Route>
        <Route path="/home-filial">
          <HomeFilial />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
