import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Picker, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { RectButton } from "react-native-gesture-handler";
import { ButtonGroup } from "react-native-elements";

import Container from "../../../Components/Container";
import colors from "../../../Styles/colors";
import Passos from "../../../Components/Passos";
import Botao from "../../../Components/Botao2";
import Input from "../../../Components/Input";

import {
  TituloCadastro,
  Label,
  ContainerSelect,
  BotaoPlataforma,
  CardHospital,
  ContainerInfrmHospital,
  TextoHospital,
  TituloTextoHospital,
} from "../styles";

import api from "../../../Services/api";

const LocalHospital = (props) => {
  const [mostrarInfrm, setMostrarInfrm] = useState(false);

  props.setTitulo("Local");

  const InfrmHospital = () => {
    return (
      <>
        <ContainerInfrmHospital>
          <TextoHospital>
            {" "}
            <TituloTextoHospital> Nome: </TituloTextoHospital> {props.dados.nome}
          </TextoHospital>
          <TextoHospital>
            {" "}
            <TituloTextoHospital> Cep: </TituloTextoHospital>06631-070{" "}
          </TextoHospital>
          <TextoHospital>
            {" "}
            <TituloTextoHospital> Rua: </TituloTextoHospital>Nicolau da Silva
            Santos{" "}
          </TextoHospital>
          <TextoHospital>
            {" "}
            <TituloTextoHospital> N°: </TituloTextoHospital>344{" "}
          </TextoHospital>
          <TextoHospital style={{ marginBottom: 10 }}>
            {" "}
            <TituloTextoHospital> {props.dados.cidade} - {props.dados.estado} </TituloTextoHospital>
          </TextoHospital>
          <Botao title="OK" width={75} height={40} fontSize={18}></Botao>
        </ContainerInfrmHospital>
      </>
    );
  };

  return (
    <>
      <CardHospital>
        <Text
          style={{
            fontSize: 18,
            color: colors.principal,
            fontWeight: "bold",
            marginLeft: -10,
          }}
        >
          {props.dados.nome}
        </Text>
        <RectButton onPress={() => setMostrarInfrm(!mostrarInfrm)}>
          <Icon name="chevron-down" size={30} color={colors.corTitulo} />
        </RectButton>
        {mostrarInfrm && <InfrmHospital />}
      </CardHospital>
    </>
  );
};

const Plataformas = (props) => {
  props.setTitulo("Plataforma");

  return (
    <>
      <BotaoPlataforma>
        <Image
          source={require("../../../Assets/iconeWpp.png")}
          style={{ width: 38, height: 38 }}
        />
        <Text
          style={{
            fontSize: 18,
            color: colors.corTitulo,
            fontWeight: "500",
          }}
        >
          {" "}
          WhatsApp{" "}
        </Text>
      </BotaoPlataforma>
      <BotaoPlataforma>
        <Image
          source={require("../../../Assets/iconeZoom.png")}
          style={{ width: 38, height: 38 }}
        />
        <Text
          style={{
            fontSize: 18,
            color: colors.corTitulo,
            fontWeight: "500",
          }}
        >
          {" "}
          Zoom{" "}
        </Text>
      </BotaoPlataforma>
    </>
  );
};

const Atendimento = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dadosHospital, setDadosHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tituloLabel, setTituloLabel] = useState("Eae");

  const pegarDados = async () => {
    const retorno = await api.get("/filiais");

    setDadosHospital(retorno.data);
    setLoading(false);
  };

  useEffect(() => {
    pegarDados();
  }, []);

  const component1 = () => <Text>Teleconsulta</Text>;
  const component2 = () => <Text>Presencial</Text>;

  const buttons = [{ element: component1 }, { element: component2 }];

  return (
    <Container style={{ backgroundColor: colors.fundo }}>
      <ScrollView style={{ width: "100%" }}>
        <Passos cor1={true} cor2={true} cor3={true} />
        <Label> Atendimento </Label>
        <ButtonGroup
          onPress={(e) => setSelectedIndex(e)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          selectedButtonStyle={{ backgroundColor: colors.principal }}
          selectedTextStyle={{ fontSize: 30 }}
          containerStyle={{
            height: 50,
            width: 250,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 100,
          }}
        />

        <Label> {tituloLabel} </Label>
        {selectedIndex === 0 ? (
          <>
            {loading ? (
              <Container>
                <Text> Carregando... </Text>
              </Container>
            ) : (
              <>
                {dadosHospital.map((hospital) => (
                  <LocalHospital
                    key={hospital.id}
                    setTitulo={setTituloLabel}
                    dados={{
                      id: hospital.id,
                      nome: hospital.nomeFantasia,
                      cidade: hospital.EnderecoFilial.cidade,
                      estado: hospital.EnderecoFilial.estado,
                    }}
                  />
                ))}
              </>
            )}
          </>
        ) : (
          <Plataformas setTitulo={setTituloLabel} />
        )}
      </ScrollView>
    </Container>
  );
};

export default Atendimento;