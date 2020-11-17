import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text } from "react-native";

import Login from "./src/Views/Login";
import Home from "./src/Views/Home";
import Foto from "./src/Views/Registrar/Foto";
import Codigo from "./src/Views/Registrar/Codigo";
import Valida from "./src/Views/Registrar/ValidarCamposExistentes";
import ConsultaEditar from "./src/Views/Perfil/Editar/consultaEditar";

import Agendamento from "./src/Views/Consulta/Form/agendamento";
import Servico from "./src/Views/Consulta/Form/servicos";
import Atendimento from "./src/Views/Consulta/Form/atendimento";
import Profissional from "./src/Views/Consulta/Form/escolhaMedicos";
import Pagamento from "./src/Views/Consulta/Form/pagamento";

import Routes from "./src/Navigation/routes";

export default function App() {
  return (
    <>
      <Pagamento />
    </>
  );
}
