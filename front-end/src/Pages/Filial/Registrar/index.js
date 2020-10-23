import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import './styles.css';
import '../../../Styles/globalStyle.css';

import Informacoes from "./Informacoes";
import Endereco from './Endereco';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';
import Servicos from './Servicos';

import user from "../../../Assets/user.png";

function Registrar() {

  return (
    <div className="container-central">
      <MenuCentral />

      <div className="container-conteudo-central">
        <TituloPrincipal nome="Informações de cadastro" imagem={user} />

        <Router>
          <Switch>
            <Route path="/filial" exact component={Informacoes} />

            <Route path="/filial/endereco" component={Endereco} />

            <Route path="/filial/servicos" component={Servicos} />
          </Switch>
        </Router>
      </div >
    </div >
  );
}

export default Registrar;