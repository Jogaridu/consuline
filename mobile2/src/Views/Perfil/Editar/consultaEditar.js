import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";

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

const ConsultarOpcao = (props) => {
  if (props.tela === "informacaoPessoal") {
    return <EditarInformacaoPessoal telaEditar={props.edita} />;
  } else if (props.tela === "localizacao") {
    return <EditarLocalizacao telaEditar={props.edita} />;
  } else if (props.tela === "login") {
    return <EditarLogin telaEditar={props.edita} />;
  }
};

const ConsultaEditar = () => {
  const [telasEditar, setTelasEditar] = useState("editar");

  return (
    <Container>
      <ContainerColor />
      <ContainerPerfil>
        <FotoPerfil />

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
            {" "}
            Nicolas Santos{" "}
          </Text>
          <Text
            style={{
              color: colors.corTituloSecundario,
              fontSize: 20,
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            {" "}
            Jandira, SP{" "}
          </Text>

          {telasEditar === "editar" ? (
            <ContainerConteudoInformacoes>
              <TituloPerfil>Editar</TituloPerfil>

              <BotaoConsultaEditar
                onPress={() => setTelasEditar("informacaoPessoal")}
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
                onPress={() => setTelasEditar("localizacao")}
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
              <BotaoConsultaEditar onPress={() => setTelasEditar("login")}>
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
          ) : (
            <ConsultarOpcao tela={telasEditar} edita={setTelasEditar} />
          )}
        </ScrollView>
      </ContainerPerfil>
    </Container>
  );
};

export default ConsultaEditar;
