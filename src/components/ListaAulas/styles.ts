import styled from 'styled-components/native';

export const ListaContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
`;

export const AulaItem = styled.View`
  margin-bottom: 12px;
`;

export const AulaHorario = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const AulaDisciplina = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-bottom: 8px;
`;

export const SemAulasContainer = styled.View`
  align-items: center;
  background-color: #00ff;
  width: 100%;
`;

export const SemAulasText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-top: 20px;
`;

export const ImageView = styled.View`
  width: 80%;
  height: auto;
  aspect-ratio: 1;
  align-items: center;
  background-color: #1f2;
`;

export const ImageStyled = styled.Image`
  width: 60%;
  height: undefined;
  aspect-ratio: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: flex-start;  
  padding-bottom: 20px;
`;

export const Content = styled.View`
  align-items: center;
  width: 100%;
  flex: 1; /* Para ocupar o espaço restante */
  justify-content: flex-start; /* Alinhar o conteúdo ao topo */
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  align-items: center;
`;
