import React from 'react';

import './styles.css';
import '../styles.css';
import '../../../../Styles/globalStyle.css';

import user from "../../../../Assets/user.png";
import validarInputVazia from '../../../../Fixtures/Inputs/ValidarInputVazia';
import InputCorreta from '../../../../Fixtures/Inputs/InputCorreta';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { validarInformacoes } from '../ValidacaoInputSchema';

import MaskedInput from "react-text-mask";
import mascaras from "./mask";
import ValidarData from '../../../../Fixtures/ValidarData';

import api from "../../../../Services/api";
import RemoverMask from "../../../../Fixtures/RemoverMask";

function Informacoes() {

    const history = useHistory();


    const validar = (values) => {
        const arrInputs = Array.from(document.querySelectorAll("form input"));

        const arrayInputsVazias = validarInputVazia(arrInputs);

        if (!arrayInputsVazias) {
            const dataAberturaEn = ValidarData(values.dataAbertura);
            const telefones = [values.telefone];

            delete values.telefone;

            if (dataAberturaEn) {
                history.push("/filial/endereco", { ...values, dataAbertura: dataAberturaEn, telefones });

            }
        }
    }

    return (
        <Formik
            onSubmit={validar}
            initialValues={{
                nomeFantasia: "",
                dataAbertura: "",
                cnpj: "",
                ie: "",
                email: "",
                razaoSocial: "",
                telefone: ""
            }}
            validationSchema={validarInformacoes}>

            <Form className="conteiner-entrada-dados">
                <div className="titulo-card-cadastro">
                    <figure>
                        <img src={user} alt="Imagem ilustrativa" />
                    </figure>
                    <h2>Informações de cadastro</h2>
                </div>
                <div className="form form-informacao">
                    <div className="form-grupo-input" id="cnpj">
                        <Field
                            name="cnpj"
                            validate={async value => {
                                try {
                                    const cnpj = RemoverMask(value);

                                    const retorno = await api.post(`/filial/verificar-cnpj`, { cnpj });

                                    if (retorno.status === 200) {
                                        return "CNPJ já cadastrado"
                                    }

                                } catch (error) {
                                    console.log(error);
                                }
                            }}
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
                            validate={async value => {
                                try {
                                    const ie = RemoverMask(value);

                                    const retorno = await api.post(`/filial/verificar-ie`, { ie });

                                    if (retorno.status === 200) {
                                        return "I.E já cadastrado"
                                    }

                                } catch (error) {
                                    console.log(error);
                                }
                            }}
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
                            maxLength="30"
                            validate={async value => {
                                try {
                                    const nomeFantasia = RemoverMask(value);

                                    const retorno = await api.post(`/filial/verificar-nome-fantasia`, { nomeFantasia });

                                    if (retorno.status === 200) {
                                        return "I.E já cadastrado"
                                    }

                                } catch (error) {
                                    console.log(error);
                                }
                            }} />
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

                    <div className="form-grupo-input" id="telefone">
                        <Field
                            name="telefone"
                            render={({ field }) => (
                                <MaskedInput
                                    {...field}
                                    type="text"
                                    mask={mascaras.telefone}
                                    onBlur={InputCorreta}
                                    placeholder="Telefone"
                                    guide={false}
                                />
                            )} />
                        <ErrorMessage className="mensagem-erro" component="span" name="telefone" />
                    </div>

                    <div className="caixa-botoes">
                        <button style={{ opacity: 0 }} type="button" />

                        <button type="submit">
                            &rarr;
                        </button>
                    </div>
                </div>

            </Form>

        </Formik>
    );
}

export default Informacoes;