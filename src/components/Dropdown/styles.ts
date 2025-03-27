import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const DropdownContainer = styled.View`
  width: 80%;
  border-width: 1px;
  border-color: #000;
  border-radius: 8px;
  margin-vertical: 10px;
  background-color: #1c1c1e;
  z-index: 1;
`;

export const SelectedItem = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const OptionsContainer = styled.View`
  position: absolute;
  top: 40px;
  width: 100%;
  background-color: #1c1c1e;
  border-radius: 4px;
  z-index: 2;
  padding-top: 8px;
`;

export const OptionText = styled.Text`
  color: #fff;
  padding: 10px;
`;

export const IconContainer = styled.View`
  width: 24px;
  align-items: center;
  justify-content: center;
`;
