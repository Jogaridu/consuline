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
import { Linking } from "react-native";

const Home = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(true);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 250 }));
  const [opacity] = useState(new Animated.Value(0));
  const [consultasPendentes, setConsultasPendentes] = useState();
  const [consultasRealizadas, setConsultasRealizadas] = useState();
  const [nomeIcone, setNomeIcone] = useState(false);
  const [notificacoes, setNotificacoes] = useState([]);

  const pegarDados = async () => {
    const paciente = JSON.parse(
      await AsyncStorage.getItem("@Consuline:paciente")
    );

    try {
      let retorno = await api.get(`/paciente/${paciente.id}/consultas`);

      setConsultasPendentes(retorno.data.pendentes);
      setConsultasRealizadas(retorno.data.realizadas);
      setNome(paciente.nome);
      setLoading(false);

      retorno = await api.get(`/notificacoes`);

      setNotificacoes(retorno.data);
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

  const renderItemPendentes = ({ item }) => (
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

  const NotificacoesContainer = () => {
    const Rendernotificacao = (item) => (
      <Notificacao
        style={{ elevation: 2 }} /*onPress={() => Linking.openURL(whatsapp)}*/
      >
        <Image
          source={require("../../Assets/iconeNot.png")}
          style={{ width: 45, height: 45 }}
        />
        <ContainerTextosNot>
          <TituloNotificacao>{item.mensagem}</TituloNotificacao>
          <TextoNotificacao>
            Pressione aqui para começar a{"\n"}sua consulta.
          </TextoNotificacao>
        </ContainerTextosNot>
      </Notificacao>
    );

    return (
      <Notificacoes>
        {!(notificacoes.length === 0) ? (
          <FlatList
            data={notificacoes}
            renderItem={Rendernotificacao}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text>Sem notificao</Text>
        )}

        {/* <Notificacao
                    style={{ elevation: 2 }}
                    onPress={() => setModalAvaliacao(true)}>
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
                </Notificacao> */}
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
          <TituloHome>Suas consultas</TituloHome>
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
              {/* <ContainerBotao>
                  <Botao2
                    title="Marcar consulta"
                    funcExec={() => navegarConsulta}
                  />
                </ContainerBotao> */}

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
      </Container>
    );
  }
};

export default Home;
