import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import encontrarCep from "../../../Services/viaCep";

import { TextInputMask } from "react-native-masked-text";

import validarCamposVazios from "../../../Fixtures/validarInputVazia";

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

const Localizacao = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("window");

  var novoPaciente = route.params;

  console.log(novoPaciente);

  const [endereco, setEndereco] = useState({
    cep: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
  });

  const preencherFormulario = (enderecocep) => {
    setEndereco({
      ...endereco,
      bairro: enderecocep.bairro,
      rua: enderecocep.logradouro,
      cidade: enderecocep.localidade,
      estado: enderecocep.uf,
    });
  };

  const handlerInput = (e) => {
    setEndereco({ ...endereco, cep: e });
  };

  const navegarLoginSenha = () => {
    const arrayInputsVazias = validarCamposVazios(endereco, "complemento");
    console.log(arrayInputsVazias);
    if (arrayInputsVazias.length) {

      console.warn("Existem campos vazios");

      // arrayInputsVazias.find(campo => campo === "dataNascimento") ? inputData.current.focus() : "";
      // arrayInputsVazias.find(campo => campo === "rg") ? inputRg.current.focus() : "";
      // arrayInputsVazias.find(campo => campo === "cpf") ? inputCpf.current.focus() : "";
      // arrayInputsVazias.find(campo => campo === "email") ? inputEmail.current.focus() : "";

    } else {
      novoPaciente = { ...novoPaciente, endereco }
      // arrayInputsVazias
      navigation.navigate("RegistrarLoginSenha", novoPaciente);



    }
  };

  return (
    <Container>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <ContainerImgCadastro>
            <ImgLocalizacao
              source={require("../../../Assets/localizacao.jpg")}
            />
          </ContainerImgCadastro>
          <ContainerTituloCadastro>
            <Titulo title="Localização" />
          </ContainerTituloCadastro>

          <ContainerFormulario>
            <TextInputMask
              style={styles.input}
              value={endereco.cep}
              type={"only-numbers"}
              maxLength={9}
              placeholder="CEP"
              placeholderTextColor="#403e66"
              onChangeText={handlerInput}
              onBlur={async () =>
                preencherFormulario(await encontrarCep(endereco.cep))
              }
            />
            <Input
              style={{ width: 140, marginLeft: 8 }}
              value={endereco.bairro}
              placeholder="Bairro"
              placeholderTextColor="#403e66"
            />
            <Input
              style={{ width: 205 }}
              value={endereco.rua}
              placeholder="Rua"
              placeholderTextColor="#403e66"
            />
            <TextInputMask
              style={styles.numero}
              value={endereco.numero}
              onChangeText={(e) => setEndereco({ ...endereco, numero: e })}
              type={"only-numbers"}
              placeholder="N°"
              placeholderTextColor="#403e66"
            />
            <Input
              value={endereco.complemento}
              placeholder="Complemento"
              placeholderTextColor="#403e66"
              style={{ width: 140 }}
              onChangeText={(e) => setEndereco({ ...endereco, complemento: e })}
            />
            <Input
              style={{ width: 140, marginLeft: 8 }}
              value={endereco.cidade}
              placeholder="Cidade"
              placeholderTextColor="#403e66"
            />
            <Input
              style={{ marginLeft: 8 }}
              value={endereco.estado}
              placeholder="Estado"
              placeholderTextColor="#403e66"
            />
          </ContainerFormulario>
          <ContainerBotao>
            <Botao title="Próximo" width={130} funcExec={navegarLoginSenha} />
          </ContainerBotao>
        </ScrollView>
      </KeyboardAvoidingView>
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
