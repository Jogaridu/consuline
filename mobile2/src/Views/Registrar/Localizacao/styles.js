import styled from 'styled-components/native';
import colors from '../../../Styles/colors';

export const ContainerImgCadastro = styled.View`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImgLocalizacao = styled.Image`
    width: 77%;
    height: 0;
    padding-bottom: 70%;
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
    align-self: flex-end;
    padding: 0 20px;
`;

export const Input = styled.TextInput`
  height: 45px;
  border: 1px solid ${colors.principal};
  padding: 10px;
  border-radius: 5px;
  background: ${colors.fundo};
  margin-bottom: 15px;
`;