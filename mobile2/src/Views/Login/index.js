import React from "react";
import { Text, TextInput } from "react-native";

import { Botao1 } from "../../Components/Botao1";
import Botao2 from "../../Components/Botao2";
import { Input } from "./styles";
import Container from "../../Components/Container";

import { ImgLogoLogin } from "./styles";

const Login = () => {
  return (
    <Container>
      <ImgLogoLogin
        style={{ marginBottom: 30 }}
        source={require("../../Assets/logo.png")}
      />
      <Input
        style={{marginBottom: 15}}
        placeholder="Login"
        placeholderTextColor="#403e66"
      />
      <Input
        style={{marginBottom: 74}}
        placeholder="Senha"
        placeholderTextColor="#403e66"
      />
      <Botao1 title="Enviar" marginBottom={26} />
      {/* <Botao2 title="Registrar-se" /> */}
    </Container>
  );
};

export default Login;
