import AsyncStorage from '@react-native-async-storage/async-storage';

export const isLoggedIn = async (): Promise<boolean> => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return !!token;
  } catch (error) {
    console.error('Erro ao verificar o token de login:', error);
    return false;
  }
};
