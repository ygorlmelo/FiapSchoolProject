import responsaveis from '../data/responsaveis.json';

export const getResponsavel = () => {
  // Retorna o primeiro responsável (id = 1)
  return responsaveis[0];
};
