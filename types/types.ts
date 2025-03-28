import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
    Login: undefined;
    MainTabs: undefined;
    SelecaoPerfil: undefined;
};

export type RootTabParamList = {
    Aulas: undefined;
    Boletim: undefined;
};

// Screen props - Stack Navigator
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type SelecaoPerfilScreenRouteProp = RouteProp<RootStackParamList, 'SelecaoPerfil'>;

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type SelecaoPerfilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelecaoPerfil'>;

// Screen props - Tab Navigator
export type AulaScreenProps = BottomTabScreenProps<RootTabParamList, 'Aulas'>;
export type BoletimScreenProps = BottomTabScreenProps<RootTabParamList, 'Boletim'>;

export interface Aluno {
    rm: number;
    turma: string;
    periodo: string;
    primeiroNome: string;
    agenda: any[];
  }

  export interface Responsavel {
    id: number;
    cpf: string;
    email: string;
    senha: string;
    primeiroNome: string;
    sobrenome: string;
    alunos: Aluno[];
  }
