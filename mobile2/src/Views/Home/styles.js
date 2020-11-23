import { Animated } from "react-native";
import styled from "styled-components/native";
import colors from "../../Styles/colors";

export const ContainerColor = styled.View`
  flex: 1;
  width: 100%;
  /* background: #625f8c; */
  padding-bottom: 20px;
  flex-direction: row;
`;

export const ContainerConteudoHome = styled.View`
  flex: 2;
  width: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: ${colors.container};
  margin-top: -1px;
  align-items: center;
`;

export const ContainerTextoBoasVindas = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 25px;
  padding-left: 15px;
`;

export const ContainerBtnTheme = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerCardCovid = styled(Animated.View)`
  width: 90%;
  height: 130px;
  background-color: ${colors.principal};
  margin-top: 40px;
  border-radius: 20px;
  flex-direction: row;
`;

export const ContainerImgMedico = styled.Image`
  width: 40%;
  height: 158px;
  margin-top: -40px;
`;

export const ContainerInfrmCardCovid = styled.View`
  width: 60%;
  height: 134px;
  padding-top: 8px;
  align-items: flex-end;
  padding-right: 15px;
`;

export const TextoInfrmCardCovid = styled.Text`
  width: 210px;
  /* background-color: blue; */
  font-size: 20px;
  color: ${colors.container};
  font-weight: bold;
  text-align: right;
`;

export const TituloHome = styled.Text`
  width: 88%;
  margin-top: 34px;
  font-weight: bold;
  font-size: 26px;
  color: ${colors.corTitulo};
  text-align: left;
`;

export const CardConsulta = styled.View`
  width: 85%;
  height: 215px;
  background-color: ${colors.container};
  border: 1px solid ${colors.principal};
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const HeaderCardConsulta = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const InfrmCardConsulta = styled.View`
  flex: 2;
  padding-top: 20px;
`;

export const ImgMedico = styled.Image`
  width: 53px;
  height: 53px;
  margin: 15px 18px;
  border-radius: 100px;
`;

export const ContainerTextosHeader = styled.View`
  width: auto;
  height: 100%;
  margin-left: -7px;
  justify-content: center;
  margin-top: 8px;
`;

export const TitulosCardConsulta = styled.Text`
  font-size: 18px;
  color: ${colors.principal};
  font-weight: bold;
`;

export const TextoCardConsulta = styled.Text`
  font-size: 14px;
  color: ${colors.corTituloSecundario};
  font-weight: bold;
`;

export const ContainerInfrmCardConsulta = styled.View`
  width: auto;
  height: auto;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 18px;
`;
