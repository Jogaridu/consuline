import React from "react";
import { View, Image, Easing } from "react-native";

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

import ConsultaEditar from "../Views/Perfil/Editar/consultaEditar";

const PerfilNavigation = () => {
  return (
    <Stack.Navigator title="Editar" initialRouteName="ConsultaEditar">
      <Stack.Screen title="Editar" name="ConsultaEditar" component={ConsultaEditar} />
    </Stack.Navigator>
  );
};

export default PerfilNavigation;
