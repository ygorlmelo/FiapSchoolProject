import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Container, Logo, InputContainer, ErrorMessage } from './styles';
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
    try {
      const token = await login(cpf, password);
      await AsyncStorage.setItem('userToken', token);
      navigation.replace('MainTabs');
    } catch (err) {
      setError('Usuário ou senha inválida.\nPode tentar novamente?');
    }
  };

  return (
    <Container>
      <Logo source={require('../../assets/fiap.png')} resizeMode="contain" />
      <InputContainer>
        <Input
          placeholder="CPF"
          keyboardType="number-pad"
          value={maskCPF(cpf)}
          onChangeText={(text) => setCpf(text.replace(/\D/g, ''))}
          maxLength={14}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <Button title="Fazer Login" onPress={handleLogin} />
      </InputContainer>
    </Container>
  );
};

export default LoginScreen;
