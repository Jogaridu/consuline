import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import "../../../Styles/globalStyle.css";

import logoprojeto2 from "../../../Assets/logoprojeto2.png";
import book from "../../../Assets/book.png";
import add from "../../../Assets/add.png";
import add3 from "../../../Assets/add3.png";
import map from "../../../Assets/map.png";

const Menu = () => {
  return (
    <div className="menu">
      <figure>
        <img src={logoprojeto2} alt="Logo Consuline" />
      </figure>
      <div className="menu-pesquisar">
        <h3>PESQUISAR</h3>
      </div>
      <div className="menu-itens">
        <h3>CENTRAL</h3>
        <div className="subMenu">
          <div className="subMenu-itens">
            <h5>LISTAR</h5>
            <img src={book} alt="Logo adicionar" />
          </div>
          <div className="subMenu-itens">
            <h5>ADICIONAR</h5>
            <img src={add} alt="Logo adicionar" />
          </div>
        </div>
      </div>
      <div className="menu-itens">
        <h3>MÉDICOS </h3>
        <div className="subMenu">
          <div className="subMenu-itens">
            <h5>LISTAR</h5>
            <img src={book} alt="Logo adicionar" />
          </div>
          <div className="subMenu-itens">
            <h5>ADICIONAR</h5>
            <img src={add} alt="Logo adicionar" />
          </div>
        </div>
      </div>
      <div className="menu-itens">
        <h3>FILIAIS</h3>
        <div className="subMenu">
          <div className="subMenu-itens">
            <h5>LISTAR</h5>
            <img src={book} alt="Logo adicionar" />
          </div>
          <div className="subMenu-itens">
            <h5>ADICIONAR</h5>
            <img src={add} alt="Logo adicionar" />
          </div>
        </div>
      </div>
      <div className="menu-itens">
        <h3>SERVIÇOS</h3>
        <div className="subMenu">
          <div className="subMenu-itens">
            <h5>LISTAR</h5>
            <img src={book} alt="Logo adicionar" />
          </div>
          <div className="subMenu-itens">
            <h5>ADICIONAR</h5>
            <img src={add} alt="Logo adicionar" />
          </div>
        </div>
      </div>
      <div className="direitos">
        <h5>DESENVOLVIDO POR DS3-M | CONSULINE</h5>
      </div>
    </div>
  );
};
const CardEntradaDados = () => {
  return (
    <div className="conteiner-entrada-dados-endereco">
      <div>
        <figure>
          <img src={map} alt="Imagem ilustrativa " />
        </figure>
        <h2>Localização </h2>
      </div>
      <form>
        <div className="form-linha-um">
          <input
            type="text"
            name="txtcep"
            id="cep"
            placeholder="CEP"
            required
            maxLength="9"
          />
          <input
            type="text"
            name="txtendereco"
            id="endereco"
            placeholder="ENDEREÇO"
            required
          />
        </div>
        <div className="from-linha-dois">
          <input
            type="text"
            name="txtrua"
            id="rua"
            placeholder="RUA"
            required
          />
          <input
            type="text"
            name="txtnumero"
            id="numero"
            placeholder="Nº"
            required
          />
        </div>
        <div className="from-linha-tres">
          <input
            type="text"
            name="txtbairro"
            id="bairro"
            placeholder="BAIRRO"
            required
          />
          <input
            type="text"
            name="txtcomplemento"
            id="complemento"
            placeholder="COMPLEMENTO"
            required
          />
        </div>
        <button id="concluido-endereco">CONCLUIDO</button>
      </form>
    </div>
  );
};
const Home = () => {
  return (
    <div className="conteiner-adicionar-endereco">
      <Menu />
      <main>
        <div className="titulo-principal">
          <h1>ADICIONAR FILIAL</h1>
          <figure>
            <img src={add3} alt="Imagem ilustrativa " />
          </figure>
        </div>
        <CardEntradaDados />
      </main>
    </div>
  );
};

export default Home;
