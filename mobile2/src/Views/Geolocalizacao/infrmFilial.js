import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";

import Container from "../../Components/Container";

import {
  TitulosInfmr,
  ContainerConteudoInfmr,
  ContainerLocalizacao,
  TextosInfrm,
  ContainerContatos,
} from "./styles";

import api from "../../Services/api";
import colors from "../../Styles/colors";

const InfrmFilial = () => {
  const [dadosFilial, setDadosFilial] = useState({});
  const [loading, setLoading] = useState(true);

  const pegarDados = async () => {
    const idFilial = JSON.parse(
      await AsyncStorage.getItem("@Consuline:filialId")
    );

    try {
      const retorno = await api.get(`/filial/${idFilial}`);

      setDadosFilial(retorno.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <Container>
      {loading ? (
        <Container>
          <ActivityIndicator size={40} color={colors.principal} />
        </Container>
      ) : (
        <ContainerConteudoInfmr>
          <ScrollView style={{ height: "100%" }}>
            <TitulosInfmr
              style={{
                fontSize: 34,
                marginBottom: 40,
                textAlign: "center",
                fontWeight: "500",
                color: colors.principal,
              }}
            >
              {dadosFilial.nomeFantasia}
            </TitulosInfmr>
            <ContainerLocalizacao
              style={{
                borderColor: colors.principal,
                borderBottomWidth: 1,
                marginBottom: 20,
              }}
            >
              <Image
                source={require("../../Assets/iconeMaps.png")}
                style={{ width: 42, height: 42, marginBottom: 10 }}
              />
              <TitulosInfmr style={{ fontWeight: "600" }}>
                Localização
              </TitulosInfmr>

              <TextosInfrm>Cep: {dadosFilial.EnderecoFilial.cep}</TextosInfrm>
              <TextosInfrm>
                Endereço: {dadosFilial.EnderecoFilial.rua}
              </TextosInfrm>
              <TextosInfrm>N°: {dadosFilial.EnderecoFilial.numero}</TextosInfrm>
              <TextosInfrm style={{ marginBottom: 20 }}>
                {dadosFilial.EnderecoFilial.estado} -{" "}
                {dadosFilial.EnderecoFilial.cidade}
              </TextosInfrm>
            </ContainerLocalizacao>
            <ContainerContatos>
              <Image
                source={require("../../Assets/iconeContato.png")}
                style={{ width: 42, height: 42, marginBottom: 10 }}
              />
              <TitulosInfmr style={{ fontWeight: "600" }}>
                Contatos
              </TitulosInfmr>

              <TextosInfrm>
                Telefone: {dadosFilial.TelefoneFilials[0].numero}
              </TextosInfrm>
              <TextosInfrm>Email: {dadosFilial.email}</TextosInfrm>
            </ContainerContatos>
            {/* <Button title="teste" onPress={() => console.log(dadosFilial)} /> */}
          </ScrollView>
        </ContainerConteudoInfmr>
      )}
    </Container>
  );
};

export default InfrmFilial;
