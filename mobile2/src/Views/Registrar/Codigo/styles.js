import styled from 'styled-components/native';
import colors from '../../../Styles/colors';

export const ContainerSeta = styled.View`
    flex: 0.7;
    display: flex;
    justify-content: center;
`;

export const ImgLeft = styled.Image`
    width: 15%;
    height: 0;
    padding-bottom: 15%;
    margin-left: 10px;
`;

export const ContainerImgCodigo = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImgCodigo = styled.Image`
    width: 80%;
    height: 0;
    padding-bottom: 80%;
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
`;

export const InputCodigo = styled.TextInput`
    height: 75px;
    flex: 0.3;
    background-color: rgb(237,237,237);
    margin: 0 7px;
    text-align: center;
    font-size: 30px;
`;

export const ContainerBotao = styled.View`
    flex: 0.5;
    padding: 0 20px;
`;

