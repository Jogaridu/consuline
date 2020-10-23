import React, { useState, useRef } from "react";

import Menu from "../../Components/MenuCentral";
import Titulo from "../../Components/TituloPrincipal";
import BotaoPrincipal from "../../Components/BotaoPrincipal";
import BotaoSecundario from "../../Components/BotaoSecundario";

// import InputCorreta from '../../../../Fixtures/Inputs/InputCorreta';
import { ErrorMessage, Field, Form, Formik } from "formik";

import "./styles.css";

import mapa from "../../Assets/mapa.png";
import servico from "../../Assets/7774.jpg";

import api from "../../Services/api";

function Servicos() {
  const [imagem, setImagem] = useState(null);

  const imgRef = useRef();

  const handleForm = async (values) => {

    const dados = new FormData();

    dados.append("nome", values.nome);
    dados.append("descricao", values.descricao);
    dados.append("imagem", imagem);
    
    console.log(dados);

    try {
      const retorno = await api.post("/servico", dados, {
        headers: {
            "Content-type": `multipart/form-data`
        }
      })

      alert("Serviço cadastrado com sucesso!!!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage = (e) => {
    if (e.target.files[0]) {
      imgRef.current.src = URL.createObjectURL(e.target.files[0]);
      setImagem(e.target.files[0]);
    }
    
  };

  return (
    <div className="container-central">
      <Menu />
      <div className="container-conteudo-central">
        <Titulo nome="Cadastrar um serviço" />
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
            >
              <Form>
                <Field name="nome" placeholder="Nome" />
                <Field name="descricao" as="textarea" placeholder="Descrição" />
                <div id="imagem-cadastro-servico">
                  <label> Imagem </label>
                  <label for="selecao-arquivo"> Selecionar uma imagem </label>
                  <Field id="selecao-arquivo" type="file" name="imagem" onChange={handleImage} />
                </div>

                <div id="imgCadastroServico">
                  <figure>
                    <img alt="preview" ref={imgRef} />
                  </figure>
                </div>

                <div id="container-botoes-servicos">
                  <BotaoSecundario title="Voltar" />
                  <BotaoPrincipal title="Cadastrar" type="submit" />
                </div>
                
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
