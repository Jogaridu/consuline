import React from 'react';

import './style.css';
import '../../../Styles/globalStyle.css'
import supermedico from '../../../Assets/supermedico.png'
import medicoteste from '../../../Assets/medicoteste.png'
import { getProfissional } from "../../../Services/security"

function HomeConsulta(){

    const medicoSessao = getProfissional();

    return(
        <div className="container-consulta-home">
           <div id="bem-vindo">
                <div 
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="900"
                className="img-supermedico">
                    <img id="supermedico" src={supermedico} alt="Imagem de teste"/>
                </div>
                <div 
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="900"
                className="subtext-bemvindo">
                    <h1>Olá,</h1>
                    <h5>Lembre-se sempre do seu juramento:</h5> 
                    <p>“Eu prometo solenemente consagrar minha 
                    vida ao serviço da humanidade; a saúde e o 
                    bem-estar de meu paciente serão as minhas 
                    primeiras preocupações”</p>
                </div>
           </div>
           <div id="consultas-hoje">
                <div className="titulo-card-consultashoje">
                    <h1>Consultas para hoje:</h1>
                </div>
                <div className="card-previa-consulta">
                    <div className="card-previa">
                        <div className="foto-previa-card">
                        <img id="medicoteste" src={medicoteste} alt="Logoteste" /> 
                        </div>
                        <div className="nome-previa-card">
                            Bruno Gonçalves
                        </div>      
                        <div className="data-previa-card">
                            06/11, 15:00.
                        </div>
                        <div className="vermais-previa-card">
                            <div className="txtvermais-previa-card">
                                Ver mais
                            </div>
                        </div>
                    </div>
                    <div className="card-previa">
                        <div className="foto-previa-card">
                        <img id="medicoteste" src={medicoteste} alt="Logoteste" /> 
                        </div>
                        <div className="nome-previa-card">
                            Bruno Gonçalves
                        </div>      
                        <div className="data-previa-card">
                            06/11, 15:00.
                        </div>
                        <div className="vermais-previa-card">
                            <div className="txtvermais-previa-card">
                                Ver mais
                            </div>
                        </div>
                    </div>
                    <div className="card-previa">
                        <div className="foto-previa-card">
                        <img id="medicoteste" src={medicoteste} alt="Logoteste" /> 
                        </div>
                        <div className="nome-previa-card">
                            Bruno Gonçalves
                        </div>      
                        <div className="data-previa-card">
                            06/11, 15:00.
                        </div>
                        <div className="vermais-previa-card">
                            <div className="txtvermais-previa-card">
                                Ver mais
                            </div>
                        </div>
                    </div>
                </div>       
            <div className="mais-consulta">
                    Mais Consultas +
                </div>
           </div>
           <div id="informacoes-consultas">
                <div className="previa-perfil-medico">
                    <div className="img-perfil-medico-previa">
                     <img id="medicoteste" src={medicoteste} alt="Logoteste" /> 
                    </div>
                    <div className="nome-perfil-medico-previa">
                        {medicoSessao.nome}
                    </div>
                    <div className="cidade-perfil-medico-previa">
                        Osasco, SP
                    </div>
                </div>
                <div className="informacoes-agendamento-medico">
                    <div className="txtprevia-perfil-medico">
                        Agendamento
                    </div>
                    <div className="txtcontagemprevia-perfil-medico">
                        50
                    </div>
                </div>
                <div className="informacoes-totalconsulta-medico">
                    <div className="txtprevia-perfil-medico">
                        Total consultas
                    </div>
                    <div className="txtcontagemprevia-perfil-medico">
                        150
                    </div>
                </div>
           </div>
           <div id="apresentacao-avaliacao">
               <div className="titulo-card-avaliacoes">
                    Avaliações
               </div>
               <div className="mini-card-avaliacao">
                    <div className="card-ratingbar">
                        <div className="img-cliente-avaliador">
                            <div className="caixa-ajuste-medico">
                            <img id="medicoteste1" src={medicoteste} alt="" /> 
                            </div>
                        </div>
                        <div className="nome-cliente-avaliador">
                            Bruno G. Menezes
                        </div>
                        <div className="ratingbar-cliente-avaliador">
                            
                        </div>
                    </div>
               </div>
               
               <div className="vermais-card-avaliacoes">
                    Ver mais
               </div>
           </div>
        </div>
    );
};

export default HomeConsulta;