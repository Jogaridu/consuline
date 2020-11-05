import React from 'react';

import './style.css';
import '../../../Styles/globalStyle.css'
// import supermedico from '../../../Assets/supermedico.png'

function HomeConsulta(){
    return(
        <div className="container-consulta-home">
           <div id="bem-vindo">
                <div className="img-supermedico">
                    {/* <img id="supermedico" src={supermedico} alt="Imagem de teste" /> */}Bruno
                </div>
                <div className="subtext-bemvindo">
                    {/* <h1>Olá,</h1> Bruno */}Gonçalves
                </div>
           </div>
           <div id="consultas-hoje">

           </div>
           <div id="informacoes-consultas">

           </div>
           <div id="apresentacao-avaliacao">

           </div>
        </div>
    );
};

export default HomeConsulta;