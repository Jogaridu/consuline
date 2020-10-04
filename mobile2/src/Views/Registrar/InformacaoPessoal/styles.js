import styled from "styled-components/native";
import colors from "../../../Styles/colors";

export const ContainerImgCadastro = styled.View`
  width: 100%;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px; 
`;

export const ImgInfmPessoais = styled.Image`
  width: 40%;
  height: 0;
  padding-bottom: 40%;
`;

export const ContainerTituloCadastro = styled.View`
  flex: 0.5;
  margin-bottom: 10px;
`;

export const ContainerFormulario = styled.View`
  flex: 4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerBotao = styled.View`
  flex: 1;
  align-self: center;
`;

export const ContainerConteudo = styled.View`
  flex: 5;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.fundo};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const ContainerPasso = styled.View`
  flex: 1;
  /* background: blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

