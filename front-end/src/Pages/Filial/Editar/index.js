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

    const history = useHistory();

    const { id } = useParams();


    const validar = async (values) => {
        const arrInputs = Array.from(document.querySelectorAll("form input"));
        delete values.id
        
        const arrayInputsVazias = ValidarInputVazia(arrInputs);

        if (!arrayInputsVazias) {
            try {

                Swal.fire({
                    title: 'Quer salvar essas mudanças?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: `Salvar`,
                    denyButtonText: `Não salvar`,
                }).then(async (result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        Swal.fire('Salvo com sucesso!', '', 'success');
                        await api.put(`/filial/${id}`, values);


                    } else if (result.isDenied) {
                        Swal.fire('Mudanças não salvas', '', 'info')
                    }
                });
            } catch (error) {
                console.log(error);
            }

        }
    }

    return (
        <div className="container-central">
            <MenuCentral />

            <div className="container-conteudo-central">
                {/* <TituloPrincipal nome="Editar filial" imagem={lupa} /> */}

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