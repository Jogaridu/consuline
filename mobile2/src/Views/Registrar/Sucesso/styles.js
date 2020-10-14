import styled from "styled-components/native";
import colors from "../../../Styles/colors";

export const Container = styled.SafeAreaView`
  background-color: ${colors.principal};
  flex: 1;
  padding-top: ${Platform.OS === "android" ? 25 + "px" : 0 + "px"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Botao = styled.TouchableOpacity`
  width: 288px;
  height: 50px;
  background: ${colors.container};
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

export const TextoBotao = styled.Text`
  font-size: 22px;
  color: ${colors.principal};
  text-align: center;
  font-weight: bold;
`;

export const ContainerTextos = styled.View`
  flex: 1;
  /* background: green; */
`;

export const ContainerImgSucesso = styled.View`
  width: 100%;
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgSucesso = styled.Image`
  width: 60%;
  height: 0;
  padding-bottom: 60%;
`;

export const ContainerBotao = styled.View`
  flex: 1;
  padding: 0 20px;
  /* background: pink; */
`;
