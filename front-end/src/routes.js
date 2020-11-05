import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import HomeCrud from "./Pages/Home-Crud";

import ConsultaFilial from "./Pages/Filial/Consulta";
import RegistrarFilial from "./Pages/Filial/Registrar";
import ListagemFilial from "./Pages/Filial/Listar-Filiais";
import EditarFilial from "./Pages/Filial/Editar/index";

import RegistrarProfissional from "./Pages/Medico/Registrar";
import Listar from "./Pages/Servicos/index";
import RegistrarServico from "./Pages/Servicos/cadastrar";
import EditarServico from "./Pages/Servicos/editar";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home-central">
          <HomeCrud />
        </Route>

        {/* Rota de filiais */}

        <Route path="/filial/editar/:id">
          <EditarFilial />
        </Route>

        <Route path="/filial/:id">
          <ConsultaFilial />
        </Route>

        <Route path="/filial">
          <RegistrarFilial />
        </Route>

        <Route path="/filiais">
          <ListagemFilial />
        </Route>

        {/* Rotas de profissionais */}

        <Route path="/profissional-saude">
          <RegistrarProfissional />
        </Route>

        {/* Rotas de serviços */}
        <Route path="/servicos/cadastrar">
          <RegistrarServico />
        </Route>
        <Route path="/servicos/editar">
          <EditarServico />
        </Route>
        <Route path="/servicos/:id?">
          <Listar />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
