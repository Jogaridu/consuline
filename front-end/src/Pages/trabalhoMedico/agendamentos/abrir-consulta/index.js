import React from 'react';

import './style.css';
import '../../../../Styles/globalStyle.css'
import medicoteste from '../../../../Assets/medicoteste.png'
import relogio from '../../../../Assets/relogio.png'
import calendario from '../../../../Assets/calendario.png'



function AbrirConsulta () {
    return(
    <div className="container-consulta-completa">
        <div className="header-consultas">
            <div className="titulo-avaliacao">
                Consulta
            </div>
        </div>
        <div className="card-consulta-aberta">
            <div className="dadospaciente">
                <div className="imagem-paciente-consulta">
                    <img id="imgpaciente-teste" src={medicoteste} alt="Logoteste" /> 
                </div>
                <div className="nome-endereco-paciente-consulta">
                    <div className="nome-paciente-consulta">
                        Bruno Gonçalves
                    </div>
                    <div className="endereco-paciente-consulta">
                        17 anos | Barueri-SP
                    </div>
                </div>
            </div>
            <div className="informacoes-consulta">
                <div className="status-consulta">
                    <div className="txt-fixo">
                        Status: 
                    </div> 
                    Em andamento
                </div> 
                <div className="tipo-consulta">
                    <div className="txt-fixo">
                       Tipo:
                    </div> 
                    Presencial
                </div> 
                <div className="sintomas-consulta">
                    <div className="txt-fixo">
                        Sintomas:
                    </div> 
                    Dores de cabeça febre, vomito etc etc...
                </div> 
            </div>
            <div className="data-hora-consulta">
                <div className="data-hora">
                    <div className="img-calendario">
                        <img id="calendario" src={calendario} alt="Logoteste" /> 
                    </div>
                    <div className="data">
                        16, Janeiro - 2020
                    </div>
                    <div className="img-relogio">
                        <img id="relogio" src={relogio} alt="Logoteste" /> 
                    </div>
                    <div className="hora">
                        09:00 -- 11:00 AM
                    </div>
                </div>
            </div>
            <div className="btn-realizar-consulta">
                <div className="btn-est-realizar">
                    <div className="txt-btn-realizar">
                        Realizar Consulta
                    </div>
                </div>
            </div>
        </div>
    </div>        
    );
};

export default AbrirConsulta;