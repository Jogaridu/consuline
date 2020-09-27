import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import LoginNavigator from "./LoginNavigator";

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginNavigator} options={{
                    headerShown: false,
                    title: ""
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;