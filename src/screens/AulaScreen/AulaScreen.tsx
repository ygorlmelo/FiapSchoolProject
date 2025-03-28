import React, { useState, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import DropdownAgenda from '../../components/DropdownAgenda/DropdownAgenda';
import DropdownBoletim from '../../components/DropdownBoletim/DropdownBoletim';
import ListaAulas from '../../components/ListaAulas/ListaAulas';
import { getAlunoSelecionado, getResponsavel, clearStorage } from '../../services/responsavelService';
import { Responsavel, Aluno, AulaScreenProps, RootStackParamList, Trimestre  } from '../../../types/types';
import {
  Container,
  TitleView,
  TitleText,
  TitleInfoView,
  DropdownContainer,
  SectionTitleText,
  SubTitleText,
  DescriptionText,
} from './styles';
import BoletimCard from '../../components/BoletimCard/BoletimCard';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const AulaScreen: React.FC<AulaScreenProps> = () => {
  const navigation = useNavigation<NavigationProp>();
  const [responsavel, setResponsavel] = useState<Responsavel | null>(null);
  const [aluno, setAluno] = useState<Aluno | null>(null);
  const [dataSelecionada, setDataSelecionada] = useState(new Date(2025, 2, 16));
  const [turmaSelecionada, setTurmaSelecionada] = useState<any | null>(null);
  const route = useRoute();
  const isBoletim = route.name === 'Boletim';


  useFocusEffect(
    useCallback(() => {
      const carregarDados = async () => {
        const responsavelSalvo = await getResponsavel();
        const alunoSalvo = await getAlunoSelecionado();

        setResponsavel(responsavelSalvo);
        setAluno(alunoSalvo);
      };

      carregarDados();
    }, [])
  );

  const hasMultipleAlunos = (responsavel?.alunos?.length ?? 0) > 1;

  const handleLogout = async () => {
    await clearStorage();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <Container>
      <Header
        showChangeProfile={hasMultipleAlunos}
        showLogoutButton={true}
        onLogout={handleLogout}
      />
      <TitleView>
        <TitleText>
          Olá, <TitleText bold={true}>{responsavel?.primeiroNome}</TitleText>
        </TitleText>
      </TitleView>
      <TitleInfoView>
        <SubTitleText>{aluno?.primeiroNome}</SubTitleText>
        <DescriptionText>
          {`${aluno?.turma} - RM ${aluno?.rm} - ${aluno?.periodo}`}
        </DescriptionText>
      </TitleInfoView>
      <TitleView>
        <SectionTitleText bold={true}>
          {isBoletim ? 'BOLETIM' : 'AGENDA'}
        </SectionTitleText>
      </TitleView>
      <DropdownContainer>
        {isBoletim ? (
        <DropdownBoletim
          responsavel={responsavel}
          alunoSelecionado={aluno}
          onTurmaSelecionada={setTurmaSelecionada}
        />
      ) : (
        <DropdownAgenda onDateChange={setDataSelecionada} />
      )}
      </DropdownContainer>
      {isBoletim ? (
        <ScrollView>
          {turmaSelecionada?.trimestres?.map((tri, index) => (
            <BoletimCard key={index} trimestre={tri} />
          ))}
        </ScrollView>
      ) : (
        <ListaAulas aluno={aluno} dataSelecionada={dataSelecionada} />
      )}
    </Container>
  );
};

export default AulaScreen;
