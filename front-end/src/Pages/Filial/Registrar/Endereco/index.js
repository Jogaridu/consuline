import React from 'react';

import './styles.css';

import "../../../../Styles/globalStyle.css";

import map from "../../../../Assets/map.png";

import { Link } from 'react-router-dom';

function Endereco({novaFilial, handlerInput}) {

  return (
    <div className="conteiner-entrada-dados-endereco">

      <div className="titulo-card-cadastro">
        <figure>
          <img src={map} alt="Imagem ilustrativa" />
        </figure>
        <h2>Localização</h2>
      </div>

      <form>
          <input
            type="text"
            name="txtcep"
            id="cep"
            value={novaFilial.endereco.cep}
            onChange={handlerInput}
            placeholder="CEP"
            required
            maxLength="9"
          />
          <input
            type="text"
            name="txtrua"
            id="rua"
            value={novaFilial.endereco.rua}
            onChange={handlerInput}
            placeholder="RUA"
            required
            maxLength="100"
          />
          <input
            type="text"
            name="txtnumero"
            id="numero"
            value={novaFilial.endereco.numero}
            onChange={handlerInput}
            placeholder="Nº"
            required
            maxLength="5"
          />
          <input
            type="text"
            name="txtbairro"
            id="bairro"
            value={novaFilial.endereco.bairro}
            onChange={handlerInput}
            placeholder="BAIRRO"
            required
            maxLength="100"
          />
          <input
            type="text"
            name="txtcomplemento"
            id="complemento"
            value={novaFilial.endereco.complemento}
            onChange={handlerInput}
            placeholder="COMPLEMENTO"
            required
            maxLength="100"
          />
          <input
            type="text"
            name="txtcomplemento"
            id="cidade"
            value={novaFilial.endereco.cidade}
            onChange={handlerInput}
            placeholder="CIDADE"
            required
            maxLength="100"
          />
          <input
            type="text"
            name="txtcomplemento"
            id="estado"
            value={novaFilial.endereco.estado}
            onChange={handlerInput}
            placeholder="ESTADO"
            required
            maxLength="100"
          />
        <div className="caixa-botoes">
            <Link to="/cadastrar-filial" >
              <button>&larr;</button>
            </Link>

            <Link to="/cadastrar-servicos">
              <button>&rarr;</button>
            </Link>
          </div>
      </form>
    </div>
  );
}

export default Endereco;