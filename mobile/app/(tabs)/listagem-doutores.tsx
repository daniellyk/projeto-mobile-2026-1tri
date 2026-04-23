import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const data = [
  { label: 'Dr. Roberto Silva', especialidade: 'Cardiologia' },
  { label: 'Dra. Ana Beatriz', especialidade: 'Cardiologia' },
  { label: 'Dr. Marcos Pontes', especialidade: 'Cardiologia' },
  { label: 'Dra. Julia Meirelles', especialidade: 'Dermatologista' },
  { label: 'Dr. Fabio Junior', especialidade: 'Dermatologista' },
  { label: 'Dra. Leticia Spiller', especialidade: 'Dermatologista' },
  { label: 'Dr. Ricardo Arona', especialidade: 'Pneumologista' },
  { label: 'Dra. Sandra Rosa', especialidade: 'Pneumologista' },
  { label: 'Dr. Marlus Machado', especialidade: 'Pneumologista' },
  { label: 'Dr. Rodrigo Minotauro', especialidade: 'Ortopedista' },
  { label: 'Dra. Amanda Ribas', especialidade: 'Ortopedista' },
  { label: 'Dr. Anderson Silva', especialidade: 'Ortopedista' },
  { label: 'Dr. Charles Xavier', especialidade: 'Neurologista' },
  { label: 'Dra. Jean Grey', especialidade: 'Neurologista' },
  { label: 'Dr. Stephen Strange', especialidade: 'Neurologista' },
];

export default function ListaMedicosScreen() {
  const router = useRouter();
  const { especialidade } = useLocalSearchParams();

  const filteredData = useMemo(() => {
    if (!especialidade) return data; 
    
    const termoBusca = especialidade.toString().toLowerCase().substring(0, 4);
    
    return data.filter(medico => 
      medico.especialidade.toLowerCase().includes(termoBusca)
    );
  }, [especialidade]);

  const handlePressDoctor = (doctorName: string) => {
    router.push({
      pathname: '/agendamento', 
      params: { doctor: doctorName }
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.fullScreenBlue}>
          <View style={styles.headerContainer}>
            <Text style={styles.userName}>
               {especialidade ? `${especialidade}s` : "Doutores"} 
            </Text>
            <Text style={styles.subText}>Selecione o profissional disponível</Text>
          </View>

          <FlatList
            data={filteredData}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.card} onPress={() => handlePressDoctor(item.label)}>
                <View style={styles.avatarPlaceholder} />
                <View style={styles.infoContainer}>
                  <Text style={styles.doctorName}>{item.label}</Text>
                  <Text style={styles.specialtyText}>{item.especialidade}</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity 
            style={styles.btnBack} 
            onPress={() => router.replace("/(tabs)/explore")}
          >
            <Text style={{color: 'white', fontWeight: 'bold'}}>VOLTAR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  fullScreenBlue: { flex: 1, backgroundColor: '#2D43A6' },
  headerContainer: { padding: 25, marginTop: 20 },
  userName: { color: 'white', fontSize: 32, fontWeight: 'bold' },
  subText: { color: 'white', opacity: 0.7, fontSize: 16 },
  card: { backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 15, marginBottom: 15 },
  avatarPlaceholder: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#EEE' },
  infoContainer: { marginLeft: 15, flex: 1 },
  doctorName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  specialtyText: { color: '#2D43A6', fontWeight: '600' },
  arrow: { fontSize: 20, color: '#CCC' },
  btnBack: { position: 'absolute', bottom: 30, alignSelf: 'center', backgroundColor: 'rgba(255,255,255,0.2)', padding: 15, borderRadius: 10 }
});