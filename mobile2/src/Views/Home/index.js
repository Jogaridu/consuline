import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  AsyncStorage,
  Dimensions,
  ScrollView,
  Animated,
  Image,
} from "react-native";
import LottieView from "lottie-react-native";

import Container from "../../Components/Container";
import { Botao1 } from "../../Components/Botao1";
import Botao2 from "../../Components/Botao2";
import api from "../../Services/api";
import {
  ContainerColor,
  ContainerConteudoHome,
  ContainerTextoBoasVindas,
  ContainerBtnTheme,
  ContainerCardCovid,
  ContainerImgMedico,
  ContainerInfrmCardCovid,
  TextoInfrmCardCovid,
  TituloHome,
  CardConsulta,
  HeaderCardConsulta,
  InfrmCardConsulta,
  ImgMedico,
  ContainerTextosHeader,
  TitulosCardConsulta,
  TextoCardConsulta,
  ContainerInfrmCardConsulta,
} from "./styles";

import colors from "../../Styles/colors";

const Home = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(true);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 250 }));
  const [opacity] = useState(new Animated.Value(0));

  const pegarDados = async () => {
    const paciente = JSON.parse(
      await AsyncStorage.getItem("@Consuline:paciente")
    );
    setNome(paciente.nome);
    setLoading(false);
  };

  useEffect(() => {
    pegarDados();

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 0.5,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const navegarConsulta = () => {
    navigation.navigate("Consulta");
  };

  if (loading) {
    return (
      <Container>
        <Text> Carregando... </Text>
      </Container>
    );
  } else {
    return (
      <Container style={{ backgroundColor: colors.fundo }}>
        <ScrollView style={{ width: "100%" }}>
          <ContainerColor>
            <ContainerTextoBoasVindas>
              <Text style={{ fontSize: 25, color: colors.principal }}>
                {" "}
                Olá,{" "}
              </Text>
              <Text
                style={{
                  fontSize: 35,
                  color: colors.principal,
                  fontWeight: "bold",
                  marginLeft: 6,
                  marginTop: -6,
                }}
              >
                {nome}
              </Text>
            </ContainerTextoBoasVindas>
            <ContainerBtnTheme>
              <Image
                source={require("../../Assets/logo-consuline.png")}
                style={{ width: "100%", height: 30, marginTop: 55 }}
              />
            </ContainerBtnTheme>
          </ContainerColor>
          <ContainerConteudoHome>
            <ContainerCardCovid
              style={[
                {
                  opacity: opacity,
                  transform: [{ translateY: offset.y }],
                },
              ]}
            >
              <ContainerImgMedico
                source={require("../../Assets/icone-medico.png")}
              />
              <ContainerInfrmCardCovid>
                <TextoInfrmCardCovid>Faça um teste de </TextoInfrmCardCovid>
                <TextoInfrmCardCovid style={{ marginBottom: 15 }}>
                  covid-19 online.
                </TextoInfrmCardCovid>
                <Botao1
                  title="Saiba mais"
                  width={116}
                  height={39}
                  fontSize={16}
                />
              </ContainerInfrmCardCovid>
            </ContainerCardCovid>
            <TituloHome
              style={{
                borderBottomColor: colors.principal,
                borderBottomWidth: 2,
              }}
            >
              {" "}
              Minhas consultas:{" "}
            </TituloHome>
            <CardConsulta style={{ elevation: 4 }}>
              <HeaderCardConsulta>
                <ImgMedico source={require("../../Assets/fotoMedico.png")} />
                <ContainerTextosHeader>
                  <TitulosCardConsulta> Dr. Thomas Shelby </TitulosCardConsulta>
                  <TextoCardConsulta> 04/08, 15:00 </TextoCardConsulta>
                </ContainerTextosHeader>
              </HeaderCardConsulta>
              <InfrmCardConsulta>
                <ContainerInfrmCardConsulta>
                  <TitulosCardConsulta style={{ fontSize: 15 }}>
                    {" "}
                    Serviço:{" "}
                  </TitulosCardConsulta>
                  <TextoCardConsulta> Cardiologia </TextoCardConsulta>
                </ContainerInfrmCardConsulta>
                <ContainerInfrmCardConsulta>
                  <TitulosCardConsulta style={{ fontSize: 15 }}>
                    {" "}
                    Atendimento:{" "}
                  </TitulosCardConsulta>
                  <TextoCardConsulta> Presencial </TextoCardConsulta>
                </ContainerInfrmCardConsulta>
                <ContainerInfrmCardConsulta>
                  <TitulosCardConsulta style={{ fontSize: 15 }}>
                    {" "}
                    Local:{" "}
                  </TitulosCardConsulta>
                  <TextoCardConsulta>
                    {" "}
                    Hospital Santo Agostino{" "}
                  </TextoCardConsulta>
                </ContainerInfrmCardConsulta>
                <ContainerInfrmCardConsulta
                  style={{ justifyContent: "flex-end" }}
                >
                  <TitulosCardConsulta style={{ fontSize: 15 }}>
                    {" "}
                    Valor:{" "}
                  </TitulosCardConsulta>
                  <TextoCardConsulta
                    style={{ color: "green", paddingRight: 10 }}
                  >
                    {" "}
                    R$ 100,00{" "}
                  </TextoCardConsulta>
                </ContainerInfrmCardConsulta>
              </InfrmCardConsulta>
            </CardConsulta>
            <CardConsulta style={{ elevation: 4 }}>
              <HeaderCardConsulta>
                <ImgMedico source={require("../../Assets/fotoMedico.png")} />
                <ContainerTextosHeader>
                  <TitulosCardConsulta> Dr. Thomas Shelby </TitulosCardConsulta>
                  <TextoCardConsulta> 04/08, 15:00 </TextoCardConsulta>
                </ContainerTextosHeader>
              </HeaderCardConsulta>
              <InfrmCardConsulta>
                <ContainerInfrmCardConsulta>
                  <TitulosCardConsulta style={{ fontSize: 15 }}>
                    {" "}
                    Serviço:{" "}
                  </TitulosCardConsulta>
                  <TextoCardConsulta> Cardiologia </TextoCardConsulta>
                </ContainerInfrmCardConsulta>
                <ContainerInfrmCardConsulta>
                  <TitulosCardConsulta style={{ fontSize: 15 }}>
                    {" "}
                    Atendimento:{" "}
                  </TitulosCardConsulta>
                  <TextoCardConsulta> Presencial </TextoCardConsulta>
                </ContainerInfrmCardConsulta>
                <ContainerInfrmCardConsulta>
                  <TitulosCardConsulta style={{ fontSize: 15 }}>
                    {" "}
                    Local:{" "}
                  </TitulosCardConsulta>
                  <TextoCardConsulta>
                    {" "}
                    Hospital Santo Agostino{" "}
                  </TextoCardConsulta>
                </ContainerInfrmCardConsulta>
                <ContainerInfrmCardConsulta
                  style={{ justifyContent: "flex-end" }}
                >
                  <TitulosCardConsulta style={{ fontSize: 15 }}>
                    {" "}
                    Valor:{" "}
                  </TitulosCardConsulta>
                  <TextoCardConsulta
                    style={{ color: "green", paddingRight: 10 }}
                  >
                    {" "}
                    R$ 100,00{" "}
                  </TextoCardConsulta>
                </ContainerInfrmCardConsulta>
              </InfrmCardConsulta>
            </CardConsulta>
            <CardConsulta style={{ elevation: 4 }}>
              <HeaderCardConsulta>
                <ImgMedico source={require("../../Assets/fotoMedico.png")} />
                <ContainerTextosHeader>
                  <TitulosCardConsulta> Dr. Thomas Shelby </TitulosCardConsulta>
                  <TextoCardConsulta> 04/08, 15:00 </TextoCardConsulta>
                </ContainerTextosHeader>
              </HeaderCardConsulta>
              <InfrmCardConsulta>
                <ContainerInfrmCardConsulta>
                  <TitulosCardConsulta style={{ fontSize: 15 }}>
                    {" "}
                    Serviço:{" "}
                  </TitulosCardConsulta>
                  <TextoCardConsulta> Cardiologia </TextoCardConsulta>
                </ContainerInfrmCardConsulta>
                <ContainerInfrmCardConsulta>
                  <TitulosCardConsulta style={{ fontSize: 15 }}>
                    {" "}
                    Atendimento:{" "}
                  </TitulosCardConsulta>
                  <TextoCardConsulta> Presencial </TextoCardConsulta>
                </ContainerInfrmCardConsulta>
                <ContainerInfrmCardConsulta>
                  <TitulosCardConsulta style={{ fontSize: 15 }}>
                    {" "}
                    Local:{" "}
                  </TitulosCardConsulta>
                  <TextoCardConsulta>
                    {" "}
                    Hospital Santo Agostino{" "}
                  </TextoCardConsulta>
                </ContainerInfrmCardConsulta>
                <ContainerInfrmCardConsulta
                  style={{ justifyContent: "flex-end" }}
                >
                  <TitulosCardConsulta style={{ fontSize: 15 }}>
                    {" "}
                    Valor:{" "}
                  </TitulosCardConsulta>
                  <TextoCardConsulta
                    style={{ color: "green", paddingRight: 10 }}
                  >
                    {" "}
                    R$ 100,00{" "}
                  </TextoCardConsulta>
                </ContainerInfrmCardConsulta>
              </InfrmCardConsulta>
            </CardConsulta>
            <Botao2 title="Marcar consulta +" funcExec={navegarConsulta} />
          </ContainerConteudoHome>
        </ScrollView>
      </Container>
    );
  }
};

export default Home;
