import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import "../../../Styles/globalStyle.css";

import logoprojeto2 from "../../../Assets/logoprojeto2.png";
import book from "../../../Assets/book.png";
import add from "../../../Assets/add.png";
import add3 from "../../../Assets/add3.png";
import user from "../../../Assets/user.png";
import seta from "../../../Assets/seta.png";
import lupa from "../../../Assets/lupa.png";

const Menu = () => {
  return (
    <div className="menu">
      <figure>
        <img src={logoprojeto2} alt="Logo Consuline" />
      </figure>
      <div className="menu-pesquisar">
        <img src={lupa} alt="Lupa" />
        <h3>BUSCAR</h3>
      </div>
      <div className="menu-itens">
        <h3>CENTRAL</h3>
        <div className="subMenu">
          <div className="subMenu-itens">
            <h5>ADICIONAR</h5>
            <img src={add} alt="Logo adicionar" />
          </div>
          <div className="subMenu-itens">
            <h5>LISTAR</h5>
            <img src={book} alt="Logo adicionar" />
          </div>
        </div>
      </div>
      <div className="menu-itens">
        <h3>MÉDICOS </h3>
        <div className="subMenu">
          <div className="subMenu-itens">
            <h5>ADICIONAR</h5>
            <img src={add} alt="Logo adicionar" />
          </div>
          <div className="subMenu-itens">
            <h5>LISTAR</h5>
            <img src={book} alt="Logo adicionar" />
          </div>
        </div>
      </div>
      <div className="menu-itens">
        <h3>FILIAIS</h3>
        <div className="subMenu">
          <div className="subMenu-itens">
            <h5>ADICIONAR</h5>
            <img src={add} alt="Logo adicionar" />
          </div>
          <div className="subMenu-itens">
            <h5>LISTAR</h5>
            <img src={book} alt="Logo adicionar" />
          </div>
        </div>
      </div>
      <div className="menu-itens">
        <h3>SERVIÇOS</h3>
        <div className="subMenu">
          <div className="subMenu-itens">
            <h5>ADICIONAR</h5>
            <img src={add} alt="Logo adicionar" />
          </div>
          <div className="subMenu-itens">
            <h5>LISTAR</h5>
            <img src={book} alt="Logo adicionar" />
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
    <div className="conteiner-entrada-dados">
      <div>
        <figure>
          <img src={user} alt="Imagem ilustrativa " />
        </figure>
        <h2>Informações de cadastro </h2>
      </div>

      <form>
        <div>
          <input
            type="text"
            placeholder="CNPJ"
            name="txtcnpj"
            id="cnpj"
            required
          />
          <input type="text" placeholder="I.E" name="txtie" id="ie" required />
        </div>
        <input
          type="text"
          placeholder="Razão social"
          name="txtrazaosocial"
          id="razaoSocial"
          required
        />
        <input
          type="text"
          placeholder="Nome fantasia"
          name="txtnomefantasia"
          id="nomeFantasia"
          required
        />
        <input
          type="text"
          placeholder="Data abertura"
          name="txtdataabertura"
          id="dataAbertura"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          required
        />
        <input
          type="tel"
          placeholder="Telefone"
          name="telefone"
          id="telefone"
          required
        />
        <button className="proximo">
          <figure>
            <img src={seta} alt="Proximo" />
          </figure>
        </button>
      </form>
    </div>
  );
};
const Home = () => {
  return (
    <div className="conteiner-adicionar-info-pessoais">
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
