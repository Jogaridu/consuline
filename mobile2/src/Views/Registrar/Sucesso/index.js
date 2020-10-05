import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

import sucess from "../../../Assets/animationSucess.json";

import Container from "../../../Components/Container";
import Botao from "../../../Components/Botao2";

import { ContainerTextos, ContainerImgSucesso, ContainerBotao, ImgSucesso, } from "./styles";



const Sucesso = ({ navigation }) => {

  const navegarLogin = () => {
    navigation.navigate("Login");

  }

  return (
    <Container>
      <ContainerImgSucesso>
        <ImgSucesso source={require("../../../Assets/check.png")} />
        {/* <LottieView resizeMode="contain" autoSize source="https://assets3.lottiefiles.com/private_files/lf30_yo2zavgg.json" autoPlay /> */}
      </ContainerImgSucesso>
      <ContainerTextos>
        <Text style={{ fontSize: 50, textAlign: "center" }}> Sucesso!!! </Text>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          {" "}
          Registro efetuado com sucesso{" "}
        </Text>
      </ContainerTextos>
      <ContainerBotao>
        <Botao title="Iniciar" funcExec={navegarLogin} />
      </ContainerBotao>
    </Container>
  );
};

export default Sucesso;
