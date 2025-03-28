import React, { useState } from 'react';
import { Trimestre } from '../../../types/types';
import DropdownDisciplina from '../DropdownDisciplina/DropdownDisciplina';
import {
  CardContainer,
  HeaderButton,
  TrimestreText,
} from './styles';

interface BoletimCardProps {
  trimestre: Trimestre;
}

const BoletimCard: React.FC<BoletimCardProps> = ({ trimestre }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <CardContainer>
      <HeaderButton onPress={() => setIsExpanded(!isExpanded)}>
        <TrimestreText>{`${trimestre.trimestre}º TRIMESTRE`}</TrimestreText>
      </HeaderButton>

      {isExpanded &&
        trimestre.disciplinas.map((disciplina, idx) => (
          <DropdownDisciplina key={idx} disciplina={disciplina} />
        ))}
    </CardContainer>
  );
};

export default BoletimCard;
