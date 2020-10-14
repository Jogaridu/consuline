import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text } from "react-native";

import Login from "./src/Views/Login";
import Home from "./src/Views/Home";
import ConsultaEditar from "./src/Views/Perfil/Editar/consultaEditar";
import Routes from "./src/Navigation/routes";

export default function App() {
  return (
    <>
      <Routes />
      {/* <Home /> */}
    </>
  );
}
