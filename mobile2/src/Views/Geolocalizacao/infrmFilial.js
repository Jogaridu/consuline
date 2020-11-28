import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  AsyncStorage,
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
        <Text>Carregando...</Text>
      ) : (
        <ContainerConteudoInfmr>
          <ScrollView style={{ height: "100%" }}>
            <TitulosInfmr style={{ fontSize: 32, marginBottom: 53 }}>
              {dadosFilial.nomeFantasia}
            </TitulosInfmr>
            <ContainerLocalizacao>
              <TitulosInfmr style={{ fontWeight: "700" }}>
                Localização
              </TitulosInfmr>
              <Image
                source={require("../../Assets/iconeMaps.png")}
                style={{ width: 42, height: 42, marginLeft: 40 }}
              />
              <TextosInfrm>Cep: {dadosFilial.EnderecoFilial.cep}</TextosInfrm>
              <TextosInfrm>Endereço: {dadosFilial.EnderecoFilial.rua}</TextosInfrm>
              <TextosInfrm>N°: {dadosFilial.EnderecoFilial.numero}</TextosInfrm>
              <TextosInfrm style={{ marginBottom: 40 }}>
              {dadosFilial.EnderecoFilial.estado} - {dadosFilial.EnderecoFilial.cidade}
              </TextosInfrm>
            </ContainerLocalizacao>
            <ContainerContatos>
              <TitulosInfmr style={{ fontWeight: "700" }}>
                Contatos
              </TitulosInfmr>
              <Image
                source={require("../../Assets/iconeContato.png")}
                style={{ width: 42, height: 42, marginLeft: 70 }}
              />
              <TextosInfrm>Telefone: {dadosFilial.TelefoneFilials[0].numero}</TextosInfrm>
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
