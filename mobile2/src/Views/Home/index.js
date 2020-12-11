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
  FlatList,
} from "react-native";
import LottieView from "lottie-react-native";
import { EventRegister } from "react-native-event-listeners";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconMaterialC from "react-native-vector-icons/MaterialCommunityIcons";
import { Rating, AirbnbRating } from "react-native-ratings";
import { Tab, Tabs, TabHeading } from "native-base";

import TabAgendadas from "./tabAgendadas";
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
  TituloHome,
  Notificacoes,
  Notificacao,
  TextoNotificacao,
  TituloNotificacao,
  ContainerTextosNot,
  ContainerBotao,
  ContainerModal,
  ModalAvaliacao,
} from "./styles";

import colors from "../../Styles/colors";
import styles from "../../Components/Container/styles";
import TabRealizadas from "./tabRealizadas";

const Home = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(true);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 250 }));
  const [opacity] = useState(new Animated.Value(0));
  const [consultasPendentes, setConsultasPendentes] = useState();
  const [consultasRealizadas, setConsultasRealizadas] = useState();
  const [nomeIcone, setNomeIcone] = useState(false);
  const [dataConsulta, setDataConsulta] = useState();
  const [modalAvaliacao, setModalAvaliacao] = useState(false);
  const [avaliacao, setAvaliacao] = useState();

  const pegarDados = async () => {
    const paciente = JSON.parse(
      await AsyncStorage.getItem("@Consuline:paciente")
    );

    try {
      const retorno = await api.get(`/paciente/${paciente.id}/consultas`);

      if (!retorno.data) {
        var consultaData = retorno.data[0].data;
        var dataAlterada = consultaData.split("-");
        var dataNova = dataAlterada[2] + "/" + dataAlterada[1];

        setDataConsulta(dataNova);
      }

      setConsultasPendentes(retorno.data.pendentes);
      setConsultasRealizadas(retorno.data.realizadas);
      setNome(paciente.nome);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    //registrar no evento realoadUsuario
    listener = EventRegister.addEventListener("reloadPerfil", async (dados) => {
      await AsyncStorage.setItem("@Consuline:paciente", JSON.stringify(dados));

      setNome(dados.nome);
    });
    listener = EventRegister.addEventListener("reloadHome", (dados) => {
      setConsultasPendentes(dados);
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

  const renderItemPendentes = ({ item }) => (
    <TabAgendadas
      setModalAvaliacao={setModalAvaliacao}
      nomeMedico={item["ProfissionalDaSaude.nome"]}
      fotoMedico={item["ProfissionalDaSaude.foto"]}
      servico={item["Servico.nome"]}
      horario={item.horario}
      atendimento={item["Atendimento.tipo"]}
      local={item["Filial.nomeFantasia"]}
      valor={item.valor}
    />
  );

  const renderItemRealizadas = ({ item }) => (
    <TabRealizadas
      setModalAvaliacao={setModalAvaliacao}
      nomeMedico={item["ProfissionalDaSaude.nome"]}
      fotoMedico={item["ProfissionalDaSaude.foto"]}
      servico={item["Servico.nome"]}
      horario={item.horario}
      atendimento={item["Atendimento.tipo"]}
      local={item["Filial.nomeFantasia"]}
      valor={item.valor}
    />
  );
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

  const avaliacaoMedico = async () => {
    // try {
      
    // } catch (error) {
    //   console.log(error)
    // }
  }

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
                  onFinishRating={(rating) => setAvaliacao(rating)}                />
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
                  <Botao2 title="Enviar" width={"80%"} height={50} funcExec={avaliacaoMedico} />
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
              activeTextStyle={{color: colors.container}}
            >
              <Tab
                heading={
                  <TabHeading style={{ backgroundColor: colors.container }}>
                    <Text>Agendadas</Text>
                  </TabHeading>
                }
              >
                <FlatList
                  data={consultasPendentes}
                  renderItem={renderItemPendentes}
                  keyExtractor={(item) => item.id.toString()}
                />
              </Tab>
              <Tab
                heading={
                  <TabHeading style={{ backgroundColor: colors.container }}>
                    <Text>Realizadas</Text>
                  </TabHeading>
                }
              >
                <FlatList
                  data={consultasRealizadas}
                  renderItem={renderItemRealizadas}
                  keyExtractor={(item) => item.id.toString()}
                />
              </Tab>
            </Tabs>
          </ContainerConteudoHome>
        </ScrollView>
        <ContainerBotao>
          <Botao2
            title="Marcar consulta +"
            funcExec={() => console.log(consultasRealizadas)}
          />
        </ContainerBotao>
      </Container>
    );
  }
};

export default Home;
