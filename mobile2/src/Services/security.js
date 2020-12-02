import { AsyncStorage } from "react-native";
import api from "./api";

const CHAVE_USUARIO = "@paciente";

export const signin = async (usuario) => {
    await AsyncStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));

    api.defaults.headers.common['Authorization'] = `Bearer ${usuario.token}`;
}

export const signOut = async () => {
    await AsyncStorage.clear();

    api.defaults.headers.common['Authorization'] = undefined;
}

export const isSignIn = async () => {
    const usuario = JSON.parse(await AsyncStorage.getItem(CHAVE_USUARIO));

    console.log(usuario)

    if (usuario) {
        console.log(usuario.token)
        api.defaults.headers.common['Authorization'] = `Bearer ${usuario.token}`;

    }

    return usuario ? true : false;
}

export const getPaciente = async () => {
    const paciente = JSON.parse(await AsyncStorage.getItem(CHAVE_USUARIO));

    return paciente;
}
