import React from "react";
import { Dimensions } from "react-native";

// import viaCep from "../../../Services/viaCep";

import {
  ContainerSeta,
  ImgLeft,
  ContainerImgCadastro,
  ImgLocalizacao,
  ContainerTituloCadastro,
  ContainerFormulario,
  ContainerBotao,
} from "./styles";

import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

const Localizacao = () => {
  const { height, width } = Dimensions.get("window");

  const verificarCep = () => document.getElementById("cep");

  const encontrarCep = async ( cep ) => {
    if( verificarCep() ) {
      const url = `viacep.com.br/ws/${cep}/json/`;
      const pegarEndereco = await fetch(url);
      const endereco = await pegarEndereco.json();
    }
  }

  return (
    <Container>
      <ContainerSeta style={{ width }}>
        <ImgLeft source={require("../../../Assets/left-arrow.png")} />
      </ContainerSeta>
      <ContainerImgCadastro style={{ width: width * 0.15 + "%" }}>
        <ImgLocalizacao source={require("../../../Assets/localizacao.jpg")} />
      </ContainerImgCadastro>
      <ContainerTituloCadastro>
        <Titulo title="Localização" />
      </ContainerTituloCadastro>
      
      <ContainerFormulario>
        <TextInput id="cep" plch="CEP" width={140} />
        <TextInput id="bairro" plch="Bairro" width={140} marginLeft={8} />
        <TextInput id="rua" plch="Rua" width={205} />
        <TextInput id="numero" plch="N°" marginLeft={15} width={70} />
        <TextInput id="complemento" plch="Complemento" width={140} />
        <TextInput id="estado" plch="Estado" width={140} marginLeft={8} />
      </ContainerFormulario>
      <ContainerBotao>
        <Botao title="Próximo" width={130} />
      </ContainerBotao>
    </Container>
  );
};

export default Localizacao;
