import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router'; // Importação necessária

const ViewBoxesWithColorAndText = () => {
  const router = useRouter(); // Inicializa o roteador para permitir a navegação

  const handlePressEncerrar = () => {
    // Redireciona para a tela inicial limpando o histórico (bom para finalizações)
    router.back();
  };

  const handlePressVoltar = () => {
    // Verifica se existe uma página anterior no histórico para voltar
    if (router.canGoBack()) {
      router.replace('/agendamento'); 
    } else {
      // Se não houver histórico (ex: abriu o app direto aqui), vai para a Home
      router.replace('/');
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.titleText}>AGENDAMENTO CONCLUÍDO!</Text>
        </View>

        <View style={styles.content}>
          {/* Você pode adicionar informações do agendamento aqui */}
        </View>

        <View style={styles.buttonContainer}>
          {/* BOTÃO VOLTAR */}
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={handlePressVoltar} 
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Anteriores</Text>
          </TouchableOpacity>

          {/* BOTÃO ENCERRAR */}
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={handlePressEncerrar}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Encerrar Aqui</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#203298',
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
    gap: 10, 
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
    backgroundColor: 'black', // Você pode mudar para uma cor cinza se quiser diferenciar
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default ViewBoxesWithColorAndText;