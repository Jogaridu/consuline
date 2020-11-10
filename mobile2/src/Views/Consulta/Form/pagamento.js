import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";

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

const Pagamento = () => {
  const [checked, setChecked] = useState("first");

  return (
    <Container style={{ backgroundColor: colors.fundo }}>
      <ScrollView>
        <TituloCadastro>Selecione a forma{"\n"}de pagamento: </TituloCadastro>
        <Passos cor1={true} cor2={true} cor3={true} cor4={true} />
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

        <Label style={{ fontSize: 20 }}> Nome </Label>
        <Input placeholder="Nome" placeholderTextColor={colors.principal} />
        <Label style={{ fontSize: 20 }}> Sobrenome completo </Label>
        <Input placeholder="Nome" placeholderTextColor={colors.principal} />
        <Label style={{ fontSize: 20 }}> Tipo de cartão </Label>
        <Input placeholder="Nome" placeholderTextColor={colors.principal} />
        <Label style={{ fontSize: 20 }}> Número do cartão </Label>
        <Input placeholder="Nome" placeholderTextColor={colors.principal} />
        <Label style={{ fontSize: 20 }}> Data de vencimento </Label>
        <Input placeholder="Nome" placeholderTextColor={colors.principal} />
        <Label style={{ fontSize: 20 }}> N° de verificação do cartão </Label>
        <Input placeholder="Nome" placeholderTextColor={colors.principal} />

        <ContainerBotaoCadastro>
          <Botao title="Marcar consulta" />
        </ContainerBotaoCadastro>
      </ScrollView>
    </Container>
  );
};

export default Pagamento;
