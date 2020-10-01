import React, { useState, useRef } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import { TextInputMask as Input } from "react-native-masked-text";

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import Botao from "../../../Components/Botao2";

import validarCamposVazios from "../../../Fixtures/validarInputVazia";

import {
  ImgInfmPessoais,
  ContainerFormulario,
  ContainerImgCadastro,
  ContainerTituloCadastro,
  ContainerBotao,
} from "./styles";

import colors from "../../../Styles/colors";

const InformacaoPessoal = ({ navigation, route }) => {

  const [novoPaciente, setNovoPaciente] = useState({
    nome: "",
    dataNascimento: "",
    rg: "",
    cpf: "",
    email: "",
  });

  const { height, width } = Dimensions.get("window");

  const inputNome = useRef(null);
  const inputData = useRef(null);
  const inputRg = useRef(null);
  const inputCpf = useRef(null);
  const inputEmail = useRef(null);

  const navegarLocalizacao = () => {

    const arrayInputsVazias = validarCamposVazios(novoPaciente);
    console.log(arrayInputsVazias);

    if (arrayInputsVazias.length) {

      console.warn("Existem campos vazios");

      const inputErroStyle = { style: { borderColor: "red" } };

      // arrayInputsVazias.find(campo => campo === "nome") ?
      //   inputNome.current.setNativeProps(inputErroStyle) : "";

      arrayInputsVazias.find(campo => campo === "dataNascimento") ?
        inputData.current.getElement().setNativeProps({ style: { borderColor: "red" } }) : "";

      arrayInputsVazias.find(campo => campo === "rg") ?
        inputRg.current.getElement().setNativeProps(inputErroStyle) : "";

      arrayInputsVazias.find(campo => campo === "cpf") ?
        inputCpf.current.getElement().setNativeProps(inputErroStyle) : "";

      arrayInputsVazias.find(campo => campo === "email") ?
        inputEmail.current.setNativeProps(inputErroStyle) : "";

    } else {

      navigation.navigate("RegistrarLocalizacao", novoPaciente);

    }

  };

  return (
    <Container>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <ContainerImgCadastro>
            <ImgInfmPessoais source={require("../../../Assets/user.png")} />
          </ContainerImgCadastro>
          <ContainerTituloCadastro>
            <Titulo title="Informações pessoais" />
          </ContainerTituloCadastro>

          <ContainerFormulario>
            <TextInput
              style={[styles.input]}
              value={novoPaciente.nome}
              id="nome"
              onChangeText={(e) =>
                setNovoPaciente({ ...novoPaciente, nome: e })
              }
              placeholder="Nome Completo"
              placeholderTextColor="#403e66"
              ref={inputNome}
            />
            <Input
              style={styles.input}
              type={"datetime"}
              options={{
                format: "DD/MM/YYYY",
              }}
              value={novoPaciente.dataNascimento}
              id="dataNasc"
              onChangeText={(e) =>
                setNovoPaciente({ ...novoPaciente, dataNascimento: e })
              }
              placeholder="Data de Nascimento"
              placeholderTextColor="#403e66"
              ref={inputData}

            />
            <Input
              style={styles.rg}
              type={"custom"}
              options={{
                mask: "99.999.999-9",
              }}
              value={novoPaciente.rg}
              id="rg"
              onChangeText={(e) => setNovoPaciente({ ...novoPaciente, rg: e })}
              placeholder="RG"
              placeholderTextColor="#403e66"
              ref={inputRg}

            />
            <Input
              style={styles.cpf}
              type={"cpf"}
              value={novoPaciente.cpf}
              id="cpf"
              onChangeText={(e) => setNovoPaciente({ ...novoPaciente, cpf: e })}
              placeholder="CPF"
              placeholderTextColor="#403e66"
              ref={inputCpf}

            />
            <TextInput
              style={styles.input}
              value={novoPaciente.email}
              id="email"
              onChangeText={(e) =>
                setNovoPaciente({ ...novoPaciente, email: e })
              }
              placeholder="Email"
              placeholderTextColor="#403e66"
              ref={inputEmail}

            />
          </ContainerFormulario>
          <ContainerBotao>
            <Botao title="Próximo" width={130} funcExec={navegarLocalizacao} />
          </ContainerBotao>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  erroInput: {
    width: 288,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: [colors.fundo],
    marginBottom: 15,
    borderColor: "#FF0000",
    color: "#FF0000"
  },

  input: {
    width: 288,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: [colors.principal],
    backgroundColor: [colors.fundo],
    marginBottom: 15,
  },
  rg: {
    width: 136,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: [colors.principal],
    backgroundColor: [colors.fundo],
    marginBottom: 15,
  },
  cpf: {
    width: 136,
    height: 45,
    marginLeft: 15,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: [colors.principal],
    backgroundColor: [colors.fundo],
    marginBottom: 15,
  },
});

export default InformacaoPessoal;
