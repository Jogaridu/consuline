import React, { useState, useRef } from "react";
import {
  Dimensions,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

import {
  ContainerImgCodigo,
  ContainerTituloCodigo,
  ImgCodigo,
  ContainerFormularioCodigo,
  ContainerBotao,
  InputCodigo,
} from "./styles";

const Codigo = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("window");
  const [codigo, setCodigo] = useState("1234");
  const [codigoLength, setCodigoLength] = useState([]);

  console.log(route.params.registrar);

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

  const mostrarCodigo = () => console.warn(codigoLength);

  const navegarFoto = () => {
    navigation.navigate("RegistrarFoto");
  };

  return (
    <Container>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <ContainerImgCodigo>
            <ImgCodigo
              source={require("../../../Assets/codigoVerificado.png")}
            />
          </ContainerImgCodigo>

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
            <Text style={{ fontSize: 15, textAlign: "center", marginTop: 30 }}>
              Não recebi o código no número (11)96368-8640
            </Text>
          </ContainerFormularioCodigo>

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
    </Container>
  );
};

export default Codigo;
