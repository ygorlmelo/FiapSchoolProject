import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../..//components/Header/Header';
import styles from './styles';

const AulaScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Olá, <Text style={styles.bold}>ALUNO</Text></Text>
      <Text style={styles.subTitle}>Rafael</Text>
      <Text style={styles.description}>descrição</Text>

      <Text style={styles.sectionTitle}>AGENDA</Text>
      <View style={styles.dropdown}>
        <Text>16 de março, domingo</Text>
      </View>

      <Image
        source={require('../../assets/aulaLogo.png')}
        style={styles.image}
        resizeMode="contain" // Adicione esta linha
      />

      <Text style={styles.imageCaption}>Descrição 2</Text>
    </View>
  );
};

export default AulaScreen;
