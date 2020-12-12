import styled from "styled-components/native";
import colors from "../../Styles/colors";
// import { RectButton, TouchableOpacity } from "react-native-gesture-handler";

export const Botao = styled.TouchableOpacity`
  border: 1px solid ${colors.principal};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  background-color: ${colors.container};
`;

export const TextoBotao = styled.Text`
  font-size: 22px;
  color: ${colors.principal};
  text-align: center;
  font-weight: bold;
`;