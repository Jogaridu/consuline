import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import MaskedInput from "react-text-mask";

import validarInputVazia from '../../../../Fixtures/Inputs/ValidarInputVazia';
import InputCorreta from '../../../../Fixtures/Inputs/InputCorreta';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { validarDadosMedico } from '../ValidacaoInputSchema';
import mascaras from "./mask";
import ValidarData from '../../../../Fixtures/ValidarData';

import './styles.css';
import '../../../../Styles/globalStyle.css'
import medico from "../../../../Assets/medico.png"


function DadosMedico() {

  const history = useHistory();

  const validar = (values) => {
    const arrInputs = Array.from(document.querySelectorAll("form input"));

    const arrayInputsVazias = validarInputVazia(arrInputs);

    if (!arrayInputsVazias) {
      const dataNascimentoEn = ValidarData(values.dataNascimento);

      if (dataNascimentoEn) {
        history.push("/profissional-saude/endereco", { ...values, dataNascimento: dataNascimentoEn });



        console.log ({ ...values, dataNascimento: dataNascimentoEn });
      }
    }
  }

  return (
    <Formik
    onSubmit={validar}
    initialValues={{
      cpf: "",
      nome: "",
      crm: "",
      dataNascimento: "",
      email: "",
      telefone: "",
    }}
    validationSchema={validarDadosMedico}>


       <Form className="form"> 
        <div id="container-card1">
          <div className="container-left-side1">
            <div className="img-usuario">
              <img id="usuario" src={medico} alt="logo projeto" />
            </div>
            <div className="subtitulo-img">
              Cadastro Pessoal
            </div>
          </div>

          <div className="container-right-side1">
            <div className="entrada-de-dados1">
              <div className="form-grupo-input" id="nome">
              <Field
                name="nome"
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    type="text"
                    // mask={mascaras.nome}
                    placeholder="Nome Completo"
                    // onBlur={InputCorreta}
                    // guide={false}
                  />
                )} />
              {/* <ErrorMessage className="mensagem-erro" component="span" name="nome" /> */}
            </div>
              <div className="form-grupo-input" id="dataNascimento">
                <Field
                  name="dataNascimento"
                  render={({ field }) => (
                  <MaskedInput
                    {...field}
                    type="text"
                    mask={mascaras.data}
                    placeholder="Data de Nascimento"
                    onBlur={InputCorreta}
                    guide={false}
                  />
                )} />
                </div>
              <div className="form-grupo-input" id="crm">
                  <Field
                    name="crm"
                    render={({ field }) => (
                    <MaskedInput
                    {...field}
                    type="text"
                    mask={mascaras.crm}
                    placeholder="CRM"
                    onBlur={InputCorreta}
                    guide={false}
                  />
                )} />
                  <ErrorMessage className="mensagem-erro" component="span" name="crm" />
                  </div>
              <div className="form-grupo-input" id="cpf">
                <Field
                  name="cpf"
                  render={({ field }) => (
                  <MaskedInput
                  {...field}
                  type="text"
                  mask={mascaras.crm}
                  placeholder="CPF"
                  onBlur={InputCorreta}
                  guide={false}
                  />
                )} />
                <ErrorMessage className="mensagem-erro" component="span" name="cpf" />
                  
                  </div>  
              <div className="form-grupo-input" id="email">
                <Field
                  name="email"
                  render={({ field }) => (
                  <MaskedInput
                  {...field}
                  type="text"
                  mask={mascaras.email}
                  placeholder="Email"
                  onBlur={InputCorreta}
                  guide={false}
                  />
                )} />
                <ErrorMessage className="mensagem-erro" component="span" name="email" />
              </div>
              <div className="form-grupo-input" id="telefone">
                <Field
                  name="telefone"
                  render={({ field }) => (
                  <MaskedInput
                  {...field}
                  type="text"
                  mask={mascaras.telefone}
                  placeholder="Telefone"
                  onBlur={InputCorreta}
                  guide={false}
                />
               )} />
                <ErrorMessage className="mensagem-erro" component="span" name="telefone" />
                </div>
            </div>

            <div className="div-btn">
              <div className="qnt-pag">
                {/* <div className="pg1-1"> 
                              
                              </div>
                              <div className="pg2-1"> 
                              
                              </div>
                              <div className="pg3-1"> 
                              
                              </div> */}
              </div>
              <div className="caixa-botoes">
                <button type="submit">&rarr;</button>
              </div>
            </div>
          </div>
        </div>
        </Form> 
      </Formik>
  );
}

export default DadosMedico;
