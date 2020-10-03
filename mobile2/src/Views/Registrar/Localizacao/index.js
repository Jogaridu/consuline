import React, { useRef, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import encontrarCep from "../../../Services/viaCep";

import { TextInputMask } from "react-native-masked-text";

import validarCamposVazios from "../../../Fixtures/validarInputVazia";
import { validarInputCorreta, validarInputMaskCorreta } from "../../../Fixtures/validarInputCorreta";

import {
  ContainerImgCadastro,
  ImgLocalizacao,
  ContainerTituloCadastro,
  ContainerFormulario,
  ContainerBotao,
} from "./styles";

import Titulo from "../../../Components/TituloCadastro";
import { Input } from "./styles";
import Botao from "../../../Components/Botao2";

import colors from "../../../Styles/colors";

const Localizacao = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("window");

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
    var cepNovo = cep1 + cep2

    setEndereco({ ...endereco, cep: cepNovo });

  };

  const navegarLoginSenha = () => {

    const arrayInputsVazias = validarCamposVazios(endereco, "complemento");

    if (arrayInputsVazias.length) {

      console.warn("Existem campos vazios");

      const inputErroStyle = { style: { borderColor: "red" } };

      arrayInputsVazias.find(campo => campo === "cep") ?
        inputCep.current.getElement().setNativeProps(inputErroStyle) : "";

      arrayInputsVazias.find(campo => campo === "bairro") ?
        inputBairro.current.setNativeProps(inputErroStyle) : "";

      arrayInputsVazias.find(campo => campo === "rua") ?
        inputRua.current.setNativeProps(inputErroStyle) : "";

      arrayInputsVazias.find(campo => campo === "numero") ?
        inputNumero.current.getElement().setNativeProps(inputErroStyle) : "";

      arrayInputsVazias.find(campo => campo === "cidade") ?
        inputCidade.current.setNativeProps(inputErroStyle) : "";

      arrayInputsVazias.find(campo => campo === "estado") ?
        inputEstado.current.setNativeProps(inputErroStyle) : "";

    } else {

      novoPaciente = { ...novoPaciente, endereco };

      navigation.navigate("RegistrarLoginSenha", novoPaciente);

    }
  };

  return (
    <Container>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <ContainerImgCadastro>
            <ImgLocalizacao
              source={require("../../../Assets/localizacao.jpg")}
            />
          </ContainerImgCadastro>
          <ContainerTituloCadastro>
            <Titulo title="Localização" />
          </ContainerTituloCadastro>

          <ContainerFormulario>
            <TextInputMask
              style={styles.input}
              value={endereco.cep}
              type={"custom"}
              options={{
                mask: "99999-999"
              }}
              maxLength={9}
              placeholder="CEP"
              placeholderTextColor="#403e66"
              onChangeText={handlerInput}
              onBlur={async () => {
                preencherFormulario(await encontrarCep(endereco.cep));
                validarInputMaskCorreta(novoPaciente.cep, inputCep);
              }
              }
              ref={inputCep}
            />
            <Input
              style={{ width: 140, marginLeft: 8 }}
              value={endereco.bairro}
              placeholder="Bairro"
              placeholderTextColor="#403e66"
              ref={inputBairro}
              onBlur={() => validarInputCorreta(novoPaciente.bairro, inputBairro)}
            />
            <Input
              style={{ width: 205 }}
              value={endereco.rua}
              placeholder="Rua"
              placeholderTextColor="#403e66"
              ref={inputRua}
              onBlur={() => validarInputCorreta(novoPaciente.rua, inputRua)}
            />
            <TextInputMask
              style={styles.numero}
              value={endereco.numero}
              onChangeText={(e) => setEndereco({ ...endereco, numero: e })}
              type={"only-numbers"}
              placeholder="N°"
              placeholderTextColor="#403e66"
              ref={inputNumero}
              onBlur={() => validarInputMaskCorreta(novoPaciente.numero, inputNumero)}
            />
            <Input
              value={endereco.complemento}
              placeholder="Complemento"
              placeholderTextColor="#403e66"
              style={{ width: 140 }}
              onChangeText={(e) => setEndereco({ ...endereco, complemento: e })}
              ref={inputComplemento}
              onBlur={() => validarInputCorreta(novoPaciente.complemento, inputComplemento)}
            />
            <Input
              style={{ width: 140, marginLeft: 8 }}
              value={endereco.cidade}
              placeholder="Cidade"
              placeholderTextColor="#403e66"
              ref={inputCidade}
              onBlur={() => validarInputCorreta(novoPaciente.cidade, inputCidade)}
            />
            <Input
              style={{ marginLeft: 8 }}
              value={endereco.estado}
              placeholder="Estado"
              placeholderTextColor="#403e66"
              ref={inputEstado}
              onBlur={() => validarInputCorreta(novoPaciente.estado, inputEstado)}
            />
          </ContainerFormulario>
          <ContainerBotao>
            <Botao title="Próximo" width={130} funcExec={navegarLoginSenha} />
          </ContainerBotao>
        </ScrollView>
      </KeyboardAvoidingView>
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
    backgroundColor: [colors.fundo],
    marginBottom: 15,
  },

  numero: {
    width: 70,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: [colors.principal],
    backgroundColor: [colors.fundo],
    marginBottom: 15,
    marginLeft: 15,
  },
});

export default Localizacao;
