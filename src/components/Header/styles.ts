import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 16,
    backgroundColor: '#000', // Ajuste conforme necessário
  },
  logo: {
    width: 80,
    height: 30,
    resizeMode: 'contain',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileBtn: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 16, // Espaço entre o texto e o ícone
  },
});
