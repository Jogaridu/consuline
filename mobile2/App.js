import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

import Login from "./src/Views/Login";
import Tela1 from "./src/Views/Registrar/Tela1";

export default function App() {
  return (
    <>
      <Tela1 />
      {/* <Login /> */}
    </>
  );
}
