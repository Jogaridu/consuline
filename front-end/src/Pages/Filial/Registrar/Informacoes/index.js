import React from 'react';

import './styles.css';
import '../../../../Styles/globalStyle.css';

import user from "../../../../Assets/user.png";
import { Link } from 'react-router-dom';
import validarInputVazia from '../../../../Fixtures/Inputs/ValidarInputVazia';
import InputCorreta from '../../../../Fixtures/Inputs/InputCorreta';

function Informacoes({novaFilial, handlerInput}) {

    const validar = () => {
      const arrInputs = Array.from(document.querySelectorAll("form input"));
      console.log(arrInputs);

      const arrayInputsVazias = validarInputVazia(arrInputs);

      console.log(arrayInputsVazias);
    }

    return (
        <div className="conteiner-entrada-dados">
          <div className="titulo-card-cadastro">
            <figure>
              <img src={user} alt="Imagem ilustrativa" />
            </figure>
            <h2>Informações de cadastro</h2>
          </div>
          <form>
            <input
              type="text"
              placeholder="CNPJ"
              name="txtcnpj"
              id="cnpj"
              value={novaFilial.cnpj}
              onChange={handlerInput}
              required
              maxLength="12"
              onBlur={InputCorreta}/>

            <input
              type="text"
              placeholder="I.E"
              name="txtie"
              id="ie"
              value={novaFilial.ie}
              onChange={handlerInput}
              required
              onBlur={InputCorreta}/>

            <input
              type="text"
              placeholder="Razão social"
              name="txtrazaosocial"
              id="razaoSocial"
              value={novaFilial.razaoSocial}
              onChange={handlerInput}
              required
              onBlur={InputCorreta}/>

            <input
              type="text"
              placeholder="Nome fantasia"
              name="txtnomefantasia"
              id="nomeFantasia"
              value={novaFilial.nomeFantasia}
              onChange={handlerInput}
              required
              maxLength="80"
              onBlur={InputCorreta}/>

            <input
              type="text"
              placeholder="Data abertura"
              name="txtdataabertura"
              id="dataAbertura"
              value={novaFilial.dataAbertura}
              onChange={handlerInput}
              required
              maxLength="9"
              onBlur={InputCorreta}/>

            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={novaFilial.email}
              onChange={handlerInput}
              required
              maxLength="100"
              onBlur={InputCorreta}/>
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
              <button style={{opacity: 0}}>
                
              </button>
              {/* <Link to="/cadastrar-endereco"> */}
                <button onClick={validar}>
                  &rarr;
                </button>
              {/* </Link> */}
            </div>
              
          </form>
        </div>

    );
}

export default Informacoes;