import React from 'react';

import './style.css';
import '../../Styles/globalStyle.css'
import medicoteste from '../../Assets/medicoteste.png'
import ihome from '../../Assets/ihome.png'
import icalendario from '../../Assets/icalendario.png'
import iavaliacao from  '../../Assets/iavaliacao.png'
import { Link } from 'react-router-dom';
import { getProfissional } from "../../Services/security"
import { signOut } from "../../Services/security"

function MenuConsulta(){

    const medicoSessao = getProfissional();
    console.log(medicoSessao)
    return(
        <div className="menu-consultas">
            <div id="h1-menu">
                ConsuLine
            </div>
            <div id="foto-menu-consulta">
                <img id="medicoteste" src={medicoteste} alt="Imagem de teste" />
            </div>
            <div id="nome-menu-consulta">
                {medicoSessao.nome}
            </div>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/consultas/home">
            <div id="elemento-home-menu">
                <img id="ihome" src={ihome} alt="Imagem de teste" />
                Home
            </div>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/consultas/agendadas">
            <div id="elemento-agendamentos-menu">
                <img id="icalendario" src={icalendario} alt="Imagem de teste" />
                Agendamentos
            </div>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/consultas/avaliacao">
            <div id="elemento-avaliacao-menu">
                <img id="iavaliacao" src={iavaliacao} alt="Imagem de teste" />
                Avaliações
            </div>
            </Link> 
            <div className="desenvolvedor1">
                <Link to="/login" onClick={() => signOut()} style={{ color: "rgb(222, 0, 0)" }}>
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default MenuConsulta;








