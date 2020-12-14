import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import BotaoPrincipal from "../../../../Components/BotaoPrincipal";

import { validarEndereco } from "../../Registrar/ValidacaoInputSchema";
import mascaras from "../../Registrar/Endereco/mask";

import './styles.css';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../../../Services/api';
import ValidarInputVazia from "../../../../Fixtures/Inputs/ValidarInputVazia";
import Swal from "sweetalert2";

function Endereco() {
    const { id } = useParams();
    const history = useHistory();
    const [dados, setDados] = useState({
        numero: "",
        rua: "",
        bairro: "",
        cep: "",
        cidade: "",
        estado: "",
        complemento: "",
        id: ""
    });

    const validar = async (values) => {
        const arrInputs = Array.from(document.querySelectorAll("form input"));

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
                        await api.put(`/filial/${id}`, { endereco: values });


                    } else if (result.isDenied) {
                        Swal.fire('Mudanças não salvas', '', 'info')
                    }
                });
            } catch (error) {
                console.log(error);
            }

        }
    }

    const viaCep = async (cep) => {

        try {
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            const pegarEndereco = await fetch(url);
            const endereco = await pegarEndereco.json();

            return endereco;

        } catch (error) {

            return false;
        }

    };

    const buscarCep = async (cep) => {

        const apiCep = await viaCep(cep);

        if (apiCep) {
            preencherFormulario(apiCep);
        }

    }

    const preencherFormulario = (enderecoCep) => {
        setDados((e) => {
            return {
                ...e,
                bairro: enderecoCep.bairro,
                rua: enderecoCep.logradouro,
                cidade: enderecoCep.localidade,
                estado: enderecoCep.uf
            }
        })
    }

    useEffect(() => {
        const carregarDados = async () => {
            try {
                const retorno = await api.get(`/filial/${id}`);

                setDados({ ...retorno.data.EnderecoFilial });

            } catch (error) {
                console.log(error);
            }
        }

        carregarDados()
    }, [id])


    const irPara = (evento) => {
        history.replace(evento.target.value)
    }

    return (
        <div className="container-editar-informacoes">
            <select className="rota-editar" onChange={irPara}>
                <option value={`/filial/editar/${id}`}>Informacoes</option>
                <option value={`/filial/editar/endereco/${id}`} selected>Endereço</option>
                <option value={`/filial/editar/servico/${id}`}>Serviços</option>
            </select>
            <Formik
                onSubmit={validar}
                enableReinitialize={true}
                initialValues={dados}
                validationSchema={validarEndereco}>
                <Form className="form form-editar-endereco">

                    <div className="form-grupo-input" id="cep">
                        <Field
                            name="cep"
                            render={({ field }) => (
                                <MaskedInput
                                    {...field}
                                    type="text"
                                    mask={mascaras.cep}
                                    onBlur={(cep) => { buscarCep(cep.target.value); }}
                                    placeholder="CEP" />
                            )}
                        />
                        <ErrorMessage className="mensagem-erro" component="span" name="cep" />
                    </div>

                    <div className="form-grupo-input" id="rua">
                        <Field
                            type="text"
                            name="rua"
                            value={dados.rua}
                            placeholder="Logradouro"
                            className="desabilitado"
                            disabled
                        />
                        <ErrorMessage className="mensagem-erro" component="span" name="rua" />
                    </div>
                    <div className="form-grupo-input" id="numero">
                        <Field
                            type="text"
                            name="numero"
                            placeholder="Número"
                        />
                        <ErrorMessage className="mensagem-erro" component="span" name="numero" />
                    </div>

                    <div className="form-grupo-input" id="bairro">
                        <Field
                            type="text"
                            name="bairro"
                            value={dados.bairro}
                            placeholder="Bairro"
                            className="desabilitado"
                            disabled />
                        <ErrorMessage className="mensagem-erro" component="span" name="bairro" />
                    </div>

                    <div className="form-grupo-input" id="complemento">
                        <Field
                            type="text"
                            name="complemento"
                            placeholder="Complemento"
                        />
                        <ErrorMessage className="mensagem-erro" component="span" name="complemento" />
                    </div>

                    <div className="form-grupo-input" id="cidade">
                        <Field
                            type="text"
                            name="cidade"
                            value={dados.cidade}
                            placeholder="Cidade"
                            className="desabilitado"
                            disabled />
                        <ErrorMessage className="mensagem-erro" component="span" name="cidade" />
                    </div>

                    <div className="form-grupo-input" id="estado">
                        <Field
                            type="text"
                            name="estado"
                            placeholder="Estado"
                            value={dados.estado}

                            className="desabilitado"
                            disabled />
                        <ErrorMessage className="mensagem-erro" component="span" name="estado" />
                    </div>

                    <div className="caixa-botao" style={{ display: "flex", justifyContent: "flex-end" }}>
                        <BotaoPrincipal titulo="Editar" tipo="submit" loading={true} />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default Endereco;