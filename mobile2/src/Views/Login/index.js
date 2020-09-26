import React from "react";
import { Text, TextInput } from "react-native";

import { Botao1 } from "../../Components/Botao1";
import Botao2 from "../../Components/Botao2";
import Input from "../../Components/Input";
import Container from "../../Components/Container";

import {
  ImgLogoLogin,
} from "./styles";

const Login = ({ navigation }) => {

  const navegarCadastro = () => {
    navigation.navigate("RegistrarInformacaoPessoal");
  }

  return (
    <Container>
      <ImgLogoLogin style={{ marginBottom: 30 }} source={require("../../Assets/logo.png")} />
      <Input plch="Login" />
      <Input marginBottom={74} plch="Senha" />
      <Botao1 title="Enviar" marginBottom={26} />
      <Botao2 title="Registrar-se" funcExec={navegarCadastro} />
    </Container>
  );
};

export default Login;
