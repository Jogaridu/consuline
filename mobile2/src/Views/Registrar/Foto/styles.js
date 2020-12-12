import { Animated } from "react-native";
import styled from "styled-components/native";
import colors from "../../../Styles/colors";

export const ContainerTextos = styled.View`
  flex: 1.5;
`;

export const ContainerImgFoto = styled.View`
  flex: 4;
  display: flex;
  justify-content: center;
`;

export const ContainerBotao = styled.View`
  flex: 2;
  /* width: 100%; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ImgCodigo = styled.Image`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;

export const ContainerConteudo = styled(Animated.View)`
  flex: 3;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.fundo};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const ContainerPassos = styled.View`
    flex: 2;
    margin-top: 25px;
`;

