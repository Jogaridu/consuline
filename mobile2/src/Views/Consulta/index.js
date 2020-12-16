import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


import Container from "../../Components/Container";
import { Botao1 } from "../../Components/Botao1";

import { ContainerBotao } from "./styles";

import fundoConsulta from "../../Assets/fundoConsulta.jpg";
import colors from "../../Styles/colors";
import { ScrollView } from "react-native-gesture-handler";

const Consulta = ({ navigation }) => {
  const navigateServicos = () => {
    navigation.navigate("Consulta");
  };

  return (
    <Container
      style={{
        backgroundColor: "#706DB3",
        justifyContent: "space-between",
      }}
    >
      <ScrollView style={{width: "100%"}} contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient
            // Background Linear Gradient
            colors={["#706DB3", "#403E66", "#403E66"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "100%",
            }}
          />
        <Image
          source={require("../../Assets/telaConsulta.png")}
          style={{ width: 360, height: 360, marginLeft: "3%", marginTop: "10%" }}
        />

        <Image
          source={require("../../Assets/logoCentral.png")}
          style={{
            width: 232,
            height: 42,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 0,
            marginBottom: 25,
          }}
        />

        <Text
          style={{
            fontSize: 18,
            color: colors.container,
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Agende e realize suas consultas{"\n"}em qualquer lugar!
        </Text>
        <ContainerBotao>
          <Botao1 title="Começar" height={55} funcExec={navigateServicos} />
        </ContainerBotao>
      </ScrollView>
    </Container>
  );
};

export default Consulta;
