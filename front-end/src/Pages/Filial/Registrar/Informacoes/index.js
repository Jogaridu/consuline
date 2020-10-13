import React, { useState } from 'react';

import './styles.css';
import '../../../../Styles/globalStyle.css';

import user from "../../../../Assets/user.png";
import seta from "../../../../Assets/seta2.png";
import { Link, Route, Switch } from 'react-router-dom';
import Endereco from '../Endereco';

function Informacoes({novaFilial, setNovaFilial, setNavegarEndereco}) {
    
    const handlerInput = (evento) => {
        setNovaFilial({...novaFilial, [evento.target.id]: evento.target.value });
    };

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
            id="cnpjInpt"
            value={novaFilial.cnpj}
            onChange={handlerInput}
            required
            maxLength="12"
            />
            <input
            type="text"
            placeholder="I.E"
            name="txtie"
            id="ieInpt"
            value={novaFilial.ie}
            required
            />
            <input
              type="text"
              placeholder="Razão social"
              name="txtrazaosocial"
              id="razaoSocialInpt"
              value={novaFilial.razaoSocial}
              onChange={handlerInput}
              required
            />
            <input
              type="text"
              placeholder="Nome fantasia"
              name="txtnomefantasia"
              id="nomeFantasiaInpt"
              value={novaFilial.nomeFantasia}
              onChange={handlerInput}
              required
              maxLength="80"
            />
            <input
              type="text"
              placeholder="Data abertura"
              name="txtdataabertura"
              id="dataAberturaInpt"
              value={novaFilial.dataAbertura}
              onChange={handlerInput}
              required
              maxLength="9"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="emailInpt"
              value={novaFilial.email}
              onChange={handlerInput}
              required
              maxLength="100"
            />
            {/* <input
              type="tel"
              placeholder="Telefone"
              name="telefone"
              id="telefoneInpt"
              value={novaFilial.telefone}
              onChange={handlerInput}
              required
              maxLength="15"
            /> */}
              
            <button id="botao" onClick={() => setNavegarEndereco(false)}>
                Próximo
            </button>
            
          </form>
        </div>
    );
}

export default Informacoes;