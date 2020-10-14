import React, { useRef } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import {
  TituloInformacoes,
  ContainerEditar,
  FecharEditar,
  ContainerFormulario,
  Input
} from "../styles";

import {
  validarInputCorreta,
  validarInputMaskCorreta,
} from "../../../Fixtures/validarInputCorreta";

import colors from "../../../Styles/colors";

import Botao from "../../../Components/Botao2";

const EditarLocalizacao = (props) => {
  const inputCep = useRef(null);
  const inputBairro = useRef(null);
  const inputRua = useRef(null);
  const inputNumero = useRef(null);
  const inputCidade = useRef(null);
  const inputEstado = useRef(null);
  const inputComplemento = useRef(null);

  return (
    <ContainerEditar>
      <FecharEditar onPress={() => props.telaEditar("editar")} />
      <TituloInformacoes style={{ marginTop: 0 }}>
        Localização
      </TituloInformacoes>
      <ContainerFormulario>
        <TextInputMask
          style={styles.input}
          value=""
          type={"custom"}
          options={{
            mask: "99999-999",
          }}
          maxLength={9}
          placeholder="CEP"
          placeholderTextColor="#403e66"
        //   onChangeText={handlerInput}
          //   onBlur={async () => {
          //     preencherFormulario(await encontrarCep(endereco.cep));
          //     validarInputMaskCorreta(novoPaciente.cep, inputCep);
          //   }}
          ref={inputCep}
          keyboardType="numeric"
        />
        <Input
          style={{
            width: 140,
            marginLeft: 8,
            backgroundColor: colors.fundo,
          }}
          value=""
          placeholder="Bairro"
          placeholderTextColor="#403e66"
          ref={inputBairro}
          editable={false}
          selectTextOnFocus={false}
        />
        <Input
          style={{ width: 205, backgroundColor: colors.fundo }}
          value=""
          placeholder="Rua"
          placeholderTextColor="#403e66"
          ref={inputRua}
          editable={false}
          selectTextOnFocus={false}
        />
        <TextInputMask
          style={styles.numero}
          value=""
          //   onChangeText={(e) => setEndereco({ ...endereco, numero: e })}
          type={"only-numbers"}
          placeholder="N°"
          placeholderTextColor="#403e66"
          ref={inputNumero}
          //   onBlur={() =>
          //     validarInputMaskCorreta(novoPaciente.numero, inputNumero)
          //   }
        />
        <Input
          value=""
          placeholder="Complemento"
          placeholderTextColor="#403e66"
          style={{ width: 140 }}
          //   onChangeText={(e) => setEndereco({ ...endereco, complemento: e })}
          ref={inputComplemento}
          //   onBlur={() =>
          //     validarInputCorreta(novoPaciente.complemento, inputComplemento)
          //   }
        />
        <Input
          style={{
            width: 140,
            marginLeft: 8,
            backgroundColor: colors.fundo,
          }}
          value=""
          placeholder="Cidade"
          placeholderTextColor="#403e66"
          ref={inputCidade}
          editable={false}
          selectTextOnFocus={false}
        />
        <Input
          style={{ marginLeft: 8, backgroundColor: colors.fundo }}
          value=""
          placeholder="Estado"
          placeholderTextColor="#403e66"
          ref={inputEstado}
          editable={false}
          selectTextOnFocus={false}
        />
      </ContainerFormulario>
      <Botao title="Editar" />
    </ContainerEditar>
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

export default EditarLocalizacao;
