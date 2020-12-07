import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Animated,
  ActivityIndicator,
} from "react-native";
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
  ContainerInputBusca,
  ContainerListaServicos,
  ContainerCardServicos,
  ImgServicos,
  TituloServico,
  ContainerBotaoBusca,
  ContainerForm,
  ContainerPassos,
} from "../styles";

import api from "../../../Services/api";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Formik } from "formik";

const ContainerFormulario = (props) => {
  const navigateAtendimento = (values) => {
    if (values.sintomas !== "" && props.servico !== undefined) {
      const dados = { sintomas: values.sintomas, ServicoId: props.servico.id };

      console.log(dados);
      props.navigation.navigate("Atendimento", dados);
    } else {
      console.warn("Complete todas as informaçoes");
    }
  };

  return (
    <ContainerForm>
      <ScrollView>
        <Label> Serviços </Label>
        <ContainerBotaoBusca onPress={() => props.setView("lista")}>
          <Icon name="search1" size={20} color={colors.principal} />
          <Text style={{ color: colors.principal, marginLeft: 5 }}>
            {" "}
            Pesquisar Serviço{" "}
          </Text>
        </ContainerBotaoBusca>

        {props.servico && (
          <ContainerCardServicos
            selecionado={props.servico.nome === props.servico.nome}
          >
            <ImgServicos source={{ uri: props.servico.imagem }} />
            <TituloServico
              selecionado={props.servico.nome === props.servico.nome}
            >
              {" "}
              {props.servico.nome}{" "}
            </TituloServico>
          </ContainerCardServicos>
        )}

        <Formik
          initialValues={{ sintomas: "", descricao: "" }}
          onSubmit={navigateAtendimento}
        >
          {({ handleChange, handleBlur, handleSubmit }) => (
            <>
              <Label> Sintomas </Label>
              <Input
                placeholder="Digite seus sintomas"
                onChangeText={handleChange("sintomas")}
                onBlur={handleBlur("sintomas")}
                placeholderTextColor={colors.principal}
                style={{ marginBottom: 50 }}
              />

              <Label> Descrição </Label>
              <Input
                style={{ height: 180, padding: 0 }}
                placeholder="Descreva o que você está sentindo"
                onChangeText={handleChange("descricao")}
                onBlur={handleBlur("descricao")}
                placeholderTextColor={colors.principal}
              />
              <ContainerBotaoCadastro>
              <Passos cor1={true} />
                <Botao title="Próximo" funcExec={handleSubmit} />
              </ContainerBotaoCadastro>
              {/* </ScrollView> */}
            </>
          )}
        </Formik>
      </ScrollView>
    </ContainerForm>
  );
};

const ContainerLista = (props) => {
  const renderItem = ({ item }) => (
    <CardServicos
      id={item.id}
      nome={item.nome}
      imagem={item.imagem}
      servico={props.servico}
      setServico={props.setServico}
      setView={props.setView}
    />
  );

  return (
    <ContainerListaServicos>
      <TouchableOpacity onPress={() => props.setView("form")}>
        <Icon
          name="closecircle"
          color={colors.corTituloSecundario}
          size={32}
          style={{ alignSelf: "flex-end", marginRight: 25, marginTop: 15 }}
        />
      </TouchableOpacity>
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
            borderColor: colors.fundo,
            flex: 1,
            paddingRight: 20,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: colors.fundo,
          }}
          placeholder="Pesquisar"
          // onChange={(e) => {
          //   dadosServicos.filter((s) => s.nome === e);
          // }}
          placeholderTextColor={colors.principal}
        />
      </ContainerInputBusca>
      {props.loading ? (
        <Container style={{ backgroundColor: colors.fundo }}>
          <ActivityIndicator size={40} color={colors.principal} />
        </Container>
      ) : (
        <FlatList
          data={props.dadosServicos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </ContainerListaServicos>
  );
};

const CardServicos = ({ id, nome, imagem, servico, setServico, setView }) => {
  return (
    <ContainerCardServicos
      selecionado={servico === nome}
      onPress={() => {
        setServico({ nome: nome, imagem: imagem, id: id });
        setView("form");
      }}
    >
      <ImgServicos source={{ uri: imagem }} />
      <TituloServico selecionado={servico === nome}> {nome} </TituloServico>
    </ContainerCardServicos>
  );
};

const Servicos = ({ navigation }) => {
  const [view, setView] = useState("form");
  const [loading, setLoading] = useState(true);
  const [servico, setServicoSelecionado] = useState();

  //criar uma lista auxiliar

  //filter na lista auxiliar, e setar o resultado na lista principal
  //o desafio aqui é vc comparar as strings como se fosse com % sql like %

  //p.titulo.indexOf(pesquisa) !== -1

  const [dadosServicos, setDadosServicos] = useState([]);

  const pegarDados = async () => {
    const retorno = await api.get("/servicos");

    setDadosServicos(retorno.data);
    setLoading(false);
  };

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <Container style={{ backgroundColor: colors.fundo }}>
      {view === "form" ? (
        <ContainerFormulario
          setView={setView}
          servico={servico}
          navigation={navigation}
        />
      ) : (
        <ContainerLista
          setView={setView}
          dadosServicos={dadosServicos}
          loading={loading}
          servico={servico}
          setServico={setServicoSelecionado}
        />
      )}
    </Container>
  );
};

export default Servicos;
