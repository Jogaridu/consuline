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
import EnderecoFilial from "./Pages/Filial/Registrar/Endereco";
import ServicosFilial from "./Pages/Filial/Registrar/Servicos";
import InformacoesFilial from "./Pages/Filial/Registrar/Informacoes";
import MenuCentral from "./Components/MenuCentral";
import TituloPrincipal from "./Components/TituloPrincipal";
import user from "./Assets/user.png";
import Consulta from "./Pages/Filial/Consulta";


function RotaCadastroFilial({ children }) {
    return (

        <div className="container-central">
            <MenuCentral />

            <div className="container-conteudo-central">
                <TituloPrincipal nome="Informações de cadastro" imagem={user} />
                {children}
            </div>
        </div>

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

                <RotaCadastroFilial path="/filial/endereco">
                    <EnderecoFilial />
                </RotaCadastroFilial>

                <RotaCadastroFilial path="/filial/servicos">
                    <ServicosFilial />
                </RotaCadastroFilial>

                <Route path="/filial/:id">
                    <Consulta />
                </Route>

                <RotaCadastroFilial path="/filial" exact>
                    <InformacoesFilial />
                </RotaCadastroFilial>


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
