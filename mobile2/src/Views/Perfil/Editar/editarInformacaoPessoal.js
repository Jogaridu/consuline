import React, { useRef, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  AsyncStorage,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
import { TextInputMask as Input } from "react-native-masked-text";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { EventRegister } from 'react-native-event-listeners'

import Botao from "../../../Components/Botao3";
import Container from "../../../Components/Container";

import {
  TituloInformacoes,
  ContainerEditar,
  FecharEditar,
  ContainerFormulario,
  TituloPerfil,
} from "../styles";

import validarCamposVazios from "../../../Fixtures/validarInputVazia";
import {
  validarInputCorreta,
  validarInputMaskCorreta,
} from "../../../Fixtures/validarInputCorreta";

import colors from "../../../Styles/colors";

import api from "../../../Services/api";

const EditarInformacaoPessoal = ({ navigation }) => {
  const [dados, setDados] = useState({
    nome: "",
    dataNascimento: "",
    rg: "",
    cpf: "",
    email: "",
    celular: "",
  });
  const [id, setId] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pegarDados = async () => {
      const paciente = JSON.parse(
        await AsyncStorage.getItem("@Consuline:paciente")
      );
      setDados(paciente);
      setId(paciente.id);
      setLoading(false);
    };

    pegarDados();
  }, []);

  const inputNome = useRef(null);
  const inputData = useRef(null);
  const inputRg = useRef(null);
  const inputCpf = useRef(null);
  const inputEmail = useRef(null);
  const inputNumero = useRef(null);

  const maskNome = (e) => {
    var nome = e.replace(/[^a-zA-z À-ÿ]/g, "");
    setDados({ ...dados, nome: nome });
  };

  const tratamentoDados = () => {
    var dataNascimento = dados.dataNascimento;
    var separador = "-";
    var arrayData = dataNascimento.split(separador);

    var ano = arrayData[2];
    var mes = arrayData[1];
    var dia = arrayData[0];

    const dataNova = ano + "-" + mes + "-" + dia;

    var rg = dados.rg;
    var cpf = dados.cpf;

    const rgParse = rg.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
    const cpfParse = cpf.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");

    var dadoCelular = dados.celular;

    const celularParse = dadoCelular.replace(
      /([\u0300-\u036f]|[^0-9a-zA-Z])/g,
      ""
    );

    setDados({
      ...dados,
      dataNascimento: dataNova,
      rg: rgParse,
      cpf: cpfParse,
      celular: celularParse,
    });
  };

  const validaDados = () => {
    tratamentoDados();

    const arrayInputsVazias = validarCamposVazios(dados);

    if (arrayInputsVazias.length) {
      Alert.alert("Existem campos vazios!!!");

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
      editar();
    }
  };

  const editar = async () => {
    try {
      const retorno = await api.put(`/paciente/${id}`, dados);

      if (retorno.status === 200) {
        Alert.alert("Dados editados com sucesso!!!");

        //dispara um evento com o nome realoadUsuario
        EventRegister.emit("reloadPerfil", dados);

        return (navigation.navigate("Perfil"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <Container style={{ backgroundColor: colors.fundo }}>
        <ActivityIndicator size={40} color={colors.principal} />
      </Container>
    );
  } else {
    return (
      <Container style={{ backgroundColor: colors.fundo }}>
        <FecharEditar onPress={() => navigation.navigate("ConsultaEditar")}>
          <Icon name="close" size={42} color="#911" />
        </FecharEditar>
        <TituloPerfil style={{ marginTop: 5, fontSize: 20 }}>
          Informações pessoais
        </TituloPerfil>
        <ContainerFormulario>
          <TextInput
            style={[styles.input]}
            value={dados.nome}
            id="nome"
            onChangeText={maskNome}
            placeholder="Nome Completo"
            placeholderTextColor="#403e66"
            ref={inputNome}
            onBlur={() => validarInputCorreta(dados.nome, inputNome)}
          />

          <TextInput
            style={styles.input}
            value={dados.email}
            id="email"
            onChangeText={(e) => setDados({ ...dados, email: e })}
            placeholder="Email"
            placeholderTextColor="#403e66"
            ref={inputEmail}
            onBlur={() => validarInputCorreta(dados.email, inputEmail)}
            autoCompleteType="email"
          />
          <Input
            style={styles.input}
            type={"cel-phone"}
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99) ",
            }}
            value={dados.celular}
            onChangeText={(e) =>
              setDados({
                ...dados,
                celular: e,
              })
            }
            placeholder="Número"
            placeholderTextColor="#403e66"
            ref={inputNumero}
            onBlur={() => validarInputMaskCorreta(dados.numero, inputNumero)}
          />
          <Input
            style={styles.input}
            type={"datetime"}
            options={{
              format: "99-99-9999",
            }}
            value={dados.dataNascimento}
            id="dataNasc"
            onChangeText={(e) =>
              setDados({
                ...dados,
                dataNascimento: e,
              })
            }
            placeholder="Data de Nascimento"
            placeholderTextColor="#403e66"
            ref={inputData}
            onBlur={() =>
              validarInputMaskCorreta(dados.dataNascimento, inputData)
            }
          />
          <Input
            style={styles.rg}
            type={"custom"}
            options={{
              mask: "99.999.999-9",
            }}
            value={dados.rg}
            id="rg"
            keyboardType="numeric"
            onChangeText={(e) => setDados({ ...dados, rg: e })}
            placeholder="RG"
            placeholderTextColor="#403e66"
            ref={inputRg}
            onBlur={() => validarInputMaskCorreta(dados.rg, inputRg)}
          />
          <Input
            style={styles.cpf}
            type={"cpf"}
            value={dados.cpf}
            id="cpf"
            onChangeText={(e) => setDados({ ...dados, cpf: e })}
            placeholder="CPF"
            placeholderTextColor="#403e66"
            ref={inputCpf}
            onBlur={() => validarInputMaskCorreta(dados.cpf, inputCpf)}
          />
        </ContainerFormulario>
        <Botao title="Editar" funcExec={validaDados} bottom={20} />
      </Container>
    );
  }
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
