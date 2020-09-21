import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import "../../Styles/globalStyle.css";

import logoprojeto2 from "../../Assets/logoprojeto2.png";

const Login = () => {
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
                  <input type="text" name="" required=""></input>
                  <label>Login</label>
                </div>

                <div>
                  <input type="password" name="" required=""></input>
                  <label>Senha</label>
                </div>

                <div className="conteiner-botoes">
                <Link to="/"><button type="button"> Voltar</button></Link>
                  <button type="button"> 
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
