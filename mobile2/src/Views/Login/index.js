import React, { useState, useEffect } from "react";
import {
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  FlatList,
  Animated,
  Image,
  Keyboard,
  YellowBox,
  Alert,
  AsyncStorage,
} from "react-native";

import { Botao1 } from "../../Components/Botao1";
import Botao3 from "../../Components/Botao3";
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
  YellowBox.ignoreWarnings([
    "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
  ]);

  const [pacienteLogin, setPacienteLogin] = useState({
    login: "",
    senha: "",
  });
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 150 }));
  const [opacity] = useState(new Animated.Value(0));
  const [img] = useState(new Animated.ValueXY({ x: 240, y: 240 }));

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
        toValue: 150,
        duration: 100,
      }),
      Animated.timing(img.y, {
        toValue: 150,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(img.x, {
        toValue: 240,
        duration: 100,
      }),
      Animated.timing(img.y, {
        toValue: 240,
        duration: 100,
      }),
    ]).start();
  }

  const navegarTelaInicial = () => {
    navigation.navigate("TelaInicial");
  };

  const handlerInputLogin = (string) =>
    setPacienteLogin({ ...pacienteLogin, login: string });
  const handlerInputSenha = (string) =>
    setPacienteLogin({ ...pacienteLogin, senha: string });

  const autenticarPaciente = async () => {
    try {
      const resApi = await api.post("/paciente/sessao", pacienteLogin);
      const dadosResposta = resApi.data;

      const id = dadosResposta.paciente.pacienteId;

      const resApiFBPK = await api.get(`/paciente/${id}`);

      if (resApiFBPK.data.verificado) {
        const dadosPaciente = resApiFBPK.data;

        delete dadosPaciente.senha;

        // const dadosPaciente = JSON.stringify(resApiFBPK.data);

        await AsyncStorage.setItem(
          "@Consuline:paciente",
          JSON.stringify(dadosPaciente)
        );

        // const paciente = JSON.parse((await AsyncStorage.getItem("@Consuline:paciente")));

        // paciente.nome = "novo nome";

        // await AsyncStorage.setItem("@Consuline:paciente", JSON.stringify(paciente));

        return navigation.navigate("Home");
      } else {
        Alert.alert(
          "Você precisa inserir o código de verificação para logar!!!"
        );
        return navigation.navigate("RegistrarCodigo", resApiFBPK.data.id);
      }
    } catch (error) {
      Alert.alert("Usuário ou Senha incorreto!!!");
    }
  };

  return (
    <Container>
      <ContainerImgCadastro>
        <Animated.Image
          source={require("../../Assets/logo.png")}
          style={{
            width: img.x,
            height: 0,
            paddingBottom: img.y,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </ContainerImgCadastro>

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

            <Botao3 title="Entrar" funcExec={() => autenticarPaciente()} />
            <Botao1 title="Não tenho cadastro" funcExec={navegarTelaInicial} />
          </ScrollView>
        </KeyboardAvoidingView>
      </ContainerConteudo>
    </Container>
  );
};

export default Login;
