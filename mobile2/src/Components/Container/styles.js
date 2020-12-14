import styled from 'styled-components/native';
import colors from '../../Styles/colors';
export default Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  padding-top: ${Platform.OS === "android" ? 25 + "px" : 0 + "px"};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.container};
`;
