import { autenticarResponsavel } from './responsavelService';

export const login = async (cpf: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const responsavel = autenticarResponsavel(cpf, password);
      if (responsavel) {
        resolve('token_valido');
      } else {
        reject(new Error('Usuário ou senha inválidos'));
      }
    }, 1000);
  });
};
