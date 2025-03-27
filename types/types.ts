import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Login: undefined;
    MainTabs: undefined;
    SelecaoPerfil: undefined;
};

export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type SelecaoPerfilScreenRouteProp = RouteProp<RootStackParamList, 'SelecaoPerfil'>;

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type SelecaoPerfilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelecaoPerfil'>;
