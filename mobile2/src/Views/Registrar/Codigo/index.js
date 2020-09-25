import React, { useState } from 'react';
import { Dimensions, Text } from 'react-native';

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

import {
    ContainerSeta,
    ImgLeft,
    ContainerImgCodigo,
    ContainerTituloCodigo,
    ImgCodigo,
    ContainerFormularioCodigo,
    ContainerBotao

} from './styles';

const Codigo = () => {
    const { height, width } = Dimensions.get('window');
    const [inputTamanho, setInputTamanho] = useState(0);

    const handlerInput = (e) => {
        console.warn(e.target.value);
    }

    return (
        <Container>
            <ContainerSeta style={{ width }}>
                <ImgLeft source={require("../../../Assets/left-arrow.png")} />
            </ContainerSeta>

            <ContainerImgCodigo style={{ width: width * 0.16 + "%" }}>
                <ImgCodigo source={require("../../../Assets/codigoVerificado.png")} />
            </ContainerImgCodigo>

            <ContainerTituloCodigo>
                <Titulo title="Insira o código enviado" />
            </ContainerTituloCodigo>

            <ContainerFormularioCodigo style={{ width: width * 0.23 + "%" }}>
                <TextInput plch="----" />
                <Text style={{ fontSize: 15, textAlign: "center" }}>Não recebi o código no número (11)96368-8640</Text>
            </ContainerFormularioCodigo>

            <ContainerBotao>
                <Botao title="Verificar" />
            </ContainerBotao>
        </Container>
    );
}

export default Codigo;