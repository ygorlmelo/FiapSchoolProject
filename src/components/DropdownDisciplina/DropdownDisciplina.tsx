import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  DropdownContainer,
  SelectedItem,
  OptionText,
  OptionsContainer,
  IconContainer,
} from './styles';
import chevronDown from '../../assets/chevronDown.png';
import chevronUp from '../../assets/chevronUp.png';

interface Disciplina {
  nome: string;
  nota: number;
  faltas: number;
}

interface Props {
  disciplina: Disciplina;
}

const DropdownDisciplina: React.FC<Props> = ({ disciplina }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <SelectedItem onPress={() => setIsOpen(!isOpen)}>
        <OptionText>{disciplina.nome}</OptionText>
        <IconContainer>
          <Image
            source={isOpen ? chevronUp : chevronDown}
            style={{ width: 14, height: 14 }}
          />
        </IconContainer>
      </SelectedItem>

      {isOpen && (
        <OptionsContainer>
          <OptionText>Nota: {disciplina.nota}</OptionText>
          <OptionText>Faltas: {disciplina.faltas}</OptionText>
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
};

export default DropdownDisciplina;
