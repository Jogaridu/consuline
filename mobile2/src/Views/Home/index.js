import React, { useEffect, useState } from "react";
import { View, Text, AsyncStorage } from "react-native";
import LottieView from "lottie-react-native";

import Container from "../../Components/Container";
import api from "../../Services/api";

const Home = () => {
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(true);

  const pegarDados = async () => {
    const paciente = JSON.parse(
      await AsyncStorage.getItem("@Consuline:paciente")
    );
    setNome(paciente.nome);
    setLoading(false);
  };

  useEffect(() => {
    pegarDados();
  }, []);

  if (loading) {
    return (
      <Text> Carregando... </Text>
    );
  } else {
    return (
      <Container>
        <Text> Hello {nome} </Text>
      </Container>
    );
  }
};

export default Home;
