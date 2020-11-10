import React from "react";
import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import Container from "../../../Components/Container";
import colors from "../../../Styles/colors";
import Passos from "../../../Components/Passos";
import Input from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

import {
  TituloCadastro,
  Label,
  ContainerBotaoCadastro,
  ContainerCardServicos,
  BtnServicos,
  ImgServicos,
  TituloServicos,
  ContainerInputBusca,
} from "../styles";

const Servicos = ({navigation}) => {

  const navigateEscolherMedico = () => {
    navigation.navigate("EscolhaMedicos");
  }

  return (
    <Container style={{ backgroundColor: colors.fundo }}>
      <ScrollView>
        <Passos cor1={true} />
        <Label> Serviços </Label>
        <ContainerInputBusca>
          <Icon
            // style={{ alignSelf: "center" }}
            name="search1"
            size={20}
            color={colors.principal}
          />
          <Input
            style={{
              borderColor: "white",
              flex: 1,
              paddingRight: 20,
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
            }}
            placeholder="Buscar"
            placeholderTextColor={colors.principal}
          />
        </ContainerInputBusca>

        <ContainerBotaoCadastro>
          <Botao title="Buscar" width={160} height={50} />
        </ContainerBotaoCadastro>
        <Label style={{fontSize: 20, marginTop: 0}}> Populares </Label>
        <ScrollView horizontal>
          <ContainerCardServicos>
            <BtnServicos>
              <ImgServicos source={require("../../../Assets/c.jpg")} />
              <TituloServicos> Clinico Geral </TituloServicos>
            </BtnServicos>
            <BtnServicos>
              <ImgServicos source={require("../../../Assets/c.jpg")} />
              <TituloServicos> Clinico Geral </TituloServicos>
            </BtnServicos>
            <BtnServicos>
              <ImgServicos source={require("../../../Assets/c.jpg")} />
              <TituloServicos> Clinico Geral </TituloServicos>
            </BtnServicos>
            <BtnServicos>
              <ImgServicos source={require("../../../Assets/c.jpg")} />
              <TituloServicos> Clinico Geral </TituloServicos>
            </BtnServicos>
            <BtnServicos>
              <ImgServicos source={require("../../../Assets/c.jpg")} />
              <TituloServicos> Clinico Geral </TituloServicos>
            </BtnServicos>
            <BtnServicos>
              <ImgServicos source={require("../../../Assets/c.jpg")} />
              <TituloServicos> Clinico Geral </TituloServicos>
            </BtnServicos>
          </ContainerCardServicos>
        </ScrollView>

        <Label> Sintomas </Label>
        <Input
          style={{ height: 180 }}
          placeholder="Informe seus sintomas"
          placeholderTextColor={colors.principal}
        />
        <ContainerBotaoCadastro>
          <Botao title="Próximo" funcExec={navigateEscolherMedico} />
        </ContainerBotaoCadastro>
      </ScrollView>
    </Container>
  );
};

export default Servicos;
