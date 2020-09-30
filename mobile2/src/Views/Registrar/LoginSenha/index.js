import React, { useState } from "react";
import { Dimensions, KeyboardAvoidingView, ScrollView } from "react-native";

import {
  ContainerImgLoginSenha,
  ImgLoginSenha,
  ContainerTituloLoginSenha,
  ContainerFormulario,
  ContainerBotao,
  Input,
} from "./styles";

import Titulo from "../../../Components/TituloCadastro";
import Botao from "../../../Components/Botao2";

const LoginSenha = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("window");

  var novoPaciente = route.params;

  const [cadastroLoginSenha, setLoginSenha] = useState({
    login: "",
    senha: "",
    confirmarSenha: "",
  });

  const navegarTelefone = () => {
    novoPaciente = {
      ...novoPaciente,
      login: cadastroLoginSenha.login,
      senha: cadastroLoginSenha.senha,
    };
    navigation.navigate("RegistrarTelefone", novoPaciente);
  };

  return (
    <Container>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <ContainerImgLoginSenha>
            <ImgLoginSenha source={require("../../../Assets/cadeado.jpg")} />
          </ContainerImgLoginSenha>
          <ContainerTituloLoginSenha>
            <Titulo title="Crie um Login e uma Senha" />
          </ContainerTituloLoginSenha>
          <ContainerFormulario>
            <Input
              value={cadastroLoginSenha.login}
              onChangeText={(e) =>
                setLoginSenha({ ...cadastroLoginSenha, login: e })
              }
              placeholder="Login"
              placeholderTextColor="#403e66"
            />
            <Input
              value={cadastroLoginSenha.senha}
              onChangeText={(e) =>
                setLoginSenha({ ...cadastroLoginSenha, senha: e })
              }
              placeholder="Senha"
              placeholderTextColor="#403e66"
            />
            <Input
              value={cadastroLoginSenha.confirmarSenha}
              onChangeText={(e) =>
                setLoginSenha({ ...cadastroLoginSenha, confirmarSenha: e })
              }
              placeholder="Confirmar senha"
              placeholderTextColor="#403e66"
            />
          </ContainerFormulario>
          <ContainerBotao>
            <Botao title="Próximo" width={130} funcExec={navegarTelefone} />
          </ContainerBotao>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default LoginSenha;
