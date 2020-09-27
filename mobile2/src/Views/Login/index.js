import React from "react";
import { Text, TextInput } from "react-native";

import { Botao1 } from "../../Components/Botao1";
import Botao2 from "../../Components/Botao2";
import { Input } from "./styles";
import Container from "../../Components/Container";

import { ImgLogoLogin } from "./styles";

const Login = ({ navigation }) => {

  const navegarCadastro = () => {
    navigation.navigate("RegistrarInformacaoPessoal");
  }

  return (
    <Container>
      <ImgLogoLogin
        style={{ marginBottom: 30 }}
        source={require("../../Assets/logo.png")}
      />
      <Input
        style={{marginBottom: 15}}
        placeholder="Login"
        maxLength={20}
        placeholderTextColor="#403e66"
      />
      <Input
        secureTextEntry={true}
        style={{marginBottom: 74}}
        placeholder="Senha"
        maxLength={20}
        placeholderTextColor="#403e66"
      />
      <Botao1 title="Enviar" style={{marginBottom: 26}} />
      <Botao2 title="Registrar-se" funcExec={navegarCadastro} />
    </Container>
  );
};

export default Login;
