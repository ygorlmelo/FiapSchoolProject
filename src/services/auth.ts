import { autenticarResponsavel } from './responsavelService';

export const login = async (cpf: string, password: string): Promise<string | null> => {
  try {
    // Esperando a resolução da Promise
    const responsavel = await autenticarResponsavel(cpf, password);

    if (responsavel) {
      return 'token_valido'; // Retorna o token se a autenticação ok
    } else {
      return null; // Retorna null se a autenticação falhar
    }
  } catch (error) {
    console.error('Erro durante a autenticação:', error);
    return null; // Retorna null em caso de erro
  }
};
