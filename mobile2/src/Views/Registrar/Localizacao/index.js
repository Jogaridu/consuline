import React, { useRef, useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Animated,
  Image,
  Keyboard,
  YellowBox,
  Alert,
} from "react-native";

import encontrarCep from "../../../Services/viaCep";

import { TextInputMask } from "react-native-masked-text";

import validarCamposVazios from "../../../Fixtures/validarInputVazia";
import {
  validarInputCorreta,
  validarInputMaskCorreta,
} from "../../../Fixtures/validarInputCorreta";

import {
  ContainerImgCadastro,
  ImgLocalizacao,
  ContainerTituloCadastro,
  ContainerFormulario,
  ContainerBotao,
  ContainerConteudo,
} from "./styles";

import Titulo from "../../../Components/TituloCadastro";
import { Input } from "./styles";
import Botao from "../../../Components/Botao2";
import Passos from "../../../Components/Passos";

import colors from "../../../Styles/colors";
import api from "../../../Services/api";

const Localizacao = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("window");

  YellowBox.ignoreWarnings([
    "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
  ]);

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 150 }));
  const [opacity] = useState(new Animated.Value(0));
  const [img] = useState(new Animated.ValueXY({ x: 154, y: 140 }));

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
        toValue: 90,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(img.x, {
        toValue: 154,
        duration: 100,
      }),
      Animated.timing(img.y, {
        toValue: 140,
        duration: 100,
      }),
    ]).start();
  }

  var novoPaciente = route.params;

  const inputCep = useRef(null);
  const inputBairro = useRef(null);
  const inputRua = useRef(null);
  const inputNumero = useRef(null);
  const inputCidade = useRef(null);
  const inputEstado = useRef(null);
  const inputComplemento = useRef(null);

  const [endereco, setEndereco] = useState({
    cep: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
  });

  const preencherFormulario = (enderecocep) => {
    setEndereco({
      ...endereco,
      bairro: enderecocep.bairro,
      rua: enderecocep.logradouro,
      cidade: enderecocep.localidade,
      estado: enderecocep.uf,
    });

    validarInputCorreta(novoPaciente.bairro, inputBairro);
    validarInputCorreta(novoPaciente.rua, inputRua);
    validarInputCorreta(novoPaciente.cidade, inputCidade);
    validarInputCorreta(novoPaciente.estado, inputEstado);
  };

  const handlerInput = (e) => {
    var cep = e;
    var separador = "-";
    var arrayCep = cep.split(separador);

    var cep1 = arrayCep[0];
    var cep2 = arrayCep[1];
    var cepNovo = cep1 + cep2;

    setEndereco({
      ...endereco,
      cep: cepNovo,
      bairro: "",
      cidade: "",
      estado: "",
      rua: "",
    });
  };

  const navegarLoginSenha = () => {
    const arrayInputsVazias = validarCamposVazios(endereco, "complemento");

    if (arrayInputsVazias.length) {
      Alert.alert("Existem campos vazios");

      const inputErroStyle = { style: { borderColor: "red" } };

      arrayInputsVazias.find((campo) => campo === "cep")
        ? inputCep.current.getElement().setNativeProps(inputErroStyle)
        : "";

      arrayInputsVazias.find((campo) => campo === "bairro")
        ? inputBairro.current.setNativeProps(inputErroStyle)
        : "";

      arrayInputsVazias.find((campo) => campo === "rua")
        ? inputRua.current.setNativeProps(inputErroStyle)
        : "";

      arrayInputsVazias.find((campo) => campo === "numero")
        ? inputNumero.current.getElement().setNativeProps(inputErroStyle)
        : "";

      arrayInputsVazias.find((campo) => campo === "cidade")
        ? inputCidade.current.setNativeProps(inputErroStyle)
        : "";

      arrayInputsVazias.find((campo) => campo === "estado")
        ? inputEstado.current.setNativeProps(inputErroStyle)
        : "";
    } else {
      novoPaciente = { ...novoPaciente, endereco };

      navigation.navigate("RegistrarLoginSenha", novoPaciente);
    }
  };

  return (
    <Container>
      <ContainerImgCadastro>
        <Animated.Image
          source={require("../../../Assets/localizacao.png")}
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
              <Titulo title="Localização" />
            </ContainerTituloCadastro>

            <ContainerFormulario>
              <TextInputMask
                style={styles.input}
                value={endereco.cep}
                type={"custom"}
                options={{
                  mask: "99999-999",
                }}
                maxLength={9}
                placeholder="CEP"
                placeholderTextColor="#403e66"
                onChangeText={handlerInput}
                onBlur={async () => {
                    const apiCep = await encontrarCep(endereco.cep);

                    if( apiCep.erro === true ) {
                      Alert.alert("Cep não encontrado. Digite novamente")
                    } else {
                      preencherFormulario(apiCep);
                      validarInputMaskCorreta(novoPaciente.cep, inputCep);
                    }
                }}
                ref={inputCep}
                keyboardType="numeric"
              />
              <Input
                style={{
                  width: 140,
                  marginLeft: 8,
                  backgroundColor: colors.fundo,
                }}
                value={endereco.bairro}
                placeholder="Bairro"
                placeholderTextColor="#403e66"
                ref={inputBairro}
                editable={false}
                selectTextOnFocus={false}
              />
              <Input
                style={{ width: 205, backgroundColor: colors.fundo }}
                value={endereco.rua}
                placeholder="Rua"
                placeholderTextColor="#403e66"
                ref={inputRua}
                editable={false}
                selectTextOnFocus={false}
              />
              <Input
                style={{ marginLeft: 8, backgroundColor: colors.fundo }}
                value={endereco.estado}
                placeholder="Estado"
                placeholderTextColor="#403e66"
                ref={inputEstado}
                editable={false}
                selectTextOnFocus={false}
              />
              <Input
                style={{
                  width: 140,
                  marginLeft: 8,
                  backgroundColor: colors.fundo,
                }}
                value={endereco.cidade}
                placeholder="Cidade"
                placeholderTextColor="#403e66"
                ref={inputCidade}
                editable={false}
                selectTextOnFocus={false}
              />

              <TextInputMask
                style={styles.numero}
                value={endereco.numero}
                onChangeText={(e) => setEndereco({ ...endereco, numero: e })}
                type={"only-numbers"}
                placeholder="N°"
                placeholderTextColor="#403e66"
                ref={inputNumero}
                onBlur={() =>
                  validarInputMaskCorreta(novoPaciente.numero, inputNumero)
                }
              />
              <Input
                value={endereco.complemento}
                placeholder="Complemento"
                placeholderTextColor="#403e66"
                style={{ width: 140 }}
                onChangeText={(e) =>
                  setEndereco({ ...endereco, complemento: e })
                }
                ref={inputComplemento}
                onBlur={() =>
                  validarInputCorreta(
                    novoPaciente.complemento,
                    inputComplemento
                  )
                }
              />
            </ContainerFormulario>
            <Passos cor1={true} cor2={true} />
            <ContainerBotao>
              <Botao title="Próximo" funcExec={navegarLoginSenha} />
            </ContainerBotao>
          </ScrollView>
        </KeyboardAvoidingView>
      </ContainerConteudo>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 140,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: [colors.principal],
    backgroundColor: [colors.container],
    marginBottom: 15,
  },

  numero: {
    width: 70,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: [colors.principal],
    backgroundColor: [colors.container],
    marginBottom: 15,
    marginLeft: 15,
  },
});

export default Localizacao;
