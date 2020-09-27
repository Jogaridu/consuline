import React from "react";
import { View, Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Login from "../Views/Login";
import InformacaoPessoal from "../Views/Registrar/InformacaoPessoal";
import Localizacao from "../Views/Registrar/Localizacao";
import Telefone from "../Views/Registrar/Telefone";
import Codigo from "../Views/Registrar/Codigo";
import Foto from "../Views/Registrar/Foto";
import Sucesso from "../Views/Registrar/Sucesso";

import colors from "../Styles/colors";

const optionsHeader = {
    headerBackTitleVisible: false,
    headerBackTitle: "",

    headerStyle: {
        backgroundColor: colors.secundaria,
    },
    headerTintColor: '#fff',

    title: "",
};

const LoginNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

            <Stack.Screen name="RegistrarInformacaoPessoal" component={InformacaoPessoal} options={{
                ...optionsHeader
            }} />

            <Stack.Screen name="RegistrarLocalizacao" component={Localizacao} options={{
                ...optionsHeader,
                animationEnabled: false,
            }} />

            <Stack.Screen name="RegistrarTelefone" component={Telefone} options={{
                ...optionsHeader,
                animationEnabled: false,
            }} />

            <Stack.Screen name="RegistrarCodigo" component={Codigo} options={{
                ...optionsHeader,
                animationEnabled: false,
            }} />

            <Stack.Screen name="RegistrarFoto" component={Foto} options={{
                ...optionsHeader,
                animationEnabled: false,
            }} />

            <Stack.Screen name="RegistrarSucesso" component={Sucesso} options={{
                ...optionsHeader,
                animationEnabled: false,
            }} />

        </Stack.Navigator>
    );
}

export default LoginNavigator;