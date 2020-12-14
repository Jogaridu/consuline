import styled from "styled-components/native";
import colors from "../../Styles/colors";

export const Header = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  margin-top: 30px;
`;

export const Titulo = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.principal};
  margin-left: 10px;
`;

export const ContainerNotificacoes = styled.View`
  width: 95%;
  flex: 7;
  background-color: ${colors.container};
  align-self: flex-end;
  border-top-left-radius: 40px;
`;

export const TituloDatas = styled.Text`
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: ${colors.corTitulo};
  margin-left: 30px;
  margin-top: 30px;
`;

export const Notificacao = styled.View`
  width: 90%;
  height: 65px;
  background-color: ${colors.container};
  /* border-radius: 10px; */
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  border-color: ${colors.principal};
  border-bottom-width: 1px;
  padding-left: 10px;
  padding-bottom: 10px;
`;

export const ContainerImagem = styled.View`
  height: 80%;
  flex: 0.8;
  /* background-color: ${colors.fundo}; */
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const ContainerTextosNot = styled.View`
  flex: 3;
  /* background-color: blue; */
  padding-left: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContaineBotao = styled.View`
  height: 90%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TituloNotificacao = styled.Text`
  font-size: 16px;
  color: ${colors.principal};
  font-weight: bold;
  flex-direction: row;
  flex-flow: wrap;
`;

export const TextoNotificacao = styled.Text`
  font-size: 11px;
  color: ${colors.corTituloSecundario};
  /* align-self: flex-end; */
`;
