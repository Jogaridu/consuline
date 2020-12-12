import React, { useState, useRef, useEffect } from "react";
import Lottie from "react-lottie";

import Menu from "../../Components/MenuCentral";
import Titulo from "../../Components/TituloPrincipal";
import BotaoPrincipal from "../../Components/BotaoPrincipal";
import BotaoSecundario from "../../Components/BotaoSecundario";
import Swal from "sweetalert2";

import icone from "../../Assets/icone-servico.png";

import { ErrorMessage, Field, Form, Formik } from "formik";

import "./styles.css";

import servico from "../../Assets/7774.jpg";
import loader from "../../Assets/loader.json";

import api from "../../Services/api";

import { useLocation, useHistory } from "react-router-dom";
import { validarServico } from "../Filial/Registrar/ValidacaoInputSchema";
import MsgAntesVoltar from "../../Fixtures/MsgAntesVoltar";

function EditarServico() {
    const [imagem, setImagem] = useState(null);
    const [servicos, setServicos] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const history = useHistory();

    const imgRef = useRef();

    useEffect(() => {
        const listarservicos = async () => {
            try {
                const retorno = await api.get(`/servico/${location.state}`);

                setServicos(retorno.data);
                setLoading(false);
                imgRef.current.src = retorno.data.imagem;
            } catch (error) {
                console.log(error);
            }
        };

        listarservicos();
    }, [location.state]);

    const handleForm = async (values) => {
        const dados = new FormData();

        dados.append("nome", values.nome);
        dados.append("descricao", values.descricao);
        dados.append("imagem", imagem);

        try {
            const retorno = await api.put(`/servico/${location.state}`, dados, {
                headers: {
                    "Content-type": `multipart/form-data`,
                },
            });

            history.push("/servicos");
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

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="container-central">
            <Menu />
            <div className="container-conteudo-central">
                <Titulo nome="Editar serviço" imagem={icone} />
                <div id="container-conteudo-cms">
                    <div className="titulo-card-cadastro-servicos">
                        <figure>
                            <img src={servico} alt="Imagem ilustrativa" />
                        </figure>
                        <h2>Editar serviço</h2>
                    </div>
                    <div id="container-form-servicos">
                        {loading ? (
                            <div id="loader">
                                <Lottie options={defaultOptions} height={200} width={200} />
                            </div>
                        ) : (
                                <Formik
                                    initialValues={{
                                        nome: servicos.nome,
                                        descricao: servicos.descricao,
                                    }}
                                    onSubmit={(values) => handleForm(values)}
                                    validationSchema={validarServico} >
                                    <Form>
                                        <Field name="nome" placeholder="Nome" id="nome" />
                                        <ErrorMessage className="mensagem-erro" component="span" name="nome" />
                                        <h3> Max: 230 </h3>
                                        <Field
                                            name="descricao"
                                            as="textarea"
                                            placeholder="Descrição"
                                            id="descricao"
                                        />
                                        <ErrorMessage className="mensagem-erro" component="span" name="descricao" />
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
                                                <img alt="preview" ref={imgRef} />
                                            </figure>
                                        </label>


                                        <div id="container-botoes-servicos">

                                            <BotaoSecundario titulo="Cancelar" onClick={async () => {
                                                if (await MsgAntesVoltar()) {
                                                    history.push("/servicos")
                                                }
                                            }} />

                                            <BotaoPrincipal titulo="Atualizar" tipo="submit" loading={true} />
                                        </div>
                                    </Form>
                                </Formik>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarServico;
