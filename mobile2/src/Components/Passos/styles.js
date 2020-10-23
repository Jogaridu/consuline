import styled from 'styled-components/native';
import colors from '../../Styles/colors';

export const ContainerPasso = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const Passo = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 100px;
  background-color: ${colors.container}; 
  margin-left: 10px;
`;