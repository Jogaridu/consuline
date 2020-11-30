import React from 'react';

import './style.css';
import '../../../Styles/globalStyle.css'
import relogio from '../../../Assets/relogio.png'
import calendario from '../../../Assets/calendario.png'
import medicoteste from '../../../Assets/medicoteste.png'




function Agendadas () {
   

      
 
    return(
     <div className="container-agendadas">
        <div className="header-consultas">
            <div className="titulo-avaliacao">
                Agendadas
            </div>
            <div className="ordenar">
                Ordenar:
                <div className="select">
                    select
                </div>
            </div>
        </div>
      
        <div className="consultas-agendadas">
            <div className="header-infos">
                <div className="status-header">
                    Status
                </div>
                <div className="data-e-hora">
                    Data e Hora
                </div>
                <div className="paciente-header">
                    Paciente
                </div>
            </div>
            <div className="card-agendado">
                <div className="color-status">

                </div>
                <div className="status-agendamento">
                    <div className="sintomas">
                        Dores Abdominais
                    </div>
                    <div className="sintomas">
                        Dores Abdominais
                    </div>
                   
                    <div className="status-da-consulta">
                        • Já atendido
                    </div>
                </div>
                <div className="data-hora-agendamento">
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
                    <div className="tipo-da-consulta">
                        Online
                    </div>
                </div>
                <div className="paciente-agendamento">
                    <div className="dados-paciente-agendado">
                        <div className="img-paciente-agendado">
                        <img id="imgpaciente-teste-agendado" src={medicoteste} alt="Logoteste" /> 

                        </div>
                        <div className="nome-paciente-agendado">
                            Bruno Gonçalves 
                        </div>
                        <div className="idade-paciente-agendado">
                            {/* {anos} Anos */}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     </div>
    );
};

export default Agendadas;