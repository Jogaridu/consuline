import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, Animated } from "react-native";
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

const ContainerFormulario = (props) => {

  const navigateAtendimento = () => {
    props.navigation.navigate("Atendimento");
  };

  return (
    <ContainerForm>
      <ContainerPassos>
        <Passos cor1={true} />
      </ContainerPassos>
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
          <TituloServico selecionado={props.servico.nome === props.servico.nome}> {props.servico.nome} </TituloServico>
        </ContainerCardServicos>
      )}

      <Label> Sintomas </Label>
      <Input
        style={{ height: 180 }}
        placeholder="Informe seus sintomas"
        placeholderTextColor={colors.principal}
      />
      <ContainerBotaoCadastro>
        <Botao title="Próximo" funcExec={navigateAtendimento} />
      </ContainerBotaoCadastro>
      {/* </ScrollView> */}
    </ContainerForm>
  );
};

const ContainerLista = (props) => {
  const renderItem = ({ item }) => (
    <CardServicos
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
          <Text> Carregando... </Text>
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

const CardServicos = ({ nome, imagem, servico, setServico, setView }) => {
  return (
    <ContainerCardServicos
      selecionado={servico === nome}
      onPress={() => {
        setServico({nome: nome, imagem: imagem});
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
        <ContainerFormulario setView={setView} servico={servico} navigation={navigation} />
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
