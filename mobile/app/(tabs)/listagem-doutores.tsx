import React from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const data = [
  { id: 1, label: 'Dr.Carlos Alves' },
  { id: 2, label: 'Dr.Marilia Neves' },
  { id: 3, label: 'Dr.Gabriel Henrique' },
  { id: 4, label: 'Dr.Enzo Gabriel' },
  { id: 5, label: 'Dr.Gabriela Souza' },
];

export default function App() {
  const handlePress = () => {
    Alert.alert('Drs do hospital', );
  };
    
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Bom Dia Matheus</Text>
      <Text style={styles.subText}>Bem Vindo a Medclin</Text>

      {/* Lista de itens */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress()}>
            <View style={styles.circle} />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#203298',
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
