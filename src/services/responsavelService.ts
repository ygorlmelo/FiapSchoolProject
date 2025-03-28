import responsaveis from '../data/responsaveis.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Responsavel, Aluno } from '../../types/types';

const RESPONSAVEL_KEY = 'responsavel';
const ALUNO_KEY = 'aluno';

let responsavelAtual: Responsavel | null = null;
let alunoSelecionadoIndex: number = 0;

//Verificar se um objeto é um Responsavel válido
function isResponsavel(obj: any): obj is Responsavel {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.id === 'number' &&
        typeof obj.cpf === 'string' &&
        typeof obj.email === 'string' &&
        typeof obj.senha === 'string' &&
        typeof obj.primeiroNome === 'string' &&
        typeof obj.sobrenome === 'string' &&
        Array.isArray(obj.alunos) &&
        obj.alunos.every(isAluno) // Verifica se cada item em 'alunos' é um Aluno
    );
}

//Verificar se um objeto é um Aluno válido.
function isAluno(obj: any): obj is Aluno {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.rm === 'number' &&
        typeof obj.turma === 'string' &&
        typeof obj.periodo === 'string' &&
        typeof obj.primeiroNome === 'string' &&
        Array.isArray(obj.agenda) &&
        (obj.boletim === undefined || (Array.isArray(obj.boletim) && obj.boletim.every(isBoletim)))
    );
}

//Verificar se um objeto é um Boletim válido.
function isBoletim(obj: any): obj is { ano: string; turma: string; trimestres: any[]; } {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.ano === 'string' &&
        typeof obj.turma === 'string' &&
        Array.isArray(obj.trimestres)
    );
}

export const autenticarResponsavel = async (cpf: string, senha: string): Promise<Responsavel | null> => {
  const responsavel = responsaveis.find(r => r.cpf === cpf && r.senha === senha);

  if (responsavel && isResponsavel(responsavel)) {
    responsavelAtual = responsavel;
    alunoSelecionadoIndex = 0;

    await AsyncStorage.setItem(RESPONSAVEL_KEY, JSON.stringify(responsavel));
    await AsyncStorage.setItem(ALUNO_KEY, JSON.stringify(responsavel.alunos[alunoSelecionadoIndex]));

    return responsavel;
  }

  return null;
};

export const getResponsavel = async (): Promise<Responsavel | null> => {
  if (responsavelAtual) {return responsavelAtual;}

  const json = await AsyncStorage.getItem(RESPONSAVEL_KEY);
  if (json) {
    const parsedResponsavel = JSON.parse(json);
    if (isResponsavel(parsedResponsavel)) {
      responsavelAtual = parsedResponsavel;
      return responsavelAtual;
    } else {
      console.warn('Dados do responsável no AsyncStorage são inválidos.');
      return null;
    }
  }

  return null;
};

export const getAlunoSelecionado = async (): Promise<Aluno | null> => {
  try {
    const json = await AsyncStorage.getItem(ALUNO_KEY);
    if (json) {
      const parsedAluno = JSON.parse(json);
      if (isAluno(parsedAluno)) {
        return parsedAluno;
      } else {
        console.warn('Dados do aluno no AsyncStorage são inválidos.');
        return null;
      }
    }
    return null;
  } catch (error) {
    console.error('Erro ao obter/parsear dados do AsyncStorage:', error);
    return null;
  }
};

export const setAlunoSelecionado = async (index: number) => {
  if (responsavelAtual && responsavelAtual.alunos && responsavelAtual.alunos[index]) {
      alunoSelecionadoIndex = index;
      const aluno = responsavelAtual.alunos[index];

      try {
          await AsyncStorage.setItem(ALUNO_KEY, JSON.stringify(aluno));
      } catch (error) {
          console.error('Erro ao salvar dados do aluno no AsyncStorage:', error);
      }
  } else {
      console.warn('Responsável não autenticado ou índice de aluno inválido.');
  }
};

export const clearStorage = async () => {
  responsavelAtual = null;
  alunoSelecionadoIndex = 0;
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Erro ao limpar o AsyncStorage:', error);
  }
};
