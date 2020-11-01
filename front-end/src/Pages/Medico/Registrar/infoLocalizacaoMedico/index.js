import React, { useState } from 'react';

import './styles.css';

import "../../../../Styles/globalStyle.css";

import map from "../../../../Assets/map.png";

import { ErrorMessage, Field, Form, Formik } from 'formik';
import ValidarInputVazia from '../../../../Fixtures/Inputs/ValidarInputVazia';
import { useHistory, useLocation } from 'react-router-dom';
import { validarEndereco } from '../ValidacaoInputSchema';
import { useEffect } from 'react';

import MaskedInput from "react-text-mask";

import mascaras from "./mask";
// import InputCorreta from '../../../../Fixtures/Inputs/InputCorreta';

function DadosMedicoEndereco() {


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

    console.log(cep);
    const apiCep = await viaCep(cep);

    console.log(apiCep);

    if (!apiCep) {
      window.alert("Informe um cep válido  !!!");
      limparCampos();

    } else {
      preencherFormulario(apiCep);
    }
  }

  const [endereco, setEndereco] = useState({
    rua: "",
    bairro: "",
    cidade: "",
    estado: ""
  });

  const history = useHistory();

  const location = useLocation();

  const novoMedico = location.state;

  useEffect(() => {
    if (novoMedico === undefined) {
      // history.push("/profissional-saude");
    }
  })

  const validar = (values) => {
    const arrInputs = Array.from(document.querySelectorAll("form input"));

    const arrayInputsVazias = ValidarInputVazia(arrInputs);

    if (!arrayInputsVazias) {
      history.push("/profissional-saude/login", { ...novoMedico, endereco: { ...values, ...endereco }});
      

      console.log({ ...novoMedico, endereco: { ...values, ...endereco }});
    }
  }

  const limparCampos = () => {
    setEndereco({
      rua: "",
      bairro: "",
      cidade: "",
      estado: ""
    })
  }

  const preencherFormulario = (enderecoCep) => {
    setEndereco({
      bairro: enderecoCep.bairro,
      rua: enderecoCep.logradouro,
      cidade: enderecoCep.localidade,
      estado: enderecoCep.uf
    })
  }

  return (

    <Formik
      onSubmit={validar}
      initialValues={{
        cep: "",
        complemento: "",
        numero: "",
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
              name="cep"
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  type="text"
                  mask={mascaras.cep}
                  onBlur={(cep) => { buscarCep(cep.target.value); }}
                  placeholder="CEP"
                />
              )}

            />
            <ErrorMessage className="mensagem-erro" component="span" name="cep" />
          </div>

          <div className="form-grupo-input" id="rua">
            <Field
              type="text"
              name="rua"
              value={endereco.rua}
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
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  type="text"
                  mask={mascaras.numero}
                  // onBlur={InputCorreta}
                  placeholder="Numero"

                />
              )
              }
            />
            <ErrorMessage className="mensagem-erro" component="span" name="numero" />
          </div>

          <div className="form-grupo-input" id="bairro">
            <Field
              type="text"
              name="bairro"
              value={endereco.bairro}
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
              value={endereco.cidade}
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
              value={endereco.estado}

              className="desabilitado"
              disabled />
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

export default DadosMedicoEndereco;