import React, { useState, useEffect } from "react";
import { Dimensions, Text, Image, Alert, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Container from "../../../Components/Container";
import Botao2 from "../../../Components/Botao2";
import { Botao1 } from "../../../Components/Botao1";
import Titulo from "../../../Components/TituloCadastro";
import Passos from "../../../Components/Passos";

import {
  ContainerTextos,
  ContainerImgFoto,
  ContainerBotao,
  ContainerConteudo,
  ContainerPassos,
} from "./styles";

const Foto = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");

  const [image, setImage] = useState(null);
  const [tituloBotao, setTituloBotao] = useState({
    sim: "Sim",
    nao: "Não",
  });

  const navegarSucesso = () => {
    navigation.navigate("RegistrarSucesso");
  };

  const permissaoCamera = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      pickImage();
      if (status !== "granted") {
        Alert.alert(
          "Desculpe, nós precisamos da sua permissão para acessar a camêra"
        );
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setTituloBotao({
        ...tituloBotao,
        sim: "Próximo",
        nao: "Mudar de Imagem",
      });
      console.log(result.uri);
    }
  };

  return (
    <Container>
      <ContainerImgFoto style={{ width: width * 0.15 + "%" }}>
        <Image
          source={
            image === null
              ? require("../../../Assets/user.png")
              : { uri: image }
          }
          style={{
            width: "100%",
            height: 0,
            paddingBottom: "100%",
            borderRadius: 100,
          }}
        />
      </ContainerImgFoto>

      <ContainerConteudo>
        <ScrollView>
          <ContainerTextos style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Titulo title="Deseja escolher uma foto para seu perfil?" />
          </ContainerTextos>

          <ContainerPassos>
            <Passos
              cor1={true}
              cor2={true}
              cor3={true}
              cor4={true}
              cor5={true}
              cor6={true}
            />
          </ContainerPassos>

          <ContainerBotao>
            <Botao2
              bottom={15}
              title={tituloBotao.sim}
              funcExec={permissaoCamera}
            />
            <Botao1 title={tituloBotao.nao} funcExec={navegarSucesso} />
          </ContainerBotao>
        </ScrollView>
      </ContainerConteudo>
    </Container>
  );
};

export default Foto;
