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
  Modal,
  Alert,
  StyleSheet,
} from "react-native";
import LottieView from "lottie-react-native";
import { EventRegister } from "react-native-event-listeners";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconMaterialC from "react-native-vector-icons/MaterialCommunityIcons";
import { Rating, AirbnbRating } from "react-native-ratings";
import { Tab, Tabs, TabHeading } from "native-base";
import { RectButton } from "react-native-gesture-handler";

import Container from "../../Components/Container";
import { Botao1 } from "../../Components/Botao1";
import Botao2 from "../../Components/Botao2";
import Input from "../../Components/Input";
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
  ContainerBotao,
  ContainerModal,
  ModalAvaliacao,
  ContainerBtnCardAvaliar,
  ContainerHorariosCard,
  ContainerInfrmVisualizarConsulta,
  TextoVisualizarConsuta,
} from "./styles";

import colors from "../../Styles/colors";
import styles from "../../Components/Container/styles";

const TabRealizadas = () => (
  <Container>
    <Text> Consultas REALIZADAS </Text>
  </Container>
);

const TabAgendadas = ({ opacity, offset, setModalAvaliacao }) => {
  const [visualizarConsulta, setVisualizarConsulta] = useState(false);

  return (
    <Container style={{ justifyContent: "flex-start" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visualizarConsulta}
      >
        <ContainerModal>
          <ModalAvaliacao style={{ height: 590 }}>
            <IconMaterialC
              name="close"
              size={42}
              color="red"
              style={{
                alignSelf: "flex-end",
                marginRight: 10,
                marginTop: 10,
              }}
              onPress={() => setVisualizarConsulta(false)}
            />
            <Image
              source={require("../../Assets/fotoMedico.png")}
              style={{ width: 108, height: 108, borderRadius: 100 }}
            />
            <ContainerInfrmVisualizarConsulta>
              <TitulosCardConsulta>Médico:</TitulosCardConsulta>
              <TextoVisualizarConsuta>Dr. Alvez Cabral</TextoVisualizarConsuta>
            </ContainerInfrmVisualizarConsulta>
            <ContainerInfrmVisualizarConsulta>
              <TitulosCardConsulta>Tipo:</TitulosCardConsulta>
              <TextoVisualizarConsuta>Clinico Geral</TextoVisualizarConsuta>
            </ContainerInfrmVisualizarConsulta>
            <ContainerInfrmVisualizarConsulta>
              <TitulosCardConsulta>Atendimento:</TitulosCardConsulta>
              <TextoVisualizarConsuta>Presencial</TextoVisualizarConsuta>
            </ContainerInfrmVisualizarConsulta>
            <ContainerInfrmVisualizarConsulta>
              <TitulosCardConsulta>Local:</TitulosCardConsulta>
              <TextoVisualizarConsuta>
                Hospital Cardoso silva
              </TextoVisualizarConsuta>
            </ContainerInfrmVisualizarConsulta>
            <ContainerInfrmVisualizarConsulta>
              <TitulosCardConsulta>Valor:</TitulosCardConsulta>
              <TextoVisualizarConsuta
                style={{
                  color: "green",
                  marginBottom: 20,
                }}
              >
                R$100,00
              </TextoVisualizarConsuta>
            </ContainerInfrmVisualizarConsulta>
          </ModalAvaliacao>
        </ContainerModal>
      </Modal>

      <CardConsulta
        style={{ elevation: 2 }}
        onLongPress={() => setVisualizarConsulta(true)}
      >
        <HeaderCardConsulta>
          <ImgMedico source={require("../../Assets/fotoMedico.png")} />
          <ContainerTextosHeader>
            <TitulosCardConsulta> Patrick Silva </TitulosCardConsulta>
            <TextoCardConsulta> Clinico geral </TextoCardConsulta>
          </ContainerTextosHeader>
        </HeaderCardConsulta>
        <InfrmCardConsulta>
          <ContainerHorariosCard>
            <IconMaterialC
              name="clock-outline"
              size={24}
              color={colors.corTitulo}
            />
            <Text
              style={{
                color: colors.corTitulo,
                marginTop: 2,
                fontWeight: "600",
              }}
            >
              {" "}
              10/12 ás 15:00{" "}
            </Text>
          </ContainerHorariosCard>

          <ContainerBtnCardAvaliar>
            <RectButton
              style={styless.botao}
              onPress={() => setModalAvaliacao(true)}
            >
              <IconAntDesign
                name="star"
                size={20}
                color={colors.principal}
                style={{ marginRight: 5 }}
              />
              <Text
                style={{
                  color: colors.principal,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Avaliar
              </Text>
            </RectButton>
          </ContainerBtnCardAvaliar>
        </InfrmCardConsulta>
      </CardConsulta>
      {/* <ContainerCardCovid
      style={[
        {
          opacity: opacity,
          transform: [{ translateY: offset.y }],
          marginLeft: "auto",
          marginRight: "auto",
        },
      ]}
    >
      <ContainerImgMedico source={require("../../Assets/icone-medico.png")} />
      <ContainerInfrmCardCovid>
        <TextoInfrmCardCovid>Faça suas consultas </TextoInfrmCardCovid>
        <TextoInfrmCardCovid style={{ marginBottom: 15 }}>
          online ou presencial.
        </TextoInfrmCardCovid>
        <Botao1 title="Saiba mais" width={116} height={39} fontSize={16} />
      </ContainerInfrmCardCovid>
    </ContainerCardCovid> */}
    </Container>
  );
};

const Home = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(true);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 250 }));
  const [opacity] = useState(new Animated.Value(0));
  const [dadosConsulta, setDadosConsulta] = useState();
  const [nomeIcone, setNomeIcone] = useState(false);
  const [dataConsulta, setDataConsulta] = useState();
  const [modalAvaliacao, setModalAvaliacao] = useState(false);

  const pegarDados = async () => {
    const paciente = JSON.parse(
      await AsyncStorage.getItem("@Consuline:paciente")
    );

    const consultas = await api.get(`paciente/${paciente.id}/consultas`);

    if (!consultas.data) {
      var consultaData = consultas.data[0].data;
      var dataAlterada = consultaData.split("-");
      var dataNova = dataAlterada[2] + "/" + dataAlterada[1];

      setDataConsulta(dataNova);
    }

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
    listener = EventRegister.addEventListener("reloadHome", (dados) => {
      setDadosConsulta(dados);
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
    navigation.navigate("Agendar");
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
        <Notificacao
          style={{ elevation: 2 }}
          onPress={() => setModalAvaliacao(true)}
        >
          <IconAntDesign
            name="star"
            size={42}
            color="#FFE600"
            style={{ paddingLeft: 3, paddingRight: 3 }}
          />
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
      <Container style={{ backgroundColor: colors.fundo }}>
        <ActivityIndicator size={40} color={colors.principal} />
      </Container>
    );
  } else {
    return (
      <Container style={{ backgroundColor: colors.fundo }}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalAvaliacao}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <ContainerModal
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <ModalAvaliacao>
                <IconMaterialC
                  name="close"
                  size={42}
                  color="red"
                  style={{
                    alignSelf: "flex-end",
                    marginRight: 10,
                    marginTop: 10,
                  }}
                  onPress={() => setModalAvaliacao(false)}
                />
                <Image
                  source={require("../../Assets/avaliacao.jpg")}
                  style={{ width: 190, height: 190 }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    color: colors.corTitulo,
                    textAlign: "center",
                  }}
                >
                  Avalie o atendimento do{"\n"}médico:
                </Text>
                <Rating
                  imageSize={38}
                  startingValue={0}
                  style={{ marginTop: 10, marginBottom: 20 }}
                />
                <Input
                  placeholder="Comentários, críticas ou sugestões"
                  placeholderTextColor={colors.principal}
                  style={{ height: 100, width: "80%" }}
                />
                <View
                  style={{
                    width: "100%",
                    height: "auto",
                    marginBottom: 20,
                    marginTop: 20,
                    alignItems: "center",
                  }}
                >
                  <Botao2 title="Enviar" width={"80%"} height={50} />
                </View>
              </ModalAvaliacao>
            </ContainerModal>
          </Modal>
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
            <TituloHome>Consultas</TituloHome>
            <Tabs
              initialPage={0}
              tabBarBackgroundColor={colors.principal}
              tabBarUnderlineStyle={{ backgroundColor: colors.principal }}
              tabContainerStyle={{ elevation: 0 }}
            >
              <Tab
                heading={
                  <TabHeading style={{ backgroundColor: colors.container }}>
                    <Text>Agendadas</Text>
                  </TabHeading>
                }
              >
                <TabAgendadas
                  opacity={opacity}
                  offset={offset}
                  setModalAvaliacao={setModalAvaliacao}
                />
              </Tab>
              <Tab
                heading={
                  <TabHeading style={{ backgroundColor: colors.container }}>
                    <Text>Realizadas</Text>
                  </TabHeading>
                }
              >
                <TabRealizadas />
              </Tab>
            </Tabs>
          </ContainerConteudoHome>
        </ScrollView>
        <ContainerBotao>
          <Botao2 title="Marcar consulta +" funcExec={navegarConsulta} />
        </ContainerBotao>
      </Container>
    );
  }
};

const styless = StyleSheet.create({
  botao: {
    width: 110,
    height: 38,
    backgroundColor: "#FFE600",
    borderRadius: 20,
    marginTop: -12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default Home;
