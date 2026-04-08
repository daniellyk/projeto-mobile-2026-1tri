import React from 'react';
<<<<<<< HEAD
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flexDirection: 'row'}}>
        <View style={{height: 100, backgroundColor: 'blue', flex: 0.2}} />
        <View style={{height: 100, backgroundColor: 'red', flex: 0.4}} />
        <Text>Hello World!</Text>
=======
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => {
  const handlePressEncerrar = () => {
    Alert.alert('Ação', 'Você clicou em Encerrar!');
  };

  const handlePressVoltar = () => {
    Alert.alert('Ação', 'Você clicou em Voltar!');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.titleText}>AGENDAMENTO CONCLUIDO!</Text>
        </View>

        <View style={styles.content}>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.secondaryButton]} 
            onPress={handlePressVoltar}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.primaryButton]} 
            onPress={handlePressEncerrar}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Encerrar Aqui</Text>
          </TouchableOpacity>
        </View>

>>>>>>> 636789c30e230b081ae0b408f19433227e8333cd
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  header: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'column', 
    alignItems: 'center',
    gap: 10, // Cria o espaço entre os botões empilhados
  },
  button: {
    width: '90%', 
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  primaryButton: {
    backgroundColor: 'black',
  },
  secondaryButton: {
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

>>>>>>> 636789c30e230b081ae0b408f19433227e8333cd
export default ViewBoxesWithColorAndText;