import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { format, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './styles';

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
    <View style={styles.dropdown}>
      <TouchableOpacity style={styles.selectedItem} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.text}>{selectedItem}</Text>
        <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={20} color="#fff" />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.options}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => {
              setSelectedItem(item.label);
              setIsOpen(false);
            }}>
              <Text style={styles.text}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;
