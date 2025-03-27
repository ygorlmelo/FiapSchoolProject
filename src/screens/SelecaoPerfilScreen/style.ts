import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
`;

export const AlunoContainer = styled.TouchableOpacity`
  padding: 15px;
  border-width: 1px;
  border-color: #ccc;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const AlunoNome = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const AlunoInfo = styled.Text`
  font-size: 14px;
  color: #777;
`;

export const FecharButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 15px;
  background-color: #007BFF;
  border-radius: 8px;
  align-items: center;
`;

export const FecharText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
