import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import Dropdown from '../../components/Dropdown/Dropdown';
import { getAlunoSelecionado, getResponsavel } from '../../services/responsavelService';
import { AulaScreenProps } from '../../../types/types';
import {
  Container,
  Title,
  Bold,
  SubTitle,
  Description,
  SectionTitle,
  ImageView,
  ImageStyled,
  FooterView,
  DropdownContainer,
  TitleView,
  TitleInfoView,
} from './styles';

const AulaScreen: React.FC<AulaScreenProps> = () => {
  const [responsavel, setResponsavel] = useState(getResponsavel());
  const [aluno, setAluno] = useState(getAlunoSelecionado());

  useFocusEffect(
    useCallback(() => {
      setResponsavel(getResponsavel());
      setAluno(getAlunoSelecionado());
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
        <Dropdown />
      </DropdownContainer>
      <ImageView>
        <ImageStyled
          source={require('../../assets/aulaLogo.png')}
          resizeMode="contain"
        />
      </ImageView>
      <FooterView>
        <Description>Sem aulas neste dia</Description>
      </FooterView>
    </Container>
  );
};

export default AulaScreen;
