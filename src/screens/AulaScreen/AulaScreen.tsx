import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import Dropdown from '../../components/Dropdown/Dropdown';
import ListaAulas from '../../components/ListaAulas/ListaAulas';
import { getAlunoSelecionado, getResponsavel } from '../../services/responsavelService';
import { AulaScreenProps } from '../../../types/types';
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

const AulaScreen: React.FC<AulaScreenProps> = () => {
  const [responsavel, setResponsavel] = useState(getResponsavel());
  const [aluno, setAluno] = useState(getAlunoSelecionado() ?? null);
  const [dataSelecionada, setDataSelecionada] = useState(new Date(2025, 2, 16));

  useFocusEffect(
    useCallback(() => {
      setResponsavel(getResponsavel());
      setAluno(getAlunoSelecionado() ?? null);
    }, [])
  );

  const hasMultipleAlunos = (responsavel?.alunos?.length ?? 0) > 1;

  return (
    <Container>
      <Header showChangeProfile={hasMultipleAlunos} />
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
        <SectionTitleText bold={true}>AGENDA</SectionTitleText>
      </TitleView>
      <DropdownContainer>
        <Dropdown onDateChange={setDataSelecionada} />
      </DropdownContainer>
      <ListaAulas aluno={aluno} dataSelecionada={dataSelecionada} />
    </Container>
  );
};

export default AulaScreen;
