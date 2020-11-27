import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import BotaoPrincipal from '../../../../Components/BotaoPrincipal';
import InputBusca from '../../../../Components/InputBusca';

import './styles.css';

function InfoFilial() {

    const history = useHistory();

    const location = useLocation();

    const novoMedico = location.state;

    const validar = ({ especialidade }) => {

    }
    return (
        <Formik
            initialValues={{ especialidade: "" }}
            onSubmit={validar}>

            <Form className="conteiner-entrada-dados-especialidade">
                <div className="pesquisa-medico">
                    <InputBusca texto="Procure a especialidade" />
                    <BotaoPrincipal titulo="Buscar" tipo="button" />
                </div>

                <div className="lista-servicos-medico">
                    <label>
                        <Field type="radio" name="especialidade" value="Clinico geral 1" />
                        <span>Clínico geral 1</span>
                    </label>
                    <label>
                        <Field type="radio" name="especialidade" value="Clinico geral 2" />
                        <span>Clínico geral 2</span>
                    </label>
                </div>

                <BotaoPrincipal titulo="Próximo" tipo="submit" />
            </Form>

        </Formik >
    );
}

export default InfoFilial;