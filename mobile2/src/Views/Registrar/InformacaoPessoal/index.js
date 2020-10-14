import React, { useState, useRef, useEffect } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  Animated,
  Image,
  Keyboard,
  YellowBox
} from "react-native";
import { TextInputMask as Input } from "react-native-masked-text";

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import Botao from "../../../Components/Botao2";
import Passos from "../../../Components/Passos";

import validarCamposVazios from "../../../Fixtures/validarInputVazia";
import {
  validarInputCorreta,
  validarInputMaskCorreta,
} from "../../../Fixtures/validarInputCorreta";

import {
  ContainerFormulario,
  ContainerImgCadastro,
  ContainerTituloCadastro,
  ContainerBotao,
  ContainerConteudo,
} from "./styles";

import colors from "../../../Styles/colors";

const InformacaoPessoal = ({ navigation, route }) => {
  var [novoPaciente, setNovoPaciente] = useState({
    nome: "",
    dataNascimento: "",
    rg: "",
    cpf: "",
    email: "",
  });

  YellowBox.ignoreWarnings(['Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`']);

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

  const { height, width } = Dimensions.get("window");

  const inputNome = useRef(null);
  const inputData = useRef(null);
  const inputRg = useRef(null);
  const inputCpf = useRef(null);
  const inputEmail = useRef(null);

  const maskNome = (e) => {
    var nome = e.replace(/[^a-zA-z À-ÿ]/g, "");
    setNovoPaciente({ ...novoPaciente, nome: nome });
  };

  const tratamentoDados = () => {
    var dataNascimento = novoPaciente.dataNascimento;
    var separador = "-";
    var arrayData = dataNascimento.split(separador);

    var ano = arrayData[2];
    var mes = arrayData[1];
    var dia = arrayData[0];

    const dataNova = ano + "-" + mes + "-" + dia;

    var rg = novoPaciente.rg;
    var cpf = novoPaciente.cpf;

    const rgParse = rg.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
    const cpfParse = cpf.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");

    novoPaciente = {
      ...novoPaciente,
      dataNascimento: dataNova,
      rg: rgParse,
      cpf: cpfParse,
    };
  };

  const navegarLocalizacao = () => {
    tratamentoDados();

    const arrayInputsVazias = validarCamposVazios(novoPaciente);

    if (arrayInputsVazias.length) {
      console.warn("Existem campos vazios");

      const inputErroStyle = { style: { borderColor: "red" } };

      arrayInputsVazias.find((campo) => campo === "dataNascimento")
        ? inputData.current
            .getElement()
            .setNativeProps({ style: { borderColor: "red" } })
        : "";

      arrayInputsVazias.find((campo) => campo === "rg")
        ? inputRg.current.getElement().setNativeProps(inputErroStyle)
        : "";

      arrayInputsVazias.find((campo) => campo === "cpf")
        ? inputCpf.current.getElement().setNativeProps(inputErroStyle)
        : "";

      arrayInputsVazias.find((campo) => campo === "email")
        ? inputEmail.current.setNativeProps(inputErroStyle)
        : "";
    } else {
      navigation.navigate("RegistrarLocalizacao", novoPaciente);
    }
  };

  return (
    <Container>
      <ContainerImgCadastro>
        <Animated.Image
          source={require("../../../Assets/user.png")}
          style={{
            width: img.x,
            height: 0,
            paddingBottom: img.y,
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
            <ContainerTituloCadastro>
              <Titulo title="Informações pessoais" />
            </ContainerTituloCadastro>

            <ContainerFormulario>
              <TextInput
                style={[styles.input]}
                value={novoPaciente.nome}
                id="nome"
                onChangeText={maskNome}
                placeholder="Nome Completo"
                placeholderTextColor="#403e66"
                ref={inputNome}
                onBlur={() => validarInputCorreta(novoPaciente.nome, inputNome)}
              />
              
              <TextInput
                style={styles.input}
                value={novoPaciente.email}
                id="email"
                onChangeText={(e) =>
                  setNovoPaciente({ ...novoPaciente, email: e })
                }
                placeholder="Email"
                placeholderTextColor="#403e66"
                ref={inputEmail}
                onBlur={() =>
                  validarInputCorreta(novoPaciente.email, inputEmail)
                }
                autoCompleteType="email"
              />
              <Input
                style={styles.input}
                type={"datetime"}
                options={{
                  format: "99-99-9999",
                }}
                value={novoPaciente.dataNascimento}
                id="dataNasc"
                onChangeText={(e) =>
                  setNovoPaciente({ ...novoPaciente, dataNascimento: e })
                }
                placeholder="Data de Nascimento"
                placeholderTextColor="#403e66"
                ref={inputData}
                onBlur={() =>
                  validarInputMaskCorreta(
                    novoPaciente.dataNascimento,
                    inputData
                  )
                }
              />
              <Input
                style={styles.rg}
                type={"custom"}
                options={{
                  mask: "99.999.999-9",
                }}
                value={novoPaciente.rg}
                id="rg"
                keyboardType="numeric"
                onChangeText={(e) =>
                  setNovoPaciente({ ...novoPaciente, rg: e })
                }
                placeholder="RG"
                placeholderTextColor="#403e66"
                ref={inputRg}
                onBlur={() => validarInputMaskCorreta(novoPaciente.rg, inputRg)}
              />
              <Input
                style={styles.cpf}
                type={"cpf"}
                value={novoPaciente.cpf}
                id="cpf"
                onChangeText={(e) =>
                  setNovoPaciente({ ...novoPaciente, cpf: e })
                }
                placeholder="CPF"
                placeholderTextColor="#403e66"
                ref={inputCpf}
                onBlur={() =>
                  validarInputMaskCorreta(novoPaciente.cpf, inputCpf)
                }
              />
            </ContainerFormulario>
            <Passos cor1={true} />
            <ContainerBotao>
              <Botao title="Próximo" funcExec={navegarLocalizacao} />
            </ContainerBotao>
          </ScrollView>
        </KeyboardAvoidingView>
      </ContainerConteudo>
    </Container>
  );
};

const styles = StyleSheet.create({
  erroInput: {
    width: 288,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: [colors.fundo],
    marginBottom: 15,
    borderColor: "#FF0000",
    color: "#FF0000",
  },

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
  rg: {
    width: 136,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: [colors.principal],
    backgroundColor: [colors.container],
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
    backgroundColor: [colors.container],
    marginBottom: 15,
  },
});

export default InformacaoPessoal;
