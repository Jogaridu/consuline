import React from "react";
import { Dimensions } from "react-native";

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import { Input } from "./styles";
import Botao from "../../../Components/Botao2";

import {
  ImgInfmPessoais,
  ContainerFormulario,
  ImgLeft,
  ContainerSeta,
  ContainerImgCadastro,
  ContainerTituloCadastro,
  ContainerBotao,
} from "./styles";

const InformacaoPessoal = () => {
  const { height, width } = Dimensions.get("window");

  return (
    <Container>
      <ContainerSeta style={{ width }}>
        <ImgLeft source={require("../../../Assets/left-arrow.png")} />
      </ContainerSeta>
      <ContainerImgCadastro style={{ width: width * 0.15 + "%" }}>
        <ImgInfmPessoais source={require("../../../Assets/user.png")} />
      </ContainerImgCadastro>
      <ContainerTituloCadastro>
        <Titulo title="Informações pessoais" />
      </ContainerTituloCadastro>

      <ContainerFormulario>
        <Input placeholder="Nome Completo" placeholderTextColor="#403e66" />
        <Input placeholder="Data de Nascimento" placeholderTextColor="#403e66" />
        <Input
          placeholder="RG"
          placeholderTextColor="#403e66"
          style={{ width: 136 }}
        />
        <Input
          placeholder="CPF"
          placeholderTextColor="#403e66"
          style={{ width: 136, marginLeft: 15 }}
        />
        <Input placeholder="Email" placeholderTextColor="#403e66" />
      </ContainerFormulario>
      <ContainerBotao>
        <Botao title="Próximo" width={130} />
      </ContainerBotao>
    </Container>
  );
};

export default InformacaoPessoal;
