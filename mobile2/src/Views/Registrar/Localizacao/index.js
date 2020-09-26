import React, { useState } from "react";
import { Dimensions } from "react-native";

import encontrarCep from "../../../Services/viaCep";

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
import { Input } from "./styles";
import Botao from "../../../Components/Botao2";

const Localizacao = () => {
  const { height, width } = Dimensions.get("window");

  const [localizacao, setLocalizacao] = useState({
    cep: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
  });

  const preencherFormulario = (endereco) => {
    
    setLocalizacao({
      ...localizacao,
      bairro: endereco.bairro,
      rua: endereco.logradouro,
      numero: endereco.numero,
      complemento: endereco.complemento,
      cidade: endereco.localidade,
      estado: endereco.uf,
    });
  };

  const handlerInput = (string) => {
    setLocalizacao({ cep: string });
  };

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
        <Input
          style={{ width: 140 }}
          value={localizacao.cep}
          placeholder="CEP"
          placeholderTextColor="#403e66"
          onChangeText={handlerInput}
          onBlur={async () => preencherFormulario(await encontrarCep(localizacao.cep))}
        />
        <Input
          style={{ width: 140, marginLeft: 8 }}
          value={localizacao.bairro}
          placeholder="Bairro"
          placeholderTextColor="#403e66"
        />
        <Input
          style={{ width: 205 }}
          value={localizacao.rua}
          placeholder="Rua"
          placeholderTextColor="#403e66"
        />
        <Input
          style={{ width: 70, marginLeft: 15 }}
          value={localizacao.numero}
          placeholder="N°"
          placeholderTextColor="#403e66"
        />
        <Input
          value={localizacao.complemento}
          placeholder="Complemento"
          placeholderTextColor="#403e66"
          style={{ width: 140 }}
        />
        <Input
          style={{ width: 140, marginLeft: 8 }}
          value={localizacao.cidade}
          placeholder="Estado"
          placeholderTextColor="#403e66"
        />
        <Input
          style={{ marginLeft: 8 }}
          value={localizacao.estado}
          placeholder="Estado"
          placeholderTextColor="#403e66"
        />
      </ContainerFormulario>
      <ContainerBotao>
        <Botao title="Próximo" width={130} />
      </ContainerBotao>
    </Container>
  );
};

export default Localizacao;
