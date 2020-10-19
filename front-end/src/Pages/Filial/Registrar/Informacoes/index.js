import React from 'react';

import './styles.css';
import '../../../../Styles/globalStyle.css';

import user from "../../../../Assets/user.png";
import validarInputVazia from '../../../../Fixtures/Inputs/ValidarInputVazia';
import InputCorreta from '../../../../Fixtures/Inputs/InputCorreta';
import { ErrorMessage, Field } from 'formik';

function Informacoes({ setTelaAtual }) {

  const validar = () => {
    const arrInputs = Array.from(document.querySelectorAll("form input"));

    const arrayInputsVazias = validarInputVazia(arrInputs);

    if (!arrayInputsVazias) {
      // setTelaAtual("/filial/endereco");

    }
  }

  return (
    <div className="conteiner-entrada-dados">
      <div className="titulo-card-cadastro">
        <figure>
          <img src={user} alt="Imagem ilustrativa" />
        </figure>
        <h2>Informações de cadastro</h2>
      </div>
      <div className="form form-informacao">
        <div className="form-grupo-input" id="cnpj">
          <Field
            type="text"
            placeholder="CNPJ"
            name="cnpj"
            onBlur={InputCorreta} />
          <ErrorMessage className="mensagem-erro" component="span" name="cnpj" />
        </div>

        <div className="form-grupo-input" id="ie">
          <Field
            type="text"
            placeholder="I.E"
            name="ie"
            onBlur={InputCorreta} />
          <ErrorMessage className="mensagem-erro" component="span" name="ie" />
        </div>

        <div className="form-grupo-input" id="razaoSocial">
          <Field
            type="text"
            placeholder="Razão social"
            name="razaoSocial"
            onBlur={InputCorreta} />
          <ErrorMessage className="mensagem-erro" component="span" name="razaoSocial" />
        </div>

        <div className="form-grupo-input" id="nomeFantasia">
          <Field
            type="text"
            placeholder="Nome fantasia"
            name="nomeFantasia"
            onBlur={InputCorreta} />
          <ErrorMessage className="mensagem-erro" component="span" name="nomeFantasia" />
        </div>

        <div className="form-grupo-input" id="dataAbertura">
          <Field
            type="text"
            placeholder="Data abertura"
            name="dataAbertura"
            onBlur={InputCorreta} />
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

        {/* <input
              type="tel"
              placeholder="Telefone"
              name="telefone"
              id="telefone"
              value={novaFilial.telefone}
              onChange={handlerInput}
              required
              maxLength="15"
            /> */}

        <div className="caixa-botoes">
          <button style={{ opacity: 0 }} type="button" />

          <button type="submit" onClick={validar}>
            &rarr;
          </button>
        </div>
      </div>

    </div>

  );
}

export default Informacoes;