import React from "react";
import { Link, useHistory } from "react-router-dom";
import MenuCentral from "../../Components/MenuCentral";

import "./styles.css";

import "../../Styles/globalStyle.css";

import logoprojeto2 from "../../Assets/logoprojeto2.png";
import book from "../../Assets/book.png";
import add from "../../Assets/add.png";
import trespontos from "../../Assets/3pontos.png";
import lupa from "../../Assets/lupa.png";
import { Card } from "react-bootstrap";

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
      <MenuCentral />
      <DadosInformativos />
    </div>
  );
};

export default Home;
