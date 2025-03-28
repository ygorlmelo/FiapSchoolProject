import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const CardContainer = styled.View`
  width: ${width}px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #4D4D4D;
  padding: 16px;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 100%;
  padding: 8px 0;
`;

export const TrimestreText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #29F4D5;
`;
