import styled from 'styled-components/native';
import colors from '../../Styles/colors';

export const CalloutContainer = styled.View`
    width: 100px;
    height: 40px;
    background-color: rgb(255, 255, 255);
    border-radius: 16px;
    margin-left: 35px;
    justify-content: center;
`;

export const TextoCallout = styled.Text`
    font-size: 12px;
    color: ${colors.principal};
    text-align: center;
    font-weight: bold;
`;

export const ContainerHospitais = styled.View`
    width: 90%;
    min-height: 55px;
    height: auto;
    background-color: ${colors.container};
    border-radius: 20px;
    position: absolute;
    top: 5%;
`;

export const ContainerConteudoMap = styled.TouchableOpacity`
    flex: 1;
    min-height: 55px;
    height: auto;
    flex-direction: row;
`; 

export const ContainerTextoMap = styled.View`
    flex: 3;
    justify-content: center;
`;

export const ContainerIconesMap = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ContainerListaHospitais = styled.View`
    flex: 5;
    height: 150px;
    align-items: center;
`;

export const ContainerConteudoInfmr = styled.View`
    width: 100%;
    height: auto;
    padding-top: 20px;
`;

export const ContainerLocalizacao = styled.View`
    width: 100%;
    height: auto;
    align-items: center;
`;

export const ContainerContatos = styled.View`
    width: 100%;
    height: auto;
    /* background-color: pink; */
    align-items: center;
`;

export const TitulosInfmr = styled.Text`
    font-weight: 500;
    font-size: 25px;
    color: ${colors.corTitulo};
    margin-bottom: 11px;
`;

export const TextosInfrm = styled.Text`
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
    color: ${colors.corTituloSecundario};
    text-align: center;
`;

export const BotaoHospital = styled.TouchableOpacity`
    width: 80%;
    height: 45px; 
    /* background-color: ${(props) => props.selecionado === props.id ? colors.principal : colors.fundo}; */
    border-radius: 25px;
    padding-left: 40px;
    justify-content: center;
    
    margin: 0 auto;
    margin-bottom: 10px;
`;

export const TextoBotaoHospital = styled.Text`
    font-size: 14px;
    color: ${colors.principal};
`;