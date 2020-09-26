import React from "react";
import { Dimensions } from "react-native";

import {
  ContainerImgCadastro,
  ImgLocalizacao,
  ContainerTituloCadastro,
  ContainerFormulario,
  ContainerBotao
} from "./styles";

import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

const Localizacao = ({ navigation }) => {

  const { height, width } = Dimensions.get("window");

  const navegarTelefone = () => {
    navigation.navigate("RegistrarTelefone");
  }

  return (
    <Container>
      <ContainerImgCadastro style={{ width: width * 0.15 + "%" }}>
        <ImgLocalizacao source={require("../../../Assets/localizacao.jpg")} />
      </ContainerImgCadastro>
      <ContainerTituloCadastro>
        <Titulo title="Localizacao" />
      </ContainerTituloCadastro>
      <ContainerFormulario>
        <TextInput plch="CEP" width={140} />
        <TextInput plch="Bairrro" width={140} marginLeft={8} />
        <TextInput plch="Rua" width={205} />
        <TextInput plch="N°" marginLeft={15} width={70} />
        <TextInput plch="Complemento" width={140} />
        <TextInput plch="Estado" width={140} marginLeft={8} />
      </ContainerFormulario>
      <ContainerBotao>
        <Botao title="Próximo" width={130} funcExec={navegarTelefone} />
      </ContainerBotao>
    </Container>
  );
};

export default Localizacao;
