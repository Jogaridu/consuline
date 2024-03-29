import React, { useEffect, useState } from "react";
import { View, Text, AsyncStorage } from "react-native";

import Container from "../../../Components/Container";
// import Botao from "../../../Components/Botao2";

import { ContainerTextos, ContainerImgSucesso, ContainerBotaoSucesso, ImgSucesso, Botao, TextoBotao } from "../styles";
import { EventRegister } from 'react-native-event-listeners'

import colors from "../../../Styles/colors";
import api from "../../../Services/api";

const Sucesso = ({ navigation, route }) => {

  const navegarHome = () => {
    navigation.navigate("HomeNavigation");
  }

  return (
    <Container style={{backgroundColor: colors.principal}}>
      <ContainerImgSucesso>
        <ImgSucesso source={require("../../../Assets/check.png")} />
        {/* <LottieView resizeMode="contain" autoSize source={teste} autoPlay /> */}
      </ContainerImgSucesso>
      <ContainerTextos >
        <Text style={{ fontSize: 40, textAlign: "center", fontWeight: "bold", color: "#FFF" }}> Sucesso!!! </Text>
        <Text style={{ fontSize: 18, textAlign: "center", color: "#FFF" }}>
          {" "}
          Consulta agendada com sucesso{" "}
        </Text>
      </ContainerTextos>
      <ContainerBotaoSucesso style={{marginTop: -100}}>
        <Botao>
          <TextoBotao onPress={navegarHome}> Finalizar </TextoBotao>
        </Botao>
      </ContainerBotaoSucesso>
    </Container>
  );
};

export default Sucesso;