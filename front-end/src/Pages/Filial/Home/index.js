import React from "react";
import { Link } from "react-router-dom";
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';

import "./styles.css";

import "../../../Styles/globalStyle.css";

import logoprojeto2 from "../../../Assets/logoprojeto2.png";
import book from "../../../Assets/book.png";
import add from "../../../Assets/add.png";
import lupa from "../../../Assets/lupa.png";
import add3 from "../../../Assets/add3.png";
import seta from "../../../Assets/seta.png";

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
    <div className="container-central">
      <MenuCentral />
      <main>
        <TituloPrincipal nome="ADICIONAR FILIAL" imagem={add3} />

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
