import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  dropdown: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: '#1c1c1e',
    zIndex: 1,  // Certifique-se de que o dropdown está sobreposto
  },
  selectedItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  options: {
    position: 'absolute',
    top: 40, // Ajuste conforme necessário
    width: '100%',
    backgroundColor: '#1c1c1e',
    borderRadius: 4,
    zIndex: 2, // Coloque uma zIndex maior para garantir a sobreposição
  },
  text: {
    color: '#fff',
  },
});
