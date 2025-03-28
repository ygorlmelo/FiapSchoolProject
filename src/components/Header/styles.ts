import { Image } from 'react-native';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 30px;
  resize-mode: contain;
`;

export const ProfileButton = styled(TouchableOpacity)`
  padding: 8px 12px;
`;

export const ProfileButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const LogoutButton = styled.TouchableOpacity`
  padding: 8px 12px;
  flex-direction: row;
  align-items: center;
`;

export const LogoutText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const View = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoutImage = styled(Image)`
  width: 10px;
  height: 10px;
  margin-left: 5px;
`;
