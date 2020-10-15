import React from 'react';

import './styles.css';
import '../../../Styles/globalStyle.css';

import Informacoes from "./Informacoes";
import Endereco from './Endereco';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';
import user from "../../../Assets/user.png";
import { useState } from 'react';
import Servicos from './Servicos';
import {Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import api from "../../../Services/api";


function Registrar(props) {

  const [navegarEndereco, setNavegarEndereco] = useState(true);

  const [novaFilial, setNovaFilial] = useState({
    cnpj: "",
    ie: "",
    razaoSocial: "",
    nomeFantasia: "",
    dataAbertura: "",
    email: "",
    telefones: [""],
    endereco: {
        rua: "Rua Jorge",
        bairro: "Bairro Jorge",
        numero: "121212",
        complemento: "casa 12",
        cep: "12345-123",
        cidade: "Jandira",
        estado: "SP"
    },
    servicos: []

  });

  const cadastrarFilial = async () => {

    try {
      console.log(novaFilial);
      const retorno = await api.post("/filial", novaFilial);
      
      if (retorno.status === 201) {
        alert("Cadastro realizado com sucesso");

      }

    } catch (error) {
      console.error(error);

    }
    
  }

  const handlerInput = (evento) => setNovaFilial({...novaFilial, [evento.target.id]: evento.target.value });

  return (
    <div className="container-central">
        <MenuCentral />

        <div className="container-conteudo-central">
          <TituloPrincipal nome="Informações de cadastro" imagem={user} />

          <Router>
            <Switch>
              <Route path={`/cadastrar-filial`}>
                <Informacoes
                  setNavegarEndereco={setNavegarEndereco}
                  novaFilial={novaFilial}
                  setNovaFilial={setNovaFilial}
                  handlerInput={handlerInput}/>
              </Route>
            
              <Route path={`/cadastrar-endereco`}>
                <Endereco 
                  setNavegarEndereco={setNavegarEndereco}
                  novaFilial={novaFilial}
                  setNovaFilial={setNovaFilial}
                  handlerInput={handlerInput}/>
              </Route>

                <Route path={`/cadastrar-servicos`}>
                  <Servicos 
                    setNovaFilial={setNovaFilial}
                    servicosSel={novaFilial.servicos}
                    cadastrarFilial={cadastrarFilial}
                    handlerInput={handlerInput}/>
                </Route>
            </Switch>
          </Router>
          

        </div>
    </div>
  );
}

export default Registrar;