import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MenuConsulta from '../../Components/MenuConsulta';


import HomeConsulta from './home';
import Avaliacao from './avaliacao'
import Agendadas from './agendamentos'
import AbrirConsulta from './agendamentos/abrir-consulta'

function AreaMedico() {
  return (
      <div className="container-central">
        <MenuConsulta/>

        <div className="container-conteudo-consulta">
          <Switch>
            <Route path="/consultas/home" exact component={HomeConsulta} /> 
                
            <Route path="/consultas/avaliacao" component={Avaliacao}/>
                       
            <Route path="/consultas/agendadas" component={Agendadas}/>

             <Route path="/consultas/abrir-consulta" component={AbrirConsulta}/> 
          </Switch> 
        </div>
      </div>
  );
};

export default AreaMedico;
