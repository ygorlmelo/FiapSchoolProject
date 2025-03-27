import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/Header/Header';
import styles from './styles';
import Dropdown from '../../components/Dropdown/Dropdown';

const AulaScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Olá, <Text style={styles.bold}>ALUNO</Text></Text>
      <Text style={styles.subTitle}>Rafael</Text>
      <Text style={styles.description}>descrição</Text>

      <Text style={styles.sectionTitle}>AGENDA</Text>
      <Dropdown />

      <View style={styles.content}>
        <Image
          source={require('../../assets/aulaLogo.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.imageCaption}>Descrição 2</Text>
      </View>
    </View>
  );
};

export default AulaScreen;
