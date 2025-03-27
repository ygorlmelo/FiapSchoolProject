import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { format, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  DropdownContainer,
  SelectedItem,
  OptionsContainer,
  OptionText,
  IconContainer,
} from './styles';

import chevronDown from '../../assets/chevronDown.png';
import chevronUp from '../../assets/chevronUp.png';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('16 de março, domingo');

  // Gerar datas de 16 a 22 de março de 2025
  const startDate = new Date(2025, 2, 16); // Março é mês 2 (0 indexado)
  const items = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(startDate, i);
    return {
      label: format(date, "dd 'de' MMMM, EEEE", { locale: ptBR }),
      value: date,
    };
  });

  return (
    <DropdownContainer>
      <SelectedItem onPress={() => setIsOpen(!isOpen)}>
        <OptionText>{selectedItem}</OptionText>
        <IconContainer>
          <Image
            source={isOpen ? chevronUp : chevronDown}
            style={{ width: 14, height: 14 }}
          />
        </IconContainer>
      </SelectedItem>

      {isOpen && (
        <OptionsContainer>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedItem(item.label);
                setIsOpen(false);
              }}
            >
              <OptionText>{item.label}</OptionText>
            </TouchableOpacity>
          ))}
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
