import React, { useState, useRef } from "react";

import Menu from "../../Components/MenuCentral";
import Titulo from "../../Components/TituloPrincipal";
import BotaoPrincipal from "../../Components/BotaoPrincipal";
import BotaoSecundario from "../../Components/BotaoSecundario";

// import InputCorreta from '../../../../Fixtures/Inputs/InputCorreta';
import { ErrorMessage, Field, Form, Formik } from "formik";

import "./styles.css";

import servico from "../../Assets/7774.jpg";
import iconeAdd from "../../Assets/add3.png";
import semFoto from "../../Assets/sem-foto.jpg";

import api from "../../Services/api";

import { useHistory } from "react-router-dom";
import { validarServico } from "../Filial/Registrar/ValidacaoInputSchema";
import Swal from "sweetalert2";
import MsgAntesVoltar from "../../Fixtures/MsgAntesVoltar";

function CadastrarServicos() {
    const [imagem, setImagem] = useState(null);
    const history = useHistory();

    const imgRef = useRef();

    const handleForm = async (values) => {
        const dados = new FormData();

        dados.append("nome", values.nome);
        dados.append("descricao", values.descricao);
        dados.append("imagem", imagem);

        try {
            await api.post("/servico", dados, {
                headers: {
                    "Content-type": `multipart/form-data`,
                },
            });

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Serviço cadastrado com sucesso",
                showConfirmButton: false,
                timer: 1500
            }).then(() => history.push(`/servicos`));

        } catch (error) {
            console.log(error);
        }
    };

    const handleImage = (e) => {
        if (e.target.files[0]) {
            imgRef.current.src = URL.createObjectURL(e.target.files[0]);
        } else {
            imgRef.current.src = "";
        }
        setImagem(e.target.files[0]);
    };

    return (
        <div className="container-central">
            <Menu />
            <div className="container-conteudo-central">
                <Titulo nome="Cadastrar um serviço" imagem={iconeAdd} />
                <div id="container-conteudo-cms">
                    <div className="titulo-card-cadastro-servicos">
                        <figure>
                            <img src={servico} alt="Imagem ilustrativa" />
                        </figure>
                        <h2>Cadastrar serviço</h2>
                    </div>
                    <div id="container-form-servicos">
                        <Formik
                            initialValues={{ nome: "", descricao: "" }}
                            onSubmit={(values) => handleForm(values)}
                            validationSchema={validarServico}>
                            <Form className="form">
                                <div className="form-grupo-input" style={{ marginBottom: "25px" }}>
                                    <Field name="nome" placeholder="Nome" />
                                    <ErrorMessage className="mensagem-erro" component="span" name="nome" />
                                </div>

                                <div className="form-grupo-input">
                                    <h3 className="contador" style={{ position: "absolute", right: "10px", bottom: "0px" }}>Máximo 230</h3>
                                    <Field name="descricao" as="textarea" placeholder="Descrição" maxLength={230} />
                                    <ErrorMessage className="mensagem-erro" component="span" name="descricao" />
                                </div>

                                <div id="imagem-cadastro-servico">
                                    <label> Imagem </label>
                                    <label htmlFor="selecao-arquivo">
                                        {" "}
                                        Selecionar uma imagem{" "}
                                    </label>
                                    <Field
                                        id="selecao-arquivo"
                                        type="file"
                                        name="imagem"
                                        onChange={handleImage}
                                    />
                                </div>

                                <label htmlFor="selecao-arquivo">
                                    <figure id="img-cadastro-servico">
                                        <img alt="preview" ref={imgRef} src={semFoto} />
                                    </figure>
                                </label>

                                <div id="container-botoes-servicos">
                                    <BotaoSecundario titulo="Voltar" onClick={async () => {
                                        if (await MsgAntesVoltar()) {
                                            history.push("/servicos")
                                        }
                                    }} />

                                    <BotaoPrincipal titulo="Cadastrar" tipo="submit" loading={true} />
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastrarServicos;
