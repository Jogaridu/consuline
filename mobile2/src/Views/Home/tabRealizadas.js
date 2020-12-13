import React, { useState, useEffect } from "react";
import { View, Text, Modal, Image, StyleSheet, ActivityIndicator } from "react-native";

import IconMaterialC from "react-native-vector-icons/MaterialCommunityIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";

import { RectButton } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { Rating, AirbnbRating } from "react-native-ratings";

import Container from "../../Components/Container";
import Botao2 from "../../Components/Botao2";

import {
  CardConsulta,
  HeaderCardConsulta,
  InfrmCardConsulta,
  ImgMedico,
  ContainerTextosHeader,
  TitulosCardConsulta,
  TextoCardConsulta,
  ContainerInfrmCardConsulta,
  ContainerModal,
  ModalAvaliacao,
  ContainerInfrmVisualizarConsulta,
  TextoVisualizarConsuta,
  ContainerHorariosCard,
  ContainerBtnCardAvaliar,
} from "./styles";

import colors from "../../Styles/colors";
import styles from "../../Components/Container/styles";
import api from "../../Services/api";
import { EventRegister } from "react-native-event-listeners";

const Sucesso = (props) => (
  <Container>
    <Image
      source={require("../../Assets/check.png")}
      style={{ width: 170, height: 170 }}
    />
    <Text
      style={{
        fontSize: 30,
        fontWeight: "bold",
        color: colors.corTitulo,
        textAlign: "center",
        marginTop: 30,
        // marginBottom: 100,
      }}
    >
      Sucesso!
    </Text>
    <Text
      style={{
        fontSize: 22,
        fontWeight: "500",
        color: colors.corTitulo,
        textAlign: "center",
        marginBottom: 100,
      }}
    >
      Obrigado pela sua avaliação
    </Text>
    <Botao2 title="Fechar" funcExec={() => {
      props.pegarDados();
      props.setModalAvaliacao(false);
      }} />
  </Container>
);

const TabRealizadas = ({
  nomeMedico,
  fotoServico,
  servico,
  horario,
  atendimento,
  local,
  valor,
  idConsulta,
  idMedico,
  data,
  notaProfissional,
  pegarDados,
}) => {
  const [visualizarConsulta, setVisualizarConsulta] = useState(false);
  const [modalAvaliacao, setModalAvaliacao] = useState(false);
  const [dadosAvaliacao, setDadosAvaliacao] = useState({
    estrelas: 0,
    comentario: "",
    consultaId: idConsulta,
    ProfissionalDaSaudeId: idMedico,
  });
  const [sucesso, setSucesso] = useState(false);
  const [dataConsulta, setDataConsulta] = useState();

  useEffect(() => {
    var consultaData = data;
    var dataAlterada = consultaData.split("-");
    var dataNova = dataAlterada[2] + "/" + dataAlterada[1];

    setDataConsulta(dataNova);
  }, []);

  const avaliacaoMedico = async () => {
    try {
      const retorno = api.post("/medico/avaliacao", dadosAvaliacao);

      setSucesso(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={{ justifyContent: "flex-start" }}>
      <Modal animationType="slide" transparent={true} visible={modalAvaliacao}>
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
            {sucesso ? (
              <Sucesso setModalAvaliacao={setModalAvaliacao} pegarDados={pegarDados} />
            ) : (
              <>
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
                  onFinishRating={(rating) =>
                    setDadosAvaliacao({ ...dadosAvaliacao, estrelas: rating })
                  }
                />
                <Input
                  placeholder="Comentários, críticas ou sugestões"
                  placeholderTextColor={colors.principal}
                  style={{ height: 100, width: "80%" }}
                  onChangeText={(e) =>
                    setDadosAvaliacao({ ...dadosAvaliacao, comentario: e })
                  }
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
                  <Botao2
                    title="Enviar"
                    width={"80%"}
                    height={50}
                    funcExec={avaliacaoMedico}
                  />
                </View>
              </>
            )}
          </ModalAvaliacao>
        </ContainerModal>
      </Modal>

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
              source={{ uri: fotoServico }}
              style={{ width: 108, height: 108, borderRadius: 100 }}
            />
            <ContainerInfrmVisualizarConsulta>
              <TitulosCardConsulta>Tipo:</TitulosCardConsulta>
              <TextoVisualizarConsuta>{servico}</TextoVisualizarConsuta>
            </ContainerInfrmVisualizarConsulta>
            <ContainerInfrmVisualizarConsulta>
              <TitulosCardConsulta>Médico:</TitulosCardConsulta>
              <TextoVisualizarConsuta>{nomeMedico}</TextoVisualizarConsuta>
            </ContainerInfrmVisualizarConsulta>

            <ContainerInfrmVisualizarConsulta>
              <TitulosCardConsulta>Atendimento:</TitulosCardConsulta>
              <TextoVisualizarConsuta>{atendimento}</TextoVisualizarConsuta>
            </ContainerInfrmVisualizarConsulta>
            <ContainerInfrmVisualizarConsulta>
              <TitulosCardConsulta>Local:</TitulosCardConsulta>
              <TextoVisualizarConsuta>
                {!local ? "Whatsapp" : local}
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
                {valor}
              </TextoVisualizarConsuta>
            </ContainerInfrmVisualizarConsulta>
          </ModalAvaliacao>
        </ContainerModal>
      </Modal>

      <CardConsulta style={{ elevation: 2, borderColor: "green" }}>
        <RectButton
          onPress={() => setVisualizarConsulta(true)}
          style={styless.btnCardConsulta}
        >
          <HeaderCardConsulta>
            <ImgMedico source={{ uri: fotoServico }} />
            <ContainerTextosHeader>
              <TitulosCardConsulta> {servico} </TitulosCardConsulta>
              <TextoCardConsulta> {nomeMedico} </TextoCardConsulta>
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
                {" " + dataConsulta + " " + horario}{" "}
              </Text>
            </ContainerHorariosCard>

            <ContainerBtnCardAvaliar>
              {notaProfissional === null ? (
                <RectButton
                  style={styless.botao}
                  onPress={() => setModalAvaliacao(true)}
                >
                  <IconAntDesign
                    name="star"
                    size={20}
                    color={colors.container}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      color: colors.container,
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    Avaliar
                  </Text>
                </RectButton>
              ) : (
                <Rating
                  startingValue={notaProfissional}
                  imageSize={20}
                  readonly
                />
              )}
            </ContainerBtnCardAvaliar>
          </InfrmCardConsulta>
        </RectButton>
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

const styless = StyleSheet.create({
  botao: {
    width: 110,
    height: 38,
    backgroundColor: colors.principal,
    borderRadius: 20,
    marginTop: -12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  btnCardConsulta: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.container,
    borderRadius: 10,
  },
});

export default TabRealizadas;
