import styled from "styled-components/native";
import colors from "../../Styles/colors";

// import { RectButton } from "react-native-gesture-handler";

export const Botao = styled.TouchableOpacity`
  width: 288px;
  background: ${colors.principal};
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export const TextoBotao = styled.Text`
  color: ${colors.container};
  text-align: center;
  font-weight: bold;
`;