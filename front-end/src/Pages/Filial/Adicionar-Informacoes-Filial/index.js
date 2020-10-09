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
