import React from 'react';

import './styles.css';

import "../../../../Styles/globalStyle.css";

import map from "../../../../Assets/map.png";

import { ErrorMessage, Field, Form, Formik } from 'formik';
import ValidarInputVazia from '../../../../Fixtures/Inputs/ValidarInputVazia';
import { useHistory, useLocation } from 'react-router-dom';
import { validarEndereco } from '../ValidacaoInputSchema';
import { useEffect } from 'react';

function Endereco() {

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
              placeholder="CEP" />
            <ErrorMessage className="mensagem-erro" component="span" name="cep" />
          </div>

          <div className="form-grupo-input" id="rua">
            <Field
              type="text"
              name="rua"
              placeholder="Logradouro" />
            <ErrorMessage className="mensagem-erro" component="span" name="rua" />
          </div>

          <div className="form-grupo-input" id="numero">
            <Field
              type="text"
              name="numero"
              placeholder="Numero" />
            <ErrorMessage className="mensagem-erro" component="span" name="numero" />
          </div>

          <div className="form-grupo-input" id="bairro">
            <Field
              type="text"
              name="bairro"
              placeholder="Bairro" />
            <ErrorMessage className="mensagem-erro" component="span" name="bairro" />
          </div>

          <div className="form-grupo-input" id="complemento">
            <Field
              type="text"
              name="complemento"
              placeholder="Complemento" />
            <ErrorMessage className="mensagem-erro" component="span" name="complemento" />
          </div>

          <div className="form-grupo-input" id="cidade">
            <Field
              type="text"
              name="cidade"
              placeholder="Cidade" />
            <ErrorMessage className="mensagem-erro" component="span" name="cidade" />
          </div>

          <div className="form-grupo-input" id="estado">
            <Field
              type="text"
              name="estado"
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