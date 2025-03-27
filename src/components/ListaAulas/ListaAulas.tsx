import React from 'react';
import { ScrollView } from 'react-native';
import { format } from 'date-fns';
import {
  ListaContainer,
  AulaItem,
  AulaHorario,
  AulaDisciplina,
  SemAulasText,
  SemAulasContainer,
  ImageView,
  ImageStyled,
  Container,
  Content,
  Footer,
} from './styles';
import { Aluno } from '../../../types/types';

interface ListaAulasProps {
  aluno: Aluno | null;
  dataSelecionada: Date;
}

const ListaAulas: React.FC<ListaAulasProps> = ({ aluno, dataSelecionada }) => {
  if (!aluno) {return null;}

  const dataFormatada = format(dataSelecionada, 'yyyy-MM-dd');
  const agendaDoDia = aluno.agenda.find((dia) => dia.dia === dataFormatada);
  const aulas = agendaDoDia?.aulas ?? [];

  return (
    <ListaContainer>
      {aulas.length === 0 ? (
        // <SemAulasContainer>
        //   <ImageView>
        //     <ImageStyled
        //       source={require('../../assets/aulaLogo.png')}
        //       resizeMode="contain"
        //     />
        //   </ImageView>
        //   <SemAulasText>Sem aulas neste dia</SemAulasText>
        // </SemAulasContainer>
        <Container>
          <Content>
            <ImageStyled
              source={require('../../assets/aulaLogo.png')}
              resizeMode="contain"
            />
          </Content>
          <Footer>
            <SemAulasText>Sem aulas neste dia</SemAulasText>
          </Footer>
        </Container>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {aulas.map((aula: { horario: string; disciplina: string }, index: number) => (
            <AulaItem key={index}>
              <AulaHorario>{aula.horario}</AulaHorario>
              <AulaDisciplina>{aula.disciplina}</AulaDisciplina>
            </AulaItem>
          ))}
        </ScrollView>
      )}
    </ListaContainer>
  );
};

export default ListaAulas;
