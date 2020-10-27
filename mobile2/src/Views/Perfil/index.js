import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { EventRegister } from "react-native-event-listeners";

import {
  ContainerColor,
  ContainerPerfil,
  FotoPerfil,
  BtnEditar,
  ContainerConteudoInformacoes,
  ContainerInformacoes,
  ContainerImageInformacoes,
  ContainerTextosInformacoes,
  TituloInformacoes,
  TextoInformacoes,
  TituloPerfil,
} from "./styles";

import Container from "../../Components/Container";

import api from "../../Services/api";

import colors from "../../Styles/colors";

const Perfil = ({ navigation }) => {
  const [dadosPaciente, setDadosPaciente] = useState();
  const [loading, setLoading] = useState(true);

  const pegarDados = async () => {
    const paciente = JSON.parse(
      await AsyncStorage.getItem("@Consuline:paciente")
    );
    setDadosPaciente(paciente);
    setLoading(false);
  };

  useEffect(() => {
    //registrar no evento realoadUsuario
    listener = EventRegister.addEventListener("reloadPerfil", async (data) => {
      const teste = await AsyncStorage.setItem("@Consuline:paciente", ...AsyncStorage, JSON.stringify(data));
      console.log(teste);
    });

    //dentro da função do evento, inserir no storage e atualizar o nome na tela

    pegarDados();

    //remover o registro do listener
  }, []);

  const navegarConsultaEditar = () => {
    navigation.navigate("PerfilEditar");
  };

  if (loading) {
    return (
      <Container>
        <Text> Carregando... </Text>
      </Container>
    );
  } else {
    return (
      <Container>
        <ContainerColor />
        <ContainerPerfil>
          <FotoPerfil />

          <BtnEditar onPress={navegarConsultaEditar} />
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
              {dadosPaciente.nome}{" "}
            </Text>
            <Text
              style={{
                color: colors.corTituloSecundario,
                fontSize: 20,
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              {dadosPaciente.EnderecoPaciente.cidade +
                ", " +
                dadosPaciente.EnderecoPaciente.estado}
            </Text>

            <ContainerConteudoInformacoes>
              <TituloPerfil>Informações</TituloPerfil>

              <ContainerInformacoes>
                <ContainerImageInformacoes>
                  <Image
                    source={require("../../Assets/sobre.png")}
                    style={{ width: 42, height: 42, marginTop: 10 }}
                  />
                </ContainerImageInformacoes>
                <ContainerTextosInformacoes>
                  <TituloInformacoes> Sobre: </TituloInformacoes>
                  <TextoInformacoes>
                    {" "}
                    Nome: {dadosPaciente.nome}{" "}
                  </TextoInformacoes>
                  <TextoInformacoes>
                    {" "}
                    Data de nascimento: {dadosPaciente.dataNascimento}
                  </TextoInformacoes>
                  <TextoInformacoes> RG: {dadosPaciente.rg} </TextoInformacoes>
                  <TextoInformacoes>
                    {" "}
                    CPF: {dadosPaciente.cpf}{" "}
                  </TextoInformacoes>
                  <TextoInformacoes>
                    {" "}
                    Consultas Realizadas: 10{" "}
                  </TextoInformacoes>
                </ContainerTextosInformacoes>
              </ContainerInformacoes>
              <ContainerInformacoes style={{ height: 210 }}>
                <ContainerImageInformacoes>
                  <Image
                    source={require("../../Assets/iconeMaps.png")}
                    style={{ width: 42, height: 42, marginTop: 10 }}
                  />
                </ContainerImageInformacoes>
                <ContainerTextosInformacoes>
                  <TituloInformacoes> Localização: </TituloInformacoes>
                  <TextoInformacoes>
                    {" "}
                    CEP: {dadosPaciente.EnderecoPaciente.cep}{" "}
                  </TextoInformacoes>
                  <TextoInformacoes>
                    {" "}
                    Bairro: {dadosPaciente.EnderecoPaciente.bairro}
                  </TextoInformacoes>
                  <TextoInformacoes>
                    {" "}
                    Rua: {dadosPaciente.EnderecoPaciente.rua}
                  </TextoInformacoes>
                  <TextoInformacoes>
                    {" "}
                    N°: {dadosPaciente.EnderecoPaciente.numero}{" "}
                  </TextoInformacoes>
                  <TextoInformacoes>
                    {" "}
                    Estado: {dadosPaciente.EnderecoPaciente.estado}{" "}
                  </TextoInformacoes>
                  <TextoInformacoes>
                    {" "}
                    Cidade: {dadosPaciente.EnderecoPaciente.cidade}{" "}
                  </TextoInformacoes>
                </ContainerTextosInformacoes>
              </ContainerInformacoes>
              <ContainerInformacoes style={{ height: 120 }}>
                <ContainerImageInformacoes>
                  <Image
                    source={require("../../Assets/iconeContato.png")}
                    style={{ width: 42, height: 42, marginTop: 10 }}
                  />
                </ContainerImageInformacoes>
                <ContainerTextosInformacoes>
                  <TituloInformacoes> Contato: </TituloInformacoes>
                  <TextoInformacoes>
                    {" "}
                    Celular: {dadosPaciente.celular}
                  </TextoInformacoes>
                  <TextoInformacoes>
                    {" "}
                    Email: {dadosPaciente.email}{" "}
                  </TextoInformacoes>
                </ContainerTextosInformacoes>
              </ContainerInformacoes>
            </ContainerConteudoInformacoes>
          </ScrollView>
        </ContainerPerfil>
      </Container>
    );
  }
};

export default Perfil;
