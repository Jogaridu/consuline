import React from 'react';

import '../../../Styles/globalStyle.css';

import Informacoes from "./Informacoes";
import Endereco from './Endereco';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';
import user from "../../../Assets/user.png";
import { useState } from 'react';


function Registrar(props) {

  const [navegarEndereco, setNavegarEndereco] = useState(true);

  const [novaFilial, setNovaFilial] = useState({
    cnpj: "12321",
    ie: "00000001",
    razaoSocial: "Jorge esteve aqui",
    nomeFantasia: "Hospital de Osasco",
    dataAbertura: "05-08-2003",
    email: "j@gmail.com",
    telefone: "11912341234",
    endereco: {
        rua: "Rua Jorge",
        bairro: "Bairro Jorge",
        numero: "121212",
        complemento: "casa 12",
        cep: "12345-123",
        cidade: "Jandira",
        estado: "SP"
    }    
  });
  
  return (
    <div className="container-central">
        <MenuCentral />

        <div className="container-conteudo-central">
          <TituloPrincipal nome="Informações de cadastro" imagem={user} />

          {navegarEndereco && (
            <Informacoes 
              setNavegarEndereco={setNavegarEndereco}
              novaFilial={novaFilial}
              setNovaFilial={setNovaFilial}/>
          )}

          {!navegarEndereco && (
            <Endereco 
              setNavegarEndereco={setNavegarEndereco}
              novaFilial={novaFilial}
              setNovaFilial={setNovaFilial}/>
          )}

        </div>
    </div>
  );
}

export default Registrar;