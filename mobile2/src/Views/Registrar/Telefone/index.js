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

import colors from "../../../Styles/colors";

import api from "../../../Services/api";

import {
  ContainerImgTelefone,
  ImgTelefone,
  ContainerTituloTelefone,
  ContainerFormularioTelefone,
  ContainerBotao,
  ContainerConteudo,
  ContainerPasso,
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
        const teste = {
          nome: "Jorge",
          celular: "11963688640",
          login: "jogaridu",
          senha: "123",
          dataNascimento: "2001-01-30",
          email: "e-jorge2010@hotmail.com",
          rg: "385604294",
          cpf: "44284537873",
          endereco:
            '{ "rua": "Rua Jorge", "bairro": "Bairro Jorge", "numero": "121212", "complemento": "casa 12", "cep": "12345-123", "cidade": "Jandira", "estado": "SP" }',
        };
        const retorno = await api.post("/paciente", {
          ...novoPaciente,
          endereco: JSON.stringify(novoPaciente.endereco),
        });

        console.log(retorno.data);
        if (retorno.status === 201) {
          navigation.navigate("RegistrarCodigo");
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
        <ImgTelefone source={require("../../../Assets/vetorCelular.jpg")} />
      </ContainerImgTelefone>

      <ContainerConteudo>
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
              />
            </ContainerFormularioTelefone>
            <ContainerPasso>
              <Text> Aqui fica os Passos </Text>
            </ContainerPasso>
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
    backgroundColor: [colors.fundo],
    marginBottom: 15,
  },
});

export default Telefone;
