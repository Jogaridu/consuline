import React, { useState } from "react";
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

  const navegarLocalizacao = () => {
    navigation.navigate("RegistrarLocalizacao", novoPaciente);
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
              style={styles.input}
              value={novoPaciente.nome}
              id="nome"
              onChangeText={(e) =>
                setNovoPaciente({ ...novoPaciente, nome: e })
              }
              placeholder="Nome Completo"
              placeholderTextColor="#403e66"
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
            />
            <Input
              style={styles.cpf}
              type={"cpf"}
              value={novoPaciente.cpf}
              id="cpf"
              onChangeText={(e) => setNovoPaciente({ ...novoPaciente, cpf: e })}
              placeholder="CPF"
              placeholderTextColor="#403e66"
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
