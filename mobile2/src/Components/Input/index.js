import React from "react";
import { View } from "react-native";

import { TextInput } from "./styles";

const Input = (props) => {
  return (
    <TextInput
      style={{
        marginBottom: props.marginBottom == null ? 15 : props.marginBottom,
        width: !props.width ? 288 : props.width,
        marginLeft: !props.marginLeft ? 0 : props.marginLeft,
      }}
      placeholder={props.plch}
      placeholderTextColor="#403e66"
    />
  );
};

export default Input;
