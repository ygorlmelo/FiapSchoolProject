import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  DropdownContainer,
  SelectedItem,
  OptionsContainer,
  OptionText,
  IconContainer,
} from './styles';
import chevronDown from '../../assets/chevronDown.png';
import chevronUp from '../../assets/chevronUp.png';
import { Responsavel, Aluno, Boletim } from '../../../types/types';

interface DropdownBoletimProps {
  responsavel: Responsavel | null;
  alunoSelecionado: Aluno | null;
  onTurmaSelecionada: (boletim: Boletim | null) => void;
}

const DropdownBoletim: React.FC<DropdownBoletimProps> = ({
  responsavel,
  alunoSelecionado,
  onTurmaSelecionada,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [opcoes, setOpcoes] = useState<Boletim[]>([]);

  useEffect(() => {
    if (!responsavel) {return;}

    const boletins: Boletim[] = [];
    responsavel.alunos.forEach(aluno => {
      aluno.boletim?.forEach(b => {
        boletins.push({ ...b, turma: aluno.turma });
      });
    });

    const selecionado = boletins.find(
      b => b.turma === alunoSelecionado?.turma
    );

    if (selecionado) {
      setSelectedItem(`${selecionado.turma} - ${selecionado.ano}`);
      onTurmaSelecionada(selecionado);
    }

    setOpcoes(boletins);
  }, [responsavel, alunoSelecionado, onTurmaSelecionada]);

  const handleSelect = (boletim: Boletim) => {
    setSelectedItem(`${boletim.turma} - ${boletim.ano}`);
    onTurmaSelecionada(boletim);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <SelectedItem onPress={() => setIsOpen(!isOpen)}>
        <OptionText>{selectedItem || 'Selecione a turma'}</OptionText>
        <IconContainer>
          <Image
            source={isOpen ? chevronUp : chevronDown}
            style={{ width: 14, height: 14 }}
          />
        </IconContainer>
      </SelectedItem>

      {isOpen && (
        <OptionsContainer>
          {opcoes.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelect(item)}>
              <OptionText>{`${item.turma} - ${item.ano}`}</OptionText>
            </TouchableOpacity>
          ))}
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
};

export default DropdownBoletim;
