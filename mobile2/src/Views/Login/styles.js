import styled from "styled-components/native";
import colors from "../../Styles/colors";

export const ContainerImgCadastro = styled.View`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ImgLogoLogin = styled.Image`
  width: 245px;
  height: 155px;
`;

export const ContainerConteudo = styled.View`
  flex: 4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.fundo};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;


export const Input = styled.TextInput`
  width: 288px;
  height: 45px;
  border: 1px solid ${colors.principal};
  padding: 10px;
  border-radius: 5px;
  background: ${colors.fundo};
`;

