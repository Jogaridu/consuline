import { Animated } from "react-native";
import styled from "styled-components/native";
import colors from "../../../Styles/colors";

export const ContainerImgCodigo = styled.View`
  width: 100%;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ImgCodigo = styled.Image`
  width: 40%;
  height: 0;
  padding-bottom: 40%;
`;

export const ContainerTituloCodigo = styled.View`
  flex: 0.5;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContainerFormularioCodigo = styled.View`
  flex: 2.3;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px;
`;

export const InputCodigo = styled.TextInput`
  height: 75px;
  flex: 0.3;
  background-color: ${colors.container};
  margin: 0 7px;
  text-align: center;
  font-size: 30px;
`;

export const ContainerBotao = styled.View`
  flex: 0.5;
  margin: 0 auto;
  margin-top: 30px;
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

