import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

import InfrmFilial from "../../Views/Geolocalizacao/infrmFilial";

const Stack = createStackNavigator();

const LocalizacaoNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="InformacoesFilial">
      <Stack.Screen
        name="InformacoesFilial"
        component={InfrmFilial}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default LocalizacaoNavigation;
