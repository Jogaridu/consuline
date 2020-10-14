import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text, AsyncStorage, Alert } from "react-native";
// import bcrypt from "bcryptjs";

import Botao from "../../../Components/Botao2";

import {
  TituloInformacoes,
  ContainerEditar,
  FecharEditar,
  ContainerFormulario,
  Input,
} from "../styles";

import validarCamposVazios from "../../../Fixtures/validarInputVazia";

import {
  validarInputCorreta,
  validarInputMaskCorreta,
} from "../../../Fixtures/validarInputCorreta";

import colors from "../../../Styles/colors";

const EditarLogin = (props) => {
  const [dados, setDados] = useState({
    nome: "",
    dataNascimento: "",
    rg: "",
    cpf: "",
    email: "",
    celular: "",
    endereco: {
      bairro: "",
      cep: "",
      cidade: "",
      complemento: "",
      estado: "",
      numero: "",
      rua: "",
    },
    login: "",
    senha: "",
    senhaAntiga: "",
    confirmarSenha: "",
  });
  const [id, setId] = useState();
  const [dadoSenhaAntiga, setSenhaAntiga] = useState();
  const [loading, setLoading] = useState(true);
  const [fechar, setFechar] = useState("");

  const pegarDados = async () => {
    const paciente = JSON.parse(
      await AsyncStorage.getItem("@Consuline:paciente")
    );
    setDados({
      ...dados,
      nome: paciente.nome,
      dataNascimento: paciente.dataNascimento,
      rg: paciente.rg,
      cpf: paciente.cpf,
      email: paciente.email,
      celular: paciente.celular,
      login: paciente.login,
      endereco: {
        bairro: paciente.EnderecoPaciente.bairro,
        cep: paciente.EnderecoPaciente.cep,
        cidade: paciente.EnderecoPaciente.cidade,
        complemento: paciente.EnderecoPaciente.complemento,
        estado: paciente.EnderecoPaciente.estado,
        numero: paciente.EnderecoPaciente.numero,
        rua: paciente.EnderecoPaciente.rua,
      },
    });
    setSenhaAntiga(paciente.senha);
    setId(paciente.id);
    setLoading(false);
  };

  useEffect(() => {
    pegarDados();
  }, []);

  const inputLogin = useRef(null);
  const inputSenhaAntiga = useRef(null);
  const inputSenha = useRef(null);
  const inputConfirmarSenha = useRef(null);

  const validaDados = () => {
    const arrayInputsVazias = validarCamposVazios(
      dados,
      "complemento"
    );

    if (arrayInputsVazias.length) {
      Alert.alert("Existem campos vazios!!!");

      const inputErroStyle = { style: { borderColor: "red" } };

      arrayInputsVazias.find((campo) => campo === "login")
        ? inputLogin.current.setNativeProps(inputErroStyle)
        : "";

      // arrayInputsVazias.find((campo) => campo === "senhaAntiga")
      //   ? inputSenhaAntiga.current.setNativeProps(inputErroStyle)
      //   : "";

      arrayInputsVazias.find((campo) => campo === "senha")
        ? inputSenha.current.setNativeProps(inputErroStyle)
        : "";

      arrayInputsVazias.find((campo) => campo === "confirmarSenha")
        ? inputConfirmarSenha.current.setNativeProps(inputErroStyle)
        : "";
    } else {
      
    }
  };



  if (loading) {
    return (
      <Container>
        <Text>Carregando...</Text>
      </Container>
    );
  } else {
    return (
      <ContainerEditar>
        <FecharEditar onPress={() => props.telaEditar("editar")} />
        <TituloInformacoes style={{ marginTop: 0 }}>Login</TituloInformacoes>
        <ContainerFormulario>
          <Input
            style={{ width: 288 }}
            value={dados.login}
            onChangeText={(e) => setDados({ ...dados, login: e })}
            placeholder="Login"
            placeholderTextColor="#403e66"
            ref={inputLogin}
            onBlur={() => validarInputCorreta(dados.login, inputLogin)}
          />
          <Input
            style={{ width: 288 }}
            value={dados.senhaAntiga}
            onChangeText={(e) => setDados({ ...dados, senhaAntiga: e })}
            placeholder="Senha antiga"
            placeholderTextColor="#403e66"
            ref={inputSenha}
            // onBlur={() => validarInputCorreta(dados.senhaAntiga, inputSenhaAntiga)}
            secureTextEntry={true}
          />
          <Input
            style={{ width: 288 }}
            value={dados.senha}
            onChangeText={(e) => setDados({ ...dados, senha: e })}
            placeholder="Nova senha"
            placeholderTextColor="#403e66"
            ref={inputSenha}
            // onBlur={() => validarInputCorreta(dados.senha, inputSenha)}
            secureTextEntry={true}
          />
          <Input
            style={{ width: 288 }}
            value={dados.confirmarSenha}
            onChangeText={(e) => setDados({ ...dados, confirmarSenha: e })}
            placeholder="Confirmar senha"
            placeholderTextColor="#403e66"
            ref={inputConfirmarSenha}
            // onBlur={() =>
            //   validarInputCorreta(dados.confirmarSenha, inputConfirmarSenha)
            // }
            secureTextEntry={true}
          />
        </ContainerFormulario>
        <Botao title="Editar" funcExec={validaDados} />
      </ContainerEditar>
    );
  }
};

export default EditarLogin;
