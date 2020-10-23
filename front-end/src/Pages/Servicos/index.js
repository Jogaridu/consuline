import React, { useState, useEffect } from "react";
import { MdAdd, MdFormatListNumbered } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Lottie from "react-lottie";
import loader from "../../Assets/loader.json";

import "./styles.css";

import Menu from "../../Components/MenuCentral";
import Titulo from "../../Components/TituloPrincipal";

import api from "../../Services/api";

const CardServicos = (props) => {

  const [mostrarSubMenu, setMostrarSubMenu] = useState(false);
  const [mostrarHospitais, setHospitais] = useState(false);

  const SubMenu = () => {
    return (
      <ul className="menu-config-servicos">
        <li>
          <h2>Ver mais</h2>
        </li>
        <li>
          <h2
            onClick={() => {
              setHospitais(!mostrarHospitais);
              setTimeout(() => {
                setHospitais(false);
              }, 10000);
            }}
          >
            Ver Hospitais
          </h2>
        </li>
        <li>
          <h2>Editar</h2>
        </li>
      </ul>
    );
  };

  const VerHospitais = () => {
    return (
      <div id="ver-hospitais-servicos">
        <IoMdClose
          id="fechar-ver-hospitais"
          color="#e70011"
          size={62}
          onClick={() => {
            setHospitais(!mostrarHospitais);
            setTimeout(() => {
              setHospitais(false);
            }, 10000);
          }}
        />
        <h1> Clinico Geral </h1>

        <ul>
          <li> Hosp. Albert Ainten </li>
          <li> Hosp. Albert Ainten </li>
          <li> Hosp. Albert Ainten </li>
          <li> Hosp. Albert Ainten </li>
          <li> Hosp. Albert Ainten </li>
          <li> Hosp. Albert Ainten </li>
          <li> Hosp. Albert Ainten </li>
          <li> Hosp. Albert Ainten </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="card-servico-servicos">
      <FiMoreHorizontal
        size={30}
        className="configuracoes-servicos"
        onClick={() => {
          setMostrarSubMenu(!mostrarSubMenu);
          setTimeout(() => {
            setMostrarSubMenu(false);
          }, 10000);
        }}
      />
      {mostrarSubMenu && <SubMenu />}
      <input type="checkbox" className="ver-mais" />
      <h1 className="card-titulo"> {props.nome} </h1>
      <figure className="card-imagem-servicos">
        <img
          src={require("../../Assets/c.jpg")}
          alt="Imagem do serviço"
        />
      </figure>
      <div className="btn-descricao">+</div>

      <div className="card-descricao">
        <p>{props.descricao}</p>
      </div>
    </div>
  );
};

// ********************************************************************************

function Servicos() {
  const [servicos, setServicos] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log(servicos);

  const listarservicos = async () => {
    try {
      const retorno = await api.get("/servicos");

      setServicos(retorno.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarservicos();
  }, []);

  return (
    <div className="container-central">
      <Menu />
      <div className="container-conteudo-central">
        <Titulo nome="Serviços" />
        <div id="container-conteudo-cms">
          <div id="btn-add-servicos">
            <MdAdd size={50} color="#FFF" />
            <h1>Adicionar serviço </h1>
          </div>
          {loading ? (
            <div id="loader">
              <Lottie options={defaultOptions} height={200} width={200} />
            </div>
          ) : (
            <div id="container-card-servicos">
              {servicos.map((servico) => (
                <CardServicos id={servico.id} nome={servico.nome} descricao={servico.descricao} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Servicos;
