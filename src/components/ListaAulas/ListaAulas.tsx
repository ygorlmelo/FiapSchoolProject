import React from 'react';
import { ScrollView } from 'react-native';
import { format } from 'date-fns';
import { Aluno } from '../../../types/types';
import {
  ListaContainer,
  Container,
  Content,
  ImageStyled,
  Footer,
  ItemView,
  HorarioView,
  DisciplinaView,
  Text,
} from './styles';

interface ListaAulasProps {
  aluno: Aluno | null;
  dataSelecionada: Date;
}

const ListaAulas: React.FC<ListaAulasProps> = ({ aluno, dataSelecionada }) => {
  if (!aluno) {return null;}

  const dataFormatada = format(dataSelecionada, 'yyyy-MM-dd');
  const agendaDoDia = aluno.agenda?.find((dia) => dia.dia === dataFormatada);
  const aulas = agendaDoDia?.aulas ?? [];

  return (
    <ListaContainer>
      {aulas.length === 0 ? (
        <Container>
          <Content>
            <ImageStyled
              source={require('../../assets/aulaLogo.png')}
              resizeMode="contain"
            />
          </Content>
          <Footer>
            <Text>Sem aulas neste dia</Text>
          </Footer>
        </Container>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {aulas.map((aula: { horario: string; disciplina: string }, index: number) => (
            <ItemView key={index}>
              <HorarioView>{aula.horario}</HorarioView>
              <DisciplinaView>{aula.disciplina}</DisciplinaView>
            </ItemView>
          ))}
        </ScrollView>
      )}
    </ListaContainer>
  );
};

export default ListaAulas;
