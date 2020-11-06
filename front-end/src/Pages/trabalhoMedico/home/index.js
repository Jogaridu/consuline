import React from 'react';

import './style.css';
import '../../../Styles/globalStyle.css'
import supermedico from '../../../Assets/supermedico.png'
// import medicoteste from '../../../Assets/medicoteste.png'

function HomeConsulta(){
    return(
        <div className="container-consulta-home">
           <div id="bem-vindo">
                <div className="img-supermedico">
                    <img id="supermedico" src={supermedico} alt="Imagem de teste"/>
                </div>
                <div className="subtext-bemvindo">
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
                        
                    </div>
                </div>       
                <div className="mais-consulta">

                </div>
           </div>
           <div id="informacoes-consultas">

           </div>
           <div id="apresentacao-avaliacao">

           </div>
        </div>
    );
};

export default HomeConsulta;