import styled from 'styled-components/native';
import colors from '../../../Styles/colors';

export const ContainerImgCadastro = styled.View`
    width: 100%;
  /* height: 25%; */  
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px; 
`;

export const ImgLocalizacao = styled.Image`
    width: 42%;
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

export const Input = styled.TextInput`
  height: 45px;
  border: 1px solid ${colors.principal};
  padding: 10px;
  border-radius: 5px;
  background: ${colors.fundo};
  margin-bottom: 15px;
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