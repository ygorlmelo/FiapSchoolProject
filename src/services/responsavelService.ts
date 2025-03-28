import responsaveis from '../data/responsaveis.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Responsavel, Aluno } from '../../types/types';

const RESPONSAVEL_KEY = 'responsavel';
const ALUNO_KEY = 'aluno';

let responsavelAtual: Responsavel | null = null;
let alunoSelecionadoIndex: number = 0;

export const autenticarResponsavel = async (cpf: string, senha: string): Promise<Responsavel | null> => {
  const responsavel = responsaveis.find(r => r.cpf === cpf && r.senha === senha);

  if (responsavel) {
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
    responsavelAtual = JSON.parse(json);
    return responsavelAtual;
  }

  return null;
};

export const getAlunoSelecionado = async (): Promise<Aluno | null> => {
  const json = await AsyncStorage.getItem(ALUNO_KEY);
  return json ? JSON.parse(json) : null;
};

export const setAlunoSelecionado = async (index: number) => {
  if (responsavelAtual) {
    alunoSelecionadoIndex = index;
    const aluno = responsavelAtual.alunos[index];
    await AsyncStorage.setItem(ALUNO_KEY, JSON.stringify(aluno));
  }
};

export const clearStorage = async () => {
  responsavelAtual = null;
  alunoSelecionadoIndex = 0;
  await AsyncStorage.clear();
};
