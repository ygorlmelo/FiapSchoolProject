import React from 'react';
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
} from './style';

const SelecaoPerfilScreen: React.FC<Props> = ({ navigation }) => {
  const responsavel = getResponsavel();
  const alunoAtual = getAlunoSelecionado();

  const handleSelectAluno = (index: number) => {
    setAlunoSelecionado(index);
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
            style={{ backgroundColor: isSelected ? '#e0f7fa' : 'white' }}
          >
            <AlunoNome>{aluno.primeiroNome.toUpperCase()} {responsavel.sobrenome.toUpperCase()}</AlunoNome>
            <AlunoInfo>{`${aluno.turma} - RM ${aluno.rm} - ${aluno.periodo}`}</AlunoInfo>
          </AlunoContainer>
        );
      })}
      <FecharButton onPress={() => navigation.goBack()}>
        <FecharText>FECHAR</FecharText>
      </FecharButton>
    </Container>
  );
};

type Props = {
  navigation: SelecaoPerfilScreenNavigationProp;
};

export default SelecaoPerfilScreen;
