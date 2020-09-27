import React, { useState } from "react";
import { Button, Dimensions, StyleSheet, TextInput } from "react-native";

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

const InformacaoPessoal = ({ navigation }) => {
  const [dados, setDados] = useState({
    nome: "",
    dataNasc: "",
    rg: "",
    cpf: "",
    email: "",
  });

  const { height, width } = Dimensions.get("window");

  const navegarLocalizacao = () => {
    navigation.navigate("RegistrarLocalizacao");
  };

  return (
    <Container>
      <ContainerImgCadastro style={{ width: width * 0.15 + "%" }}>
        <ImgInfmPessoais source={require("../../../Assets/user.png")} />
      </ContainerImgCadastro>
      <ContainerTituloCadastro>
        <Titulo title="Informações pessoais" />
      </ContainerTituloCadastro>

      <ContainerFormulario>
        <Input
          style={styles.input}
          type={"custom"}
          value={dados.nome}
          id="nome"
          onChangeText={(e) => setDados({ ...dados, nome: e })}
          placeholder="Nome Completo"
          placeholderTextColor="#403e66"
        />
        <Input
          style={styles.input}
          type={"datetime"}
          options={{
            format: "DD/MM/YYYY",
          }}
          value={dados.dataNasc}
          id="dataNasc"
          onChangeText={(e) => setDados({ ...dados, dataNasc: e })}
          placeholder="Data de Nascimento"
          placeholderTextColor="#403e66"
        />
        <Input
          style={styles.rg}
          type={"custom"}
          options={{
            mask: "99.999.999-9"
          }}
          value={dados.rg}
          id="rg"
          onChangeText={(e) => setDados({ ...dados, rg: e })}
          placeholder="RG"
          placeholderTextColor="#403e66"
        />
        <Input
          style={styles.cpf}
          type={"cpf"}
          value={dados.cpf}
          id="cpf"
          onChangeText={(e) => setDados({ ...dados, cpf: e })}
          placeholder="CPF"
          placeholderTextColor="#403e66"
        />
        <TextInput
          style={styles.input}
          value={dados.email}
          id="email"
          onChangeText={(e) => setDados({ ...dados, email: e })}
          placeholder="Email"
          placeholderTextColor="#403e66"
        />
      </ContainerFormulario>
      <ContainerBotao>
        <Botao title="Próximo" width={130} funcExec={navegarLocalizacao} />
        <Button title="clique" onPress={() => console.log(dados)} />
      </ContainerBotao>
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
