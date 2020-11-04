import React from 'react';
import './style.css';
import '../../../Styles/globalStyle.css'
import medicoteste from '../../../Assets/medicoteste.png'
import ihome from '../../../Assets/ihome.png'
import icalendario from '../../../Assets/icalendario.png'
import iavaliacao from '../../../Assets/iavaliacao.png'



function HomeConsulta(){
    return(
        <div className="menu-consultas">
            <div className="a" id="h1-menu">
                ConsuLine
            </div>
            <div className="a" id="foto-menu-consulta">
                <img id="medicoteste" src={medicoteste} alt="Imagem de teste" />
            </div>
            <div className="" id="nome-menu-consulta">
                Bruno Gonçalves
            </div>
            <div className="a" id="elemento-home-menu">
                <img id="ihome" src={ihome} alt="Imagem de teste" />
                Home
            </div>
            <div className="a" id="elemento-agendamentos-menu">
                <img id="icalendario" src={icalendario} alt="Imagem de teste" />
                Agendamentos
            </div>
            <div className="a" id="elemento-avaliacao-menu">
                <img id="iavaliacao" src={iavaliacao} alt="Imagem de teste" />
                Avaliações
            </div>
        </div>
    );
};

export default HomeConsulta;