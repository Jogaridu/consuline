import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, Button, ActivityIndicator } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

import Container from "../../../Components/Container";
import colors from "../../../Styles/colors";
import Passos from "../../../Components/Passos";

import {
  TituloCadastro,
  BtnMedicos,
  ContainerImgMedico,
  ImgMedico,
  ContainerInfrmMedico,
  ContainerEstrelas,
  Label,
} from "../styles";

import api from "../../../Services/api";

const CardMedico = (props) => {
  return (
    <BtnMedicos onPress={() => props.navigateCalendar(props.id)}>
      <ContainerImgMedico>
        <ImgMedico source={{ uri: props.imagem }} />
      </ContainerImgMedico>
      <ContainerInfrmMedico>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: colors.principal,
            marginBottom: 3,
            marginTop: 14,
          }}
        >
          {props.nome}
        </Text>
        <ContainerEstrelas>
          <Rating imageSize={20} readonly startingValue={5} />
        </ContainerEstrelas>
      </ContainerInfrmMedico>
    </BtnMedicos>
  );
};

const EscolhaMedicos = ({ navigation, route }) => {
  const [dadosMedico, setDadosMedico] = useState(null);
  const [loading, setLoading] = useState(true);
  let novaConsulta = route.params;

  const pegarDados = async () => {
    try {
      const retorno = await api.get("/profissional");

      setDadosMedico(retorno.data);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const navigateCalendar = (profissionalId) => {
    if (profissionalId !== "") {
      navigation.navigate("Agendamento", {
        ...novaConsulta,
        ProfissionalDaSaudeId: profissionalId,
      });
    } else {
      console.log("Erro, profissional sem ID");
    }
  };

  useEffect(() => {
    pegarDados();
  }, []);

  const renderItem = ({ item }) => (
    <CardMedico
        id={item.id}
        nome={item.nome}
        navegacao={navigation}
        imagem={item.foto}
        navigateCalendar={navigateCalendar}
    />
  );

  return (
    <Container style={{ backgroundColor: colors.fundo }}>
      <Label>Escolha o médico que irá atendê-lo: </Label>
      {loading ? (
        <Container style={{backgroundColor: colors.fundo}}>
          <ActivityIndicator size={40} color={colors.principal} />
        </Container>
      ) : (
        <FlatList
          data={dadosMedico}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      <Passos cor1={true} cor2={true} />
    </Container>
  );
};

export default EscolhaMedicos;
