import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/fiap.png')} style={styles.logo} />
      <TouchableOpacity>
        <Text style={styles.profileBtn}>TROCAR PERFIL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
