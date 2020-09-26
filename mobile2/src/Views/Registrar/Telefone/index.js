import React from 'react';
import { Dimensions, Text } from 'react-native';

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

import {
    ContainerImgTelefone,
    ImgTelefone,
    ContainerTituloTelefone,
    ContainerFormularioTelefone,
    ContainerBotao

} from './styles';

const Telefone = ({ navigation }) => {

    const { height, width } = Dimensions.get('window');

    const navegarCodigo = () => {
        navigation.navigate("RegistrarCodigo");
    }

    return (
        <Container>

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
                <Botao title="Próximo" width={130} funcExec={navegarCodigo} />
            </ContainerBotao>
        </Container>
    );
}

export default Telefone;