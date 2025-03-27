import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  dropdown: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 4,
    marginVertical: 10,
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
    backgroundColor: '#262626',
    width: '100%',
    borderRadius: 4,
    zIndex: 1,
  },
  text: {
    color: '#FFFFFF',
  },
});
