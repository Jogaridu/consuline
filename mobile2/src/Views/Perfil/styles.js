import styled from "styled-components/native";
import colors from "../../Styles/colors";

export const ContainerColor = styled.View`
  flex: 1;
  width: 100%;
  background: ${colors.principal};
  padding-bottom: 20px;
`;

export const ContainerPerfil = styled.View`
  flex: 3;
  width: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: ${colors.fundo};
  margin-top: -40px;
`;

export const FotoPerfil = styled.View`
  margin: 0 auto;
  width: 150px;
  height: 150px;
  background: ${colors.container};
  border-radius: 100px;
  margin-top: -100px;
`;

export const BtnEditar = styled.TouchableOpacity`
  width: 55px;
  height: 35px;
  background: ${colors.container};
  left: 75%;
  margin-top: -30px;
  border-radius: 10px;
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
  margin-top: 8px;
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
  width: 30px;
  height: 30px;
  background: red;
  align-self: flex-end;
  margin-top: 10px;
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
