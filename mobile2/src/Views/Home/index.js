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
  ContainerAviso,
  ContainerTituloConsultas,
} from "./styles";

import colors from "../../Styles/colors";
import styles from "../../Components/Container/styles";
import TabRealizadas from "./tabRealizadas";
import { Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(true);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 350 }));
  const [opacity] = useState(new Animated.Value(0));
  const [consultasPendentes, setConsultasPendentes] = useState();
  const [consultasRealizadas, setConsultasRealizadas] = useState();
  const [nomeIcone, setNomeIcone] = useState(false);
  const [notificacoes, setNotificacoes] = useState([]);

  const pegarDados = async () => {
    const paciente = JSON.parse(
      await AsyncStorage.getItem("@Consuline:paciente")
    );

    var nomePaciente = paciente.nome;
    var primeiroNome = nomePaciente.split(" ");
    var nomeModificado = primeiroNome[0];

    try {
      let retorno = await api.get(`/paciente/${paciente.id}/consultas`);

      setConsultasPendentes(retorno.data.pendentes);
      setConsultasRealizadas(retorno.data.realizadas);
      setNome(nomeModificado);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    //registrar no evento realoadUsuario
    listener = EventRegister.addEventListener("reloadPerfil", async (dados) => {
      await AsyncStorage.setItem("@Consuline:paciente", JSON.stringify(dados));
      var nomePaciente = dados.nome;
      var primeiroNome = nomePaciente.split(" ");
      var nomeModificado = primeiroNome[0];
      setNome(nomeModificado);
    });
    listener = EventRegister.addEventListener("reloadHome", () => {
      pegarDados();
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

  const renderItemPendentes = ({ item }) => {
    return (
      <TabAgendadas
        nomeMedico={item["ProfissionalDaSaude.nome"]}
        fotoServico={item["Servico.imagem"]}
        servico={item["Servico.nome"]}
        horario={item.horario}
        atendimento={item["Atendimento.tipo"]}
        local={item["Filial.nomeFantasia"]}
        valor={item.valor}
        data={item.data}
      />
    );
  };

  const renderItemRealizadas = ({ item }) => (
    <TabRealizadas
      nomeMedico={item["ProfissionalDaSaude.nome"]}
      fotoServico={item["Servico.imagem"]}
      servico={item["Servico.nome"]}
      horario={item.horario}
      atendimento={item["Atendimento.tipo"]}
      local={item["Filial.nomeFantasia"]}
      valor={item.valor}
      idConsulta={item.id}
      idMedico={item.ProfissionalDaSaudeId}
      data={item.data}
      notaProfissional={item.notaProfissional}
      pegarDados={pegarDados}
    />
  );

  const navegarConsulta = () => {
    navigation.navigate("Agendar");
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
              {" " + nome}
            </Text>
          </ContainerTextoBoasVindas>
          <ContainerNotificacao>
            {/* <Icon
              name={!nomeIcone ? "notifications-none" : "notifications"}
              size={40}
              color={colors.principal}
              onPress={() => console.log(consultasRealizadas)}
            />
            {nomeIcone && <NotificacoesContainer />} */}
          </ContainerNotificacao>
        </ContainerColor>
        <ContainerConteudoHome
          style={[
            {
              opacity: opacity,
              transform: [{ translateY: offset.y }],
            },
          ]}
        >
          <ContainerTituloConsultas>
            <Icon
              name="add-circle"
              color={colors.principal}
              size={40}
              style={{ marginRight: 10 }}
            />
            <TituloHome style={{marginTop: 1}}>Suas consultas</TituloHome>
          </ContainerTituloConsultas>

          <Tabs
            initialPage={0}
            tabBarBackgroundColor={colors.principal}
            tabBarUnderlineStyle={{ backgroundColor: colors.principal }}
            tabContainerStyle={{ elevation: 0 }}
            activeTextStyle={{ color: colors.container }}
          >
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: colors.container }}>
                  <Text>Agendadas</Text>
                </TabHeading>
              }
            >
              {consultasPendentes.length === 0 ? (
                <Container>
                  <ContainerAviso>
                    <Image
                      source={require("../../Assets/semConsultas.jpg")}
                      style={{ width: "90%", height: 180 }}
                    />
                    <Text
                      style={{
                        color: colors.corTituloSecundario,
                        marginTop: 15,
                        marginBottom: 15,
                      }}
                    >
                      Você não tem nenhuma consulta agendada!
                    </Text>
                    <RectButton style={styless.botao} onPress={navegarConsulta}>
                      <Text
                        style={{
                          color: colors.container,
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Agende sua consulta agora
                      </Text>
                    </RectButton>
                  </ContainerAviso>
                </Container>
              ) : (
                <FlatList
                  data={consultasPendentes}
                  renderItem={renderItemPendentes}
                  keyExtractor={(item) => item.id.toString()}
                />
              )}
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: colors.container }}>
                  <Text>Realizadas</Text>
                </TabHeading>
              }
            >
              {consultasRealizadas.length === 0 ? (
                <Container>
                  <ContainerAviso>
                    <Image
                      source={require("../../Assets/semConsultas.jpg")}
                      style={{ width: "90%", height: 180 }}
                    />
                    <Text
                      style={{
                        color: colors.corTituloSecundario,
                        marginTop: 15,
                        marginBottom: 15,
                      }}
                    >
                      Você não realizou nenhuma consulta!
                    </Text>
                  </ContainerAviso>
                </Container>
              ) : (
                <FlatList
                  data={consultasRealizadas}
                  renderItem={renderItemRealizadas}
                  keyExtractor={(item) => item.id.toString()}
                  initialNumToRender={50}
                />
              )}
            </Tab>
          </Tabs>
        </ContainerConteudoHome>
      </Container>
    );
  }
};

const styless = StyleSheet.create({
  botao: {
    width: "80%",
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.principal,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
