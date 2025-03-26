export const login = async (cpf: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cpf === '12345678912' && password === '123456') {
        resolve('token_valido');
      } else {
        reject(new Error('Usuário ou senha inválidos'));
      }
    }, 1000);
  });
};
