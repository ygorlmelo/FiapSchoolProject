// /src/screens/AulaScreen/styles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 16,
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#fff',
    fontSize: 18,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#00FFFF',
    marginTop: 20,
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    marginVertical: 10,
  },
  image: {
    width: '80%', // Use uma largura flexível
    height: undefined,
    aspectRatio: 1, // Ajuste conforme necessário para manter a proporção correta
    marginVertical: 20,
  },
  imageCaption: {
    color: '#fff',
    marginTop: 10,
  },
});
