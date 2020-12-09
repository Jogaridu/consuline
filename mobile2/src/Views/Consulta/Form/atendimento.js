import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Picker, Image, ActivityIndicator } from "react-native";
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
  ContainerBotaoCardHospital,
} from "../styles";

import api from "../../../Services/api";

const LocalHospital = (props) => {
  const [mostrarInfrm, setMostrarInfrm] = useState(false);

  props.setTitulo("Local");

  const navigateEsolhaMedico = (filialId) => {
    if (filialId !== "") {

      props.navigation.navigate("EscolhaMedicos", {
        ...props.novaConsulta,
        AtendimentoId: 1,
        FilialId: filialId,
      });

    } else {
      console.log("Erro: filial desconhecida");
    }
  };

  const InfrmHospital = () => {
    return (
      <>
        <ContainerInfrmHospital>
          <TextoHospital>
            {" "}
            <TituloTextoHospital> Nome: </TituloTextoHospital>{" "}
            {props.dados.nome}
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
            <TituloTextoHospital>
              {" "}
              {props.dados.cidade} - {props.dados.estado}{" "}
            </TituloTextoHospital>
          </TextoHospital>
          <ContainerBotaoCardHospital>
            <Botao
              title="Selecionar"
              width={120}
              height={40}
              fontSize={16}
              funcExec={() => navigateEsolhaMedico(props.dados.id)}
            />
          </ContainerBotaoCardHospital>
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

  const navigateEsolhaMedico = () => {
    props.navigation.navigate("EscolhaMedicos", {
      ...props.novaConsulta,
      AtendimentoId: 2,
    });
  };

  return (
    <>
      <BotaoPlataforma onPress={navigateEsolhaMedico}>
        <Image
          source={require("../../../Assets/whatsapp.png")}
          style={{ width: 34, height: 34 }}
        />
        <Text
          style={{
            fontSize: 18,
            color: colors.corTitulo,
            fontWeight: "500",
            marginLeft: 8,
          }}
        >
          {" "}
          WhatsApp{" "}
        </Text>
      </BotaoPlataforma>
      <BotaoPlataforma
        onPress={navigateEsolhaMedico}
        style={{ marginBottom: 20 }}
      >
        <Image
          source={require("../../../Assets/iconeZoom.png")}
          style={{ width: 38, height: 38 }}
        />
        <Text
          style={{
            fontSize: 18,
            color: colors.corTitulo,
            fontWeight: "500",
            marginLeft: 8,
          }}
        >
          {" "}
          Zoom{" "}
        </Text>
      </BotaoPlataforma>
    </>
  );
};

const Atendimento = ({ navigation, route }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dadosHospital, setDadosHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tituloLabel, setTituloLabel] = useState("");
  var novaConsulta = route.params;

  const pegarDados = async () => {
    try {
      const retornoFiliais = await api.get(`servico/${novaConsulta.ServicoId}/filiais`);
      
      setDadosHospital(retornoFiliais.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <Container style={{ backgroundColor: colors.fundo }}>
      <ScrollView style={{ width: "100%" }}>
        <Label> Atendimento </Label>
        <ButtonGroup
          onPress={(e) => setSelectedIndex(e)}
          selectedIndex={selectedIndex}
          buttons={["Presencial", "Teleconsulta"]}
          selectedTextStyle={{ color: "#fff", fontWeight: "bold" }}
          selectedButtonStyle={{ backgroundColor: colors.principal }}
          containerStyle={{
            height: 50,
            width: 250,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 100,
          }}
          textStyle={{ fontSize: 15, letterSpacing: 0.2 }}
          style={{ color: "orange" }}
        />

        <Label> {tituloLabel} </Label>
        {selectedIndex === 0 ? (
          <>
            {loading ? (
              <Container style={{backgroundColor: colors.fundo}}>
                <ActivityIndicator size={40} color={colors.principal} />
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
                      navigation={navigation}
                      novaConsulta={novaConsulta}
                    />
                  ))}
                </>
              )}
          </>
        ) : (
            <Plataformas setTitulo={setTituloLabel} novaConsulta={novaConsulta} navigation={navigation} />
          )}
        <Passos cor1={true} cor2={true} cor3={true} />
      </ScrollView>
    </Container>
  );
};

export default Atendimento;
