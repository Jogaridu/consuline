import styled from 'styled-components/native';
import colors from '../../Styles/colors';

export const ImgFundo = styled.ImageBackground`
    width: 100%;
    height: 100%;
`; 

export const Titulo = styled.Text`
    position: absolute;
    font-size: 34px;
    font-weight: bold;
    text-align: left;
    color: ${colors.container};
    top: 14%;
    left: 6%;
`;

export const ContainerBotao = styled.View`
    width: 100%;
    height: auto;
    position: absolute;
    align-items: center;
    bottom: 6%;
`;

export const TituloCadastro = styled.Text`
    font-size: 35px;
    color: ${colors.corTitulo};
    font-weight: bold;
    margin: 20px;
    text-align: left;
`;

export const Label = styled.Text`
    font-size: 25px;
    color: ${colors.corTitulo};
    font-weight: bold;
    margin: 10px 20px;
`; 

export const ContainerInputBusca = styled.View`
    width: 90%;
    height: auto;
    background-color: ${colors.container};
    border-radius: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-left: 30px;
    border-width: 1px;
    border-color: ${colors.principal};
`;

export const ContainerBotaoCadastro = styled.View`
    width: 100%;
    height: auto;
    align-items: center;
    margin: 26px 0;
`;

export const ContainerCardServicos = styled.View`
    width: 100%;
    height: 110px;
    /* background-color: orange; */
    padding-left: 15px;
    flex-direction: row;
`;

export const BtnServicos = styled.TouchableOpacity`
    width: 105px;
    height: 110px;
    /* background-color: purple; */
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`;

export const ImgServicos = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 100px;
`;

export const TituloServicos = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: ${colors.corTitulo};
    margin-top: 5px;
`;

export const BtnMedicos = styled.TouchableOpacity`
    width: 320px;
    height: 80px;
    background-color: ${colors.container};
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    border-radius: 20px;
    border-bottom-width: 1px;
    border-color: ${colors.corTituloSecundario};
`;

export const ContainerImgMedico = styled.View`
    flex: 1;
    /* background-color: orange; */
    align-items: center;
    justify-content: center;
`;

export const ImgMedico = styled.Image`
    width: 55px;
    height: 55px;
    border-radius: 100px;
`;

export const ContainerInfrmMedico = styled.View`
    flex: 3;
    /* background-color: pink; */
`;

export const ContainerEstrelas = styled.View`
    width: 100%;
    height: auto;
    align-items: flex-start;
`;

export const ContainerValor = styled.View`
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
    /* background-color: orange; */
    text-align: left;
`;

export const ContainerRadioButton = styled.View`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    margin-top: 10px;
`;

export const ItemRadioButton = styled.View`
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
`;

export const Select = styled.Picker`
    height: 50px; 
    width: 160px;
    margin: 0 auto;
    padding-left: 10px;
    background-color: ${colors.container};
`;

export const BotaoPlataforma = styled.TouchableOpacity`
    width: 85%;
    height: 60px;
    margin: 0 auto;
    padding-left: 40px;
    border-bottom-width: 1px;
    border-color: #C4C4C4;
    flex-direction: row;
    align-items: center;
`;


export const CardHospital = styled.View`
    width: 80%;
    min-height: 55px;
    height: auto;
    background-color: ${colors.container};
    margin: 0 auto;
    border-radius: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    border-width: 1px;
    border-color: ${colors.principal};
    padding-top: 10px;
    margin-bottom: 20px;
`;

export const ContainerInfrmHospital = styled.View`
    width: 100%;
    height: auto;
    /* background-color: orange; */
    flex-direction: column;
    padding-left: 25px;
`;

export const TituloTextoHospital = styled.Text`
    font-size: 15px;
    color: ${colors.principal};
    font-weight: bold;
`;

export const TextoHospital = styled.Text`
    font-size: 15px;
    color: ${colors.corTituloSecundario};
    font-weight: 500;
    padding-top: 5px;
`;


