import React, { useRef } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { TextInputMask as Input } from "react-native-masked-text";

import Botao from "../../../Components/Botao2";

import {
  TituloInformacoes,
  ContainerEditar,
  FecharEditar,
  ContainerFormulario,
} from "../styles";

import {
  validarInputCorreta,
  validarInputMaskCorreta,
} from "../../../Fixtures/validarInputCorreta";

import colors from "../../../Styles/colors";

const EditarInformacaoPessoal = (props) => {

  const inputNome = useRef(null);
  const inputData = useRef(null);
  const inputRg = useRef(null);
  const inputCpf = useRef(null);
  const inputEmail = useRef(null);

  return (
    <ContainerEditar>
      <FecharEditar onPress={() => props.telaEditar("editar")} />
      <TituloInformacoes style={{ marginTop: 0 }}>
        Informações pessoais
      </TituloInformacoes>
      <ContainerFormulario>
        <TextInput
          style={[styles.input]}
          value=""
          id="nome"
          // onChangeText={maskNome}
          placeholder="Nome Completo"
          placeholderTextColor="#403e66"
          ref={inputNome}
          // onBlur={() => validarInputCorreta(novoPaciente.nome, inputNome)}
        />

        <TextInput
          style={styles.input}
          value=""
          id="email"
          // onChangeText={(e) => setNovoPaciente({ ...novoPaciente, email: e })}
          placeholder="Email"
          placeholderTextColor="#403e66"
          ref={inputEmail}
          // onBlur={() => validarInputCorreta(novoPaciente.email, inputEmail)}
          autoCompleteType="email"
        />
        <Input
          style={styles.input}
          type={"datetime"}
          options={{
            format: "99-99-9999",
          }}
          value=""
          id="dataNasc"
          // onChangeText={(e) =>
          //   setNovoPaciente({ ...novoPaciente, dataNascimento: e })
          // }
          placeholder="Data de Nascimento"
          placeholderTextColor="#403e66"
          ref={inputData}
          // onBlur={() =>
          //   validarInputMaskCorreta(novoPaciente.dataNascimento, inputData)
          // }
        />
        <Input
          style={styles.rg}
          type={"custom"}
          options={{
            mask: "99.999.999-9",
          }}
          value=""
          id="rg"
          keyboardType="numeric"
          // onChangeText={(e) => setNovoPaciente({ ...novoPaciente, rg: e })}
          placeholder="RG"
          placeholderTextColor="#403e66"
          ref={inputRg}
          // onBlur={() => validarInputMaskCorreta(novoPaciente.rg, inputRg)}
        />
        <Input
          style={styles.cpf}
          type={"cpf"}
          value=""
          id="cpf"
          // onChangeText={(e) => setNovoPaciente({ ...novoPaciente, cpf: e })}
          placeholder="CPF"
          placeholderTextColor="#403e66"
          ref={inputCpf}
          // onBlur={() => validarInputMaskCorreta(novoPaciente.cpf, inputCpf)}
        />
      </ContainerFormulario>
      <Botao title="Editar" />
    </ContainerEditar>
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

export default EditarInformacaoPessoal;
