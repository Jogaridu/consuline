import React from 'react';

import './styles.css';

import "../../../../Styles/globalStyle.css";

import map from "../../../../Assets/map.png";

import api from "../../../../Services/api";
import { event } from 'jquery';

function Endereco({novaFilial, setNovaFilial, setNavegarEndereco}) {

  const handlerInput = (evento) => {
    setNovaFilial({...novaFilial, [evento.target.id]: evento.target.value });
  
  };

  const cadastrarFilial = async () => {

    try {
      
      const retorno = await api.post("/filiais", novaFilial);
      alert("cadastro com sucesso");
      console.log(retorno);

    } catch (error) {
      console.log(error);

    }
    
  }

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
            id="cepInpt"
            value={novaFilial.endereco.cep}
            onChange={handlerInput}
            placeholder="CEP"
            required
            maxLength="9"
          />
          <input
            type="text"
            name="txtrua"
            id="ruaInpt"
            value={novaFilial.endereco.rua}
            onChange={handlerInput}
            placeholder="RUA"
            required
            maxLength="100"
          />
          <input
            type="text"
            name="txtnumero"
            id="numeroInpt"
            value={novaFilial.endereco.numero}
            onChange={handlerInput}
            placeholder="Nº"
            required
            maxLength="5"
          />
          <input
            type="text"
            name="txtbairro"
            id="bairroInpt"
            value={novaFilial.endereco.bairro}
            onChange={handlerInput}
            placeholder="BAIRRO"
            required
            maxLength="100"
          />
          <input
            type="text"
            name="txtcomplemento"
            id="complementoInpt"
            value={novaFilial.endereco.complemento}
            onChange={handlerInput}
            placeholder="COMPLEMENTO"
            required
            maxLength="100"
          />
          <input
            type="text"
            name="txtcomplemento"
            id="cidadeInpt"
            value={novaFilial.endereco.cidade}
            onChange={handlerInput}
            placeholder="CIDADE"
            required
            maxLength="100"
          />
          <input
            type="text"
            name="txtcomplemento"
            id="estadoInpt"
            value={novaFilial.endereco.estado}
            onChange={handlerInput}
            placeholder="ESTADO"
            required
            maxLength="100"
          />
        <div id="caixaBotoes">
          <button id="botaoVoltar" onClick={(evento) => {
            
            
            setNavegarEndereco(false)}
          }>
            Voltar
          </button>
          <button id="botao" type="button" onClick={(evento) => {
            evento.preventDefault();
            cadastrarFilial();
          }}>
            Concluído
          </button>
        </div>
        
      </form>
    </div>
  );
}

export default Endereco;