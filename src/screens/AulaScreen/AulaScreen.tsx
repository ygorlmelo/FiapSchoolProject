import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/Header/Header';
import Dropdown from '../../components/Dropdown/Dropdown';
import styles from './styles';

import { getAlunoSelecionado, getResponsavel } from '../../services/responsavelService';
import { AulaScreenProps } from '../../../types/types';

const AulaScreen: React.FC<AulaScreenProps> = ({ }) => {
  const responsavel = getResponsavel();
  const aluno = getAlunoSelecionado();
  const hasMultipleAlunos = (responsavel?.alunos?.length ?? 0) > 1;

  return (
    <View style={styles.container}>
      <Header showChangeProfile={hasMultipleAlunos}/>

      <Text style={styles.title}>
        Olá, <Text style={styles.bold}>{responsavel?.primeiroNome}</Text>
      </Text>
      <Text style={styles.subTitle}>{aluno?.primeiroNome}</Text>
      <Text style={styles.description}>
        {`${aluno?.turma} - ${aluno?.rm} - ${aluno?.periodo}`}
      </Text>

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
