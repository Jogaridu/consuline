import React from "react";
import { View } from "react-native";

import { Botao, TextoBotao } from './styles';

const Botao1 = ( props ) => {
  return (
    <Botao style={{marginBottom: props.margin}}>
      <TextoBotao> {props.title} </TextoBotao>
    </Botao>
  );
};

export default Botao1;
