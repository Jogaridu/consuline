import React from 'react';
import { View, Text } from 'react-native';

import { ImageLogo } from './styles';

import Container from "../../Components/Container";
import {Botao1} from "../../Components/Botao1";
import Botao2 from "../../Components/Botao2";

const TelaInicial = ({ navigation }) => {

  const navegarLogin = () => {
    navigation.navigate("Login");
  }

  const navegarRegistrar = () => {
    navigation.navigate("RegistrarInformacaoPessoal");
  }

  return(
      <Container>
          <ImageLogo source={require("../../Assets/logo.png")} />
          <Botao1 bottom={26} title="Entrar" funcExec={navegarLogin} />
          <Botao2 title="Registrar-se" funcExec={navegarRegistrar} />
      </Container>
  )
}

export default TelaInicial;