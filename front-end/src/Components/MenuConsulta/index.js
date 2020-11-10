import React from 'react';

import './style.css';
import '../../Styles/globalStyle.css'
import medicoteste from '../../Assets/medicoteste.png'
import ihome from '../../Assets/ihome.png'
import icalendario from '../../Assets/icalendario.png'
import iavaliacao from  '../../Assets/iavaliacao.png'

function MenuConsulta(){
    return(
        <div className="menu-consultas">
            <div id="h1-menu">
                ConsuLine
            </div>
            <div id="foto-menu-consulta">
                <img id="medicoteste" src={medicoteste} alt="Imagem de teste" />
            </div>
            <div id="nome-menu-consulta">
                Bruno Gonçalves
            </div>
            <div id="elemento-home-menu">
                <img id="ihome" src={ihome} alt="Imagem de teste" />
                Home
            </div>
            <div id="elemento-agendamentos-menu">
                <img id="icalendario" src={icalendario} alt="Imagem de teste" />
                Agendamentos
            </div>
            <div id="elemento-avaliacao-menu">
                <img id="iavaliacao" src={iavaliacao} alt="Imagem de teste" />
                Avaliações
            </div>
        </div>
    );
};

export default MenuConsulta;