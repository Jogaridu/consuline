import React, { useState, useEffect } from "react";
import { View, Text, Modal, Image, StyleSheet, Button } from "react-native";

import IconMaterialC from "react-native-vector-icons/MaterialCommunityIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";

import { RectButton } from "react-native-gesture-handler";
import Botao2 from "../../Components/Botao2";

import Container from "../../Components/Container";

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

const TabAgendadas = ({
  setModalAvaliacao,
  nomeMedico,
  fotoMedico,
  fotoServico,
  servico,
  horario,
  atendimento,
  local,
  valor,
  data,
}) => {
  const [visualizarConsulta, setVisualizarConsulta] = useState(false);
  const [dataConsulta, setDataConsulta] = useState();
  useEffect(() => {
    var consultaData = data;
    var dataAlterada = consultaData.split("-");
    var dataNova = dataAlterada[2] + "/" + dataAlterada[1];

    setDataConsulta(dataNova);
  }, []);

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
      
      <CardConsulta style={{ elevation: 2 }}>
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
                {" " +dataConsulta + "  " + horario}{" "}
              </Text>
            </ContainerHorariosCard>
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

export default TabAgendadas;
