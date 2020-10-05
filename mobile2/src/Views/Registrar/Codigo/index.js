import React, { useState, useRef, useEffect } from "react";
import {
  Dimensions,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
  Image,
  Keyboard,
  YellowBox,
} from "react-native";

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";
import Passos from "../../../Components/Passos";

import {
  ContainerImgCodigo,
  ContainerTituloCodigo,
  ImgCodigo,
  ContainerFormularioCodigo,
  ContainerBotao,
  InputCodigo,
  ContainerConteudo,
} from "./styles";

import api from "../../../Services/api";

import colors from "../../../Styles/colors";

const Codigo = ({ navigation, route }) => {
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

  // const pacienteId = route.params;

  const { height, width } = Dimensions.get("window");

  const [codigo, setCodigo] = useState("1234");
  const [codigoLength, setCodigoLength] = useState([]);

  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  const handlerInput = (string, numInput, proxInput = null) => {
    const tamanho = codigoLength;

    if (string !== "") {
      let arrCodigo = codigo.split("");

      arrCodigo[numInput - 1] = string;

      setCodigo(arrCodigo.join(""));

      tamanho.push(true);

      if (proxInput != null) {
        proxInput.current.focus();
      }
    } else {
      tamanho.pop();
    }

    setCodigoLength(tamanho);
  };

  // const verificarCodigo = async () => {
  //   try {
  //     const retorno = await api.post(`/paciente/${pacienteId}/validacao-sms`, {
  //       codigo,
  //     });

  //     if (retorno) {
  //       return true;
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       console.warn("Deu ruim");
  //     }
  //   }
  // };

  const navegarFoto = async () => {
    if ((await verificarCodigo()) == true) {
      navigation.navigate("RegistrarFoto");
    } else {
      console.warn("Código inválido");
    }
  };

  return (
    <Container>
      <ContainerImgCodigo>
      <Animated.Image
          source={require("../../../Assets/codigoVerificado.png")}
          style={{
            width: img.x,
            height: 0,
            paddingBottom: img.y,
          }}
        />
      </ContainerImgCodigo>

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
            <ContainerTituloCodigo>
              <Titulo title="Insira o código enviado" />
            </ContainerTituloCodigo>

            <ContainerFormularioCodigo>
              <InputCodigo
                keyboardType="numeric"
                maxLength={1}
                onChangeText={(string) => handlerInput(string, 1, input2)}
              />
              <InputCodigo
                ref={input2}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={(string) => handlerInput(string, 2, input3)}
              />
              <InputCodigo
                ref={input3}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={(string) => handlerInput(string, 3, input4)}
              />
              <InputCodigo
                ref={input4}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={(string) => handlerInput(string, 4)}
              />
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  marginTop: 30,
                  fontWeight: "bold",
                  marginBottom: 30,
                }}
              >
                Não recebi o código no número{" "}
                <Text style={{ color: "#0095C5" }}>(11)96368-8640</Text>
              </Text>
            </ContainerFormularioCodigo>
            <Passos cor1={true} cor2={true} cor3={true} cor4={true} />
            <ContainerBotao>
              <Botao
                title="Verificar"
                funcExec={() => {
                  // mostrarCodigo()
                  if (codigoLength.length === 4) {
                    navegarFoto();
                  } else {
                    console.warn("Digite os 4 dígitos");
                  }
                }}
              />
            </ContainerBotao>
          </ScrollView>
        </KeyboardAvoidingView>
      </ContainerConteudo>
    </Container>
  );
};

export default Codigo;
