import React, { useState, useRef, useEffect } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Animated,
  Image,
  Keyboard,
  YellowBox,
  Alert
} from "react-native";

import {
  ContainerImgLoginSenha,
  ImgLoginSenha,
  ContainerTituloLoginSenha,
  ContainerFormulario,
  ContainerBotao,
  Input,
  ContainerConteudo,
} from "./styles";

import Titulo from "../../../Components/TituloCadastro";
import Botao from "../../../Components/Botao2";
import Passos from "../../../Components/Passos";

import validarCamposVazios from "../../../Fixtures/validarInputVazia";
import { validarInputCorreta } from "../../../Fixtures/validarInputCorreta";

import colors from "../../../Styles/colors";

const LoginSenha = ({ navigation, route }) => {
  YellowBox.ignoreWarnings([
    "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
  ]);

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 150 }));
  const [opacity] = useState(new Animated.Value(0));
  const [img] = useState(new Animated.ValueXY({ x: 110, y: 120 }));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 2,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(img.x, {
        toValue: 90,
        duration: 100,
      }),
      Animated.timing(img.y, {
        toValue: 100,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(img.x, {
        toValue: 110,
        duration: 100,
      }),
      Animated.timing(img.y, {
        toValue: 120,
        duration: 100,
      }),
    ]).start();
  }

  var novoPaciente = route.params;

  const inputLogin = useRef(null);
  const inputSenha = useRef(null);
  const inputConfirmarSenha = useRef(null);

  const [cadastroLoginSenha, setLoginSenha] = useState({
    login: "",
    senha: "",
    confirmarSenha: "",
  });

  const navegarTelefone = () => {
    const arrayInputsVazias = validarCamposVazios(
      cadastroLoginSenha,
      "complemento"
    );

    if (arrayInputsVazias.length) {
      console.warn("Existem campos vazios");

      const inputErroStyle = { style: { borderColor: "red" } };

      arrayInputsVazias.find((campo) => campo === "login")
        ? inputLogin.current.setNativeProps(inputErroStyle)
        : "";

      arrayInputsVazias.find((campo) => campo === "senha")
        ? inputSenha.current.setNativeProps(inputErroStyle)
        : "";

      arrayInputsVazias.find((campo) => campo === "confirmarSenha")
        ? inputConfirmarSenha.current.setNativeProps(inputErroStyle)
        : "";
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
      <ContainerImgLoginSenha>
      <Animated.Image
          source={require("../../../Assets/cadeado.jpg")}
          style={{
            width: img.x,
            height: 0,
            paddingBottom: img.y,
          }}
        />
      </ContainerImgLoginSenha>

      <ContainerConteudo
        style={[
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
        <KeyboardAvoidingView behavior="height" enabled>
          <ScrollView>
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
                onBlur={() =>
                  validarInputCorreta(novoPaciente.login, inputLogin)
                }
              />
              <Input
                value={cadastroLoginSenha.senha}
                onChangeText={(e) =>
                  setLoginSenha({ ...cadastroLoginSenha, senha: e })
                }
                placeholder="Senha"
                placeholderTextColor="#403e66"
                ref={inputSenha}
                onBlur={() =>
                  validarInputCorreta(novoPaciente.senha, inputSenha)
                }
                secureTextEntry={true}
              />
              <Input
                value={cadastroLoginSenha.confirmarSenha}
                onChangeText={(e) =>
                  setLoginSenha({ ...cadastroLoginSenha, confirmarSenha: e })
                }
                placeholder="Confirmar senha"
                placeholderTextColor="#403e66"
                ref={inputConfirmarSenha}
                onBlur={() =>
                  validarInputCorreta(
                    novoPaciente.confirmarSenha,
                    inputConfirmarSenha
                  )
                }
                secureTextEntry={true}
              />
            </ContainerFormulario>
            <Passos cor1={true} cor2={true} cor3={true} />
            <ContainerBotao>
              <Botao title="Próximo" funcExec={navegarTelefone} />
            </ContainerBotao>
          </ScrollView>
        </KeyboardAvoidingView>
      </ContainerConteudo>
    </Container>
  );
};

export default LoginSenha;
