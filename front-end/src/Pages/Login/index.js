import React from "react";
import { Link, useHistory } from "react-router-dom";
import Lottie from "react-lottie";

import "./styles.css";

import "../../Styles/globalStyle.css";

import logoprojeto2 from "../../Assets/logoprojeto2.png";
import api from "../../Services/api";
import { signin } from "../../Services/security";
import { ErrorMessage, Field, Form, Formik } from "formik";
import validarInputScheme from "./ValidacaoInputSchema";
import BotaoPrincipal from "../../Components/BotaoPrincipal";
import BotaoSecundario from "../../Components/BotaoSecundario";
import animationLogin from "../../Assets/animationLogin.json";

const Login = () => {
  const history = useHistory();

  const entrar = async (values) => {
    try {
      const response = await api.post("/login", values);

      if (response.status === 200) {
        signin(response.data);
        if (response.data.login === "admin") {
          return history.push("/home-central");

        } else {
          return history.push("/consultas/home");

        }
      }
    } catch (error) {
      if (error.response) {
        return console.log(error);
      }

      alert("Algo deu errado, tente novamente.");
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="container-principal-login">
        <div id="container-login-central">
          <div id="container-conteudo-login-central">
            <div id="logo-login-central">
              <img src={logoprojeto2} alt="logo projeto" />
              <h1 id="titulo-login"> Login </h1>
            </div>
            <div className="form box">
              <Formik
                initialValues={{ login: "", senha: "" }}
                onSubmit={entrar}
                validationSchema={validarInputScheme}
              >
                <Form id="form-login">
                  <div className="form-grupo-input input-login">
                    <Field type="text" name="login" placeholder="Login" />
                    <ErrorMessage
                      className="mensagem-erro"
                      component="span"
                      name="login"
                    />
                  </div>

                  <div className="form-grupo-input input-login">
                    <Field type="password" name="senha" placeholder="Senha" />
                    <ErrorMessage
                      className="mensagem-erro"
                      component="span"
                      name="senha"
                    />
                  </div>

                  <div id="container-botoes-login">
                    <Link to="/">
                      <BotaoSecundario titulo="Voltar" />
                    </Link>
                    <BotaoPrincipal titulo="Iniciar sessão" tipo="submit" />
                  </div>
                </Form>
              </Formik>
            </div>
          </div>

        </div>
        <div id="container-imagem-login-central">
          <Lottie options={defaultOptions} height={600} width={800} style={{ pointerEvents: "none" }} />
        </div>
      </div>
    </>
  );
};

export default Login;
