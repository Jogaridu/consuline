import React, { useEffect, useState } from "react";
import { View, Image, Easing } from "react-native";

import {
    createStackNavigator,
    CardStyleInterpolators,
    TransitionPresets,
} from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Home from "../../Views/Home";
import Perfil from "../../Views/Perfil";
import Consulta from "../../Views/Consulta";
import Geolocalizacao from "../../Views/Geolocalizacao";
import Notificacoes from "../../Views/Notificacoes";

import colors from "../../Styles/colors";
import api from "../../Services/api";

export default HomeNavigator = () => {

    const [notificacao, setNotificacao] = useState();

    useEffect(() => {
        const pegarDados = async () => {
            try {
                const retorno = await api.get("/notificacoes/numero");

                setNotificacao(retorno.data.numero);

            } catch (error) {
                console.log(error);
            }
        }

        pegarDados();

    }, []);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused
                            ? "home"
                            : "home-outline";
                    }
                    else if (route.name === "Perfil") {
                        iconName = focused ? "account" : "account-outline";
                    }
                    else if (route.name === "Agendar") {
                        iconName = focused ? "calendar-range" : "calendar-range-outline";
                    } else if (route.name === "Localização") {
                        iconName = focused ? "compass" : "compass-outline";
                    } else if (route.name === "Notificações") {
                        iconName = focused ? "bell" : "bell-outline";
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.secundaria,
                inactiveTintColor: colors.corTitulo,
            }}
            initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Localização" component={Geolocalizacao} />
            <Tab.Screen name="Agendar" component={Consulta} />
            <Tab.Screen name="Notificações" component={Notificacoes} options={{ tabBarBadge: notificacao }}>

            </Tab.Screen>
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    );
};
