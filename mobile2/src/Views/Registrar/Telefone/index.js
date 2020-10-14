import React, { useState, useRef, useEffect } from "react";
import {
  Dimensions,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
  Image,
  Keyboard,
  YellowBox,
  Alert
} from "react-native";

import { TextInputMask as Input } from "react-native-masked-text";

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";
import Passos from "../../../Components/Passos";

import { validarInputMaskCorreta } from "../../../Fixtures/validarInputCorreta";

import colors from "../../../Styles/colors";

import api from "../../../Services/api";

import {
  ContainerImgTelefone,
  ImgTelefone,
  ContainerTituloTelefone,
  ContainerFormularioTelefone,
  ContainerBotao,
  ContainerConteudo,
} from "./styles";

const Telefone = ({ navigation, route }) => {
  YellowBox.ignoreWarnings([
    "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
  ]);

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 150 }));
  const [opacity] = useState(new Animated.Value(0));
  const [img] = useState(new Animated.ValueXY({ x: 140, y: 140 }));

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
        toValue: 100,
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
        toValue: 140,
        duration: 100,
      }),
      Animated.timing(img.y, {
        toValue: 140,
        duration: 100,
      }),
    ]).start();
  }

  var novoPaciente = route.params;

  const [celular, setCelular] = useState("");

  const inputNumero = useRef(null);

  const { height, width } = Dimensions.get("window");

  const registrarPaciente = async () => {
    var dadoCelular = celular;

    const celularParse = dadoCelular.replace(
      /([\u0300-\u036f]|[^0-9a-zA-Z])/g,
      ""
    );

    novoPaciente = { ...novoPaciente, celular: celularParse };

    if (celular === "") {
      Alert.alert("Existem campos vazios");

      const inputErroStyle = { style: { borderColor: "red" } };

      inputNumero.current.getElement().setNativeProps(inputErroStyle);
    } else {
      novoPaciente = { ...novoPaciente, celular: celularParse };
      console.log(novoPaciente);
      try {
        const retorno = await api.post("/paciente", novoPaciente);
        
        if (retorno.status === 201) {
          
          navigation.navigate("RegistrarCodigo", retorno.data.id);
        }
      } catch (error) {
        if (error.response) {
          return console.log(error);
        }

        console.log(error);
      }
    }
  };

  return (
    <Container>
      <ContainerImgTelefone>
      <Animated.Image
          source={require("../../../Assets/vetorCelular.jpg")}
          style={{
            width: img.x,
            height: 0,
            paddingBottom: img.y,
          }}
        />
      </ContainerImgTelefone>

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
            <ContainerTituloTelefone>
              <Titulo title="Celular" />
              <Text style={{ fontSize: 20, textAlign: "center" }}>
                Insira seu número de celular para verificar sua conta
              </Text>
            </ContainerTituloTelefone>

            <ContainerFormularioTelefone>
              <Input
                style={styles.input}
                type={"cel-phone"}
                options={{
                  maskType: "BRL",
                  withDDD: true,
                  dddMask: "(99) ",
                }}
                value={celular}
                onChangeText={(e) => setCelular(e)}
                placeholder="Número"
                placeholderTextColor="#403e66"
                ref={inputNumero}
                onBlur={() =>
                  validarInputMaskCorreta(novoPaciente.numero, inputNumero)
                }
              />
            </ContainerFormularioTelefone>
            <Passos cor1={true} cor2={true} cor3={true} cor4={true} />
            <ContainerBotao>
              <Botao title="Próximo" funcExec={registrarPaciente} />
            </ContainerBotao>
          </ScrollView>
        </KeyboardAvoidingView>
      </ContainerConteudo>
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
    backgroundColor: [colors.container],
    marginBottom: 15,
  },
});

export default Telefone;
