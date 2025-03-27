import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('16 de março, domingo');

  const items = [
    '16 de março, domingo',
    '17 de março, segunda-feira',
    '18 de março, terça-feira',
    '19 de março, quarta-feira',
    '20 de março, quinta-feira',
    '21 de março, sexta-feira',
    '22 de março, sábado',
  ];

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity style={styles.selectedItem} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.text}>{selectedItem}</Text>
        <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={20} color="#262626" />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.options}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => { setSelectedItem(item); setIsOpen(false); }}>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;
