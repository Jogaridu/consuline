import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, Button } from "react-native";
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
  // const navigateAtendimento = () => {
  //   props.navegacao.navigate("Atendimento");
  // };

  return (
    <BtnMedicos>
      <ContainerImgMedico>
        <ImgMedico source={{uri: props.imagem}} />
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

const EscolhaMedicos = ({ navigation }) => {
  const [dadosMedico, setDadosMedico] = useState(null);
  const [loading, setLoading] = useState(true);

  const pegarDados = async () => {
    const retorno = await api.get("/profissional");

    setDadosMedico(retorno.data);
    setLoading(false);
  };

  useEffect(() => {
    pegarDados();
  }, []);

  const renderItem = ({ item }) => (
    <CardMedico
      nome={item.profissional.dadosProfissional.nome}
      navegacao={navigation}
      imagem={item.profissional.dadosProfissional.foto}
    />
  );

  return (
    <Container style={{ backgroundColor: colors.fundo }}>
      {/* <ScrollView style={{ width: "100%" }}> */}
      <Passos cor1={true} cor2={true} />
      <Label>Escolha o médico que irá atendê-lo: </Label>
      {loading ? (
        <Container>
          <Text> Carregando... </Text>
        </Container>
      ) : (
        <FlatList
          data={dadosMedico}
          renderItem={renderItem}
          keyExtractor={(item) =>
            item.profissional.dadosProfissional.id.toString()
          }
        />
      )}

      {/* </ScrollView> */}
    </Container>
  );
};

export default EscolhaMedicos;
