import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, AsyncStorage } from "react-native";
import { RadioButton } from "react-native-paper";
import { EventRegister } from 'react-native-event-listeners'

import Container from "../../../Components/Container";
import colors from "../../../Styles/colors";
import Passos from "../../../Components/Passos";
import Input from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

import {
  TituloCadastro,
  ContainerValor,
  ContainerRadioButton,
  Label,
  ContainerBotaoCadastro,
  ContainerBotao,
  ItemRadioButton,
} from "../styles";
import { Formik } from "formik";
import { TextInputMask } from "react-native-masked-text";
import api from "../../../Services/api";

const Pagamento = ({ navigation, route }) => {
  const [checked, setChecked] = useState("first");
  const [numero, setNumero] = useState("");
  const [data, setData] = useState("");
  let novaConsulta = route.params;

  const cadastrarConsulta = async (values) => {
    try {
      const paciente = JSON.parse(
        await AsyncStorage.getItem("@Consuline:paciente")
      );

      let arr = data.split("/");
      let dataForm = `20${arr[1]}-${arr[0]}-01`

      const dados = {
        ...novaConsulta,
        pagamento: {
          ...values,
          numero: numero.split(" ").join(""),
          data: dataForm
        },
        valor: "R$100,00",
        desconto: "R$0,00",
        PacienteId: paciente.id,
      };

      console.log(dados);

      const retorno = await api.post(`/consulta`, dados);

      console.log("funcionou");

      EventRegister.emit("reloadHome", retorno.data);

      navigation.navigate("Sucesso");
    } catch (error) {
      console.log(error.response.data);
    }

  };

  return (
    <Container style={{ backgroundColor: colors.fundo }}>
      <ScrollView>
        <ContainerValor>
          <TituloCadastro style={{ fontSize: 30, marginTop: 24 }}>
            {" "}
            Valor:{" "}
          </TituloCadastro>
          <TituloCadastro style={{ fontSize: 38, color: "green" }}>
            {" "}
            R$ 100,00{" "}
          </TituloCadastro>
        </ContainerValor>
        <ContainerRadioButton>
          <Label style={{ fontSize: 20 }}>
            Selecione a forma de pagamento:{" "}
          </Label>
          <ItemRadioButton>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
              color={colors.principal}
            />
            <Text style={{ fontSize: 16, fontWeight: "500", marginTop: -3 }}>
              {" "}
              Cartão de crédito{" "}
            </Text>
          </ItemRadioButton>
          <ItemRadioButton>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
              color={colors.principal}
            />
            <Text style={{ fontSize: 16, fontWeight: "500", marginTop: -3 }}>
              {" "}
              Boleto{" "}
            </Text>
          </ItemRadioButton>
        </ContainerRadioButton>
        <Formik
          initialValues={{
            nomeCompleto: "",
            cod: "",
          }}
          onSubmit={cadastrarConsulta}
        >
          {({ handleChange, handleBlur, handleSubmit }) => (
            <>
              <Label style={{ fontSize: 20 }}> Nome impresso no cartão </Label>
              <Input
                placeholder="Nome"
                onChangeText={handleChange("nomeCompleto")}
                onBlur={handleBlur("nomeCompleto")}
                placeholderTextColor={colors.principal}
              />

              <Label style={{ fontSize: 20 }}> Número do cartão </Label>
              <TextInputMask
                type={"credit-card"}
                options={{
                  obfuscated: false,
                  issuer: "visa-or-mastercard",
                }}
                placeholder="Número do cartão"
                onChangeText={(texto) => setNumero(texto)}
                value={numero}
                placeholderTextColor={colors.principal}
                style={styles.input}
              />

              <Label style={{ fontSize: 20 }}> Data de vencimento </Label>
              <TextInputMask
                type={"custom"}
                options={{
                  mask: "99/99",
                }}
                keyboardType="number-pad"
                placeholder="MM/AA"
                onChangeText={(texto) => setData(texto)}
                value={data}
                placeholderTextColor={colors.principal}
                style={styles.input}
              />

              <Label style={{ fontSize: 20 }}> Código de segurança </Label>
              <Input
                placeholder="Código"
                keyboardType="number-pad"
                maxLength={3}
                onChangeText={handleChange("cod")}
                onBlur={handleBlur("cod")}
                placeholderTextColor={colors.principal}
              />

              <ContainerBotaoCadastro>
                <Passos cor1={true} cor2={true} cor3={true} cor4={true} />

                <Botao title="Marcar consulta" funcExec={handleSubmit} />
              </ContainerBotaoCadastro>
            </>
          )}
        </Formik>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 288,
    height: 45,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.container,
    borderColor: colors.principal,
    borderWidth: 1,
  },
});

export default Pagamento;
