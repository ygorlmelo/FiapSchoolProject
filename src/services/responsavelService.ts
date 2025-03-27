import responsaveis from '../data/responsaveis.json';
import { Responsavel } from '../../types/types';

let responsavelAtual: Responsavel | null = null;
let alunoSelecionadoIndex: number = 0;

export const autenticarResponsavel = (cpf: string, senha: string): Responsavel | null => {
  const responsavel = responsaveis.find(r => r.cpf === cpf && r.senha === senha);
  if (responsavel) {
    responsavelAtual = responsavel;
    alunoSelecionadoIndex = 0;
    return responsavel;
  }
  return null;
};

export const getResponsavel = (): Responsavel | null => responsavelAtual;

export const getAlunoSelecionado = () => {
  return responsavelAtual?.alunos[alunoSelecionadoIndex];
};

export const setAlunoSelecionado = (index: number) => {
  alunoSelecionadoIndex = index;
};
