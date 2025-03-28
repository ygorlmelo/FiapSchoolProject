import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #000000;
  padding: 20px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #FFFFFF;
  margin-bottom: 20px;
  text-align: center;
`;

export const AlunoContainer = styled.TouchableOpacity`
  padding: 15px;
  border-width: 1px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const AlunoNome = styled.Text`
  font-size: 18px;
  color: #FFFFFF;
  margin-bottom: 6px;
`;

export const AlunoInfo = styled.Text`
  font-size: 14px;
  color: #FFFFFF;
`;

export const FecharButton = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  top: 20px;
  right: 20px;
  align-items: center;
`;

export const FecharText = styled.Text`
  color: #29F4D5;
  font-size: 16px;
  font-weight: bold;
`;

export const CloseImage = styled(Image)`
  width: 18px;
  height: 18px;
  margin-left: 8px;
`;
