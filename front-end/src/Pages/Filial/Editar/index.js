import React from 'react';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';

import lupa from "../../../Assets/lupa.png";
import "./styles.css";

import Informacoes from "./Informacoes/";
import Endereco from "./Endereco/";
import Servico from "./Servicos/";

import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function EditarFilial() {
    return (
        <div className="container-central">
            <MenuCentral />

            <div className="container-conteudo-central">
                <TituloPrincipal nome="Editar filial" imagem={lupa} />

                <Router>
                    <Switch>
                        <Route path="/filial/editar/servico" component={Servico} />

                        <Route path="/filial/editar/endereco" component={Endereco} />

                        <Route path="/filial/editar" component={Informacoes} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default EditarFilial;