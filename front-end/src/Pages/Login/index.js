import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";

import "../../Styles/globalStyle.css";


import logoprojeto2 from "../../Assets/logoprojeto2.png";
import api from "../../Services/api";
import { signin } from "../../Services/security";

const Login = (props) => {

  const history = useHistory();

  const [adminLogin, setAdminLogin] = useState({
    login: "",
    senha: ""
  });


  const entrar = async (e) => {
    e.preventDefault();

    return history.push("/home");

    try {
      const response = await api.post("/login", adminLogin);

      if (response.status === 201) {
        signin(response.data);

        return history.push("/home");
      }
    } catch (error) {
      if (error.response) {
        return window.alert(error.response.data.error);
      }

      window.alert("Algo deu errado, tente novamente.");
    }

  };

  const handlerInput = (e) => {
    setAdminLogin({ ...adminLogin, [e.target.id]: e.target.value });

    console.log(adminLogin);
  }







  return (
    <>
      <body>
        <div className="container">
          <div className="container-principal">
            <div className="container-imagem">
              <img id="imgLogoLogin" src={logoprojeto2} alt="logo projeto" />
            </div>
            <div className="box">

              <form>
                <div>
                  <input type="text" value={adminLogin.login} id="login" onChange={handlerInput} name="" required=""></input>
                  <label>Login</label>
                </div>

                <div>
                  <input type="password" value={adminLogin.senha} id="senha" onChange={handlerInput} name="" required=""></input>
                  <label>Senha</label>
                </div>

                <div className="conteiner-botoes">
                  <Link to="/"><button className="botao" type="button"> Voltar</button></Link>
                  <button className="botao" type="button" onClick={entrar}>
                    Iniciar sessão
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
