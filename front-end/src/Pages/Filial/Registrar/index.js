import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import './styles.css';
import '../../../Styles/globalStyle.css';

import Informacoes from "./Informacoes";
import Endereco from './Endereco';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';
import Servicos from './Servicos';


import user from "../../../Assets/user.png";
import Consulta from '../Consulta';

function Registrar() {

    return (
        <div className="container-central">
            <MenuCentral />

            <div className="container-conteudo-central">
                <TituloPrincipal nome="Informações de cadastro alal" imagem={user} />

                <Router>
                    <Switch>
                        <Route path="/filial/endereco" component={Endereco} />

                        <Route path="/filial/servicos" component={Servicos} />

                        <Route path="/filial" exact component={Informacoes} />

                        <Route path="*">
                            <Redirect to="/filial/13" />
                        </Route>
                    </Switch>
                </Router>
            </div >
        </div >
    );
}

export default Registrar;