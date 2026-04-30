import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const PaginaFinalAgendamento = () => {
  const router = useRouter();

  const handlePressEncerrar = () => {
<<<<<<< HEAD
    
    router.replace('/'); 
  };

  const handlePressVoltar = () => {
    if (router.canGoBack()) {
      router.back();
      router.replace('/agendamento');
    } else {

    }
=======
    router.replace('/(tabs)/explore');
>>>>>>> 359aec22c8d71c9636b9a2651194b01257415352
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.successIconCircle}>
            <Ionicons name="checkmark-done-circle" size={100} color="#203298" />
          </View>
          <Text style={styles.titleText}>TUDO PRONTO!</Text>
          <Text style={styles.subtitleText}>
            Seu agendamento foi concluído com sucesso e já está em nosso sistema.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handlePressEncerrar}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Ir para o Início</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    backgroundColor: '#203298', 
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
=======
  container: { flex: 1, backgroundColor: '#203298' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30 },
>>>>>>> 359aec22c8d71c9636b9a2651194b01257415352
  successIconCircle: {
    backgroundColor: 'white',
    borderRadius: 100,
    marginBottom: 25,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  titleText: { color: 'white', fontSize: 32, fontWeight: '900', textAlign: 'center', marginBottom: 10 },
  subtitleText: { color: '#E0E0E0', fontSize: 16, textAlign: 'center', lineHeight: 24, opacity: 0.9 },
  buttonContainer: { paddingBottom: 50, alignItems: 'center', width: '100%' },
  primaryButton: {
<<<<<<< HEAD
    backgroundColor: '', 
=======
    backgroundColor: '#FFFFFF',
>>>>>>> 359aec22c8d71c9636b9a2651194b01257415352
    width: '85%',
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  primaryButtonText: {
<<<<<<< HEAD
    color: 'white', 
    fontWeight: '400',
    fontSize: 18,
=======
    color: '#203298',
    fontWeight: 'bold',
    fontSize: 15,
>>>>>>> 359aec22c8d71c9636b9a2651194b01257415352
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default PaginaFinalAgendamento;