import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";

import encontrarCep from "../../../Services/viaCep";

import { TextInputMask } from "react-native-masked-text";

import {
  ContainerImgCadastro,
  ImgLocalizacao,
  ContainerTituloCadastro,
  ContainerFormulario,
  ContainerBotao,
} from "./styles";

import Titulo from "../../../Components/TituloCadastro";
import { Input } from "./styles";
import Botao from "../../../Components/Botao2";

import colors from "../../../Styles/colors";

const Localizacao = ({ navigation }) => {

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
      cidade: endereco.localidade,
      estado: endereco.uf,
    });
  };

  const handlerInput = (string) => {
    setLocalizacao({ cep: string });
  };
  
  const navegarTelefone = () => {
    navigation.navigate("RegistrarTelefone");
  }

  return (
    <Container>
      <ContainerImgCadastro style={{ width: width * 0.15 + "%" }}>
        <ImgLocalizacao source={require("../../../Assets/localizacao.jpg")} />
      </ContainerImgCadastro>
      <ContainerTituloCadastro>
        <Titulo title="Localização" />
      </ContainerTituloCadastro>

      <ContainerFormulario>
        <TextInputMask
          style={styles.input}
          value={localizacao.cep}
          type={"only-numbers"}
          maxLength={9}
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
        <TextInputMask
          style={styles.numero}
          value={localizacao.numero}
          onChangeText={(e) => setLocalizacao({...localizacao, numero: e})}
          type={"only-numbers"}
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
          placeholder="Cidade"
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
        <Botao title="Próximo" width={130} funcExec={navegarTelefone} />
      </ContainerBotao>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 140,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: [colors.principal],
    backgroundColor: [colors.fundo],
    marginBottom: 15,
  },

  numero: {
    width: 70,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: [colors.principal],
    backgroundColor: [colors.fundo],
    marginBottom: 15,
    marginLeft: 15,
  },
});

export default Localizacao;
