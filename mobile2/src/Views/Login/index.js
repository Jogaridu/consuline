import React, { useState } from "react";
import {
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  FlatList,
} from "react-native";

import { Botao1 } from "../../Components/Botao1";
import Botao2 from "../../Components/Botao2";
import { Input } from "./styles";
import Container from "../../Components/Container";
import Titulo from "../../Components/TituloCadastro";

import {
  ImgLogoLogin,
  ContainerImgCadastro,
  ContainerConteudo,
} from "./styles";

import api from "../../Services/api";

const Login = ({ navigation }) => {
  const [pacienteLogin, setPacienteLogin] = useState({
    login: "",
    senha: "",
  });

  const navegarTelaInicial = () => {
    navigation.navigate("TelaInicial");
  };

  const handlerInputLogin = (string) =>
    setPacienteLogin({ ...pacienteLogin, login: string });
  const handlerInputSenha = (string) =>
    setPacienteLogin({ ...pacienteLogin, senha: string });

  const autenticarPaciente = async () => {
    try {
      const retorno = await api.post("/paciente/sessao", pacienteLogin);
      console.log(retorno);
      if (retorno) {
        console.log(retorno.data);
      }
    } catch (error) {
      console.warn("Usuário ou senha estão errados...");
    }
  };

  return (
    <Container>
      <ContainerImgCadastro>
        <ImgLogoLogin
          style={{
            marginBottom: 30,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          source={require("../../Assets/logo.png")}
        />
      </ContainerImgCadastro>

      <ContainerConteudo>
        <KeyboardAvoidingView behavior="height" enabled>
          <ScrollView>
            <Titulo title="Login" />

            <Input
              style={{ marginBottom: 15 }}
              placeholder="Login"
              maxLength={20}
              placeholderTextColor="#403e66"
              onChangeText={handlerInputLogin}
            ></Input>
            <Input
              secureTextEntry={true}
              style={{ marginBottom: 74 }}
              placeholder="Senha"
              maxLength={20}
              placeholderTextColor="#403e66"
              onChangeText={handlerInputSenha}
            />

            <Botao2 bottom={16} title="Entrar" funcExec={autenticarPaciente} />
            <Botao1 title="Não tenho cadastro" funcExec={navegarTelaInicial} />
          </ScrollView>
        </KeyboardAvoidingView>
      </ContainerConteudo>
    </Container>
  );
};

export default Login;
