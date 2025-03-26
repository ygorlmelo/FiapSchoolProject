import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 80px;
  margin-bottom: 40px;
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const ErrorMessage = styled.Text`
  color: #70FFB9;
  margin-bottom: 10px;
  text-align: center;
`;
