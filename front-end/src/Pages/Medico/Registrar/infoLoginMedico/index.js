import React, {useLocation} from 'react';
import { Link } from 'react-router-dom';


import Swal from 'sweetalert2';
import InputCorreta from '../../../../Fixtures/Inputs/InputCorreta';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import MaskedInput from "react-text-mask";
//  import mascaras from "./mask";


import './styles.css';

import cadeado from "../../../../Assets/cadeado.png"
import api from '../../../../Services/api';
// import logoConsuline from "../../Assets/logoprojeto1.png"

function DadosMedicoLogin() {

  const history = useHistory();

  
  const cadastrarProfissional = async () => {

    try {
        const retorno = await api.post("/profissional"); 

        if (retorno.status === 201) {
            alert ('ok');
        }

    } catch (error) {
      if (error.response) {
        return window.alert(error.response.data.erro);
      }

      window.alert("Ops, algo deu errado, tente novamente");
    }
}

  return (

    <Formik
    initialValues={{
      login: "",
      senha: "",
    }}>
      <Form>
        <div id="container-card1">
          <div className="container-left-side1">
            <div className="img-usuario">
              <img className="cadeado" src={cadeado} alt="logo projeto" />
            </div>

            <div className="subtitulo-img">
              Cadastro Login
             </div>
          </div>


          <div className="container-right-side1">
            <div className="entrada-de-dados-login">
              <div className="inputs">
                <Field
                type="text"
                placeholder="Login"
                name="login"
                onBlur={InputCorreta}
                maxLength="25" />
              <ErrorMessage className="mensagem-erro" component="span" name="login" />
              </div>
              <div className="inputs">
              <Field
                type="password"
                placeholder="Senha"
                name="senha"
                onBlur={InputCorreta}
                maxLength="25" />
              <ErrorMessage className="mensagem-erro" component="span" name="senha" />
              </div>
            </div>

            <div className="caixa-botoes">
                <button onClick={() => history.goBack()} type="button">&larr;</button>
                <button style={{ width: "180px", fontSize: "1.1em", marginLeft: "200px" }}
                type="submit" onClick={cadastrarProfissional}>Concluido</button>
              </div>
          </div>


        </div>
        </Form>
    </Formik>
  );
}

export default DadosMedicoLogin;




