import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

import sucess from "../../../Assets/animationSucess.json";

import Container from "../../../Components/Container";
import Botao from "../../../Components/Botao2";

import { ContainerTextos, ContainerImgSucesso, ContainerBotao } from "./styles";

const Sucesso = () => {
  return (
    <Container>
      <ContainerImgSucesso>
        {/* <LottieView resizeMode="contain" autoSize source={sucess} autoPlay /> */}
      </ContainerImgSucesso>
      <ContainerTextos>
        <Text style={{ fontSize: 50, textAlign: "center" }}> Sucesso!!! </Text>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          {" "}
          Registro efetuado com sucesso{" "}
        </Text>
      </ContainerTextos>
      <ContainerBotao>
        <Botao title="Iniciar" />
      </ContainerBotao>
    </Container>
  );
};

export default Sucesso;
