import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const data = [
  { id: 1, label: 'Dr. Carlos Alves' },
  { id: 2, label: 'Dr. Marilia Neves' },
  { id: 3, label: 'Dr. Gabriel Henrique' },
  { id: 4, label: 'Dr. Enzo Gabriel' },
  { id: 5, label: 'Dr. Gabriela Souza' },
];



export default function App() {
  const router = useRouter();

  // Função que navega para a página de agendamento passando o nome do médico
  const handlePressDoctor = (doctorName: string) => {
    router.push({
      pathname: '/agendamento',
      params: { doctor: doctorName }
    });
  };

  const handlePressVoltar = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  };

  const handlePressEncerrar = () => {
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Bom Dia Fulano</Text>
      <Text style={styles.subText}>Doutores da Medclin</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => handlePressDoctor(item.label)} // Agora navega ao clicar
          >
            <View style={styles.circle} />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonBack} onPress={handlePressVoltar}>
          <Text style={styles.buttonText}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#203298',
    padding: 20,
    paddingTop: 60,
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
    fontSize: 16,
    opacity: 0.8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Um leve fundo para destacar o clique
    padding: 10,
    borderRadius: 12,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#cbd5e0',
    marginRight: 15,
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 20,
  },
  buttonBack: {
    backgroundColor: '#4A5568', // Um tom de cinza para diferenciar do "Sair"
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    flex: 0.45,
    alignItems: 'center',
  },
  buttonEnd: {
    backgroundColor: '#E53E3E', // Vermelho para indicar saída/encerramento
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    flex: 0.45,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});