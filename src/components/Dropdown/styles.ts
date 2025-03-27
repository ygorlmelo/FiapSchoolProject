import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  dropdown: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: '#1c1c1e',
    zIndex: 1,
  },
  selectedItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  options: {
    position: 'absolute',
    top: 40,
    width: '100%',
    backgroundColor: '#1c1c1e',
    borderRadius: 4,
    zIndex: 2,
  },
  text: {
    color: '#fff',
  },
});
