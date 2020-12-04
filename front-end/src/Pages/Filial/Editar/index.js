import React, { useState } from 'react';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';

import lupa from "../../../Assets/lupa.png";
import "./styles.css";

import Informacoes from "./Informacoes/";
import Endereco from "./Endereco/";
import Servico from "./Servicos/";

import './styles.css';
import { BrowserRouter as Router, Switch, Route, useParams, useHistory, Link } from 'react-router-dom';
import api from '../../../Services/api';

import ValidarInputVazia from '../../../Fixtures/Inputs/ValidarInputVazia';
import Swal from "sweetalert2";
function EditarFilial() {



    return (
        <div className="container-central">
            <MenuCentral />

            <div className="container-conteudo-central">
                <Router>
                    <Switch>
                        <Route path="/filial/editar/:id" exact render={(props) => <Informacoes {...props} validar={validar} />} />

                        <Route path="/filial/editar/endereco/:id" render={(props) => <Endereco {...props} validar={validar} />} />

                        <Route path="/filial/editar/servico/:id" render={(props) => <Servico {...props} validar={validar} />} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default EditarFilial;