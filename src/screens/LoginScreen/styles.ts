import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 80%;
  height: 120px;
  margin-bottom: 20px;
  flex-shrink: 0;
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  color: #FFFFFF;
  margin-bottom: 5px;
  font-size: 16px;
  text-align: center;
`;

export const ErrorMessage = styled.Text`
  color: #70FFB9;
  margin-bottom: 10px;
  text-align: center;
`;

export const ViewLogo = styled.View`
  margin-top: 40px;
  width: 100%;
  align-items: center;
`;

export const ViewButton = styled.View`
  width: 100%;
  justify-content: flex-end;
`;
