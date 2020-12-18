import React, { useEffect, useState } from 'react';

import './style.css';
import '../../../Styles/globalStyle.css'
import relogio from '../../../Assets/relogio.png'
import calendario from '../../../Assets/calendario.png'
import medicoteste from '../../../Assets/medicoteste.png'
import pessoa from '../../../Assets/pessoa.jpg'

import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import pt from 'date-fns/locale/pt-BR';
import { getProfissional } from "../../../Services/security"
import api from '../../../Services/api';

const CardAgendado = ({ agendadas }) => {
    var data_atual = new Date();
    var data_nascimento = new Date (agendadas.Paciente.dataNascimento);

    var anos = data_atual.getFullYear() - data_nascimento.getFullYear();

    console.log(anos);
    return ( 
        
        <div className="card-agendado">
              
                <div className="status-agendamento">
                    <div className="sintomas">
                        {agendadas.sintomas}
                    </div>
                  
                </div>
                <div className="data-hora-agendamento">
                    <div className="data-hora">
                    <div className="img-calendario">
                        <img id="calendario" src={calendario} alt="Logoteste" /> 
                    </div>
                    <div className="data">
                        {format(parseISO(agendadas.data), 'dd, MMMM - yyy', {locale: ptBR})}
                        {/* 16, Janeiro - 2020 */}
                    </div>
                    <div className="img-relogio">
                        <img id="relogio" src={relogio} alt="Logoteste" /> 
                    </div>
                    <div className="hora">
                        {agendadas.horario.substr(0,agendadas.horario.lastIndexOf(":"))}
                    </div>
                </div>
                    <div className="tipo-da-consulta">
                    {agendadas.Atendimento.tipo}
                    </div>
                </div>
                <div className="paciente-agendamento">
                    <div className="dados-paciente-agendado">
                        <div className="img-paciente-agendado">
                        <img id="imgpaciente-teste-agendado" src={agendadas.Paciente.foto} alt="Logoteste" /> 

                        </div>
                        <div className="nome-paciente-agendado">
                            {agendadas.Paciente.nome}   
                        </div>
                        <div className="idade-paciente-agendado">
                            {anos} Anos 
                        </div>
                    </div>
                </div>
            </div>
    )
}


function Agendadas () {

    const [agendadas, setAgendadas] = useState ([]);

    useEffect(() => {
        const carrergarAgendadas = async () =>{
            const { idProfissionalDaSaude } = getProfissional();
            
            try {
                const retorno = await api.get(`/medico/consultas`);
                console.log(retorno.data);
                setAgendadas(retorno.data);
    
            } catch (error) {
                console.log(error);
            
            }
        }

        carrergarAgendadas();
    }, []);


    return(
     <div className="container-agendadas">
        <div className="header-consultas">
            <div className="titulo-avaliacao">
                Agendadas
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

                 {agendadas.map((agendadas, i) => {
                        if(i >= 3) return 
                        return <CardAgendado agendadas={agendadas} />})}
        </div>
     </div>
    );
};

export default Agendadas;