import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import LoginNavigator from "./routes/LoginNavigator";
import HomeNavigator from "./routes/HomeNavigation";
import PerfilNavigator from "./routes/PerfilNavigation";
import ConsultaNavigator from "./routes/ConsultaNavigation";
import LocalizacaoNavigator from "./routes/LocalizacaoNavigation";
import { isSignIn } from "../Services/security";

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={!isSignIn() ? "Home" : "Login"}>
        <Stack.Screen
          name="Login"
          component={LoginNavigator}
          options={{
            headerShown: false,
            title: "",
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="PerfilEditar" component={PerfilNavigator} />
        <Stack.Screen
          name="Consulta"
          component={ConsultaNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LocalizacaoNavigator"
          component={LocalizacaoNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
