import React, { useState, useRef } from 'react';
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
    ContainerBotao,
    InputCodigo

} from './styles';

const Codigo = () => {
    const { height, width } = Dimensions.get('window');
    const [codigo, setCodigo] = useState("1234");
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();

    const handlerInput = (string, numInput, proxInput = null) => {

        if (string !== "") {

            let arrCodigo = codigo.split("");

            arrCodigo[numInput - 1] = string;

            setCodigo(arrCodigo.join(""));

            if (proxInput != null) {
                proxInput.current.focus();

            }
        }
    }

    const mostrarCodigo = () => console.warn(codigo);

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
                <InputCodigo keyboardType="numeric" maxLength={1} onChangeText={(string) => handlerInput(string, 1, input2)} />
                <InputCodigo ref={input2} keyboardType="numeric" maxLength={1} onChangeText={(string) => handlerInput(string, 2, input3)} />
                <InputCodigo ref={input3} keyboardType="numeric" maxLength={1} onChangeText={(string) => handlerInput(string, 3, input4)} />
                <InputCodigo ref={input4} keyboardType="numeric" maxLength={1} onChangeText={(string) => handlerInput(string, 4)} />
                <Text style={{ fontSize: 15, textAlign: "center", marginTop: 20 }}>Não recebi o código no número (11)96368-8640</Text>
            </ContainerFormularioCodigo>

            <ContainerBotao>
                <Botao title="Verificar" funcExec={mostrarCodigo} />
            </ContainerBotao>
        </Container>
    );
}

export default Codigo;