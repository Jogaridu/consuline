import React from "react";
import { View } from "react-native";

import { Botao, TextoBotao } from './styles';

const Botao1 = (props) => {
  return (
    <Botao
      style={{ marginBottom: props.bottom || 0 }}
      onPressIn={props.funcExec}>

      <TextoBotao> {props.title} </TextoBotao>
    </Botao>
  );
};

export { Botao1 };
