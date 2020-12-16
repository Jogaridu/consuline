import React from "react";
import { View, StyleSheet } from "react-native";

import { TextoBotao, Botao } from "./styles";

// import { RectButton } from "react-native-gesture-handler";

import colors from "../../Styles/colors";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";

const Botao1 = (props) => {
  return (
    <Botao
      style={{ width: props.width || 288, height: props.height || 55 }}
      onPress={props.funcExec}
    >
      <TextoBotao style={{ fontSize: props.fontSize || 22 }}>
        {" "}
        {props.title}{" "}
      </TextoBotao>
    </Botao>
  );
};

export { Botao1 };
