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
import AreaMedico from "./Pages/trabalhoMedico";
import ListarProfissional from "./Pages/Medico/Registrar/listagemMedicos";
import Endereco from "./Pages/Filial/Registrar/Endereco";
import Servicos from "./Pages/Filial/Registrar/Servicos";
import Informacoes from "./Pages/Filial/Registrar/Informacoes";

function MenuTalRoute({children}){
    return (
        <>
        <Menu></Menu>
        {children}
        </>
    )
}


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

                <Route path="/filial">
                    <RegistrarFilial />
                </Route>

                {/* <Route path="/filial/endereco" component={Endereco} />

                <Route path="/filial/servicos" component={Servicos} />

                <Route path="/filial" exact component={Informacoes} /> */}


                <Route path="/filiais">
                    <ListagemFilial />
                </Route>

                {/* Rotas de profissionais */}

                <Route path="/profissional-saude">
                    <RegistrarProfissional />
                </Route>

                <Route path="/profissionais-saude">
                    <ListarProfissional />
                </Route>

                {/* Rotas de serviços */}
                <Route path="/servico">
                    <RegistrarServico />
                </Route>
                <Route path="/servicos/editar">
                    <EditarServico />
                </Route>
                <Route path="/servicos/:id?">
                    <Listar />
                </Route>

                {/* Rotas de consultas | Area Médico */}

                <Route path="/consultas">
                    <AreaMedico />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
