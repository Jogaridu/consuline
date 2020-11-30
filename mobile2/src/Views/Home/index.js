import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  AsyncStorage,
  Dimensions,
  ScrollView,
  Animated,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import LottieView from "lottie-react-native";
import { EventRegister } from "react-native-event-listeners";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";

import Container from "../../Components/Container";
import { Botao1 } from "../../Components/Botao1";
import Botao2 from "../../Components/Botao2";
import api from "../../Services/api";
import {
  ContainerColor,
  ContainerConteudoHome,
  ContainerTextoBoasVindas,
  ContainerNotificacao,
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
  Notificacoes,
  Notificacao,
  TextoNotificacao,
  TituloNotificacao,
  ContainerTextosNot,
} from "./styles";

import colors from "../../Styles/colors";

const Home = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(true);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 250 }));
  const [opacity] = useState(new Animated.Value(0));
  const [dadosConsulta, setDadosConsulta] = useState();
  const [nomeIcone, setNomeIcone] = useState(false);

  const pegarDados = async () => {
    const paciente = JSON.parse(
      await AsyncStorage.getItem("@Consuline:paciente")
    );

    const consultas = await api.get(`paciente/${paciente.id}/consultas`);

    setDadosConsulta(consultas.data);
    setNome(paciente.nome);
    setLoading(false);
  };

  useEffect(() => {
    //registrar no evento realoadUsuario
    listener = EventRegister.addEventListener("reloadPerfil", async (dados) => {
      await AsyncStorage.setItem("@Consuline:paciente", JSON.stringify(dados));

      setNome(dados.nome);
    });
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

    //remover o registro do listener
    return () => {
      EventRegister.removeEventListener();
    };
  }, []);

  const navegarConsulta = () => {
    navigation.navigate("Consulta");
  };

  const Consultas = () => {
    return (
      <>
        {dadosConsulta.map((consulta) => (
          <CardConsulta style={{ elevation: 2 }} key={consulta.id}>
            <HeaderCardConsulta>
              <ImgMedico source={require("../../Assets/fotoMedico.png")} />
              <ContainerTextosHeader>
                <TitulosCardConsulta>
                  {" "}
                  {consulta["ProfissionalDaSaude.nome"]}{" "}
                </TitulosCardConsulta>
                <TextoCardConsulta> 04/08, 15:00 </TextoCardConsulta>
              </ContainerTextosHeader>
            </HeaderCardConsulta>
            <InfrmCardConsulta>
              <ContainerInfrmCardConsulta>
                <TitulosCardConsulta style={{ fontSize: 15 }}>
                  {" "}
                  Serviço:{" "}
                </TitulosCardConsulta>
                <TextoCardConsulta>
                  {" "}
                  {consulta["Servico.nome"]}{" "}
                </TextoCardConsulta>
              </ContainerInfrmCardConsulta>
              <ContainerInfrmCardConsulta>
                <TitulosCardConsulta style={{ fontSize: 15 }}>
                  {" "}
                  Atendimento:{" "}
                </TitulosCardConsulta>
                <TextoCardConsulta>
                  {" "}
                  {consulta["Atendimento.tipo"]}{" "}
                </TextoCardConsulta>
              </ContainerInfrmCardConsulta>
              <ContainerInfrmCardConsulta>
                <TitulosCardConsulta style={{ fontSize: 15 }}>
                  {" "}
                  Local:{" "}
                </TitulosCardConsulta>
                <TextoCardConsulta>
                  {" "}
                  {consulta["Filial.nomeFantasia"]}{" "}
                </TextoCardConsulta>
              </ContainerInfrmCardConsulta>
              <ContainerInfrmCardConsulta
                style={{ justifyContent: "flex-end" }}
              >
                <TitulosCardConsulta style={{ fontSize: 15 }}>
                  {" "}
                  Valor:{" "}
                </TitulosCardConsulta>
                <TextoCardConsulta style={{ color: "green", paddingRight: 10 }}>
                  {consulta.valor}
                </TextoCardConsulta>
              </ContainerInfrmCardConsulta>
            </InfrmCardConsulta>
          </CardConsulta>
        ))}
      </>
    );
  };

  const NotificacoesContainer = () => {
    return (
      <Notificacoes>
        <Notificacao style={{ elevation: 2 }}>
          <Image
            source={require("../../Assets/iconeNot.png")}
            style={{ width: 45, height: 45 }}
          />
          <ContainerTextosNot>
            <TituloNotificacao>Sua consulta começa agora!</TituloNotificacao>
            <TextoNotificacao>
              Pressione aqui para começar a{"\n"}sua consulta.
            </TextoNotificacao>
          </ContainerTextosNot>
        </Notificacao>
        <Notificacao style={{ elevation: 2 }}>
          <IconAntDesign name="star" size={42} color="yellow" style={{paddingLeft: 3, paddingRight: 3}} />
          <ContainerTextosNot>
            <TituloNotificacao>Avalie nosso atendimento!</TituloNotificacao>
            <TextoNotificacao>
              Pressione aqui para começar a{"\n"}sua consulta.
            </TextoNotificacao>
          </ContainerTextosNot>
        </Notificacao>
      </Notificacoes>
    );
  };

  if (loading) {
    return (
      <Container style={{backgroundColor: colors.fundo}}>
        <ActivityIndicator size={40} color={colors.principal} />
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
            <ContainerNotificacao>
              <Icon
                name={!nomeIcone ? "notifications-none" : "notifications"}
                size={40}
                color={colors.principal}
                onPress={() => setNomeIcone(!nomeIcone)}
              />
              {nomeIcone && <NotificacoesContainer />}
            </ContainerNotificacao>
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
                <TextoInfrmCardCovid>Faça suas consultas </TextoInfrmCardCovid>
                <TextoInfrmCardCovid style={{ marginBottom: 15 }}>
                  online ou presencial.
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

            <Consultas />

            <Botao2 title="Marcar consulta +" />
          </ContainerConteudoHome>
        </ScrollView>
      </Container>
    );
  }
};

export default Home;
