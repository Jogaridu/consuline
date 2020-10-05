import React from 'react';
import { View } from 'react-native';

import { ContainerPasso, Passo } from './styles';
import colors from '../../Styles/colors';

const Passos = (props) => {
  return(
      <ContainerPasso>
          <Passo style={{backgroundColor: props.cor1 ? colors.principal : colors.container}} />
          <Passo style={{backgroundColor: props.cor2 ? colors.principal : colors.container}} />
          <Passo style={{backgroundColor: props.cor3 ? colors.principal : colors.container}} />
          <Passo style={{backgroundColor: props.cor4 ? colors.principal : colors.container}} />
          <Passo style={{backgroundColor: props.cor5 ? colors.principal : colors.container}} />
          <Passo style={{backgroundColor: props.cor6 ? colors.principal : colors.container}} />
      </ContainerPasso>
  )
}

export default Passos;