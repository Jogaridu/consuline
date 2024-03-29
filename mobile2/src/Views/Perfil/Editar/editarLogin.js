import React, { useRef, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  AsyncStorage,
  Alert,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Botao from "../../../Components/Botao2";
import Container from "../../../Components/Container";

import api from "../../../Services/api";

import {
  TituloInformacoes,
  ContainerEditar,
  FecharEditar,
  ContainerFormulario,
  Input,
  TituloPerfil,
} from "../styles";

import validarCamposVazios from "../../../Fixtures/validarInputVazia";

import {
  validarInputCorreta,
  validarInputMaskCorreta,
} from "../../../Fixtures/validarInputCorreta";

import colors from "../../../Styles/colors";

const EditarLogin = ({ navigation }) => {
  const [dados, setDados] = useState({
    login: "",
    senha: "",
    senhaAntiga: "",
    confirmarSenha: "",
  });
  const [id, setId] = useState();
  const [loading, setLoading] = useState(true);
  const [fechar, setFechar] = useState("");

  const pegarDados = async () => {
    const paciente = JSON.parse(
      await AsyncStorage.getItem("@Consuline:paciente")
    );
    setDados({
      ...dados,
      login: paciente.login,
    });
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

  const validaDados = async () => {
    
    const arrayInputsVazias = validarCamposVazios(dados, "complemento");

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
      try {

        const retorno = await api.post(`/paciente/${id}/verificar-senha`, {
          senhaAntiga: dados.senhaAntiga,
        });
        console.log("aqui")
        if (retorno.status === 200) {
          console.log("200")
          const atualizarPaciete = await api.put(`/paciente/${id}`, {
            // login: dados.login,
            senha: dados.senha,
          });

          Alert.alert("Senha atualizada com sucesso!!!");

          //dispara um evento com o nome realoadUsuario
          EventRegister.emit("reloadPerfil", dados);

          return navigation.navigate("Perfil");
        }
      } catch (error) {
        // mostrar msg de erro
        console.log(error);
      }
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
      <Container style={{ backgroundColor: colors.fundo }}>
        <FecharEditar onPress={() => navigation.navigate("ConsultaEditar")}>
        <Icon name="close" size={42} color="#911" />
        </FecharEditar>
        <TituloPerfil style={{ marginTop: 5, fontSize: 20 }}>
          Login
        </TituloPerfil>
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
        <Botao title="Editar" funcExec={validaDados} bottom={20} />
      </Container>
    );
  }
};

export default EditarLogin;
