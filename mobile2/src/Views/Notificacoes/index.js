import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconFound from "react-native-vector-icons/Foundation";
import { RectButton } from "react-native-gesture-handler";

import {
  Titulo,
  Header,
  ContainerNotificacoes,
  TituloDatas,
  Notificacao,
  TextoNotificacao,
  TituloNotificacao,
  ContainerTextosNot,
  ContainerImagem,
  ContaineBotao,
} from "./styles";
import Container from "../../Components/Container";
import colors from "../../Styles/colors";

const Notificacoes = () => {
  return (
    <Container
      style={{ justifyContent: "flex-start", backgroundColor: colors.fundo }}
    >
      <Header>
        <Icon name="notifications" size={40} color={colors.principal} />
        <Titulo>Notificações</Titulo>
      </Header>
      <ContainerNotificacoes style={{ elevation: 2 }}>
        <TituloDatas>Hoje</TituloDatas>
        <Notificacao
        /*onPress={() => Linking.openURL(whatsapp)}*/
        >
          <ContainerImagem>
            <Image
              source={require("../../Assets/fotoMedico.png")}
              style={{ width: 50, height: 50, borderRadius: 100 }}
            />
          </ContainerImagem>

          <ContainerTextosNot>
            <TituloNotificacao>Sua consula começou</TituloNotificacao>
            <TextoNotificacao>
              Pressione aqui para começar a{"\n"}sua consulta.
            </TextoNotificacao>
          </ContainerTextosNot>
          <ContaineBotao>
              <RectButton style={styles.botao}>
              <IconFound name="telephone" color={colors.container} size={28} />
              </RectButton>
          </ContaineBotao>
        </Notificacao>
        <TituloDatas>10/12</TituloDatas>
        <Notificacao
        /*onPress={() => Linking.openURL(whatsapp)}*/
        >
          <ContainerImagem>
            <Image
              source={require("../../Assets/fotoMedico.png")}
              style={{ width: 50, height: 50, borderRadius: 100 }}
            />
          </ContainerImagem>

          <ContainerTextosNot>
            <TituloNotificacao>Mensagem</TituloNotificacao>
            <TextoNotificacao>
              Pressione aqui para começar a{"\n"}sua consulta.
            </TextoNotificacao>
          </ContainerTextosNot>
          <ContaineBotao>
              <RectButton style={styles.botao}>
              <IconFound name="telephone" color={colors.container} size={28} />
              </RectButton>
          </ContaineBotao>
        </Notificacao>
      </ContainerNotificacoes>
    </Container>
  );
};

const styles = StyleSheet.create({
    botao: {
      width: 40,
      height: 40,
      backgroundColor: colors.principal,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
    },

  });

export default Notificacoes;
