import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import AulaScreen from '../screens/AulaScreen/AulaScreen';
import BoletimScreen from '../screens/BoletimScreen/BoletimScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName = route.name === 'Aulas' ? 'calendar' : 'document-text';
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#29F4D5',
      tabBarInactiveTintColor: '#FFFFFF',
      tabBarStyle: {
        backgroundColor: '#262626', // Cor da barra
      },
      headerShown: false,
    })}
  >
    <Tab.Screen name="Aulas" component={AulaScreen} />
    <Tab.Screen name="Boletim" component={BoletimScreen} />
  </Tab.Navigator>
);

const AppNavigator: React.FC = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Login"
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="MainTabs" component={AppTabs} />
  </Stack.Navigator>
);

export default AppNavigator;
