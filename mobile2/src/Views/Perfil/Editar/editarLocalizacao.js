import React, { useRef, useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    AsyncStorage,
    Alert,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    TituloInformacoes,
    ContainerEditar,
    FecharEditar,
    ContainerFormulario,
    Input,
    TituloPerfil,
} from "../styles";

import encontrarCep from "../../../Services/viaCep";

import validarCamposVazios from "../../../Fixtures/validarInputVazia";

import {
    validarInputCorreta,
    validarInputMaskCorreta,
} from "../../../Fixtures/validarInputCorreta";

import colors from "../../../Styles/colors";

import Botao from "../../../Components/Botao2";
import Container from "../../../Components/Container";

import api from "../../../Services/api";
import { EventRegister } from "react-native-event-listeners";

const EditarLocalizacao = ({ navigation }) => {
    const inputCep = useRef(null);
    const inputBairro = useRef(null);
    const inputRua = useRef(null);
    const inputNumero = useRef(null);
    const inputCidade = useRef(null);
    const inputEstado = useRef(null);
    const inputComplemento = useRef(null);

    const [id, setId] = useState();
    const [loading, setLoading] = useState(true);
    const [endereco, setEndereco] = useState({
        bairro: "",
        cep: "",
        cidade: "",
        complemento: "",
        estado: "",
        numero: "",
        rua: "",
    });

    const [dadosPaciente, setDadosPaciente] = useState({});

    const pegarDados = async () => {

        const paciente = JSON.parse(
            await AsyncStorage.getItem("@Consuline:paciente")
        );

        setDadosPaciente(paciente);
        setEndereco({
            ...endereco,
            bairro: paciente.EnderecoPaciente.bairro,
            cep: paciente.EnderecoPaciente.cep,
            cidade: paciente.EnderecoPaciente.cidade,
            complemento: paciente.EnderecoPaciente.complemento,
            estado: paciente.EnderecoPaciente.estado,
            numero: paciente.EnderecoPaciente.numero,
            rua: paciente.EnderecoPaciente.rua,
        });

        setId(paciente.id);
        setLoading(false);
    };

    useEffect(() => {
        pegarDados();
        setDadosPaciente(e => ({ ...e, endereco }));

    }, []);

    const preencherFormulario = (enderecocep) => {

        setEndereco(e => ({
            ...e,
            bairro: enderecocep.bairro,
            rua: enderecocep.logradouro,
            cidade: enderecocep.localidade,
            estado: enderecocep.uf,
        }));

        setDadosPaciente(e => ({
            ...e,
            EnderecoPaciente: {
                ...e.EnderecoPaciente,
                bairro: enderecocep.bairro,
                rua: enderecocep.logradouro,
                cidade: enderecocep.localidade,
                estado: enderecocep.uf,
            }
        }))

        validarInputCorreta(endereco.bairro, inputBairro);
        validarInputCorreta(endereco.rua, inputRua);
        validarInputCorreta(endereco.cidade, inputCidade);
        validarInputCorreta(endereco.estado, inputEstado);
    };

    const handlerInput = (texto) => {
        const cep = texto.replace(/[^0-9]+/g, '');

        setEndereco(e => ({
            ...e,
            cep,
        }));

        setDadosPaciente(e => ({
            ...e,
            EnderecoPaciente: {
                ...e.EnderecoPaciente,
                cep: texto
            }
        }));
    };

    const validaDados = () => {
        const arrayInputsVazias = validarCamposVazios(endereco, "complemento");

        if (arrayInputsVazias.length) {
            Alert.alert("Existem campos vazios");

            const inputErroStyle = { style: { borderColor: "red" } };

            arrayInputsVazias.find((campo) => campo === "cep")
                ? inputCep.current.getElement().setNativeProps(inputErroStyle)
                : "";

            arrayInputsVazias.find((campo) => campo === "bairro")
                ? inputBairro.current.setNativeProps(inputErroStyle)
                : "";

            arrayInputsVazias.find((campo) => campo === "rua")
                ? inputRua.current.setNativeProps(inputErroStyle)
                : "";

            arrayInputsVazias.find((campo) => campo === "numero")
                ? inputNumero.current.getElement().setNativeProps(inputErroStyle)
                : "";

            arrayInputsVazias.find((campo) => campo === "cidade")
                ? inputCidade.current.setNativeProps(inputErroStyle)
                : "";

            arrayInputsVazias.find((campo) => campo === "estado")
                ? inputEstado.current.setNativeProps(inputErroStyle)
                : "";
        } else {
            editar();
        }
    };

    const editar = async () => {

        try {
            const retorno = await api.put(`/paciente/${id}`, { endereco: endereco });

            if (retorno.status === 200) {
                Alert.alert("Dados editados com sucesso!!!");

                //dispara um evento com o nome realoadUsuario
                EventRegister.emit("reloadPerfil", dadosPaciente);
                console.log("Dados da entrada: ----- ENTRDA -----");
                console.log(dadosPaciente);

                return navigation.navigate("Perfil");
            }
        } catch (error) {

            if (error.response) {
                return console.log(error);
            }
        }
    };

    if (loading) {
        return (
            <Container>
                <Text> Carregando... </Text>
            </Container>
        );
    } else {
        return (
            <Container style={{ backgroundColor: colors.fundo }}>
                <FecharEditar onPress={() => navigation.navigate("ConsultaEditar")}>
                <Icon name="close" size={42} color="#911" />
                </FecharEditar>
                <TituloPerfil style={{ marginTop: 5, fontSize: 20 }}>
                    Localização
        </TituloPerfil>
                <ContainerFormulario>
                    <TextInputMask
                        style={styles.input}
                        value={endereco.cep}
                        type={"custom"}
                        options={{
                            mask: "99999-999",
                        }}
                        maxLength={9}
                        placeholder="CEP"
                        placeholderTextColor="#403e66"
                        onChangeText={handlerInput}
                        onBlur={async () => {
                            preencherFormulario(await encontrarCep(endereco.cep));
                            validarInputMaskCorreta(endereco.cep, inputCep);
                        }}
                        ref={inputCep}
                        keyboardType="numeric"
                    />
                    <Input
                        style={{
                            width: 140,
                            marginLeft: 8,
                            backgroundColor: colors.fundo,
                        }}
                        value={endereco.bairro}
                        placeholder="Bairro"
                        placeholderTextColor="#403e66"
                        ref={inputBairro}
                        editable={false}
                        selectTextOnFocus={false}
                    />
                    <Input
                        style={{ width: 205, backgroundColor: colors.fundo }}
                        value={endereco.rua}
                        placeholder="Rua"
                        placeholderTextColor="#403e66"
                        ref={inputRua}
                        editable={false}
                        selectTextOnFocus={false}
                    />
                    <TextInputMask
                        style={styles.numero}
                        value={endereco.numero}
                        onChangeText={(texto) => {
                            setEndereco({
                                ...endereco,
                                numero: texto,
                            });

                            setDadosPaciente(e => ({
                                ...e,
                                EnderecoPaciente: {
                                    ...e.EnderecoPaciente,
                                    numero: texto
                                }
                            }));
                        }}
                        type={"only-numbers"}
                        placeholder="N°"
                        placeholderTextColor="#403e66"
                        ref={inputNumero}
                        onBlur={() =>
                            validarInputMaskCorreta(
                                dadosPaciente.EnderecoPaciente.numero,
                                inputNumero
                            )
                        }
                    />
                    <Input
                        value={endereco.complemento}
                        placeholder="Complemento"
                        placeholderTextColor="#403e66"
                        style={{ width: 140 }}
                        onChangeText={(texto) => {
                            setEndereco({ ...endereco, complemento: texto });

                            setDadosPaciente(e => ({
                                ...e,
                                EnderecoPaciente: {
                                    ...e.EnderecoPaciente,
                                    complemento: texto
                                }
                            }));

                        }}
                        ref={inputComplemento}
                        onBlur={() =>
                            validarInputCorreta(dadosPaciente.complemento, inputComplemento)
                        }
                    />
                    <Input
                        style={{
                            width: 140,
                            marginLeft: 8,
                            backgroundColor: colors.fundo,
                        }}
                        value={endereco.cidade}
                        placeholder="Cidade"
                        placeholderTextColor="#403e66"
                        ref={inputCidade}
                        editable={false}
                        selectTextOnFocus={false}
                    />
                    <Input
                        style={{ marginLeft: 8, backgroundColor: colors.fundo }}
                        value={endereco.estado}
                        placeholder="Estado"
                        placeholderTextColor="#403e66"
                        ref={inputEstado}
                        editable={false}
                        selectTextOnFocus={false}
                    />
                </ContainerFormulario>
                <Botao title="Editar" funcExec={editar} bottom={20} />
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    input: {
        width: 140,
        height: 45,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: [colors.principal],
        backgroundColor: [colors.container],
        marginBottom: 15,
    },

    numero: {
        width: 70,
        height: 45,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: [colors.principal],
        backgroundColor: [colors.container],
        marginBottom: 15,
        marginLeft: 15,
    },
});

export default EditarLocalizacao;
