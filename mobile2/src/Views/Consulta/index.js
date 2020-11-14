import React from 'react';
import { View, Text } from 'react-native';

import Container from '../../Components/Container';
import {Botao1} from '../../Components/Botao1';

import { ImgFundo, Titulo, ContainerBotao } from "./styles";

import fundoConsulta from "../../Assets/fundoConsulta.jpg"

const Consulta = ({navigation}) => {
  const navigateServicos = () => {
    navigation.navigate("Servicos")
  }

  return(
      <Container style={{paddingTop: 0}}>
          <ImgFundo source={fundoConsulta} />
          <Titulo> Faça sua consulta {"\n"} online ou {"\n"} presencial!!! </Titulo>
          <ContainerBotao>
          <Botao1 title="Começar" height={55} funcExec={navigateServicos} />
          </ContainerBotao>
          
      </Container>
  )
}

export default Consulta;