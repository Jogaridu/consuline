import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./Pages/Home/index";
import Login from "./Pages/Login/index";
import HomeCrud from "./Pages/Home-Crud/index";
import RegistrarFilial from "./Pages/Filial/Registrar";
import HomeFilial from "./Pages/Filial/Home/index";
import MenuCentral2 from "./Pages/Medico/Registrar/infoPessoalMedico";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cadastro-pessoal">
          <MenuCentral2 />
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
        
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
