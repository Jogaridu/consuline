import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';

import "./styles.css";

import "../../../Styles/globalStyle.css";

import logoprojeto2 from "../../../Assets/logoprojeto2.png";
import book from "../../../Assets/book.png";
import add from "../../../Assets/add.png";
import add3 from "../../../Assets/add3.png";
import user from "../../../Assets/user.png";
import seta from "../../../Assets/seta.png";
import lupa from "../../../Assets/lupa.png";
import map from "../../../Assets/map.png";
import teste from "../../Home";

const Home = () => {
  const [novaFilial, setNovaFilial] = useState({
    cnpj: "",
    ie: "",
    razaoSocial: "",
    nomeFantasia: "",
    dataAbertura: "",
    email: "",
    telefone: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    complemento: "",
  });

  const handlerInput = (evento) => {
    setNovaFilial({...novaFilial, [evento.target.id]: evento.target.value });
    // setNovaFilial({cnpj: evento.target.value})
  console.log(novaFilial)
  };

  const [
    abrirPaginaCadastroEndereco,
    setAbrirPaginaCadastroEndereco,
  ] = useState(false);

  const CardEntradaDados = () => {
    
  };

  const CardEntradaDadosEndereco = () => {
    
  };

  return (
    <div className="container-central">
      <MenuCentral />
      <main>

        {!abrirPaginaCadastroEndereco && <CardEntradaDados />}
        {abrirPaginaCadastroEndereco && <CardEntradaDadosEndereco />}
      </main>
    </div>
  );
};

export default Home;
