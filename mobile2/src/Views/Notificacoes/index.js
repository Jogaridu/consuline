import React, { useEffect, useState } from "react";
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
import api from "../../Services/api";

const Notificacoes = () => {

    const [dados, setDados] = useState([]);
    const now = new Date;
    const dataAtual = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

    useEffect(() => {
        const pegarDados = async () => {
            try {
                const retorno = await api.get("/notificacoes");

                setDados(retorno.data);


            } catch (error) {
                console.log(error);
            }
        }

        pegarDados();

    }, []);

    const NotificacoesBloco = ({ dados }) => {
        return (
            <>
                <Notificacao
                    key={dados.id}
            /*onPress={() => Linking.openURL(whatsapp)}*/ >
                    <ContainerImagem>
                        <Image
                            source={require("../../Assets/iconeNot.png")}
                            style={{ width: 50, height: 50, borderRadius: 100 }}
                        />
                    </ContainerImagem>

                    <ContainerTextosNot>
                        <TituloNotificacao>Entre na chamada</TituloNotificacao>
                        <TextoNotificacao>
                            {dados.mensagem}
                        </TextoNotificacao>
                    </ContainerTextosNot>
                    <ContaineBotao>
                        <RectButton style={styles.botao}>
                            <IconFound name="telephone" color={colors.container} size={28} />
                        </RectButton>
                    </ContaineBotao>
                </Notificacao>
            </>
        )
    }

    return (
        <Container
            style={{ justifyContent: "flex-start", backgroundColor: colors.fundo }}>
            <Header>
                <Icon name="notifications" size={40} color={colors.principal} />
                <Titulo>Notificações</Titulo>
            </Header>
            <ContainerNotificacoes style={{ elevation: 2 }}>
                {!(dados.length === 0) ? dados.map((data, index) => {
                    return (
                        <>
                            <TituloDatas key={index}>{Object.keys(data)[0] === dataAtual ? "Hoje" : Object.keys(data)[0]}</TituloDatas>
                            {data[Object.keys(data)[0]].map(e => <NotificacoesBloco dados={e} />)}
                        </>
                    )

                }) : <Text>Sem notificações</Text>}
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
