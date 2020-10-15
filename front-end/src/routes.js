import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./Pages/Home/index";
import Login from "./Pages/Login/index";
import HomeCrud from "./Pages/Home-Crud/index";
import RegistrarFilial from "./Pages/Filial/Registrar";
import HomeFilial from "./Pages/Filial/Home/index";
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
        <Route path="/cadastrar-filial">
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
