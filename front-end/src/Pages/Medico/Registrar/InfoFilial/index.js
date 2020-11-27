import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import BotaoPrincipal from '../../../../Components/BotaoPrincipal';
import InputBusca from '../../../../Components/InputBusca';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

import './styles.css';
import api from '../../../../Services/api';
import { useState } from 'react';
import MsgErroGenerico from '../../../../Fixtures/MsgErroGenerico';

function InfoFilial() {

    const [filiais, setFilial] = useState([]);

    const history = useHistory();

    const location = useLocation();

    const novoMedico = location.state;

    const validar = async ({ filialId }) => {
        console.log(novoMedico);
        if (filialId !== "") {
            try {

                const dados = new FormData();
                const chaves = Object.keys({ ...novoMedico, filialId });

                chaves.forEach(chave => {
                    dados.append(chave, novoMedico[chave]);
                });

                const retorno = await api.post("/profissional", dados);

                if (retorno.status === 201) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Profissional cadastrado com sucesso",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => history.push(`/home-central`));
                }

            } catch (error) {
                console.log(error);
                MsgErroGenerico();

            }
        } else {
            Swal.fire("Oops...", "Escolha uma filial para o profissional", "warning");
        }
    }

    const CardFilial = ({ dados }) => {
        const [mostrarInfo, setMostrarInfo] = useState(false);
        console.log(mostrarInfo);
        return (
            <label>

                <Field type="radio" name="filialId" value={dados.id.toString()} />
                <span>{dados.nomeFantasia}</span>

                {mostrarInfo ? (
                    <IoMdArrowDropup size={30} onClick={() => setMostrarInfo(!mostrarInfo)} />
                ) : (
                        <IoMdArrowDropdown size={30} onClick={() => setMostrarInfo(!mostrarInfo)} />
                    )}

                {mostrarInfo && (<div className="mais-dados-filial">
                    <div className="dado-filial">Cep: {dados.EnderecoFilial.cep}</div>
                    <div className="dado-filial">{dados.EnderecoFilial.rua}</div>
                    <div className="dado-filial">N° {dados.EnderecoFilial.numero}</div>
                    <div className="dado-filial">{dados.EnderecoFilial.cidade} - {dados.EnderecoFilial.estado}</div>
                </div>)}

            </label>
        );
    }

    const pegarDados = async () => {
        try {
            const retorno = await api.get(`/servico/${novoMedico.servicoId}/filiais`);

            setFilial(retorno.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(pegarDados, []);

    return (
        <Formik
            initialValues={{ filialId: "" }}
            onSubmit={validar}>

            <Form className="conteiner-entrada-dados-especialidade">
                <div className="pesquisa-medico">
                    <InputBusca texto="Procure a filial" />
                    <BotaoPrincipal titulo="Buscar" tipo="button" />
                </div>

                <div className="lista-filiais-medico">
                    {filiais.map(filial => (
                        <CardFilial
                            dados={filial} />
                    ))}
                </div>

                <BotaoPrincipal titulo="Cadastrar" tipo="submit" />
            </Form>

        </Formik >
    );
}

export default InfoFilial;