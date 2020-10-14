import React from "react";
import { View } from "react-native";

import { TextInput } from "./styles";

const Input = (props) => {
  return (
    <TextInput
      style={{
        marginBottom: props.marginBottom || 15,
        width: props.width || 288,
        marginLeft: props.marginLeft || 0,
      }}
      placeholder={props.plch}
      placeholderTextColor="#403e66"
      onChangeText={props.handler}
    />
  );
};

export default Input;
