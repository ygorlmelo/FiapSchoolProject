import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Container } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Text style={{ color: '#000', fontWeight: 'bold' }}>{title}</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
