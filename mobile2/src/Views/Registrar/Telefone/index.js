import React, { useState, useRef } from "react";
import {
  Dimensions,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { TextInputMask as Input } from "react-native-masked-text";

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

import { validarInputMaskCorreta } from "../../../Fixtures/validarInputCorreta";

import colors from "../../../Styles/colors";

import api from "../../../Services/api";

import {
  ContainerImgTelefone,
  ImgTelefone,
  ContainerTituloTelefone,
  ContainerFormularioTelefone,
  ContainerBotao,
} from "./styles";

const Telefone = ({ navigation, route }) => {
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
      console.warn("Existem campos vazios");

      const inputErroStyle = { style: { borderColor: "red" } };

      inputNumero.current.getElement().setNativeProps(inputErroStyle);

    } else {
      novoPaciente = { ...novoPaciente, celular: celularParse };

      try {
        const retorno = await api.post("/paciente", { ...novoPaciente, endereco: JSON.stringify(novoPaciente.endereco) });

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
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <ContainerImgTelefone>
            <ImgTelefone source={require("../../../Assets/vetorCelular.jpg")} />
          </ContainerImgTelefone>

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
              onBlur={() => validarInputMaskCorreta(novoPaciente.numero, inputNumero)}
            />
          </ContainerFormularioTelefone>

          <ContainerBotao>
            <Botao title="Próximo" width={130} funcExec={registrarPaciente} />
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
});

export default Telefone;
