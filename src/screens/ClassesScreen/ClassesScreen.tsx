import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ClassesScreen: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handleLogout = async () => {
        await AsyncStorage.removeItem('userToken');
        navigation.replace('Login');
    };

    return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
            <Text style={{
              color: '#fff',
              fontSize: 20,
              marginBottom: 20,
            }}>Tela de Horário das Aulas</Text>
            <Button title="Sair" onPress={handleLogout} />
        </View>
    );
};

export default ClassesScreen;
