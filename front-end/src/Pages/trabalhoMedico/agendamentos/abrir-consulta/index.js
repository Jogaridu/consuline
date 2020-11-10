import React from 'react';

import './style.css';
import '../../../../Styles/globalStyle.css'


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

                </div>
                <div className="nome-paciente-consulta">

                </div>
                <div className="dados-paciente-consulta">

                </div>
            </div>
            <div className="informacoes-consulta">
                
            </div>
            <div className="data-hora">
                
            </div>
            <div className="btn-realizar-consulta">
                
            </div>
        </div>
    </div>        
    );
};

export default AbrirConsulta;