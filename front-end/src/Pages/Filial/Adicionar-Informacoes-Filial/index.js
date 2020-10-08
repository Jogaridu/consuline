import React, { useState } from "react";
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
import map from "../../../Assets/map.png";

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

  const handlerInput = (e) => {
    setNovaFilial({ ...novaFilial, [e.target.id]: e.target.value });
  };

  const [
    abrirPaginaCadastroEndereco,
    setAbrirPaginaCadastroEndereco,
  ] = useState(false);

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
              value={novaFilial.cnpj}
              onChange={handlerInput}
              required
              maxLength="12"
            />
            <input
              type="text"
              placeholder="I.E"
              name="txtie"
              id="ie"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Razão social"
            name="txtrazaosocial"
            id="razaoSocial"
            value={novaFilial.razaoSocial}
            onChange={handlerInput}
            required
          />
          <input
            type="text"
            placeholder="Nome fantasia"
            name="txtnomefantasia"
            id="nomeFantasia"
            value={novaFilial.nomeFantasia}
            onChange={handlerInput}
            required
            maxLength="80"
          />
          <input
            type="text"
            placeholder="Data abertura"
            name="txtdataabertura"
            id="dataAbertura"
            value={novaFilial.dataAbertura}
            onChange={handlerInput}
            required
            maxLength="9"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={novaFilial.email}
            onChange={handlerInput}
            required
            maxLength="100"
          />
          <input
            type="tel"
            placeholder="Telefone"
            name="telefone"
            id="telefone"
            value={novaFilial.telefone}
            onChange={handlerInput}
            required
            maxLength="15"
          />
          <button
            className="proximo"
            id="proximo-filial"
            onClick={() => {
              setAbrirPaginaCadastroEndereco(true);
            }}
          >
            <figure>
              <img src={seta} alt="Proximo" />
            </figure>
          </button>
        </form>
      </div>
    );
  };

  const CardEntradaDadosEndereco = () => {
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
              value={novaFilial.cep}
              onChange={handlerInput}
              placeholder="CEP"
              required
              maxLength="9"
            />
            <input
              type="text"
              name="txtendereco"
              id="endereco"
              value={novaFilial.endereco}
              onChange={handlerInput}
              placeholder="ENDEREÇO"
              required
            />
          </div>
          <div className="from-linha-dois">
            <input
              type="text"
              name="txtrua"
              id="rua"
              value={novaFilial.rua}
              onChange={handlerInput}
              placeholder="RUA"
              required
              maxLength="100"
            />
            <input
              type="text"
              name="txtnumero"
              id="numero"
              value={novaFilial.numero}
              onChange={handlerInput}
              placeholder="Nº"
              required
              maxLength="5"
            />
          </div>
          <div className="from-linha-tres">
            <input
              type="text"
              name="txtbairro"
              id="bairro"
              value={novaFilial.bairro}
              onChange={handlerInput}
              placeholder="BAIRRO"
              required
              maxLength="100"
            />
            <input
              type="text"
              name="txtcomplemento"
              id="complemento"
              value={novaFilial.complemento}
              onChange={handlerInput}
              placeholder="COMPLEMENTO"
              required
              maxLength="100"
            />
          </div>
          <button type="submit" id="concluido-endereco">
            CONCLUIDO
          </button>
        </form>
      </div>
    );
  };

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
        {!abrirPaginaCadastroEndereco && <CardEntradaDados />}
        {abrirPaginaCadastroEndereco && <CardEntradaDadosEndereco />}
      </main>
    </div>
  );
};

export default Home;
