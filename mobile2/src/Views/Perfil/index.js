import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  AsyncStorage,
  StatusBar,
  ActivityIndicator,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconOc from "react-native-vector-icons/Octicons";
import { EventRegister } from "react-native-event-listeners";
import { LinearGradient } from "expo-linear-gradient";

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
  BtnLogout,
  ContainerBtnLogout,
} from "./styles";

import Container from "../../Components/Container";

import colors from "../../Styles/colors";

import { signOut } from "../../Services/security";

const Perfil = ({ navigation }) => {
  const [dadosPaciente, setDadosPaciente] = useState();
  const [loading, setLoading] = useState(true);
  const [dataNascimento, setDataNascimento] = useState();

  useEffect(() => {
    const pegarDados = async () => {
      const paciente = JSON.parse(
        await AsyncStorage.getItem("@Consuline:paciente")
      );

      console.log(paciente);

      var dataNasc = paciente.dataNascimento;
      var dataNascBR = dataNasc.split("-");
      var dataNova = dataNascBR[2] + "/" + dataNascBR[1] + "/" + dataNascBR[0];

      setDadosPaciente(paciente);
      setDataNascimento(dataNova);
      setLoading(false);
    };

    //registrar no evento realoadUsuario
    listener = EventRegister.addEventListener("reloadPerfil", async (dados) => {
      await AsyncStorage.setItem("@Consuline:paciente", JSON.stringify(dados));

      setDadosPaciente(dados);
    });
    pegarDados();

    //remover o registro do listener
    return () => {
      EventRegister.removeEventListener();
    };
  }, []);

  const navegarConsultaEditar = () => {
    navigation.navigate("PerfilEditar");
  };

  if (loading) {
    return (
      <Container style={{ backgroundColor: colors.fundo }}>
        <ActivityIndicator size={40} color={colors.principal} />
      </Container>
    );
  } else {
    return (
      <Container style={{ backgroundColor: "#706DB3" }}>
        <ContainerColor>
          <LinearGradient
            // Background Linear Gradient
            colors={["#706DB3", "#403e66"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "100%",
            }}
          />
        </ContainerColor>

        <ContainerPerfil>
          <FotoPerfil
            source={
              dadosPaciente.foto === null
                ? require("../../Assets/semFoto.png")
                : { uri: dadosPaciente.foto }
            }
          />

          <BtnEditar onPress={navegarConsultaEditar}>
            <Icon name="account-edit" size={36} color={colors.principal} />
          </BtnEditar>
          <ScrollView>
            <Text
              style={{
                color: colors.corTitulo,
                fontSize: 30,
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
                    Data de nascimento: {dataNascimento}
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
              <ContainerInformacoes style={{ height: 230 }}>
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
                    Complemento: {
                      dadosPaciente.EnderecoPaciente.complemento
                    }{" "}
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
              <ContainerBtnLogout>
                <BtnLogout>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "red",
                      marginRight: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Sair
                  </Text>
                  <IconOc name="sign-out" color="red" size={30} />
                </BtnLogout>
              </ContainerBtnLogout>
            </ContainerConteudoInformacoes>
          </ScrollView>
        </ContainerPerfil>
      </Container>
    );
  }
};

export default Perfil;
