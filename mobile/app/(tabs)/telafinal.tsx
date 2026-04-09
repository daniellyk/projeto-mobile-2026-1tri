import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Importando ícone para o visual final

const PaginaFinalAgendamento = () => {
  const router = useRouter();

  const handlePressEncerrar = () => {
    // Replace limpa a pilha para o usuário não voltar ao agendamento
    router.replace('/'); 
  };

  const handlePressVoltar = () => {
    if (router.canGoBack()) {
      router.back();
      router.replace('/agendamento');
    } else {

    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        {/* Parte Superior: Ícone e Título */}
        <View style={styles.content}>
          <View style={styles.successIconCircle}>
            <Ionicons name="checkmark-done-circle" size={100} color="black" />
          </View>
          
          <Text style={styles.titleText}>TUDO PRONTO!</Text>
          <Text style={styles.subtitleText}>
            Seu agendamento foi concluído com sucesso e já está em nosso sistema.
          </Text>
        </View>

        {/* Parte Inferior: Botões de Ação */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handlePressEncerrar}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Ir para o Inicio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handlePressVoltar}
            activeOpacity={0.7}
          >
            <Text style={styles.secondaryButtonText}>Revisar Agendamento</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#203298', // Mantendo sua cor principal
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  successIconCircle: {
    backgroundColor: 'white',
    borderRadius: 100,
    marginBottom: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  titleText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    color: '#E0E0E0',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    paddingBottom: 40,
    alignItems: 'center',
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '', // Branco para destaque máximo
    width: '85%',
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 4,
  },
  primaryButtonText: {
    color: 'white', // Texto na cor do fundo para contraste
    fontWeight: '400',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    width: '85%',
    paddingVertical: 12,
    borderWidth: 0,
    borderColor: '',
    borderRadius: 15,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  }
});

export default PaginaFinalAgendamento;