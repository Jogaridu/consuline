import { Animated } from "react-native";
import styled from "styled-components/native";
import colors from "../../../Styles/colors";

export const ContainerImgTelefone = styled.View`
  width: 100%;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ImgTelefone = styled.Image`
  width: 40%;
  height: 0;
  padding-bottom: 40%;
`;

export const ContainerTituloTelefone = styled.View`
  flex: 1.3;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContainerFormularioTelefone = styled.View`
  flex: 3;
  padding-top: 20px;
  display: flex;
  align-items: center;
`;

export const ContainerBotao = styled.View`
  flex: 1;
  align-self: center;
  padding: 0 20px;
`;

export const ContainerConteudo = styled(Animated.View)`
  flex: 5;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.fundo};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

