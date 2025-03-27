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
    width: 120,
    height: 30,
    resizeMode: 'contain',
  },
  profileBtn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 16,
  },
});
