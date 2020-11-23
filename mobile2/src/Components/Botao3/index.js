import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../../Styles/colors";
import { RectButton } from "react-native-gesture-handler";

import { TextoBotao } from "./styles";

const Botao3 = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <RectButton style={styles.botao} onPress={() => {setLoading(!loading); props.funcExec() }} >
      {loading ? (
        <ActivityIndicator size={40} color={colors.container} />
      ) : (
        <TextoBotao style={{ fontSize: props.fontSize || 22 }}>
          {" "}
          {props.title}{" "}
        </TextoBotao>
      )}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  botao: {
    width: 288,
    height: 55,
    backgroundColor: colors.principal,
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 16,
  },
});

export default Botao3;
