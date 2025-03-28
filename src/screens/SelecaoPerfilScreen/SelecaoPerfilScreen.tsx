import React, { useEffect, useState } from 'react';
import { SelecaoPerfilScreenNavigationProp } from '../../../types/types';
import {
  getResponsavel,
  getAlunoSelecionado,
  setAlunoSelecionado,
} from '../../services/responsavelService';
import {
  Container,
  Title,
  AlunoContainer,
  AlunoNome,
  AlunoInfo,
  FecharButton,
  FecharText,
  CloseImage,
} from './style';
import { Responsavel, Aluno } from '../../../types/types';

type Props = {
  navigation: SelecaoPerfilScreenNavigationProp;
};

const SelecaoPerfilScreen: React.FC<Props> = ({ navigation }) => {
  const [responsavel, setResponsavel] = useState<Responsavel | null>(null);
  const [alunoAtual, setAlunoAtual] = useState<Aluno | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const r = await getResponsavel();
      const a = await getAlunoSelecionado();
      setResponsavel(r);
      setAlunoAtual(a);
    };
    fetchData();
  }, []);

  const handleSelectAluno = async (index: number) => {
    await setAlunoSelecionado(index);
    navigation.goBack();
  };

  return (
    <Container>
      <Title>Escolha o perfil que você quer visualizar</Title>
      {responsavel?.alunos.map((aluno, index) => {
        const isSelected = aluno.rm === alunoAtual?.rm;
        return (
          <AlunoContainer
            key={aluno.rm}
            onPress={() => handleSelectAluno(index)}
            style={{
              borderColor: isSelected ? '#29F4D5' : '#4D4D4D',
              backgroundColor: '#4D4D4D',
            }}
          >
            <AlunoNome>{aluno.primeiroNome.toUpperCase()} {responsavel.sobrenome.toUpperCase()}</AlunoNome>
            <AlunoInfo>{`${aluno.turma} - RM ${aluno.rm} - ${aluno.periodo}`}</AlunoInfo>
          </AlunoContainer>
        );
      })}
      <FecharButton onPress={() => navigation.goBack()}>
        <FecharText>FECHAR</FecharText>
        <CloseImage source={require('../../assets/close.png')} />
      </FecharButton>
    </Container>
  );
};

export default SelecaoPerfilScreen;
