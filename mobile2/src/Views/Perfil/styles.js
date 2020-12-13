import styled from "styled-components/native";
import colors from "../../Styles/colors";

export const ContainerColor = styled.View`
  flex: 1.1;
  width: 100%;
  background: ${colors.principal};
  padding-bottom: 20px;
`;

export const ContainerPerfil = styled.View`
  flex: 3.5;
  width: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: ${colors.fundo};
  margin-top: -40px;
`;

export const FotoPerfil = styled.Image`
  margin: 0 auto;
  width: 135px;
  height: 135px;
  background: ${colors.container};
  border-radius: 100px;
  margin-top: -80px;
`;

export const ContainerBotaoEditar = styled.View`
  width: 100%;
  height: auto;
  align-items: center;
  margin-top: 10px;
`;

export const BtnEditar = styled.TouchableOpacity`
  width: 152px;
  height: 45px;
  border-radius: 30px;
  background-color: ${colors.principal};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerConteudoInformacoes = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  align-items: center;
  /* background-color: orange; */
`;

export const ContainerInformacoes = styled.View`
  width: 88%;
  height: 190px;
  background-color: ${colors.container};
  margin-bottom: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
`;

export const TituloPerfil = styled.Text`
  width: 200px;
  color: ${colors.corTitulo};
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 18px;
  border-bottom-end-radius: 1px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.principal};
`;

export const ContainerImageInformacoes = styled.View`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const ContainerTextosInformacoes = styled.View`
  width: 80%;
  height: 100%;
`;

export const TituloInformacoes = styled.Text`
  color: ${colors.corTitulo};
  font-weight: bold;
  font-size: 18px;
  margin-top: 18px;
  margin-left: 3px;
  margin-bottom: 15px;
`;

export const TextoInformacoes = styled.Text`
  color: ${colors.corTituloSecundario};
  font-weight: 500;
  font-size: 14px;
  margin-left: 3px;
  margin-bottom: 4px;
`;

// *****************************************************

export const BotaoConsultaEditar = styled.TouchableOpacity`
  width: 88%;
  height: 128px;
  background-color: ${colors.container}; 
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ContainerEditar = styled.View`
  align-items: center;
  background-color: ${colors.container};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const FecharEditar = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-self: flex-end;
  margin-bottom: 5px;
  margin-right: 20px;
  border-radius: 100px;
`;

export const ContainerFormulario = styled.View`
  flex: 4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* background: blue; */
`;

export const Input = styled.TextInput`
  height: 45px;
  border: 1px solid ${colors.principal};
  padding: 10px;
  border-radius: 5px;
  background: ${colors.container};
  margin-bottom: 15px;
`;

export const ContainerBtnLogout = styled.View`
  width: 88%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const BtnLogout = styled.TouchableOpacity`
  width: 120px;
  height: 50px;
  background-color: ${colors.container};
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;