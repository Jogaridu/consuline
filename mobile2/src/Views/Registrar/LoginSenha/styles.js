import styled from "styled-components/native";
import colors from "../../../Styles/colors";

export const ContainerImgLoginSenha = styled.View`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: blue; */
`;

export const ImgLoginSenha = styled.Image`
  width: 40%;
  height: 0;
  padding-bottom: 45%;
`;

export const ContainerTituloLoginSenha = styled.View`
  flex: 0.9;
  margin-bottom: 10px;
`;

export const ContainerFormulario = styled.View`
  flex: 3;
  padding-top: 15px;
  display: flex;
  align-items: center;
`;

export const ContainerBotao = styled.View`
  flex: 0.8;
  align-self: flex-end;
  padding: 0 20px;
`;

export const Input = styled.TextInput`
  width: 288px;
  height: 45px;
  border: 1px solid ${colors.principal};
  padding: 10px;
  border-radius: 5px;
  background: ${colors.fundo};
  margin-bottom: 15px;
`;
