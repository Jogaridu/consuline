import React from "react";
import { Dimensions, Text } from "react-native";

import Container from "../../../Components/Container";
import Botao from "../../../Components/Botao2";

import {
  ContainerTextos,
  ContainerImgFoto,
  ImgCodigo,
  ContainerBotao

} from "./styles";

const Foto = () => {

  const { height, width } = Dimensions.get('window');

  return (
    <Container>
      <ContainerImgFoto style={{ width: width * 0.15 + "%" }}>
        <ImgCodigo source={require("../../../Assets/user.png")} />
      </ContainerImgFoto>

      <ContainerTextos>
        <Text style={{ fontSize: 40, textAlign: "center" }}> Escolha uma foto para seu perfil </Text>
      </ContainerTextos>

      <ContainerBotao>
        <Botao title="Pular" width={130} />
      </ContainerBotao>
    </Container>
  );
};

export default Foto;
