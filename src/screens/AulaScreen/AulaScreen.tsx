// /src/screens/AulaScreen/AulaScreen.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const AulaScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={24} color="#fff" />
        <TouchableOpacity>
          <Text style={styles.profileBtn}>TROCAR PERFIL</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Olá, <Text style={styles.bold}>ALUNO</Text></Text>
      <Text style={styles.subTitle}>Rafael</Text>
      <Text style={styles.description}>descrição</Text>

      <Text style={styles.sectionTitle}>AGENDA</Text>
      <View style={styles.dropdown}>
        <Text>16 de março, domingo</Text>
      </View>

      <Image source={require('../../assets/aulaLogo.png')} style={styles.image} />
      <Text style={styles.imageCaption}>Descrição 2</Text>
    </View>
  );
};

export default AulaScreen;
