import React from "react";
import { View, Image, Easing } from "react-native";

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

import ConsultaEditar from "../Views/Perfil/Editar/consultaEditar";
import EditarInformacaoPessoal from "../Views/Perfil/Editar/editarInformacaoPessoal";
import EditarLocalizacao from "../Views/Perfil/Editar/editarLocalizacao";
import EditarLogin from "../Views/Perfil/Editar/editarLogin";

const PerfilNavigation = () => {
  return (
    <Stack.Navigator title="Editar" initialRouteName="ConsultaEditar">
      <Stack.Screen title="Editar" name="ConsultaEditar" component={ConsultaEditar} />
      <Stack.Screen title="Editar" name="EditarInformacaoPessoal" component={EditarInformacaoPessoal} />
      <Stack.Screen title="Editar" name="EditarLocalizacao" component={EditarLocalizacao} />
      <Stack.Screen title="Editar" name="EditarLogin" component={EditarLogin} />
    </Stack.Navigator>
  );
};

export default PerfilNavigation;
