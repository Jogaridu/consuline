import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import "../../Styles/globalStyle.css";

import logoprojeto2 from "../../Assets/logoprojeto2.png";
import book from "../../Assets/book.png";
import add from "../../Assets/add.png";
import trespontos from "../../Assets/3pontos.png";

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

const CardMedico = () => {
  return (
    <div className="cardInformativo">
      <img src={trespontos} alt="Clique aqui para mais dados" />
      <div className="cardInformativo-img-ilustrativa-medico">
        <figure>
          <img src={logoprojeto2} alt="Imagem ilustrativa" />
        </figure>
      </div>
      <h3>2550</h3>
      <p>Total de médicos</p>
    </div>
  );
};

const CardPaciente = () => {
  return (
    <div className="cardInformativo">
      <img src={trespontos} alt="Clique aqui para mais dados" />
      <div className="cardInformativo-img-ilustrativa-paciente">
        <figure>
          <img src={logoprojeto2} alt="Imagem ilustrativa" />
        </figure>
      </div>
      <h3>2550</h3>
      <p>Total de pacientes</p>
    </div>
  );
};
const CardConsultas = () => {
  return (
    <div className="cardInformativo">
      <img src={trespontos} alt="Clique aqui para mais dados" />
      <div className="cardInformativo-img-ilustrativa-consultas">
        <figure>
          <img src={logoprojeto2} alt="Imagem ilustrativa" />
        </figure>
      </div>
      <h3>2550</h3>
      <p>Total de consultas concluidas</p>
    </div>
  );
};
const CardFilial = () => {
  return (
    <div className="cardInformativo">
      <img src={trespontos} alt="Clique aqui para mais dados" />
      <div className="cardInformativo-img-ilustrativa-filial">
        <figure>
          <img src={logoprojeto2} alt="Imagem ilustrativa" />
        </figure>
      </div>
      <h3>2550</h3>
      <p>Total de consultas concluidas</p>
    </div>
  );
};

const DadosInformativos = () => {
  return (
    <main>
      <h1>DADOS INFORMATIVOS</h1>
      <CardMedico />
      <CardPaciente />
      <CardConsultas />
      <CardFilial/>
    </main>
  );
};
const Home = () => {
  return (
    <div className="container-central">
      <Menu />
      <DadosInformativos />
    </div>
  );
};

export default Home;
