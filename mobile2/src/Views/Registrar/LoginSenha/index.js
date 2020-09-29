import React, { useState } from "react";
import { Dimensions } from "react-native";

import {
  ContainerImgLoginSenha,
  ImgLoginSenha,
  ContainerTituloLoginSenha,
  ContainerFormulario,
  ContainerBotao,
} from "./styles";

import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

const LoginSenha = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("window");

  const novoPaciente = route.params;

  // const [registrar, setRegistrar] = useState(route.params.registrar);

  console.log(novoPaciente);

  const navegarTelefone = () => {
    navigation.navigate("RegistrarTelefone", { registrar, setRegistrar });
  };

  return (
    <Container>
      <ContainerImgLoginSenha style={{ width: width * 0.25 + "%" }}>
        <ImgLoginSenha source={require("../../../Assets/cadeado.jpg")} />
      </ContainerImgLoginSenha>
      <ContainerTituloLoginSenha style={{ width: width * 0.25 + "%" }}>
        <Titulo title="Crie um login e uma senha" />
      </ContainerTituloLoginSenha>
      <ContainerFormulario>
        <TextInput plch="Login" />
        <TextInput plch="Senha" />
        <TextInput plch="Confirmar senha" />
      </ContainerFormulario>
      <ContainerBotao>
        <Botao title="Próximo" width={130} funcExec={navegarTelefone} />
      </ContainerBotao>
    </Container>
  );
};

export default LoginSenha;
