import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import MenuCentral from "../../../Components/MenuCentral";
import TituloPrincipal from "../../../Components/TituloPrincipal";
import DadosMedico from "./infoPessoalMedico";
import DadosMedicoEndereco from "./infoLocalizacaoMedico";
import DadosMedicoLogin from "./infoLoginMedico";

import add from "../../../Assets/add3.png"

function Medico() {
  return (
      <div className="container-central">
        <MenuCentral />
        <div className="container-conteudo-central">
         <TituloPrincipal nome="Cadastro médico" imagem={add} /> 
              
              <Router>
                <Switch>
                <Route path="/profissional-saude" exact component={DadosMedico} />
                
                <Route path="/profissional-saude/endereco"  exact component={DadosMedicoEndereco}/>
                       
                <Route path="/profissional-saude/login"  exact component={DadosMedicoLogin}/>

                </Switch>
              </Router>

        </div>
      </div>
  );
};

export default Medico;
        // <Router>
        //   <Switch>
        //     <Route path="/filial" exact component={Informacoes} />

        //     <Route path="/filial/endereco" component={Endereco} />

        //     <Route path="/filial/servicos" component={Servicos} />
        //   </Switch>
        // </Router>
    