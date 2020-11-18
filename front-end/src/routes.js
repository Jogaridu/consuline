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

                <PrivateRoute path="/filial">
                    <RegistrarFilial />
                </PrivateRoute>

                {/* <Route path="/filial/endereco" component={Endereco} />

                <Route path="/filial/servicos" component={Servicos} />

                <Route path="/filial" exact component={Informacoes} /> */}


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
        </BrowserRouter>
    );
}

export default Routes;
