import React from "react";
import { View } from "react-native";

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

import Consulta from "../../Views/Consulta";
import Servicos from "../../Views/Consulta/Form/servicos";
import EscolhaMedicos from "../../Views/Consulta/Form/escolhaMedicos";
import Atendimento from "../../Views/Consulta/Form/atendimento";
import Agendamento from "../../Views/Consulta/Form/agendamento";
import Pagamento from "../../Views/Consulta/Form/pagamento";
import Sucesso from "../../Views/Consulta/Form/sucesso";
import HomeNavigation from "./HomeNavigation";

const Stack = createStackNavigator();

const ConsultaNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Servicos">
      <Stack.Screen
        name="ConsultaNavigation"
        component={Consulta}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Servicos"
        component={Servicos}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Atendimento"
        component={Atendimento}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="EscolhaMedicos"
        component={EscolhaMedicos}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Agendamento"
        component={Agendamento}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Pagamento"
        component={Pagamento}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Sucesso"
        component={Sucesso}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ConsultaNavigation;
