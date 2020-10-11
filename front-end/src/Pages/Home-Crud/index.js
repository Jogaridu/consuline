import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";

import "../../Styles/globalStyle.css";

import logoprojeto2 from "../../Assets/logoprojeto2.png";
import book from "../../Assets/book.png";
import add from "../../Assets/add.png";
import trespontos from "../../Assets/3pontos.png";
import lupa from "../../Assets/lupa.png";
import { Card } from "react-bootstrap";

const Menu = () => {

  const history = useHistory();

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
          <Link to="/filial-cadastro">
          <div className="subMenu-itens">
            <h5>ADICIONAR</h5>
            <img src={add} alt="Logo adicionar" />
          </div>
          </Link>
          
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
            <img src={add} alt="Logo adicionar" onClick={() => history.push("filial-cadastro")} />
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

const CardMedico = () => {
  return (
    <div className="cardInformativo">
      <img src={logoprojeto2} alt="Imagem ilustrativa" />
      <div>
        <h3>2550</h3>
        <p>Total de médicos</p>
      </div>
    </div>
  );
};

const CardPaciente = () => {
  return (
    <div className="cardInformativo">
      <img src={logoprojeto2} alt="Imagem ilustrativa" />
      <div>
        <h3>2550</h3>
        <p>Total de paciente</p>
      </div>
    </div>
  );
};
const CardConsultas = () => {
  return (
    <div className="cardInformativo">
      <img src={logoprojeto2} alt="Imagem ilustrativa" />
      <div>
        <h3>2550</h3>
        <p>Total de consultas relizadas</p>
      </div>
    </div>
  );
};
const CardFilial = () => {
  return (
    <div className="cardInformativo">
      <img src={logoprojeto2} alt="Imagem ilustrativa" />
      <div>
        <h3>2550</h3>
        <p>Total de filiais</p>
      </div>
    </div>
  );
};

const DadosInformativos = () => {
  return (
    <div className="main">
      <CardMedico />
      <CardPaciente />
      <CardConsultas />
      <CardFilial />
    </div>
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
