import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #000000;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 30px;
  resize-mode: contain;
`;

export const ProfileButton = styled(TouchableOpacity)`
  margin-right: 16px;
`;

export const ProfileButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
