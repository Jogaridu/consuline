import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text } from "react-native";

import Login from "./src/Views/Login";

import Telefone from "./src/Views/Registrar/Telefone";
import InformacaoPessoal from "./src/Views/Registrar/InformacaoPessoal";
import Codigo from "./src/Views/Registrar/Codigo";
import LoginSenha from "./src/Views/Registrar/LoginSenha";
import Foto from "./src/Views/Registrar/Foto";
import Routes from "./src/Navigation/routes";
// import Localizacao from "./src/Views/Registrar/Localizacao";
import Sucesso from "./src/Views/Registrar/Sucesso";
import TelaIncial from "./src/Views/TelaInicial";

export default function App() {
  return (
    <>
      <Routes />
      {/* <Login /> */}
    </>
  );
}
