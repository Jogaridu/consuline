import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

import sucess from "../../../Assets/animationSucess.json";
import teste from "../../../Assets/teste.json";

// import Container from "../../../Components/Container";
// import Botao from "../../../Components/Botao2";

import { Container, ContainerTextos, ContainerImgSucesso, ContainerBotao, ImgSucesso, Botao, TextoBotao } from "./styles";

const Sucesso = ({ navigation }) => {

  const navegarLogin = () => {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <ContainerImgSucesso>
        <ImgSucesso source={require("../../../Assets/check.png")} />
        {/* <LottieView resizeMode="contain" autoSize source={teste} autoPlay /> */}
      </ContainerImgSucesso>
      <ContainerTextos>
        <Text style={{ fontSize: 40, textAlign: "center", fontWeight: "bold", color: "#FFF" }}> Sucesso!!! </Text>
        <Text style={{ fontSize: 18, textAlign: "center", color: "#FFF" }}>
          {" "}
          Registro efetuado com sucesso{" "}
        </Text>
      </ContainerTextos>
      <ContainerBotao>
        <Botao>
          <TextoBotao> Iniciar </TextoBotao>
        </Botao>
      </ContainerBotao>
    </Container>
  );
};

export default Sucesso;
