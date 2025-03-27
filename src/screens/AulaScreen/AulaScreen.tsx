import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import Dropdown from '../../components/Dropdown/Dropdown';
import ListaAulas from '../../components/ListaAulas/ListaAulas';
import { getAlunoSelecionado, getResponsavel } from '../../services/responsavelService';
import { AulaScreenProps } from '../../../types/types';
import {
  Container,
  Title,
  Bold,
  SubTitle,
  Description,
  SectionTitle,
  DropdownContainer,
  TitleView,
  TitleInfoView,
} from './styles';

const AulaScreen: React.FC<AulaScreenProps> = () => {
  const [responsavel, setResponsavel] = useState(getResponsavel());
  const [aluno, setAluno] = useState(getAlunoSelecionado() ?? null);
  const [dataSelecionada, setDataSelecionada] = useState(new Date(2025, 2, 16)); // início padrão

  useFocusEffect(
    useCallback(() => {
      setResponsavel(getResponsavel());
      setAluno(getAlunoSelecionado() ?? null); // <- adiciona fallback para null
    }, [])
  );

  const hasMultipleAlunos = (responsavel?.alunos?.length ?? 0) > 1;

  return (
    <Container>
      <Header showChangeProfile={hasMultipleAlunos} />
      <TitleView>
        <Title>
          Olá, <Bold>{responsavel?.primeiroNome}</Bold>
        </Title>
      </TitleView>
      <TitleInfoView>
        <SubTitle>{aluno?.primeiroNome}</SubTitle>
        <Description>
          {`${aluno?.turma} - RM ${aluno?.rm} - ${aluno?.periodo}`}
        </Description>
      </TitleInfoView>
      <TitleView>
        <SectionTitle><Bold>AGENDA</Bold></SectionTitle>
      </TitleView>
      <DropdownContainer>
        <Dropdown onDateChange={setDataSelecionada} />
      </DropdownContainer>
      <ListaAulas aluno={aluno} dataSelecionada={dataSelecionada} />
    </Container>
  );
};

export default AulaScreen;
