import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';

interface Props extends TextInputProps {
  isPassword?: boolean;
}

const Input: React.FC<Props> = ({ isPassword, ...rest }) => {
  return (
    <Container
      {...rest}
      secureTextEntry={isPassword}
      placeholderTextColor="#888"
    />
  );
};

export default Input;
