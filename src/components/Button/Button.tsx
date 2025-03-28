import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { Container } from './styles';

interface Props {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textColor?: string;
}

const Button: React.FC<Props> = ({ title, onPress, buttonStyle, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={buttonStyle}>
        <Text style={{ color: textColor || '#000000', fontWeight: 'bold' }}>{title}</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
