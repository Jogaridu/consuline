import React from 'react';

import './styles.css';

import "../../../../Styles/globalStyle.css";

import map from "../../../../Assets/map.png";

import { ErrorMessage, Field } from 'formik';
import ValidarInputVazia from '../../../../Fixtures/Inputs/ValidarInputVazia';

function Endereco({ setTelaAtual }) {

  const validar = () => {
    const arrInputs = Array.from(document.querySelectorAll("form input"));

    const arrayInputsVazias = ValidarInputVazia(arrInputs);

    if (!arrayInputsVazias) {
      setTelaAtual("/filial/servicos");

    }
  }

  return (
    <div className="conteiner-entrada-dados-endereco">

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

          <button onClick={() => setTelaAtual("/filial")} type="button">&larr;</button>

          <button type="submit" onClick={validar}>&rarr;</button>

        </div>

      </div>
    </div>
  );
}

export default Endereco;