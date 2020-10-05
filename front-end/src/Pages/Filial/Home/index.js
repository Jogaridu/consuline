import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import "../../../Styles/globalStyle.css";

import logoprojeto2 from "../../../Assets/logoprojeto2.png";
import book from "../../../Assets/book.png";
import add from "../../../Assets/add.png";
import lupa from "../../../Assets/lupa.png";
import add3 from "../../../Assets/add3.png";
import seta from "../../../Assets/seta.png";

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

const Main = () => {
  return (
    <div className="titulos-home-filial">
      <h1>QUANTOS FUNCIONARIOS TEM</h1>
      <h1>QUANTOS MÉDICOS TEM ?</h1>
      <h1>QUANTOS INFERMEIROS TEM ?</h1>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container-home-filial">
      <Menu />
      <main>
        <div className="titulo-principal">
          <h1>ADICIONAR FILIAL</h1>
          <figure>
            <img src={add3} alt="Imagem ilustrativa " />
          </figure>
        </div>
        <Main />
        <button className="proximo-home-filial">
          <figure>
            <img src={seta} alt="Proximo" />
          </figure>
        </button>
      </main>
    </div>
  );
};

export default Home;
