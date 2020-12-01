import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, AsyncStorage } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import Container from "../../../Components/Container";

import {
  ContainerColor,
  ContainerPerfil,
  FotoPerfil,
  BtnEditar,
  TituloPerfil,
  ContainerConteudoInformacoes,
  BotaoConsultaEditar,
  TituloInformacoes,
  ContainerEditar,
  FecharEditar,
} from "../styles";

import colors from "../../../Styles/colors";
import EditarInformacaoPessoal from "./editarInformacaoPessoal";
import EditarLocalizacao from "./editarLocalizacao";
import EditarLogin from "./editarLogin";

const ConsultaEditar = ({ navigation }) => {
  const [dados, setDados] = useState({
    nome: "",
    cidade: "",
    estado: "",
  });

  const pegarDados = async () => {
    const paciente = JSON.parse(
      await AsyncStorage.getItem("@Consuline:paciente")
    );
    setDados({
      ...dados,
      cidade: paciente.EnderecoPaciente.cidade,
      estado: paciente.EnderecoPaciente.estado,
      nome: paciente.nome,
      foto: paciente.foto,
    });
  };

  useEffect(() => {
    pegarDados();
  }, []);
  const [telasEditar, setTelasEditar] = useState("editar");

  return (
    <Container>
      <ContainerColor style={{ marginTop: -25 }} >
      <LinearGradient
        // Background Linear Gradient
        colors={['#706DB3', '#403e66']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      </ContainerColor>
      <ContainerPerfil>
        <FotoPerfil source={dados.foto === null ? require("../../../Assets/semFoto.png") : {uri: dados.foto}}/>

        <BtnEditar>{/* <Ionicons size={32} color={"black"} /> */}</BtnEditar>
        <ScrollView>
          <Text
            style={{
              color: colors.corTitulo,
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {dados.nome}
          </Text>
          <Text
            style={{
              color: colors.corTituloSecundario,
              fontSize: 20,
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            {dados.cidade + ", " + dados.estado}
          </Text>

            <ContainerConteudoInformacoes>
              <TituloPerfil>Editar</TituloPerfil>

              <BotaoConsultaEditar
                onPress={() => navigation.navigate("EditarInformacaoPessoal")}
              >
                <Image
                  source={require("../../../Assets/user.png")}
                  style={{ width: 68, height: 68 }}
                />
                <TituloInformacoes
                  style={{ fontSize: 20, marginTop: 5, marginBottom: 0 }}
                >
                  {" "}
                  Informações pessoais{" "}
                </TituloInformacoes>
              </BotaoConsultaEditar>
              <BotaoConsultaEditar
                onPress={() => navigation.navigate("EditarLocalizacao")}
              >
                <Image
                  source={require("../../../Assets/localizacao.png")}
                  style={{ width: 73, height: 68 }}
                />
                <TituloInformacoes
                  style={{ fontSize: 20, marginTop: 5, marginBottom: 0 }}
                >
                  {" "}
                  Localização{" "}
                </TituloInformacoes>
              </BotaoConsultaEditar>
              <BotaoConsultaEditar onPress={() => navigation.navigate("EditarLogin")}>
                <Image
                  source={require("../../../Assets/cadeado.jpg")}
                  style={{ width: 55, height: 62 }}
                />
                <TituloInformacoes
                  style={{ fontSize: 20, marginTop: 5, marginBottom: 0 }}
                >
                  {" "}
                  Login{" "}
                </TituloInformacoes>
              </BotaoConsultaEditar>
            </ContainerConteudoInformacoes>
        </ScrollView>
      </ContainerPerfil>
    </Container>
  );
};

export default ConsultaEditar;
