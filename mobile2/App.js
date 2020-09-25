import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

import Login from "./src/Views/Login";
import InformacaoPessoal from "./src/Views/Registrar/InformacaoPessoal";
import Localizacao from "./src/Views/Registrar/Localizacao";
import Sucesso from "./src/Views/Registrar/Sucesso";

export default function App() {
  return (
    <>
      {/* <InformacaoPessoal /> */}
      {/* <Login /> */}
      <Sucesso />
    </>
  );
}
