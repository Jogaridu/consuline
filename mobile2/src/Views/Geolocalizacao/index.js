import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Alert,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import IconFeather from "react-native-vector-icons/Feather";
import IconCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import { RectButton } from "react-native-gesture-handler";

import Container from "../../Components/Container";

import {
  CalloutContainer,
  TextoCallout,
  ContainerHospitais,
  ContainerIconesMap,
  ContainerTextoMap,
  ContainerListaHospitais,
  ContainerConteudoMap,
  BotaoHospital,
  TextoBotaoHospital,
} from "./styles";

import colors from "../../Styles/colors";

import api from "../../Services/api";

const Filial = ({
  id,
  nome,
  cep,
  filialSelecionada,
  setFilialSelecionada,
  listaHospitais,
  setListaHospitais,
  localizacao,
  setLocalizacao,
}) => {
  const [selecionado, setSelecionado] = useState(false);

  const apiMaps = async () => {
    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=AIzaSyBzmNMwR_8Qz-ca3R-T4nKVC9xJnCawjhc`;
      const retorno = await fetch(url);
      const localizacaoFilial = await retorno.json();
      setFilialSelecionada({
        ...filialSelecionada,
        id: id,
        nome: nome,
        cep: cep,
      });
      setLocalizacao({
        ...localizacao,
        lat: localizacaoFilial.results[0].geometry.location.lat,
        long: localizacaoFilial.results[0].geometry.location.lng,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BotaoHospital
    selecionado={selecionado}
      onPress={() => {
        setSelecionado(true);
        setListaHospitais(!listaHospitais);
        apiMaps();
      }}
      
    >
      <TextoBotaoHospital>{nome}</TextoBotaoHospital>
    </BotaoHospital>
  );
};

const Geolocalizacao = ({ navigation }) => {
  const [listaHospitais, setListaHospitais] = useState(false);
  const [filiais, setFiliais] = useState([]);
  const [filialSelecionada, setFilialSelecionada] = useState({
    id: 0,
    nome: "Escolha um Hospital",
    cep: 0,
  });
  const [localizacao, setLocalizacao] = useState({
    lat: -27.2092052,
    long: -49.6401092,
  });

  useEffect(() => {
    pegarFiliais();
  }, []);

  const pegarFiliais = async () => {
    try {
      const retorno = await api.get("/filiais");

      setFiliais(retorno.data);
    } catch (error) {
      Alert.alert(error);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <Filial
        id={item.id}
        nome={item.nomeFantasia}
        cep={item.EnderecoFilial.cep}
        listaHospitais={listaHospitais}
        setListaHospitais={setListaHospitais}
        filialSelecionada={filialSelecionada}
        setFilialSelecionada={setFilialSelecionada}
        localizacao={localizacao}
        setLocalizacao={setLocalizacao}
      />
    );
  };

  const navegarInfrmFilial = async () => {
    await AsyncStorage.setItem(
      "@Consuline:filialId",
      JSON.stringify(filialSelecionada.id)
    );

    navigation.navigate("LocalizacaoNavigator");
  };

  return (
    <Container>
      <MapView
        // o provider significa que o mapa que vai ser usado é o mapa do Google
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        // Região inicial
        initialRegion={{
          latitude: localizacao.lat,
          longitude: localizacao.long,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        region={{
          latitude: localizacao.lat,
          longitude: localizacao.long,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          // calloutAnchor - diz aonde o componente vai ficar com relação ao tamanho do Marker
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: localizacao.lat,
            longitude: localizacao.long,
          }}
        >
          {/* Tooltip significa que ele não vai seguir a estilização padrão, ou seja, ele vai seguir a minha estilização  */}
          <Callout tooltip onPress={navegarInfrmFilial}>
            <CalloutContainer style={{ paddingHorizontal: 16 }}>
              <TextoCallout>Mais informações</TextoCallout>
            </CalloutContainer>
          </Callout>
        </Marker>
      </MapView>
      <ContainerHospitais>
        <ContainerConteudoMap
          onPress={() => setListaHospitais(!listaHospitais)}
        >
          <ContainerIconesMap>
            <IconCommunity
              name="hospital-building"
              size={25}
              color={colors.principal}
            />
          </ContainerIconesMap>
          <ContainerTextoMap>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 14,
                color: colors.principal,
              }}
            >
              {filialSelecionada.nome}
            </Text>
          </ContainerTextoMap>
          <ContainerIconesMap>
            <RectButton style={{ width: 25, alignItems: "center" }}>
              <IconAwesome
                name="caret-down"
                size={25}
                color={colors.principal}
              />
            </RectButton>
          </ContainerIconesMap>
        </ContainerConteudoMap>

        {listaHospitais && (
          <ContainerListaHospitais>
            {filiais === [""] ? (
              <Container style={{ backgroundColor: colors.fundo }}>
                <ActivityIndicator size={40} color={colors.principal} />
              </Container>
            ) : (
              <FlatList
                data={filiais}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={{ width: "100%" }}
              />
            )}
          </ContainerListaHospitais>
        )}
      </ContainerHospitais>
    </Container>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // marginTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default Geolocalizacao;
