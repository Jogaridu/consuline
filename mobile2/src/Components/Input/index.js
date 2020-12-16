import React from 'react';

import styled from "styled-components/native";
import colors from "../../Styles/colors";

export default Input = styled.TextInput`
  width: 288px;
  height: 45px;
  border: 1px solid ${colors.principal};
  padding: 10px;
  border-radius: 5px;
  background: ${colors.container};
  margin: 0 auto;
`;

