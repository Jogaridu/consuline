import React from "react";
import { Dimensions } from "react-native";

import {
  ContainerSeta,
  ImgLeft,
  ContainerImgLoginSenha,
  ImgLoginSenha,
  ContainerTituloLoginSenha,
  ContainerFormulario,
  ContainerBotao
} from "./styles";

import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

const LoginSenha = () => {
  const { height, width } = Dimensions.get("window");

  return (
    <Container>
      <ContainerSeta style={{ width }}>
        <ImgLeft source={require("../../../Assets/left-arrow.png")} />
      </ContainerSeta>
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
        <Botao title="Próximo" width={130} />
      </ContainerBotao>
    </Container>
  );
};

export default LoginSenha;
