import React from 'react';
import { View } from 'react-native';

import { Titulo } from './styles';

const TituloCadastro = ( props ) => {
  return (<Titulo>{props.title}</Titulo>);
}

export default TituloCadastro;