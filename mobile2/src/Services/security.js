import { AsyncStorage } from "react-native";
import api from "./api";

const CHAVE_USUARIO = "@sessao";
const CHAVE_PACIENTE = "@Consuline:paciente";

export const signin = async (usuario) => {
  return new Promise(async (resolve, reject) => {
    await AsyncStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));

    api.defaults.headers.common["Authorization"] = `Bearer ${usuario.token}`;

    try {
      const response = await api.get(
        `/paciente/${usuario.paciente.pacienteId}`
      );

      delete response.senha;

      await AsyncStorage.setItem(CHAVE_PACIENTE, JSON.stringify(response.data));

      resolve();
    } catch (error) {
      console.log(error);
      reject();
    }
  });
};

export const signOut = async () => {
  await AsyncStorage.clear();

  api.defaults.headers.common["Authorization"] = undefined;
};

export const isSignIn = async () => {
  const usuario = JSON.parse(await AsyncStorage.getItem(CHAVE_USUARIO));

  console.log(usuario !== null);

  if (usuario) {
    console.log("----", usuario);
    api.defaults.headers.common["Authorization"] = `Bearer ${usuario.token}`;
  }

  return usuario !== null;
};

export const getPaciente = async () => {
  const paciente = JSON.parse(await AsyncStorage.getItem(CHAVE_USUARIO));

  return paciente;
};
