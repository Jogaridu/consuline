import React from "react";
import { View, Image, Easing } from "react-native";

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

import TelaInicial from "../../Views/TelaInicial";
import Login from "../../Views/Login";
import InformacaoPessoal from "../../Views/Registrar/InformacaoPessoal";
import Localizacao from "../../Views/Registrar/Localizacao";
import Telefone from "../../Views/Registrar/Telefone";
import Codigo from "../../Views/Registrar/Codigo";
import Foto from "../../Views/Registrar/Foto";
import Sucesso from "../../Views/Registrar/Sucesso";
import CadastroLoginSenha from "../../Views/Registrar/LoginSenha";

import colors from "../../Styles/colors";
import { isSignIn } from "../../Services/security";
import HomeNavigation from "./HomeNavigation";

const optionsHeader = {
  headerBackTitleVisible: false,
  headerBackTitle: "Voltar",
  headerBackTitleVisible: true,

  headerStyle: {
    backgroundColor: colors.container,
  },
  headerTintColor: colors.secundaria,

  headerTitle: true,
};

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 400,
    easing: Easing.linear,
  },
};

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
      }}
      headerMode="float"
      animation="fade"
    >
      <Stack.Screen
        name="TelaInicial"
        component={TelaInicial}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ ...optionsHeader }}
      />

      <Stack.Screen
        name="RegistrarInformacaoPessoal"
        component={InformacaoPessoal}
        options={{ ...optionsHeader }}
      />

      <Stack.Screen
        name="RegistrarLocalizacao"
        component={Localizacao}
        options={{
          ...optionsHeader
        }}
      />

      <Stack.Screen
        name="RegistrarLoginSenha"
        component={CadastroLoginSenha}
        options={{
          ...optionsHeader

        }}
      />

      <Stack.Screen
        name="RegistrarTelefone"
        component={Telefone}
        options={{
          ...optionsHeader
        }}
      />

      <Stack.Screen
        name="RegistrarCodigo"
        component={Codigo}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RegistrarFoto"
        component={Foto}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RegistrarSucesso"
        component={Sucesso}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default LoginNavigator;
