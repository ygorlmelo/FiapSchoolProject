import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import AulaScreen from '../screens/AulaScreen/AulaScreen';
import BoletimScreen from '../screens/BoletimScreen/BoletimScreen';
import SelecaoPerfil from '../screens/SelecaoPerfilScreen/SelecaoPerfilScreen';

import agendaLogo from '../assets/agendaLogo.png';
import boletimLogo from '../assets/boletimLogo.png';

import { TabIcon, TabIconContainer, styles } from './styles';
import { RootStackParamList, RootTabParamList } from '../../types/types'; // Importe RootTabParamList

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>(); // Defina o tipo aqui

const AppTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconSource;

        if (route.name === 'Aulas') {
          iconSource = agendaLogo;
        } else if (route.name === 'Boletim') {
          iconSource = boletimLogo;
        }

        return (
          <TabIconContainer>
            <TabIcon source={iconSource} style={{ tintColor: color }} />
          </TabIconContainer>
        );
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#29F4D5',
      tabBarInactiveTintColor: '#FFFFFF',
      tabBarStyle: styles.tabBarStyle,
      headerShown: false,
    })}
  >
    <Tab.Screen name="Aulas" component={AulaScreen} />
    <Tab.Screen name="Boletim" component={AulaScreen} />
  </Tab.Navigator>
);

const AppNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="MainTabs" component={AppTabs} />
    <Stack.Screen name="SelecaoPerfil" component={SelecaoPerfil} />
  </Stack.Navigator>
);

export default AppNavigator;
