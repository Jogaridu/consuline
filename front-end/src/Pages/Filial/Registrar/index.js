import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";

import './styles.css';
import '../../../Styles/globalStyle.css';

import Informacoes from "./Informacoes";
import Endereco from './Endereco';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';
import Servicos from './Servicos';

import user from "../../../Assets/user.png";

import api from "../../../Services/api";
import validacaoSchema from "./ValidacaoInputSchema";

function Registrar() {

  const [novaFilial, setNovaFilial] = useState({
    telefones: ["11963688640"],
    servicos: []
  });

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