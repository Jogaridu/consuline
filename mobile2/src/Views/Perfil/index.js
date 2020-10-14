import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
// import Ionicons from 'react-native-vector-icons/Ionicons';

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

import colors from "../../Styles/colors";

const Perfil = () => {

  return (
    <Container>
      <ContainerColor />
      <ContainerPerfil>
        <FotoPerfil />

        <BtnEditar>{/* <Ionicons size={32} color={"black"} /> */}</BtnEditar>
        
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
          <ScrollView>
          <ContainerConteudoInformacoes>
            <TituloPerfil>Informações</TituloPerfil>

            <ContainerInformacoes
            >
              <ContainerImageInformacoes>
                <Image
                  source={require("../../Assets/sobre.png")}
                  style={{ width: 42, height: 42, marginTop: 10 }}
                />
              </ContainerImageInformacoes>
              <ContainerTextosInformacoes>
                <TituloInformacoes> Sobre: </TituloInformacoes>
                <TextoInformacoes> Nome: Nicolas Santos </TextoInformacoes>
                <TextoInformacoes>
                  {" "}
                  Data de nascimento: 15/12/2001{" "}
                </TextoInformacoes>
                <TextoInformacoes> RG: 00000.00000 </TextoInformacoes>
                <TextoInformacoes> CPF: 000.000.000-00 </TextoInformacoes>
                <TextoInformacoes> Consultas Realizadas: 10 </TextoInformacoes>
              </ContainerTextosInformacoes>
            </ContainerInformacoes>
            <ContainerInformacoes
              style={{ height: 210}}
            >
              <ContainerImageInformacoes>
                <Image
                  source={require("../../Assets/iconeMaps.png")}
                  style={{ width: 42, height: 42, marginTop: 10 }}
                />
              </ContainerImageInformacoes>
              <ContainerTextosInformacoes>
                <TituloInformacoes> Localização: </TituloInformacoes>
                <TextoInformacoes> CEP: 00000-000 </TextoInformacoes>
                <TextoInformacoes>
                  {" "}
                  Bairro: Mirante de Jandira{" "}
                </TextoInformacoes>
                <TextoInformacoes>
                  {" "}
                  Rua: Jardim das Oliveiras Da Costa{" "}
                </TextoInformacoes>
                <TextoInformacoes> N° 203 </TextoInformacoes>
                <TextoInformacoes> Estado: SP </TextoInformacoes>
                <TextoInformacoes> Cidade: Jandira </TextoInformacoes>
              </ContainerTextosInformacoes>
            </ContainerInformacoes>
            <ContainerInformacoes
              style={{ height: 120 }}
            >
              <ContainerImageInformacoes>
                <Image
                  source={require("../../Assets/iconeContato.png")}
                  style={{ width: 42, height: 42, marginTop: 10 }}
                />
              </ContainerImageInformacoes>
              <ContainerTextosInformacoes>
                <TituloInformacoes> Contato: </TituloInformacoes>
                <TextoInformacoes> Celular: (11) 91029-1923 </TextoInformacoes>
                <TextoInformacoes> Email: teste@gmail.com </TextoInformacoes>
              </ContainerTextosInformacoes>
            </ContainerInformacoes>
          </ContainerConteudoInformacoes>
        </ScrollView>
      </ContainerPerfil>
    </Container>
  );
};

export default Perfil;
