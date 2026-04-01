import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { id: 1, label: 'Dr.Carlos Alves' },
  { id: 2, label: 'Dr.Marilia Neves' },
  { id: 3, label: 'Dr.Gabriel Henrique' },
  { id: 4, label: 'Dr.Enzo Gabriel' },
  { id: 5, label: 'Dr.Gabriela Souza' },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.greeting}>Bom Dia Matheus</Text>
      <Text style={styles.subText}>Bem Vindo a Medclin</Text>

      {/* Lista de itens */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.circle} />
            <Text style={styles.label}>{item.label}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#203298', // fundo azul
    padding: 20,
  },
  greeting: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subText: {
    color: 'white',
    marginBottom: 35,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 45,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    marginRight: 15,
  },
  label: {
    color: 'white',
    fontSize: 18,
  },
});
