import React from 'react';
import { Dimensions, Text } from 'react-native';

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

import {
    ContainerSeta,
    ImgLeft,
    ContainerImgTelefone,
    ImgTelefone,
    ContainerTituloTelefone,
    ContainerFormularioTelefone,
    ContainerBotao

} from './styles';

const Telefone = () => {

    const { height, width } = Dimensions.get('window');

    return (
        <Container>
            <ContainerSeta style={{ width: width }}>
                <ImgLeft source={require("../../../Assets/left-arrow.png")} />
            </ContainerSeta>

            <ContainerImgTelefone style={{ width: width * 0.15 + "%" }}>
                <ImgTelefone source={require("../../../Assets/vetorCelular.jpg")} />
            </ContainerImgTelefone>

            <ContainerTituloTelefone>
                <Titulo title="Celular" />
                <Text style={{ fontSize: 20, textAlign: "center" }}>Insira seu número de celular para verificar sua conta</Text>
            </ContainerTituloTelefone>

            <ContainerFormularioTelefone>
                <TextInput plch="Número" />
            </ContainerFormularioTelefone>

            <ContainerBotao>
                <Botao title="Próximo" width={130} />
            </ContainerBotao>
        </Container>
    );
}

export default Telefone;