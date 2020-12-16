import React, { useState } from 'react';

import "./styles.css";
import "../../../../Styles/globalStyle.css";

import InputBusca from "../../../../Components/InputBusca";
import BotaoPrincipal from "../../../../Components/BotaoPrincipal";
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../../../Services/api';

function InfoEspecialidade() {

    const [servicos, setServicos] = useState([]);

    const history = useHistory();

    const location = useLocation();

    const novoMedico = location.state;

    const validar = ({ ServicoId }) => {

        if (ServicoId !== "") {
            history.push("/profissional-saude/filial", { ...novoMedico, ServicoId })

        } else {
            Swal.fire("Oops...", "Escolha uma especilidade para o profissional", "warning");
        }
    }

    useEffect(() => {
        const pegarDados = async () => {
            try {
                const retorno = await api.get(`/servicos`);

                setServicos(retorno.data);

            } catch (error) {
                console.log(error);
            }
        }

        pegarDados();
    }, [])

    return (
        <Formik
            initialValues={{ ServicoId: "" }}
            onSubmit={validar}>

            <Form className="conteiner-entrada-dados-especialidade">
                <div className="pesquisa-medico">
                    <InputBusca texto="Procure a especialidade" />
                    <BotaoPrincipal titulo="Buscar" tipo="button" />
                </div>

                <label className="lista-servicos-medico">
                    {servicos.map(servico => (
                        <label id={servico.id}>
                            <Field type="radio" name="ServicoId" value={servico.id.toString()} />
                            <span>{servico.nome}</span>
                        </label>
                    ))}
                </label>

                <BotaoPrincipal titulo="Próximo" tipo="submit" />
            </Form>

        </Formik >
    );
}

export default InfoEspecialidade;