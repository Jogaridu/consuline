import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import LoginNavigator from "./LoginNavigator";
import HomeNavigator from "./HomeNavigation";
import PerfilNavigator from "./PerfilNavigation";

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
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
        <Stack.Screen
          name="PerfilEditar"
          component={PerfilNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
