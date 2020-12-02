import React, { useEffect, useState } from "react";
import { View, Text, AsyncStorage } from "react-native";

import Container from "../../../Components/Container";
// import Botao from "../../../Components/Botao2";

import { ContainerTextos, ContainerImgSucesso, ContainerBotao, ImgSucesso, Botao, TextoBotao } from "../styles";
import { EventRegister } from 'react-native-event-listeners'

import colors from "../../../Styles/colors";
import api from "../../../Services/api";

const Sucesso = ({ navigation, route }) => {

  const [consultas, setConsultas] = useState();

  const pegarConsultas = async () => {
    const paciente = JSON.parse(
      await AsyncStorage.getItem("@Consuline:paciente")
    );

    const retorno = await api.get(`paciente/${paciente.id}/consultas`);

    setConsultas(retorno.data);
  }

  useEffect(() => {
    pegarConsultas();
  }, [])

  const navegarHome = () => {
    EventRegister.emit("reloadHome", consultas);

    navigation.navigate("Home");
  }

  return (
    <Container style={{backgroundColor: colors.principal}}>
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
          <TextoBotao onPress={navegarHome}> Finalizar </TextoBotao>
        </Botao>
      </ContainerBotao>
    </Container>
  );
};

export default Sucesso;