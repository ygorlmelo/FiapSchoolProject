import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/types';
import styles from './styles';

interface HeaderProps {
  showChangeProfile?: boolean;
}

type HeaderNavigationProp = StackNavigationProp<RootStackParamList>;

const Header: React.FC<HeaderProps> = ({ showChangeProfile }) => {
  const navigation = useNavigation<HeaderNavigationProp>();

  const handleTrocarPerfil = () => {
    navigation.navigate('SelecaoPerfil');
  };
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/fiap.png')} style={styles.logo} />
      {showChangeProfile && (
        <TouchableOpacity onPress={handleTrocarPerfil}>
        <Text style={styles.profileBtn}>TROCAR PERFIL</Text>
      </TouchableOpacity>
    )}
    </View>
  );
};

export default Header;
