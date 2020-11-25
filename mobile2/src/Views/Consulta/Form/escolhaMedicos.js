import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, Button } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

import Container from "../../../Components/Container";
import colors from "../../../Styles/colors";
import Passos from "../../../Components/Passos";

import {
    TituloCadastro,
    BtnMedicos,
    ContainerImgMedico,
    ImgMedico,
    ContainerInfrmMedico,
    ContainerEstrelas,
    Label,
} from "../styles";

import api from "../../../Services/api";

const CardMedico = (props) => {

    return (
        <BtnMedicos onPress={() => props.navigateCalendar(props.id)}>
            <ContainerImgMedico>
                <ImgMedico source={{ uri: props.imagem }} />
            </ContainerImgMedico>
            <ContainerInfrmMedico>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: colors.principal,
                        marginBottom: 3,
                        marginTop: 14,
                    }}>
                    {props.nome}
                </Text>
                <ContainerEstrelas>
                    <Rating imageSize={20} readonly startingValue={5} />
                </ContainerEstrelas>
            </ContainerInfrmMedico>
        </BtnMedicos>
    );
};

const EscolhaMedicos = ({ navigation, route }) => {
    const [dadosMedico, setDadosMedico] = useState(null);
    const [loading, setLoading] = useState(true);
    let novaConsulta = route.params;

    const pegarDados = async () => {
        const retorno = await api.get("/profissional");

        setDadosMedico(retorno.data);
        setLoading(false);
    };

    const navigateCalendar = (profissionalId) => {

        if (profissionalId !== "") {
            navigation.navigate("Agendamento", { ...novaConsulta, profissionalId });

        } else {
            console.log("Erro, profissional sem ID");

        }

    };

    useEffect(() => {
        pegarDados();
    }, []);

    const renderItem = ({ item }) => (
        <CardMedico
            id={item.profissional.dadosProfissional.id}
            nome={item.profissional.dadosProfissional.nome}
            navegacao={navigation}
            imagem={item.profissional.dadosProfissional.foto}
            navigateCalendar={navigateCalendar}
        />
    );

    return (
        <Container style={{ backgroundColor: colors.fundo }}>
            {/* <ScrollView style={{ width: "100%" }}> */}

            <Label>Escolha o médico que irá atendê-lo: </Label>
            {loading ? (
                <Container>
                    <Text> Carregando... </Text>
                </Container>
            ) : (
                    <FlatList
                        data={dadosMedico}
                        renderItem={renderItem}
                        keyExtractor={(item) =>
                            item.profissional.dadosProfissional.id.toString()
                        } />
                )}

            {/* </ScrollView> */}
            <Passos cor1={true} cor2={true} />
        </Container>
    );
};

export default EscolhaMedicos;
