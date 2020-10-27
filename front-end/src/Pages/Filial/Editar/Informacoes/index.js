import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import MaskedInput from 'react-text-mask';
import BotaoPrincipal from "../../../../Components/BotaoPrincipal"
import InputCorreta from '../../../../Fixtures/Inputs/InputCorreta';

import { validarInformacoes } from "../../Registrar/ValidacaoInputSchema";
import mascaras from "../../Registrar/Informacoes/mask";

import './styles.css';
import ValidarData from '../../../../Fixtures/ValidarData';

import test from "../../../../Assets/add.png"
import test2 from "../../../../Assets/add2.png"

function Informacoes() {
    return (
        <div className="container-editar-informacoes">
            <div className="rota-editar">Informacoes empresa</div>

            <Formik
                initialValues={{
                    cnpj: "",
                    ie: "",
                    razaoSocial: "",
                    nomeFantasia: "",
                    dataAbertura: "",
                    email: ""
                }}
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
                                    onBlur={InputCorreta}
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
                                    onBlur={InputCorreta}
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
                            onBlur={InputCorreta}
                            maxLength="30" />
                        <ErrorMessage className="mensagem-erro" component="span" name="razaoSocial" />
                    </div>

                    <div className="form-grupo-input" id="nomeFantasia">
                        <Field
                            type="text"
                            placeholder="Nome fantasia"
                            name="nomeFantasia"
                            onBlur={InputCorreta}
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
                                    onBlur={InputCorreta}
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
                            name="email"
                            onBlur={InputCorreta} />
                        <ErrorMessage className="mensagem-erro" component="span" name="email" />
                    </div>

                    <div className="telefones-editar-filial">
                        <h2>Telefones</h2>
                        <div className="telefones">
                            <div>
                                <MaskedInput
                                    mask={mascaras.telefone}
                                    type="text"
                                    guide={false}
                                    disabled
                                    onBlur={(evento) => evento.target.disabled = true} />
                                <figure>
                                    <img src={test} alt="Editar" onClick={(evento) => {
                                        const input = evento.target.parentNode.parentNode.firstChild
                                        // input.setAttribute("disabled", true);
                                        input.disabled = false;
                                        input.focus();
                                    }} />
                                    <img src={test2} alt="Apagar" />
                                </figure>
                            </div>

                        </div>
                    </div>

                    <div className="caixa-botao">
                        <BotaoPrincipal titulo="Editar" tipo="submit" />
                    </div>
                </Form>
            </Formik>


        </div>

    );
}

export default Informacoes;