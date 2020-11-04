import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


import HomeConsulta from './home';

function AreaMedico() {
  return (
      <div className="container-central">
     
                <Switch>
                <Route path="/consultas/home" exact component={HomeConsulta} />
                
                {/* <Route path="/profissional-saude/endereco"  exact component={DadosMedicoEndereco}/>
                       
                <Route path="/profissional-saude/login"  exact component={DadosMedicoLogin}/> */}

                </Switch>
             
       
      </div>
  );
};

export default AreaMedico;
