import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text } from "react-native";

import Login from "./src/Views/Login";
import Home from "./src/Views/Home";
import Foto from "./src/Views/Registrar/Foto";
import Codigo from "./src/Views/Registrar/Codigo";
import Valida from "./src/Views/Registrar/ValidarCamposExistentes";
import ConsultaEditar from "./src/Views/Perfil/Editar/consultaEditar";
import Routes from "./src/Navigation/routes";

export default function App() {
  return (
    <>
      <Routes />
    </>
  );
}
