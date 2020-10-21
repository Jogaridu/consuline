import React, { useState } from 'react';

import './styles.css';

import "../../../../Styles/globalStyle.css";

import map from "../../../../Assets/map.png";

import { ErrorMessage, Field, Form, Formik } from 'formik';
import ValidarInputVazia from '../../../../Fixtures/Inputs/ValidarInputVazia';
import { useHistory, useLocation } from 'react-router-dom';
import { validarEndereco } from '../ValidacaoInputSchema';
import { useEffect } from 'react';

function Endereco() {


  const viaCep = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const pegarEndereco = await fetch(url);
    const endereco = await pegarEndereco.json();

    return endereco;
  };

  const [endereco, setEndereco] = useState({
    rua: "",
    bairro: "",
    numero: "",
    complemento: "",
    cep: "",
    rua: "",
    estado: "",
  });

  const history = useHistory();

  const location = useLocation();

  const novaFilial = location.state;

  useEffect(() => {
    if (novaFilial === undefined) {
      history.push("/filial");
    }
  })

  const validar = (values) => {
    const arrInputs = Array.from(document.querySelectorAll("form input"));

    const arrayInputsVazias = ValidarInputVazia(arrInputs);

    if (!arrayInputsVazias) {
      history.push("/filial/servicos", { ...novaFilial, endereco: values, servicos: ["1"] });

    }
  }

  const limparCampos = () => {
    setEndereco({
      cep:"",
      rua: "",
      bairro: "",
      complemento: "",
      numero: "",
      cidade: "",
      estado: ""
    })
  }

  const preencherFormulario = (enderecoCep) => {
    setEndereco({
      ...endereco,
      bairro: enderecoCep.bairro,
      rua: enderecoCep.logradouro,
      cidade: enderecoCep.localidade,
      estado: enderecoCep.uf
    })
  }

  const handlerInput = (e) => {
    setEndereco({ ...endereco, [e.target.id]: e.target.value });
  };

  return (

    <Formik
      onSubmit={validar}
      initialValues={{
        cep: "",
        rua: "",
        bairro: "",
        complemento: "",
        numero: "",
        cidade: "",
        estado: ""
      }}
      validationSchema={validarEndereco}>
      <Form className="conteiner-entrada-dados-endereco">

        <div className="titulo-card-cadastro">
          <figure>
            <img src={map} alt="Imagem ilustrativa" />
          </figure>
          <h2>Localização</h2>
        </div>

        <div className="form form-endereco">

          <div className="form-grupo-input" id="cep">
            <Field
              type="text"
              name="cep"
              id="cep"
              placeholder="CEP"
              onChange={handlerInput}
              onBlur={async () => {
                if (endereco.cep.length === 9) {
                  const apiCep = await viaCep(endereco.cep);
                  if (apiCep.erro) {
                    window.alert("Informe um cep válido  !!!");
                    limparCampos();
                  } else {
                    preencherFormulario(apiCep);
                  }
                } else {
                  window.alert("Informe um cep válido !!!");
                  limparCampos();
                }
              }}
              value={endereco.cep} />
            <ErrorMessage className="mensagem-erro" component="span" name="cep" />
          </div>

          <div className="form-grupo-input" id="rua">
            <Field
              type="text"
              name="rua"
              value={endereco.rua}
              placeholder="Logradouro" />
            <ErrorMessage className="mensagem-erro" component="span" name="rua" />
          </div>

          <div className="form-grupo-input" id="numero">
            <Field
              type="text"
              id="numero"
              name="numero"
              onChange={handlerInput}
              value={endereco.numero}
              placeholder="Numero" />
            <ErrorMessage className="mensagem-erro" component="span" name="numero" />
          </div>

          <div className="form-grupo-input" id="bairro">
            <Field
              type="text"
              name="bairro"
              value={endereco.bairro}
              placeholder="Bairro" />
            <ErrorMessage className="mensagem-erro" component="span" name="bairro" />
          </div>

          <div className="form-grupo-input" id="complemento">
            <Field
              type="text"
              id="complemento"
              name="complemento"
              onChange={handlerInput}
              value={endereco.complemento}
              placeholder="Complemento" />
            <ErrorMessage className="mensagem-erro" component="span" name="complemento" />
          </div>

          <div className="form-grupo-input" id="cidade">
            <Field
              type="text"
              name="cidade"
              value={endereco.cidade}
              placeholder="Cidade" />
            <ErrorMessage className="mensagem-erro" component="span" name="cidade" />
          </div>

          <div className="form-grupo-input" id="estado">
            <Field
              type="text"
              name="estado"
              value={endereco.estado}
              placeholder="Estado" />
            <ErrorMessage className="mensagem-erro" component="span" name="estado" />
          </div>

          <div className="caixa-botoes">

            <button onClick={() => history.goBack()} type="button">&larr;</button>

            <button type="submit">&rarr;</button>

          </div>

        </div>
      </Form>
    </Formik>
  );
}

export default Endereco;