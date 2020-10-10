import React, { useRef } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

import Botao from "../../../Components/Botao2";

import {
  TituloInformacoes,
  ContainerEditar,
  FecharEditar,
  ContainerFormulario,
  Input,
} from "../styles";

import {
  validarInputCorreta,
  validarInputMaskCorreta,
} from "../../../Fixtures/validarInputCorreta";

import colors from "../../../Styles/colors";

const EditarLogin = (props) => {
  const inputLogin = useRef(null);
  const inputSenha = useRef(null);
  const inputConfirmarSenha = useRef(null);

  return (
    <ContainerEditar>
      <FecharEditar onPress={() => props.telaEditar("editar")} />
      <TituloInformacoes style={{ marginTop: 0 }}>Login</TituloInformacoes>
      <ContainerFormulario>
        <Input
          style={{ width: 288 }}
          value=""
          //   onChangeText={(e) =>
          //     setLoginSenha({ ...cadastroLoginSenha, login: e })
          //   }
          placeholder="Login"
          placeholderTextColor="#403e66"
          ref={inputLogin}
          //   onBlur={() => validarInputCorreta(novoPaciente.login, inputLogin)}
        />
        <Input
          style={{ width: 288 }}
          value=""
          //   onChangeText={(e) =>
          //     setLoginSenha({ ...cadastroLoginSenha, senha: e })
          //   }
          placeholder="Senha"
          placeholderTextColor="#403e66"
          ref={inputSenha}
          //   onBlur={() => validarInputCorreta(novoPaciente.senha, inputSenha)}
          secureTextEntry={true}
        />
        <Input
          style={{ width: 288 }}
          value=""
          //   onChangeText={(e) =>
          //     setLoginSenha({ ...cadastroLoginSenha, confirmarSenha: e })
          //   }
          placeholder="Confirmar senha"
          placeholderTextColor="#403e66"
          ref={inputConfirmarSenha}
          //   onBlur={() =>
          //     validarInputCorreta(
          //       novoPaciente.confirmarSenha,
          //       inputConfirmarSenha
          //     )
          //   }
          secureTextEntry={true}
        />
      </ContainerFormulario>
      <Botao title="Editar" />
    </ContainerEditar>
  );
};

export default EditarLogin;
