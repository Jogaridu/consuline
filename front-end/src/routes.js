import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MenuCentral from "./Components/MenuCentral";
import TituloPrincipal from "./Components/TituloPrincipal";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import HomeCrud from "./Pages/Home-Crud";

// Filial (CENTRAL)
import EnderecoFilial from "./Pages/Filial/Registrar/Endereco";
import ServicosFilial from "./Pages/Filial/Registrar/Servicos";
import InformacoesFilial from "./Pages/Filial/Registrar/Informacoes";
import Consulta from "./Pages/Filial/Consulta";
import ListagemFilial from "./Pages/Filial/Listar-Filiais";
import EditarFilial from "./Pages/Filial/Editar/index";

// Profissional (CENTRAL)
import InformacoesMedico from "./Pages/Medico/Registrar/InfoPessoalMedico";
import LocalizaoMedico from "./Pages/Medico/Registrar/infoLocalizacaoMedico";
import LoginMedico from "./Pages/Medico/Registrar/infoLoginMedico";
import EspecialidadeMedico from "./Pages/Medico/Registrar/InfoEspecialidade";
import FilialMedico from "./Pages/Medico/Registrar/InfoFilial";

import ListarProfissional from "./Pages/Medico/Registrar/listagemMedicos";

// Serviços (CENTRAL)
import Listar from "./Pages/Servicos/index";
import RegistrarServico from "./Pages/Servicos/cadastrar";
import EditarServico from "./Pages/Servicos/editar";

// Profissional (MEDICOS)
import AreaMedico from "./Pages/trabalhoMedico";

import user from "./Assets/user.png";
import add from "./Assets/add3.png";

import { isSignIn } from "./Services/security";

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

function RotaCadastroProfissional({ children }) {
    return (
        <div className="container-central">
            <MenuCentral />
            <div className="container-conteudo-central">
                <TituloPrincipal nome="Cadastro médicos" imagem={add} />

                {children}
            </div>
        </div>
    )
}

const PrivateRoute = ({ children, ...rest }) => {
    return (<Route {...rest}
        render={({ location }) =>
            isSignIn() ? (children) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location },
                    }}
                />
            )
        }
    />
    );
};


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
                <PrivateRoute path="/home-central">
                    <HomeCrud />
                </PrivateRoute>

                {/* Rota de filiais */}

                <PrivateRoute path="/filial/editar/:id">
                    <EditarFilial />
                </PrivateRoute>

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

                <PrivateRoute path="/filiais">
                    <ListagemFilial />
                </PrivateRoute>

                {/* Rotas de profissionais */}

                <PrivateRoute path="/profissional-saude/endereco">
                    <RotaCadastroProfissional>
                        <LocalizaoMedico />
                    </RotaCadastroProfissional>
                </PrivateRoute>

                <PrivateRoute path="/profissional-saude/login">
                    <RotaCadastroProfissional>
                        <LoginMedico />
                    </RotaCadastroProfissional>
                </PrivateRoute>

                <PrivateRoute path="/profissional-saude/especialidade">
                    <RotaCadastroProfissional>
                        <EspecialidadeMedico />
                    </RotaCadastroProfissional>
                </PrivateRoute>

                <PrivateRoute path="/profissional-saude/filial">
                    <RotaCadastroProfissional>
                        <FilialMedico />
                    </RotaCadastroProfissional>
                </PrivateRoute>

                <PrivateRoute path="/profissional-saude">
                    <RotaCadastroProfissional>
                        <InformacoesMedico />
                    </RotaCadastroProfissional>
                </PrivateRoute>

                <PrivateRoute path="/profissionais-saude">
                    <ListarProfissional />
                </PrivateRoute>

                {/* Rotas de serviços */}
                <PrivateRoute path="/servico">
                    <RegistrarServico />
                </PrivateRoute>
                <PrivateRoute path="/servicos/editar">
                    <EditarServico />
                </PrivateRoute>
                <PrivateRoute path="/servicos/:id?">
                    <Listar />
                </PrivateRoute>

                {/* Rotas de consultas | Area Médico */}

                <PrivateRoute path="/consultas">
                    <AreaMedico />
                </PrivateRoute>

            </Switch>
        </BrowserRouter >
    );
}

export default Routes;
