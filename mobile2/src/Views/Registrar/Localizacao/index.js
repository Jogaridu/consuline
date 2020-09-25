import React from "react";
import { Dimensions } from "react-native";

import {
  ContainerSeta,
  ImgLeft,
  ContainerImgCadastro,
  ImgLocalizacao,
  ContainerTituloCadastro,
  ContainerFormulario,
  ContainerBotao
} from "./styles";

import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

const Localizacao = () => {
  const { height, width } = Dimensions.get("window");

  return (
    <Container>
      <ContainerSeta style={{ width }}>
        <ImgLeft source={require("../../../Assets/left-arrow.png")} />
      </ContainerSeta>
      <ContainerImgCadastro style={{ width: width * 0.15 + "%" }}>
        <ImgLocalizacao source={require("../../../Assets/localizacao.jpg")} />
      </ContainerImgCadastro>
      <ContainerTituloCadastro>
        <Titulo title="Localizacao" />
      </ContainerTituloCadastro>
      <ContainerFormulario>
        <TextInput plch="CEP" width={140}  />
        <TextInput plch="Bairrro" width={140} marginLeft={8} />
        <TextInput plch="Rua" width={205} />
        <TextInput plch="N°" marginLeft={15} width={70} />
        <TextInput plch="Complemento" width={140} />
        <TextInput plch="Estado" width={140} marginLeft={8} />
      </ContainerFormulario>
      <ContainerBotao>
        <Botao title="Próximo" width={130} />
      </ContainerBotao>
    </Container>
  );
};

export default Localizacao;
