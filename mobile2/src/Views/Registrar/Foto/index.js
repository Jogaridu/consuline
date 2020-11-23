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

import api from "../../../Services/api";

const Foto = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("window");

  const [paciente, setPaciente] = useState(null);
  const [image, setImage] = useState(null);
  const [id, setId] = useState(null);
  const [nomeImg, setNomeImg] = useState(null);
  const [tituloBotao, setTituloBotao] = useState({
    sim: "Sim",
    nao: "Não",
  });

  const pacienteId = route.params;

  const pegarDados = async () => {
    const retorno = await api.get(`/paciente/${pacienteId}`);

    setPaciente(retorno.data);
  };

  useEffect(() => {
    pegarDados();
  }, []);

  const upload = async () => {
    const nomeArquivo = Date.now() + "." + image.split(".").pop();

    const urlImg = nomeArquivo.split(".");

    let nome = urlImg[0];
    let type = urlImg[1];

    const formData = new FormData();
    formData.append("foto", {
      uri: image,
      name: nome,
      type: "image/" + type,
    });

    try {
      const retorno = await api.post(
        `/paciente/${pacienteId}/imagem`,
        formData,
        {
          headers: {
            "Content-Type": `multipart/form-data`,
          },
        }
      );

      navegarSucesso();
    } catch (error) {
      console.error(error);
    }
  };

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
              funcExec={
                tituloBotao.sim === "Sim" ? permissaoCamera : upload
              }
            />
            <Botao1
              title={tituloBotao.nao}
              funcExec={
                tituloBotao.nao === "Não" ? navegarSucesso : permissaoCamera
              }
            />
          </ContainerBotao>
        </ScrollView>
      </ContainerConteudo>
    </Container>
  );
};

export default Foto;
