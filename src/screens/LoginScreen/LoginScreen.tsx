import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Container, Logo, InputContainer, ErrorMessage, Label, ViewButton, ViewLogo } from './styles';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { maskCPF } from '../../utils/masks';
import { login } from '../../services/auth';
import { isLoggedIn } from '../../services/session';

const LoginScreen: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    const verifySession = async () => {
      const logged = await isLoggedIn();
      if (logged) {
        navigation.replace('MainTabs');
      }
    };

    verifySession();
  }, [navigation]);

  const handleLogin = async () => {
    setError('');
    try {
      const token = await login(cpf, password);
      if (token) {
        await AsyncStorage.setItem('userToken', token);
        navigation.replace('MainTabs');
      } else {
        setError('Usuário ou senha inválida.\nPode tentar novamente?');
      }
    } catch (err) {
      console.error('Erro no handleLogin:', err);
      setError('Ocorreu um erro ao tentar fazer login.\nTente novamente mais tarde.');
    }
  };

  return (
    <Container>
      <ViewLogo>
        <Logo source={require('../../assets/fiap.png')} resizeMode="contain" />
      </ViewLogo>
      <InputContainer>
        <Label>CPF</Label>
        <Input
          keyboardType="number-pad"
          value={maskCPF(cpf)}
          onChangeText={(text) => setCpf(text.replace(/\D/g, ''))}
          maxLength={14}
        />
        <Label>SENHA</Label>
        <Input
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </InputContainer>
      <ViewButton>
        <Button
          title="FAZER LOGIN"
          onPress={handleLogin}
          buttonStyle={{
            backgroundColor: '#29F4D5',
            padding: 2,
            borderRadius: 5,
            minHeight: 40,
          }}
          textColor="#777777"
        />
      </ViewButton>
    </Container>
  );
};

export default LoginScreen;
