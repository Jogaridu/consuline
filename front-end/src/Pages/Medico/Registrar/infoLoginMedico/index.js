import React from 'react';

import Swal from 'sweetalert2';
import InputCorreta from '../../../../Fixtures/Inputs/InputCorreta';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';

import './styles.css';

import cadeado from "../../../../Assets/cadeado.png"
import api from '../../../../Services/api';
import MsgErroGenerico from '../../../../Fixtures/MsgErroGenerico';
import RemoverMask from "../../../../Fixtures/RemoverMask";
import { validarLogin } from "../ValidacaoInputSchema";

function DadosMedicoLogin() {

    const history = useHistory();

    const location = useLocation();

    const novoMedico = location.state;

    const validar = async (values) => {

        const dados = {
            ...novoMedico
            , ...values,
            cpf: RemoverMask(novoMedico.cpf),
            telefone: RemoverMask(novoMedico.telefone),
            endereco: {
                ...novoMedico.endereco,
                cep: RemoverMask(novoMedico.endereco.cep)
            }
        };

        if (values.senha === values.confirmarSenha) {
            history.push("/profissional-saude/especialidade", dados);

        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Senha inválida',
                showConfirmButton: false,
                timer: 1000
            })
        }

        // try {
        //     const retorno = await api.post("/profissional", dados);

        //     if (retorno.status === 201) {
        //         Swal.fire({
        //             position: 'center',
        //             icon: 'success',
        //             title: "Profissional cadastrado com sucesso",
        //             showConfirmButton: false,
        //             timer: 1500
        //         }).then(() => history.push(`/home-central`));
        //     }

        // } catch (error) {
        //     console.log(error);
        //     MsgErroGenerico();

        // }
    }

    return (

        <Formik
            initialValues={{
                login: "",
                senha: "",
                confirmarSenha: ""
            }}
            onSubmit={validar}
            validationSchema={validarLogin}>

            <Form className="conteiner-entrada-dados-login">
                <div className="titulo-card-cadastro">
                    <figure>
                        <img src={cadeado} alt="Imagem ilustrativa" />
                    </figure>
                    <h2>Cadastro login</h2>
                </div>

                <div className="form form-login">

                    <div className="form-grupo-input" id="login">
                        <Field
                            type="text"
                            placeholder="Login"
                            name="login"
                            onBlur={InputCorreta}
                            maxLength="25"
                            validate={async value => {
                                try {
                                    const login = RemoverMask(value);

                                    const retorno = await api.post(`/profissional/verificar-login`, { login });

                                    if (retorno.status === 200) {
                                        return "Login já cadastrado"
                                    }

                                } catch (error) {
                                    console.log(error);
                                }
                            }} />
                        <ErrorMessage className="mensagem-erro" component="span" name="login" />
                    </div>

                    <div className="form-grupo-input" id="senha">
                        <Field
                            type="password"
                            placeholder="Senha"
                            name="senha"
                            onBlur={InputCorreta}
                            maxLength="25" />
                        <ErrorMessage className="mensagem-erro" component="span" name="senha" />
                    </div>

                    <div className="form-grupo-input" id="confimar-senha">
                        <Field
                            type="password"
                            placeholder="Confirmar senha"
                            name="confirmarSenha"
                            onBlur={InputCorreta}
                            maxLength="25" />
                        <ErrorMessage className="mensagem-erro" component="span" name="confirmarSenha" />
                    </div>

                    <div className="caixa-botoes">
                        <button onClick={() => history.goBack()} type="button">&larr;</button>
                        {/* <button style={{ width: "180px", fontSize: "1.1em", marginLeft: "200px" }}
                                type="submit" onClick={cadastrarProfissional}>Concluido</button> */}
                        <button type="submit">&rarr;</button>
                    </div>
                </div>

            </Form>
        </Formik >
    );
}

export default DadosMedicoLogin;




