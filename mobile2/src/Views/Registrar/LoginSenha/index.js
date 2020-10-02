import React, { useState, useRef } from "react";
import { Dimensions, KeyboardAvoidingView, ScrollView } from "react-native";

import {
  ContainerImgLoginSenha,
  ImgLoginSenha,
  ContainerTituloLoginSenha,
  ContainerFormulario,
  ContainerBotao,
  Input,
} from "./styles";

import Titulo from "../../../Components/TituloCadastro";
import Botao from "../../../Components/Botao2";

import validarCamposVazios from "../../../Fixtures/validarInputVazia";

const LoginSenha = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("window");

  var novoPaciente = route.params;

  console.log(novoPaciente);

  const inputLogin = useRef(null);
  const inputSenha = useRef(null);
  const inputConfirmarSenha = useRef(null);

  const [cadastroLoginSenha, setLoginSenha] = useState({
    login: "",
    senha: "",
    confirmarSenha: "",
  });

  const navegarTelefone = () => {
    const arrayInputsVazias = validarCamposVazios(cadastroLoginSenha, "complemento");

    if (arrayInputsVazias.length) {

      console.warn("Existem campos vazios");

      const inputErroStyle = { style: { borderColor: "red" } };

      arrayInputsVazias.find(campo => campo === "login") ?
        inputLogin.current.setNativeProps(inputErroStyle) : "";

      arrayInputsVazias.find(campo => campo === "senha") ?
        inputSenha.current.setNativeProps(inputErroStyle) : "";

      arrayInputsVazias.find(campo => campo === "confirmarSenha") ?
        inputConfirmarSenha.current.setNativeProps(inputErroStyle) : "";


    } else {

      if (cadastroLoginSenha.senha === cadastroLoginSenha.confirmarSenha) {
        novoPaciente = {
          ...novoPaciente,
          login: cadastroLoginSenha.login,
          senha: cadastroLoginSenha.senha,
        };

        navigation.navigate("RegistrarTelefone", novoPaciente);

      } else {
        console.warn("Senhas diferentes");

      }


    }

  };

  return (
    <Container>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <ContainerImgLoginSenha>
            <ImgLoginSenha source={require("../../../Assets/cadeado.jpg")} />
          </ContainerImgLoginSenha>
          <ContainerTituloLoginSenha>
            <Titulo title="Crie um Login e uma Senha" />
          </ContainerTituloLoginSenha>
          <ContainerFormulario>
            <Input
              value={cadastroLoginSenha.login}
              onChangeText={(e) =>
                setLoginSenha({ ...cadastroLoginSenha, login: e })
              }
              placeholder="Login"
              placeholderTextColor="#403e66"
              ref={inputLogin}
            />
            <Input
              value={cadastroLoginSenha.senha}
              onChangeText={(e) =>
                setLoginSenha({ ...cadastroLoginSenha, senha: e })
              }
              placeholder="Senha"
              placeholderTextColor="#403e66"
              ref={inputSenha}
            />
            <Input
              value={cadastroLoginSenha.confirmarSenha}
              onChangeText={(e) =>
                setLoginSenha({ ...cadastroLoginSenha, confirmarSenha: e })
              }
              placeholder="Confirmar senha"
              placeholderTextColor="#403e66"
              ref={inputConfirmarSenha}
            />
          </ContainerFormulario>
          <ContainerBotao>
            <Botao title="Próximo" width={130} funcExec={navegarTelefone} />
          </ContainerBotao>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default LoginSenha;
