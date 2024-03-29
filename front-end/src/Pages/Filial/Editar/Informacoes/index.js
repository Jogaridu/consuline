import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import MaskedInput from 'react-text-mask';
import BotaoPrincipal from "../../../../Components/BotaoPrincipal"

import { validarInformacoes } from "../../Registrar/ValidacaoInputSchema";
import mascaras from "../../Registrar/Informacoes/mask";

import './styles.css';
import '../styles.css';
import ValidarData, { converterDataBr } from '../../../../Fixtures/ValidarData';

import { useHistory, useParams } from 'react-router-dom';
import api from '../../../../Services/api';
import ValidarInputVazia from "../../../../Fixtures/Inputs/ValidarInputVazia";
import Swal from "sweetalert2";

function Informacoes() {

    const { id } = useParams();
    const history = useHistory();
    const [dados, setDados] = useState({
        cnpj: "",
        email: "",
        ie: "",
        razaoSocial: "",
        nomeFantasia: "",
        dataAbertura: ""

    });

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

    useEffect(() => {
        const carregarDados = async () => {
            try {
                const retorno = await api.get(`/filial/${id}`);
                const {
                    cnpj,
                    email,
                    ie,
                    razaoSocial,
                    nomeFantasia,
                    dataAbertura,
                    TelefoneFilials } = retorno.data;

                setDados({
                    cnpj,
                    email,
                    ie,
                    razaoSocial,
                    nomeFantasia,
                    dataAbertura: converterDataBr(dataAbertura),
                    telefone: TelefoneFilials[0].numero
                });

            } catch (error) {
                console.log(error);
            }
        }

        carregarDados();
    }, [id]);

    const irPara = (evento) => {
        history.replace(evento.target.value);

    }

    return (
        <div className="container-editar-informacoes" >
            <select className="rota-editar" onChange={irPara}>
                <option value={`/filial/editar/${id}`}>Informacoes</option>
                <option value={`/filial/editar/endereco/${id}`}>Endereço</option>
                <option value={`/filial/editar/servico/${id}`}>Serviços</option>
            </select>
            <Formik
                onSubmit={validar}
                enableReinitialize={true}
                initialValues={dados}
                validationSchema={validarInformacoes}>
                <Form className="form form-editar-informacoes">
                    <div className="form-grupo-input" id="cnpj">
                        <Field
                            name="cnpj"
                            render={({ field }) => (
                                <MaskedInput
                                    {...field}
                                    type="text"
                                    mask={mascaras.cnpj}
                                    placeholder="CNPJ"
                                    guide={false}
                                />
                            )} />
                        <ErrorMessage className="mensagem-erro" component="span" name="cnpj" />
                    </div>

                    <div className="form-grupo-input" id="ie">
                        <Field
                            type="text"
                            name="ie"
                            render={({ field }) => (
                                <MaskedInput
                                    {...field}
                                    type="text"
                                    mask={mascaras.ie}
                                    placeholder="I.E"
                                    guide={false}
                                />
                            )}
                        />
                        <ErrorMessage className="mensagem-erro" component="span" name="ie" />
                    </div>

                    <div className="form-grupo-input" id="razaoSocial">
                        <Field
                            type="text"
                            placeholder="Razão social"
                            name="razaoSocial"
                            maxLength="30" />
                        <ErrorMessage className="mensagem-erro" component="span" name="razaoSocial" />
                    </div>

                    <div className="form-grupo-input" id="nomeFantasia">
                        <Field
                            type="text"
                            placeholder="Nome fantasia"
                            name="nomeFantasia"
                            maxLength="30" />
                        <ErrorMessage className="mensagem-erro" component="span" name="nomeFantasia" />
                    </div>

                    <div className="form-grupo-input" id="dataAbertura">
                        <Field
                            name="dataAbertura"
                            validate={values => {
                                if (!ValidarData(values)) {
                                    return "Data inválida";
                                }
                            }}
                            render={({ field }) => (
                                <MaskedInput
                                    {...field}
                                    type="text"
                                    mask={mascaras.data}
                                    placeholder="Data abertura"
                                    guide={false}
                                />
                            )}
                        />
                        <ErrorMessage className="mensagem-erro" component="span" name="dataAbertura" />
                    </div>

                    <div className="form-grupo-input" id="email">
                        <Field
                            type="email"
                            placeholder="Email"
                            name="email" />
                        <ErrorMessage className="mensagem-erro" component="span" name="email" />
                    </div>

                    <div className="form-grupo-input" id="telefone">
                        <Field
                            name="telefone"
                            render={({ field }) => (
                                <MaskedInput
                                    {...field}
                                    type="text"
                                    mask={mascaras.telefone}
                                    placeholder="Telefone"
                                    guide={false}
                                />
                            )} />
                        <ErrorMessage className="mensagem-erro" component="span" name="telefone" />
                    </div>

                    <div className="caixa-botao">
                        <BotaoPrincipal titulo="Editar" tipo="submit" loading={true} />
                    </div>
                </Form>
            </Formik>
        </div >
    );
}

export default Informacoes;