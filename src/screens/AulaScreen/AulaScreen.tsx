import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/Header/Header';
import Dropdown from '../../components/Dropdown/Dropdown';
import styles from './styles';

import { getResponsavel } from '../../services/responsavelService';

const AulaScreen: React.FC = () => {
  const responsavel = getResponsavel();
  const hasMultipleAlunos = responsavel.alunos && responsavel.alunos.length > 1;

  return (
    <View style={styles.container}>
      <Header showChangeProfile={hasMultipleAlunos}/>

      <Text style={styles.title}>
        Olá, <Text style={styles.bold}>{responsavel.primeiroNome}</Text>
      </Text>
      <Text style={styles.subTitle}>Nome aluno</Text>
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
