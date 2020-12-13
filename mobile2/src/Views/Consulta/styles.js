import styled from "styled-components/native";
import colors from "../../Styles/colors";

export const ContainerForm = styled.View`
  width: 100%;
  height: auto;
  /* background-color: orange; */
  flex: 5;
`;

export const ContainerListaServicos = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${colors.container};
  margin: 0 auto;
  margin-top: 80px;
  border-radius: 40px;
`;

export const ContainerPassos = styled.View`
  width: 100%;
  height: auto;
`;

export const ContainerBotao = styled.View`
  width: 100%;
  height: auto;
  align-items: center;
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

export const ContainerBotaoBusca = styled.TouchableOpacity`
  width: 80%;
  height: 45px;
  background-color: ${colors.container};
  border-radius: 30px;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  margin: 0 auto;
  margin-bottom: 15px;
  padding-left: 24px;
`;

export const ContainerInputBusca = styled.View`
  width: 80%;
  height: auto;
  background-color: ${colors.fundo};
  border-radius: 30px;
  border-width: 1px;
  border-color: ${colors.principal};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  /* margin-bottom: 20px; */
  padding-left: 24px;
`;

export const ContainerCardServicos = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  margin: 0 auto;
  border-bottom-width: 1px;
  border-color: #c4c4c4;
  align-items: center;
  flex-direction: row;
  margin-bottom: 5px;
  background-color: ${(props) =>
    props.selecionado ? colors.principal : colors.container};
  border-radius: 15px;
  padding-left: 10px;
`;

export const ImgServicos = styled.Image`
  width: 45px;
  height: 45px;
  margin: 0 10px;
  border-radius: 100px;
`;

export const TituloServico = styled.Text`
  font-size: 17px;
  font-weight: 500;
  color: ${(props) =>
    props.selecionado ? colors.container : colors.corTitulo};
`;

export const ContainerBotaoCadastro = styled.View`
  width: 100%;
  height: auto;
  align-items: center;
  margin: 26px 0;
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
  border-color: #c4c4c4;
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

export const ContainerBotaoCardHospital = styled.View`
  width: 100%;
  height: auto;
  align-items: flex-end;
  padding-right: 20px;
`;

export const ContainerHorarios = styled.View`
  width: 100%;
  height: auto;
  /* background-color: blue; */
  padding-left: 30px;
  padding-right: 15px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Horarios = styled.TouchableOpacity`
  width: 85px;
  height: 45px;
  background-color: ${(props) =>
    props.horarioSelecionado === props.id ? colors.principal : colors.fundo};
  border-radius: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const TextoHorario = styled.Text`
  font-size: 16px;
  color: ${(props) =>
    props.horarioSelecionado === props.id ? colors.container : colors.principal};
  font-weight: 500;
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
