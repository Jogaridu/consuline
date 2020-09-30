import styled from "styled-components/native";
import colors from "../../Styles/colors";

export const Botao = styled.TouchableOpacity`
  width: 288px;
  height: 50px;
  background: ${colors.principal};
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

export const TextoBotao = styled.Text`
  font-size: 22px;
  color: ${colors.container};
  text-align: center;
  font-weight: bold;
`;