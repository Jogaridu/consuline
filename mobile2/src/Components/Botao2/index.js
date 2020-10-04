import React from "react";
import { View } from "react-native";

import { Botao, TextoBotao } from "./styles";

const Botao2 = (props) => {
  return (
    <Botao
      style={{
        width: props.width || 288,
        marginBottom: props.bottom
      }}
      onPressIn={props.funcExec}
    >
      <TextoBotao> {props.title} </TextoBotao>
    </Botao>
  );
};

export default Botao2;
