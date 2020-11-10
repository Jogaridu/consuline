import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";

import "../../Styles/globalStyle.css";


import logoprojeto2 from "../../Assets/logoprojeto2.png";
import api from "../../Services/api";
import { signin } from "../../Services/security";
import { ErrorMessage, Field, Form, Formik } from "formik";
import validarInputScheme from "./ValidacaoInputSchema";
import BotaoPrincipal from "../../Components/BotaoPrincipal";
import BotaoSecundario from "../../Components/BotaoSecundario";

const Login = () => {

  const history = useHistory();

  const entrar = async (values) => {

    try {
      const response = await api.post("/login", values);

      if (response.status === 200) {
        signin(response.data);

        return history.push("/home-central");
      }

    } catch (error) {

      if (error.response) {
        return console.log(error);
      }

      alert("Algo deu errado, tente novamente.");

    }

  };

  return (
    <>
      <div className="container-principal">
        <div className="container-imagem">
          <img id="imgLogoLogin" src={logoprojeto2} alt="logo projeto" />
        </div>

        <div className="form box">
          <Formik
            initialValues={{ login: "", senha: "" }}
            onSubmit={entrar}
            validationSchema={validarInputScheme}>
            <Form>
              <div className="form-grupo-input">
                <Field type="text" name="login" placeholder="Login" />
                <ErrorMessage className="mensagem-erro" component="span" name="login" />


              </div>

              <div className="form-grupo-input">
                <ErrorMessage className="mensagem-erro" component="span" name="senha" />

                <Field type="password" name="senha" placeholder="Senha" />
              </div>

              <div className="container-botoes">
                <Link to="/">
                  <BotaoSecundario titulo="Voltar" />
                </Link>

                <BotaoPrincipal titulo="Iniciar sessão" tipo="submit" />
              </div>
            </Form>
          </Formik>
        </div>

      </div>
    </>
  );
};

export default Login;
