import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => {
  return (
    <SafeAreaProvider>
      {/* O SafeAreaView precisa de flex: 1 para ocupar a tela toda */}
      <SafeAreaView style={styles.container}>
        <View style={styles.fullScreenBlue}>
          <Text style={styles.text}>Ponto Final!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue', // Garante que a área segura também seja azul
  },
  fullScreenBlue: {
    flex: 1,               // Faz a View ocupar todo o espaço restante
    backgroundColor: 'blue',
    justifyContent: 'center', // Centraliza o texto verticalmente
    alignItems: 'center',     // Centraliza o texto horizontalmente
  },
  text: {
    color: 'white',        // Branco para dar contraste com o fundo azul
    fontSize: 20,
  },
});

export default ViewBoxesWithColorAndText;