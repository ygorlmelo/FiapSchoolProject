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

// Screen props para cada screen do Stack Navigator
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type SelecaoPerfilScreenRouteProp = RouteProp<RootStackParamList, 'SelecaoPerfil'>;

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type SelecaoPerfilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelecaoPerfil'>;

// Screen props para cada screen do Tab Navigator
export type AulaScreenProps = BottomTabScreenProps<RootTabParamList, 'Aulas'>;
export type BoletimScreenProps = BottomTabScreenProps<RootTabParamList, 'Boletim'>;
