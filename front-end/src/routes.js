import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
import Endereco from "./Pages/Filial/Registrar/Endereco";
import Servicos from "./Pages/Filial/Registrar/Servicos";
import Informacoes from "./Pages/Filial/Registrar/Informacoes";
import { isSignIn } from "./Services/security";

// function MenuTalRoute({children}){
//     return (
//         <>
//         <Menu></Menu>
//         {children}
//         </>
//     )
// }

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

<<<<<<< HEAD
            <RotaCadastroFilial path="/filial/endereco">
                <EnderecoFilial />
            </RotaCadastroFilial>
=======
                <PrivateRoute path="/filial">
                <RegistrarFilial />
            </PrivateRoute>
>>>>>>> f82053a27a1f69bc7165a1f0cd420448d327700c

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

            <PrivateRoute path="/profissional-saude">
                <RegistrarProfissional />
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
